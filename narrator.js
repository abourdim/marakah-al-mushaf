/* ═══════════════════════════════════════════════════════════
   NARRATOR.JS — Audiobook narrator for Ma'rakat al-Mushaf
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  if (!('speechSynthesis' in window)) {
    window.narratorTogglePanel = function() { if (typeof showToast === 'function') { var l = (typeof lang !== 'undefined') ? lang : 'en'; showToast(l === 'ar' ? 'الراوي غير مدعوم في هذا المتصفح' : l === 'fr' ? 'Narrateur non support\u00e9' : 'Narrator not supported'); } };
    window.narratorPlayPage = window.narratorPlayBook = window.narratorPause = function() {};
    window.narratorStop = window.narratorNext = window.narratorPrev = function() {};
    window.narratorSpeedChange = window.narratorPitchChange = function() {};
    window.narratorLoopChange = window.narratorSleepChange = function() {};
    window.narratorKaraokeToggle = window.narratorAutoScrollToggle = function() {};
    window.narratorDuoToggle = window.narratorVoiceChange = function() {};
    window.narratorPopulateVoices = function() {};
    return;
  }

  const NR_T = {
    ar: { title: '🎧 الراوي', page: 'اقرأ هذه الصفحة', book: 'اقرأ ككتاب', voice: 'الصوت', speed: 'السرعة', pitch: 'النبرة', loop: 'تكرار البطاقة', sleep: 'مؤقت النوم', karaoke: 'كاريوكي', autoScroll: 'تمرير تلقائي', duo: 'ثنائي (عربي+فرنسي)', off: 'إيقاف', min: 'دقيقة', bookDone: 'تم الانتهاء من الكتاب', sleepDone: 'انتهى مؤقت النوم', sleepSet: 'مؤقت النوم:' },
    en: { title: '🎧 Narrator', page: 'Read this page', book: 'Read as a book', voice: 'Voice', speed: 'Speed', pitch: 'Pitch', loop: 'Loop card', sleep: 'Sleep timer', karaoke: 'Karaoke', autoScroll: 'Auto-scroll', duo: 'Duo (AR+FR)', off: 'Off', min: 'min', bookDone: 'Book finished', sleepDone: 'Sleep timer ended', sleepSet: 'Sleep:' },
    fr: { title: '🎧 Narrateur', page: 'Lire cette page', book: 'Lire comme un livre', voice: 'Voix', speed: 'Vitesse', pitch: 'Tonalit\u00e9', loop: 'R\u00e9p\u00e9ter la carte', sleep: 'Minuterie', karaoke: 'Karaok\u00e9', autoScroll: 'D\u00e9filement auto', duo: 'Duo (AR+FR)', off: 'D\u00e9sactiv\u00e9', min: 'min', bookDone: 'Livre termin\u00e9', sleepDone: 'Minuterie termin\u00e9e', sleepSet: 'Minuterie:' }
  };

  function nrT() { return NR_T[getLang()] || NR_T.en; }

  const STATE = { playing: false, paused: false, mode: 'page', cardIndex: 0, cards: [], tabOrder: ['about','cards','timeline'], tabIndex: 0, loopCount: 0, loopCurrent: 0, sleepTimer: null, sleepMinutes: 0, duoTimeout: null, karaokeEnabled: true, autoScroll: true, duoReading: false, speed: 1, pitch: 1, voiceAR: null, voiceEN: null, voiceFR: null };

  function getLang() { return document.documentElement.lang || 'ar'; }
  function loadVoices() { const v = speechSynthesis.getVoices(); if (!v.length) return; STATE.voiceAR = findBestVoice(v, ['Majed','Maged','Google Arabic'], 'ar'); STATE.voiceEN = findBestVoice(v, ['Samantha','Daniel','Google UK English'], 'en'); STATE.voiceFR = findBestVoice(v, ['Thomas','Amelie','Google French'], 'fr'); }
  function findBestVoice(voices, priority, lc) { const lv = voices.filter(v => v.lang.startsWith(lc)); for (const p of priority) { const m = lv.find(v => v.name.includes(p)); if (m) return m; } return lv[0] || null; }
  function getVoiceForLang(l) { return l === 'ar' ? STATE.voiceAR : l === 'fr' ? STATE.voiceFR : STATE.voiceEN; }
  speechSynthesis.addEventListener('voiceschanged', loadVoices); loadVoices();

  function getActivePanel() { return document.querySelector('.panel.active'); }
  function getActiveTabName() { const b = document.querySelector('.tab.active'); return b ? b.dataset.tab : 'about'; }

  function extractCards(panel) {
    if (!panel) return [];
    const cards = []; const tabName = panel.id.replace('panel-', '');
    if (tabName !== 'about') { const title = panel.querySelector('.section-title'); const desc = panel.querySelector('.section-desc'); if (title) cards.push({ el: title.closest('.panel') || title, text: (title.textContent || '') + '. ' + (desc ? desc.textContent : ''), type: 'title' }); }
    if (tabName === 'about') { panel.querySelectorAll('.about-disclaimer, .about-author, .about-section').forEach(el => { const text = cleanText(el.textContent); if (text) cards.push({ el, text, type: 'about' }); }); }
    else if (tabName === 'cards') { panel.querySelectorAll('.principle-card').forEach(el => { if (el.style.display === 'none') return; const t = el.querySelector('.principle-title'); const d = el.querySelector('.principle-desc'); let text = ''; if (t) text += t.textContent + '. '; if (d) text += d.textContent + '. '; cards.push({ el, text: cleanText(text), type: 'card' }); }); }
    else if (tabName === 'timeline') { panel.querySelectorAll('.timeline-card').forEach(el => { cards.push({ el, text: cleanText(el.textContent), type: 'timeline' }); }); }
    else if (tabName === 'home') { const daily = panel.querySelector('.daily-card'); if (daily) cards.push({ el: daily, text: cleanText(daily.textContent), type: 'daily' }); }
    return cards;
  }

  function cleanText(text) {
    var clean = text.replace(/\s+/g, ' ').replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE00}-\u{FEFF}\u{1F900}-\u{1F9FF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}\u{2190}-\u{21FF}\u2191\u2193\u2190\u2192\u2713]/gu, '').trim();
    clean = clean.replace(/[\u00AB\u00BB\u201C\u201D()[\]{}—–\u2022\u25CF\u25C6\u25A0\u25AA]/g, ' ').replace(/\s+/g, ' ');
    clean = clean.replace(/:\s/g, ':, ').replace(/;\s/g, ';, ').replace(/\s—\s/g, ', ').replace(/\.\.\./g, ', ').replace(/\s*\n\s*/g, '. ');
    var l = getLang();
    if (l === 'fr') { clean = clean.replace(/al-Ghazali/gi, 'al Razali').replace(/Ghazali/gi, 'Razali').replace(/Sheikh/gi, 'Cheikh').replace(/Mohammed/gi, 'Moham\u00e8d').replace(/\bet\b/g, ', et').replace(/\bmais\b/g, ', mais').replace(/\bou\b/g, ', ou').replace(/\bcar\b/g, ', car').replace(/\bdonc\b/g, ', donc'); }
    if (l === 'en') { clean = clean.replace(/al-Ghazali/gi, 'al Gah-zah-lee').replace(/Ghazali/gi, 'Gah-zah-lee').replace(/\band\b/g, ', and').replace(/\bbut\b/g, ', but').replace(/\bor\b/g, ', or').replace(/\bhowever\b/gi, ', however,'); }
    if (l === 'ar') { clean = clean.replace(/https?:\/\/[^\s]+/g, '').replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '').replace(/workshop-diy\.org/gi, '').replace(/[a-zA-Z]{4,}/g, '').replace(/\bو\b/g, '\u060C و').replace(/\bلكن\b/g, '\u060C لكن').replace(/\bأو\b/g, '\u060C أو').replace(/\bثم\b/g, '\u060C ثم').replace(/\bبل\b/g, '\u060C بل'); }
    return clean.replace(/,\s*,/g, ',').replace(/\s+/g, ' ').trim();
  }

  let speakGen = 0;
  function speak(text, onEnd) {
    speakGen++; var myGen = speakGen; speechSynthesis.cancel();
    if (!text || !text.trim()) { if (onEnd) onEnd(); return; }
    var l = getLang(); var utt = new SpeechSynthesisUtterance(text); var sv = getVoiceForLang(l); if (sv) utt.voice = sv;
    utt.lang = l === 'ar' ? 'ar-SA' : l === 'fr' ? 'fr-FR' : 'en-US'; utt.rate = (l === 'ar') ? STATE.speed * 0.9 : STATE.speed; utt.pitch = STATE.pitch;
    if (STATE.karaokeEnabled) { utt.onboundary = function(e) { if (myGen !== speakGen) return; if (e.name === 'word' && e.charLength > 0 && STATE.cards[STATE.cardIndex]) highlightWord(STATE.cards[STATE.cardIndex].el, e.charIndex, e.charLength, text); }; }
    var done = false;
    function finish() { if (done) return; done = true; clearHighlights(); if (myGen !== speakGen) return; if (onEnd) onEnd(); }
    utt.onend = finish; utt.onerror = finish;
    speechSynthesis.speak(utt);
    var ps = false; var pi = setInterval(function() { if (done || myGen !== speakGen) { clearInterval(pi); return; } if (speechSynthesis.speaking) ps = true; if (ps && speechSynthesis.paused && !STATE.paused) speechSynthesis.resume(); if (ps && !speechSynthesis.speaking && !speechSynthesis.pending) { clearInterval(pi); finish(); } }, 500);
    setTimeout(function() { if (!done && myGen === speakGen) { clearInterval(pi); finish(); } }, Math.max(5000, (text.length / 3) * (1000 / STATE.speed)) + 3000);
  }

  function highlightWord(el, ci, cl, ft) { if (!el || !cl) return; const w = ft.slice(ci, ci + cl); const wk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let n; while (n = wk.nextNode()) { const i = n.textContent.indexOf(w); if (i !== -1) { clearHighlights(); const r = document.createRange(); r.setStart(n, i); r.setEnd(n, Math.min(i + w.length, n.textContent.length)); const s = document.createElement('span'); s.className = 'narrator-word-highlight'; try { r.surroundContents(s); } catch(e) {} return; } } }
  function clearHighlights() { document.querySelectorAll('.narrator-word-highlight').forEach(el => { const p = el.parentNode; p.replaceChild(document.createTextNode(el.textContent), el); p.normalize(); }); }
  function highlightCard(el) { document.querySelectorAll('.narrator-active-card').forEach(e => e.classList.remove('narrator-active-card')); if (el) { el.classList.add('narrator-active-card'); if (STATE.autoScroll) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); } }

  function readCurrentCard() {
    if (STATE.cardIndex >= STATE.cards.length) { if (STATE.mode === 'book') nextTab(); else stopNarrator(); return; }
    const card = STATE.cards[STATE.cardIndex]; highlightCard(card.el);
    if (card.type === 'card' && card.el && !card.el.classList.contains('open')) card.el.classList.add('open');
    updateProgress();
    speak(card.text, function() { if (!STATE.playing) return; if (STATE.duoReading && getLang() === 'ar') { readDuoTranslation(card, afterCardDone); return; } afterCardDone(); });
  }

  function afterCardDone() {
    if (!STATE.playing) return;
    if (STATE.loopCount > 0) { STATE.loopCurrent++; if (STATE.loopCurrent < STATE.loopCount) { setTimeout(function() { if (STATE.playing) readCurrentCard(); }, 300); return; } STATE.loopCurrent = 0; }
    var jr = STATE.cards[STATE.cardIndex]; var delay = jr && jr.type === 'title' ? 2500 : jr && jr.text && jr.text.length > 150 ? 2000 : 1200;
    STATE.cardIndex++; if (!STATE.playing) return;
    document.querySelectorAll('.narrator-active-card').forEach(e => e.classList.remove('narrator-active-card'));
    setTimeout(function() { if (STATE.playing) readCurrentCard(); }, delay);
  }

  function readDuoTranslation(card, onEnd) {
    const dv = getVoiceForLang('fr'); let dt = '';
    const cId = card.el ? card.el.id : ''; const cm = cId.match(/card-(\d+)/);
    if (cm && typeof CARDS !== 'undefined') { const c = CARDS[parseInt(cm[1]) - 1]; if (c && c.fr) dt = c.fr.title + '. ' + c.fr.desc; }
    if (!dt) { if (onEnd) onEnd(); return; }
    let dc = false; function dd() { if (!dc) { dc = true; STATE.duoTimeout = null; if (onEnd) onEnd(); } }
    const u = new SpeechSynthesisUtterance(cleanText(dt)); u.voice = dv; u.lang = 'fr-FR'; u.rate = STATE.speed; u.pitch = STATE.pitch; u.onend = dd; u.onerror = dd;
    STATE.duoTimeout = setTimeout(function() { if (STATE.playing) speechSynthesis.speak(u); else dd(); }, 300);
  }

  function nextTab() { STATE.tabIndex++; if (STATE.tabIndex >= STATE.tabOrder.length) { stopNarrator(); showToast(nrT().bookDone); return; } switchToTab(STATE.tabOrder[STATE.tabIndex]); }
  function switchToTab(tn) { const tb = document.querySelector('.tab[data-tab="' + tn + '"]'); if (tb) { tb.click(); setTimeout(function() { if (!STATE.playing) return; STATE.cards = extractCards(getActivePanel()); STATE.cardIndex = 0; const t = getActivePanel().querySelector('.section-title'); if (t) { speak(t.textContent, function() { if (!STATE.playing) return; setTimeout(function() { if (STATE.playing) readCurrentCard(); }, 300); }); } else readCurrentCard(); }, 400); } }

  function playPage() { STATE.mode = 'page'; STATE.cards = extractCards(getActivePanel()); STATE.cardIndex = 0; STATE.playing = true; STATE.paused = false; closePanel(); updateUI(); setupMediaSession(); if (typeof showToast === 'function') showToast(nrT().page); readCurrentCard(); }
  function playBook() { STATE.mode = 'book'; STATE.tabIndex = 0; STATE.playing = true; STATE.paused = false; closePanel(); updateUI(); setupMediaSession(); if (typeof showToast === 'function') showToast(nrT().book); switchToTab(STATE.tabOrder[0]); }
  function closePanel() { const p = document.getElementById('narratorPanel'); if (p && !p.classList.contains('hidden')) p.classList.add('hidden'); }
  function pauseNarrator() { if (STATE.playing && !STATE.paused) { speechSynthesis.pause(); STATE.paused = true; if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused'; updateUI(); } else if (STATE.paused) { speechSynthesis.resume(); STATE.paused = false; if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing'; updateUI(); } }
  function cancelDuo() { if (STATE.duoTimeout) { clearTimeout(STATE.duoTimeout); STATE.duoTimeout = null; } }
  function stopNarrator() { speakGen++; cancelDuo(); speechSynthesis.cancel(); STATE.playing = false; STATE.paused = false; STATE.cardIndex = 0; clearHighlights(); document.querySelectorAll('.narrator-active-card').forEach(e => e.classList.remove('narrator-active-card')); if (STATE.sleepTimer) { clearTimeout(STATE.sleepTimer); STATE.sleepTimer = null; } if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'none'; updateUI(); }
  function nextCard() { if (!STATE.playing) return; speakGen++; cancelDuo(); speechSynthesis.cancel(); clearHighlights(); STATE.loopCurrent = 0; STATE.cardIndex++; if (STATE.cardIndex >= STATE.cards.length) { if (STATE.mode === 'book') nextTab(); else stopNarrator(); return; } readCurrentCard(); }
  function prevCard() { if (!STATE.playing) return; speakGen++; cancelDuo(); speechSynthesis.cancel(); clearHighlights(); STATE.loopCurrent = 0; STATE.cardIndex = Math.max(0, STATE.cardIndex - 1); readCurrentCard(); }
  function setSleepTimer(m) { if (STATE.sleepTimer) clearTimeout(STATE.sleepTimer); STATE.sleepMinutes = m; if (m > 0) STATE.sleepTimer = setTimeout(() => { stopNarrator(); showToast(nrT().sleepDone); }, m * 60000); }

  function setupMediaSession() {
    if (!('mediaSession' in navigator)) return;
    const l = getLang();
    navigator.mediaSession.metadata = new MediaMetadata({ title: l === 'ar' ? 'معركة المصحف' : l === 'fr' ? 'La Bataille du Coran' : 'Battle of the Quran', artist: l === 'ar' ? 'الشيخ محمد الغزالي' : 'Sheikh Mohammed al-Ghazali', album: STATE.mode === 'book' ? (l === 'ar' ? 'الكتاب كاملاً' : l === 'fr' ? 'Livre complet' : 'Full Book') : getActiveTabName() });
    navigator.mediaSession.playbackState = 'playing';
    navigator.mediaSession.setActionHandler('play', pauseNarrator); navigator.mediaSession.setActionHandler('pause', pauseNarrator); navigator.mediaSession.setActionHandler('nexttrack', nextCard); navigator.mediaSession.setActionHandler('previoustrack', prevCard); navigator.mediaSession.setActionHandler('stop', stopNarrator);
  }

  function updateProgress() { const t = STATE.cards.length; const c = STATE.cardIndex + 1; const el = document.getElementById('narratorProgress'); if (el) el.textContent = c + '/' + t; const b = document.getElementById('narratorBar'); if (b) b.style.width = (c / t * 100) + '%'; }
  function updateUI() { const b = document.getElementById('narratorMainBtn'); const p = document.getElementById('narratorPlayPause'); if (b) b.classList.toggle('active', STATE.playing); if (p) p.textContent = STATE.playing && !STATE.paused ? '⏸️' : '▶️'; }
  function updateLabels() { const t = nrT(); const s = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; }; s('narratorTitle', t.title); document.querySelectorAll('[data-nr]').forEach(el => { const k = el.dataset.nr; if (t[k]) el.textContent = t[k]; }); }

  function toggleNarratorPanel() { const p = document.getElementById('narratorPanel'); if (!p) return; p.classList.toggle('hidden'); if (!p.classList.contains('hidden')) { updateLabels(); populateVoiceSelect(); syncCheckboxes(); } if (typeof playSound === 'function') playSound('click'); }
  function syncCheckboxes() { const p = document.getElementById('narratorPanel'); if (!p) return; const tg = p.querySelectorAll('.narrator-toggle input[type=checkbox]'); if (tg[0]) tg[0].checked = STATE.karaokeEnabled; if (tg[1]) tg[1].checked = STATE.autoScroll; if (tg[2]) tg[2].checked = STATE.duoReading; const se = document.getElementById('narratorSpeed'); if (se) se.value = STATE.speed; const sl = document.getElementById('narratorSpeedLabel'); if (sl) sl.textContent = STATE.speed + 'x'; const pe = document.getElementById('narratorPitch'); if (pe) pe.value = STATE.pitch; const pl = document.getElementById('narratorPitchLabel'); if (pl) pl.textContent = STATE.pitch.toFixed(1); }

  function onSpeedChange(v) { STATE.speed = parseFloat(v); const l = document.getElementById('narratorSpeedLabel'); if (l) l.textContent = STATE.speed + 'x'; localStorage.setItem('mm-narrator-speed', STATE.speed); }
  function onPitchChange(v) { STATE.pitch = parseFloat(v); const l = document.getElementById('narratorPitchLabel'); if (l) l.textContent = STATE.pitch.toFixed(1); localStorage.setItem('mm-narrator-pitch', STATE.pitch); }
  function onLoopChange(v) { STATE.loopCount = parseInt(v); }
  function onSleepChange(v) { setSleepTimer(parseInt(v)); if (parseInt(v) > 0 && typeof showToast === 'function') showToast(nrT().sleepSet + ' ' + v + ' ' + nrT().min); }
  function onKaraokeToggle(c) { STATE.karaokeEnabled = c; localStorage.setItem('mm-narrator-karaoke', c); }
  function onAutoScrollToggle(c) { STATE.autoScroll = c; localStorage.setItem('mm-narrator-autoscroll', c); }
  function onDuoToggle(c) { STATE.duoReading = c; localStorage.setItem('mm-narrator-duo', c); }

  function populateVoiceSelect() { const sel = document.getElementById('narratorVoice'); if (!sel) return; const voices = speechSynthesis.getVoices(); const l = getLang(); const lc = l === 'ar' ? 'ar' : l === 'fr' ? 'fr' : 'en'; sel.innerHTML = ''; const f = []; voices.forEach((v, i) => { if (v.lang.startsWith(lc)) f.push({ voice: v, idx: i }); }); if (!f.length) voices.forEach((v, i) => f.push({ voice: v, idx: i })); const cv = getVoiceForLang(l); f.forEach(item => { const o = document.createElement('option'); o.value = item.idx; o.textContent = item.voice.name + ' (' + item.voice.lang + ')'; if (cv && item.voice.name === cv.name) o.selected = true; sel.appendChild(o); }); }
  function onVoiceChange(v) { const voices = speechSynthesis.getVoices(); const vc = voices[parseInt(v)]; if (!vc) return; const l = getLang(); if (l === 'ar') STATE.voiceAR = vc; else if (l === 'fr') STATE.voiceFR = vc; else STATE.voiceEN = vc; }

  function loadSettings() { STATE.speed = parseFloat(localStorage.getItem('mm-narrator-speed')) || 1; STATE.pitch = parseFloat(localStorage.getItem('mm-narrator-pitch')) || 1; STATE.karaokeEnabled = localStorage.getItem('mm-narrator-karaoke') !== 'false'; STATE.autoScroll = localStorage.getItem('mm-narrator-autoscroll') !== 'false'; STATE.duoReading = localStorage.getItem('mm-narrator-duo') === 'true'; }

  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') { var p = document.getElementById('narratorPanel'); if (p && !p.classList.contains('hidden')) { p.classList.add('hidden'); e.stopPropagation(); } } });
  window.addEventListener('beforeunload', function() { speechSynthesis.cancel(); });

  var sectionSpeaking = false;
  function speakSection(el) { if (STATE.playing) stopNarrator(); speakGen++; speechSynthesis.cancel(); var text = cleanText(el.textContent || ''); if (!text) return; sectionSpeaking = true; el.classList.add('narrator-active-card'); var l = getLang(); var u = new SpeechSynthesisUtterance(text); var sv = getVoiceForLang(l); if (sv) u.voice = sv; u.lang = l === 'ar' ? 'ar-SA' : l === 'fr' ? 'fr-FR' : 'en-US'; u.rate = (l === 'ar') ? STATE.speed * 0.9 : STATE.speed; u.pitch = STATE.pitch; var done = false; function finish() { if (done) return; done = true; sectionSpeaking = false; el.classList.remove('narrator-active-card'); clearHighlights(); } u.onend = finish; u.onerror = finish; if (STATE.karaokeEnabled) { u.onboundary = function(e) { if (e.name === 'word' && e.charLength > 0) highlightWord(el, e.charIndex, e.charLength, text); }; } speechSynthesis.speak(u); var ps = false; var pi = setInterval(function() { if (done) { clearInterval(pi); return; } if (speechSynthesis.speaking) ps = true; if (ps && speechSynthesis.paused) speechSynthesis.resume(); if (ps && !speechSynthesis.speaking && !speechSynthesis.pending) { clearInterval(pi); finish(); } }, 500); setTimeout(function() { if (!done) { clearInterval(pi); finish(); } }, Math.max(5000, (text.length / 3) * (1000 / STATE.speed)) + 3000); }
  function stopSection() { if (sectionSpeaking) { speechSynthesis.cancel(); sectionSpeaking = false; document.querySelectorAll('.narrator-active-card').forEach(e => e.classList.remove('narrator-active-card')); clearHighlights(); } }

  function injectSpeakButtons() {
    document.querySelectorAll('.narrator-speak-btn').forEach(b => b.remove());
    ['.about-disclaimer','.about-author','.about-section','.principle-card','.timeline-card','.daily-card'].forEach(sel => {
      document.querySelectorAll(sel).forEach(card => {
        if (card.querySelector('.narrator-speak-btn')) return;
        var btn = document.createElement('button'); btn.className = 'narrator-speak-btn'; btn.textContent = '🔊'; btn.title = nrT().page;
        btn.onclick = function(e) { e.stopPropagation(); if (sectionSpeaking) stopSection(); else speakSection(card); };
        card.style.position = 'relative'; card.appendChild(btn);
      });
    });
  }

  ['renderAbout','renderCards','renderTimeline','renderHome'].forEach(fn => { var orig = window[fn]; if (orig) window[fn] = function() { orig(); setTimeout(injectSpeakButtons, 100); }; });

  function initNarrator() { loadSettings(); updateLabels(); setTimeout(injectSpeakButtons, 500); var lastLang = document.documentElement.lang || 'ar'; new MutationObserver(function() { var nl = document.documentElement.lang || 'ar'; if (nl !== lastLang) { lastLang = nl; setTimeout(function() { populateVoiceSelect(); updateLabels(); injectSpeakButtons(); }, 100); if (STATE.playing) stopNarrator(); } }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] }); }

  window.narratorPlayPage = playPage; window.narratorPlayBook = playBook; window.narratorPause = pauseNarrator; window.narratorStop = stopNarrator; window.narratorNext = nextCard; window.narratorPrev = prevCard; window.narratorTogglePanel = toggleNarratorPanel; window.narratorSpeedChange = onSpeedChange; window.narratorPitchChange = onPitchChange; window.narratorLoopChange = onLoopChange; window.narratorSleepChange = onSleepChange; window.narratorKaraokeToggle = onKaraokeToggle; window.narratorAutoScrollToggle = onAutoScrollToggle; window.narratorDuoToggle = onDuoToggle; window.narratorVoiceChange = onVoiceChange; window.narratorPopulateVoices = populateVoiceSelect;
  document.addEventListener('DOMContentLoaded', initNarrator);
})();
