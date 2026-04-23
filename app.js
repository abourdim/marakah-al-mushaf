/* معركة المصحف في العالم الإسلامي — BATTLE OF THE QURAN — app.js v1.0 */
/* Based on "Ma'rakat al-Mushaf fi al-'Alam al-Islami" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'معركة المصحف',
    splashSub: 'حفظ القرآن عبر التاريخ للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الحجر ١٥: ٩',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'حفظ القرآن عبر العصور',
    cardsDesc: '٢٠ بطاقة عن رحلة حفظ المصحف — كل بطاقة بآية وشرح وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن تاريخ المصحف — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي مع المصحف',
    progressDesc: 'تقدمك وإنجازاتك في رحلة حفظ القرآن',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية القرآن',
    dailyLabel: '✨ بطاقة اليوم',
    searchPlaceholder: 'ابحث في البطاقات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 تأمل الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '٢٠ بطاقة عن حفظ القرآن عبر التاريخ',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Battle of the Quran',
    splashSub: 'Preservation of the Quran through history',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Hijr 15:9',
    tabHome: 'Home', tabCards: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: 'Quran Preservation Through the Ages',
    cardsDesc: '20 cards about the journey of Quran preservation — each with a verse, explanation, and practical reflection',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Quran history — 4 choices per question',
    progressTitle: 'My Quran Journey',
    progressDesc: 'Your progress and achievements in the Quran journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Quran Duas',
    dailyLabel: "✨ Today's Card",
    searchPlaceholder: 'Search cards...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Reflect Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 cards about Quran preservation through history',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'La Bataille du Coran',
    splashSub: "La preservation du Coran a travers l'histoire",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Hijr 15:9',
    tabHome: 'Accueil', tabCards: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    cardsTitle: 'Preservation du Coran a Travers les Ages',
    cardsDesc: '20 cartes sur le parcours de preservation du Coran — chacune avec un verset, une explication et une reflexion pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur l\'histoire du Coran — 4 choix par question',
    progressTitle: 'Mon Parcours Coranique',
    progressDesc: 'Vos progres et realisations dans le parcours du Coran',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas du Coran',
    dailyLabel: '✨ Carte du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Reflechissez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 cartes sur la preservation du Coran a travers l\'histoire',
      'Quiz « Qui Veut Devenir Savant ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 20 CARDS DATA ═══════════════
const CARDS = [
  {
    id:1, emoji:'📜',
    ar:{title:'معركة المصحف',desc:'يدافع الغزالي في هذا الكتاب عن القرآن ضد هجمات المستشرقين الذين يشككون في سلامة جمعه. يستعرض قصة جمع القرآن في عهد أبي بكر بعد معركة اليمامة — بمنهج دقيق لم يعرف التاريخ البشري مثله في حفظ نص مقدس.',verse:'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',verseRef:'الحجر ٩',hadith:'خيركم من تعلم القرآن وعلّمه — رواه البخاري',action:'تعرّف على قصة جمع القرآن واشكر الله على حفظه لكتابه العزيز',young:'بعد وفاة النبي، جمع المسلمون القرآن في كتاب واحد حتى لا يضيع منه شيء! 📜'},
    en:{title:'Quran Compilation Under Abu Bakr',desc:'Al-Ghazali defends the Quran: After the Battle of Yamama and the martyrdom of many memorizers, Umar suggested to Abu Bakr to compile the Quran. Zayd ibn Thabit was tasked with this great mission, collecting it from parchments, palm stalks, and the memories of men using a rigorous method.',verse:'Indeed, it is We who sent down the reminder, and indeed, We will be its guardian',verseRef:'Al-Hijr 9',hadith:'The best of you are those who learn the Quran and teach it — Bukhari',action:'Learn the story of how the Quran was compiled and thank Allah for preserving His Book',young:'After the Prophet passed away, Muslims gathered the Quran into one book so nothing would be lost! 📜'},
    fr:{title:'Compilation du Coran sous Abu Bakr',desc:'Al-Ghazali défend le Coran: Apres la bataille de Yamama et le martyre de nombreux memorisateurs, Umar a suggere a Abu Bakr de compiler le Coran. Zayd ibn Thabit a ete charge de cette grande mission, le collectant a partir de parchemins et de memoires avec une methode rigoureuse.',verse:'C\'est Nous qui avons fait descendre le Rappel et c\'est Nous qui en sommes les gardiens',verseRef:'Al-Hijr 9',hadith:'Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et l\'enseignent — Bukhari',action:'Decouvrez l\'histoire de la compilation du Coran et remerciez Allah pour sa preservation',young:'Apres le Prophete, les musulmans ont rassemble le Coran en un seul livre pour ne rien perdre ! 📜'}
  },
  {
    id:2, emoji:'📖',
    ar:{title:'المصحف العثماني',desc:'يدافع الغزالي عن القرآن: في عهد عثمان بن عفان، وحّد المصاحف على قراءة واحدة لمنع الاختلاف بين المسلمين. أرسل نسخاً إلى الأمصار الكبرى وأمر بإحراق ما سواها. هذا العمل العظيم حفظ وحدة الأمة.',verse:'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ',verseRef:'القمر ١٧',hadith:'تركت فيكم ما إن تمسكتم به لن تضلوا: كتاب الله — رواه مسلم',action:'تأمل كيف وحّد المصحف العثماني الأمة واحمد الله على نعمة الوحدة',young:'الخليفة عثمان وحّد المسلمين على مصحف واحد حتى يقرأ الجميع بنفس الطريقة! 📖'},
    en:{title:'The Uthmanic Codex',desc:'Al-Ghazali defends the Quran: During Uthman ibn Affan\'s caliphate, he unified the Quran manuscripts into one standard reading to prevent disagreements among Muslims. He sent copies to major cities and ordered other versions burned. This great act preserved the unity of the ummah.',verse:'And We have certainly made the Quran easy for remembrance, so is there any who will remember?',verseRef:'Al-Qamar 17',hadith:'I have left among you that which if you hold to, you will never go astray: the Book of Allah — Muslim',action:'Reflect on how the Uthmanic codex united the ummah and thank Allah for the blessing of unity',young:'Caliph Uthman made one standard Quran so all Muslims would read the same way! 📖'},
    fr:{title:'Le Codex Othmanien',desc:'Al-Ghazali défend le Coran: Sous le califat d\'Uthman ibn Affan, il a unifie les manuscrits coraniques en une seule lecture standard pour prevenir les desaccords. Il a envoye des copies aux grandes villes et ordonne de bruler les autres versions. Cet acte a preserve l\'unite de la oumma.',verse:'Et Nous avons certes rendu le Coran facile pour le rappel. Y a-t-il quelqu\'un pour se rappeler ?',verseRef:'Al-Qamar 17',hadith:'Je vous ai laisse ce qui, si vous vous y accrochez, vous ne vous egarerez jamais : le Livre d\'Allah — Muslim',action:'Reflechissez a la facon dont le codex othmanien a uni la oumma',young:'Le calife Uthman a cree un Coran standard pour que tous les musulmans lisent de la meme maniere ! 📖'}
  },
  {
    id:3, emoji:'🗣️',
    ar:{title:'التقليد الشفوي',desc:'يدافع الغزالي عن القرآن: القرآن حُفظ أولاً في الصدور قبل السطور. سلسلة الحفظ الشفوي متصلة من النبي ﷺ إلى يومنا هذا. ملايين المسلمين يحفظون القرآن كاملاً عن ظهر قلب في كل جيل.',verse:'بَلْ هُوَ آيَاتٌ بَيِّنَاتٌ فِي صُدُورِ الَّذِينَ أُوتُوا الْعِلْمَ',verseRef:'العنكبوت ٤٩',hadith:'يُقال لصاحب القرآن: اقرأ وارتقِ — رواه الترمذي',action:'احفظ آية جديدة اليوم وكن جزءاً من سلسلة الحفظ المتصلة',young:'ملايين الناس يحفظون القرآن كله عن ظهر قلب منذ زمن النبي حتى اليوم! 🗣️'},
    en:{title:'The Oral Tradition',desc:'Al-Ghazali defends the Quran: The Quran was preserved first in hearts before pages. The chain of oral memorization is unbroken from the Prophet (PBUH) to this day. Millions of Muslims memorize the entire Quran by heart in every generation.',verse:'Rather, it is clear verses preserved in the breasts of those who have been given knowledge',verseRef:'Al-Ankabut 49',hadith:'It will be said to the companion of the Quran: Read and ascend — Tirmidhi',action:'Memorize a new verse today and be part of the unbroken chain of preservation',young:'Millions of people memorize the whole Quran by heart from the Prophet\'s time until today! 🗣️'},
    fr:{title:'La Tradition Orale',desc:'Al-Ghazali défend le Coran: Le Coran a d\'abord ete preserve dans les coeurs avant les pages. La chaine de memorisation orale est ininterrompue depuis le Prophete jusqu\'a nos jours. Des millions de musulmans memorisent le Coran entier par coeur a chaque generation.',verse:'Ce sont plutot des versets clairs dans les poitrines de ceux qui ont recu la science',verseRef:'Al-Ankabut 49',hadith:'Il sera dit au compagnon du Coran : Lis et eleve-toi — Tirmidhi',action:'Memorisez un nouveau verset aujourd\'hui et faites partie de la chaine ininterrompue',young:'Des millions de personnes memorisent tout le Coran par coeur depuis le Prophete jusqu\'a aujourd\'hui ! 🗣️'}
  },
  {
    id:4, emoji:'🏛️',
    ar:{title:'الأدلة المخطوطية',desc:'يدافع الغزالي عن القرآن: آلاف المخطوطات القرآنية القديمة في المتاحف والمكتبات حول العالم تؤكد أن نص القرآن لم يتغير. من أقدمها مخطوطات طوب قابي في إسطنبول ومخطوطات الحسينية في القاهرة.',verse:'لَا يَأْتِيهِ الْبَاطِلُ مِنْ بَيْنِ يَدَيْهِ وَلَا مِنْ خَلْفِهِ',verseRef:'فصلت ٤٢',hadith:'إن هذا القرآن لا يَخلَق على كثرة الردّ — متفق عليه',action:'ابحث عن صور المخطوطات القرآنية القديمة وتأمل دقة الحفظ',young:'توجد مخطوطات قرآنية عمرها أكثر من ١٤٠٠ سنة وهي مطابقة لما نقرأه اليوم! 🏛️'},
    en:{title:'Manuscript Evidence',desc:'Al-Ghazali defends the Quran: Thousands of ancient Quran manuscripts in museums and libraries worldwide confirm that the Quran text has not changed. Among the oldest are the Topkapi manuscripts in Istanbul and the Husayniyya manuscripts in Cairo.',verse:'Falsehood cannot approach it from before it or from behind it',verseRef:'Fussilat 42',hadith:'This Quran does not wear out no matter how much it is repeated — Agreed upon',action:'Search for images of ancient Quran manuscripts and reflect on the precision of preservation',young:'There are Quran manuscripts over 1400 years old that match exactly what we read today! 🏛️'},
    fr:{title:'Les Preuves Manuscrites',desc:'Al-Ghazali défend le Coran: Des milliers de manuscrits coraniques anciens dans les musees et bibliotheques du monde confirment que le texte coranique n\'a pas change. Parmi les plus anciens, les manuscrits de Topkapi a Istanbul.',verse:'Le faux ne l\'atteint ni par devant ni par derriere',verseRef:'Fussilat 42',hadith:'Ce Coran ne s\'use pas peu importe combien il est repete — Unanimement reconnu',action:'Recherchez des images d\'anciens manuscrits coraniques et reflechissez a la precision de la preservation',young:'Il existe des manuscrits coraniques de plus de 1400 ans qui correspondent exactement a ce que nous lisons ! 🏛️'}
  },
  {
    id:5, emoji:'🛡️',
    ar:{title:'الهجمات الاستشراقية',desc:'يدافع الغزالي عن القرآن: حاول بعض المستشرقين التشكيك في صحة القرآن وأصالته. استخدموا مناهج نقدية غربية لا تناسب النص القرآني. لكن الدراسات العلمية الحديثة أثبتت فشل ادعاءاتهم.',verse:'يُرِيدُونَ لِيُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ وَاللَّهُ مُتِمُّ نُورِهِ',verseRef:'الصف ٨',hadith:'لا تزال طائفة من أمتي ظاهرين على الحق — رواه مسلم',action:'تعلم كيف ترد على الشبهات بالعلم والحجة لا بالعاطفة',young:'حاول بعض الناس التشكيك في القرآن لكن العلم أثبت أنه محفوظ تماماً! 🛡️'},
    en:{title:'Orientalist Attacks',desc:'Al-Ghazali defends the Quran: Some Orientalist scholars attempted to question the authenticity of the Quran. They used Western critical methods unsuitable for the Quranic text. However, modern scientific studies have proven their claims false.',verse:'They want to extinguish the light of Allah with their mouths, but Allah will perfect His light',verseRef:'As-Saff 8',hadith:'A group of my ummah will always be upon the truth — Muslim',action:'Learn how to respond to doubts with knowledge and evidence, not emotion',young:'Some people tried to question the Quran but science proved it is perfectly preserved! 🛡️'},
    fr:{title:'Les Attaques Orientalistes',desc:'Al-Ghazali défend le Coran: Certains orientalistes ont tente de remettre en question l\'authenticite du Coran. Ils ont utilise des methodes critiques occidentales inadaptees au texte coranique. Cependant, les etudes scientifiques modernes ont prouve la faussete de leurs pretentions.',verse:'Ils veulent eteindre la lumiere d\'Allah avec leurs bouches, mais Allah perfectionnera Sa lumiere',verseRef:'As-Saff 8',hadith:'Un groupe de ma communaute restera toujours sur la verite — Muslim',action:'Apprenez a repondre aux doutes avec la science et les preuves, pas l\'emotion',young:'Certains ont essaye de remettre en question le Coran mais la science a prouve qu\'il est parfaitement preserve ! 🛡️'}
  },
  {
    id:6, emoji:'🔤',
    ar:{title:'القراءات القرآنية',desc:'يدافع الغزالي عن القرآن: القراءات السبع أو العشر ليست اختلافاً في القرآن بل هي أوجه نزل بها الوحي. كلها متواترة عن النبي ﷺ وتُثري المعنى ولا تتناقض. هذا التنوع دليل على ثراء النص القرآني.',verse:'وَلَقَدْ صَرَّفْنَا فِي هَذَا الْقُرْآنِ لِلنَّاسِ مِنْ كُلِّ مَثَلٍ',verseRef:'الكهف ٥٤',hadith:'أُنزل القرآن على سبعة أحرف — متفق عليه',action:'استمع لقراءة مختلفة عن المعتاد واكتشف جمال التنوع القرآني',young:'القرآن نزل بطرق قراءة مختلفة وكلها صحيحة ومن عند الله! 🔤'},
    en:{title:'Variant Readings Explained',desc:'Al-Ghazali defends the Quran: The seven or ten Quranic readings are not contradictions but different ways the revelation was sent down. All are authentically transmitted from the Prophet (PBUH) and enrich meaning without contradiction. This diversity proves the richness of the Quranic text.',verse:'And We have certainly diversified in this Quran for the people every kind of example',verseRef:'Al-Kahf 54',hadith:'The Quran was revealed in seven modes — Agreed upon',action:'Listen to a different Quran recitation style and discover the beauty of Quranic diversity',young:'The Quran was revealed in different reading styles and all of them are correct and from Allah! 🔤'},
    fr:{title:'Les Lectures Variantes Expliquees',desc:'Al-Ghazali défend le Coran: Les sept ou dix lectures coraniques ne sont pas des contradictions mais differentes facons dont la revelation a ete envoyee. Toutes sont authentiquement transmises du Prophete et enrichissent le sens sans contradiction.',verse:'Et Nous avons certes diversifie dans ce Coran pour les gens toutes sortes d\'exemples',verseRef:'Al-Kahf 54',hadith:'Le Coran a ete revele en sept modes — Unanimement reconnu',action:'Ecoutez une recitation differente du Coran et decouvrez la beaute de la diversite coranique',young:'Le Coran a ete revele en differents styles de lecture et tous sont corrects et viennent d\'Allah ! 🔤'}
  },
  {
    id:7, emoji:'⚖️',
    ar:{title:'القرآن مقابل حفظ الكتاب المقدس',desc:'بينما تعرض الكتاب المقدس لتغييرات ونسخ متعددة عبر القرون، بقي القرآن محفوظاً بنصه الأصلي. المنهج المزدوج — الحفظ الشفوي والكتابي — لا مثيل له في تاريخ الكتب المقدسة.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ وَلَوْ كَانَ مِنْ عِنْدِ غَيْرِ اللَّهِ لَوَجَدُوا فِيهِ اخْتِلَافًا كَثِيرًا',verseRef:'النساء ٨٢',hadith:'القرآن حجة لك أو عليك — رواه مسلم',action:'قارن بين منهج حفظ القرآن ومناهج حفظ الكتب السماوية الأخرى',young:'القرآن هو الكتاب الوحيد المحفوظ بنفس الكلمات منذ نزوله! ⚖️'},
    en:{title:'Quran vs Bible Preservation',desc:'While the Bible underwent changes and multiple manuscript traditions over centuries, the Quran has remained preserved in its original text. The dual method — oral and written preservation — is unmatched in the history of sacred texts.',verse:'Do they not reflect upon the Quran? If it had been from other than Allah, they would have found much contradiction',verseRef:'An-Nisa 82',hadith:'The Quran is a proof for you or against you — Muslim',action:'Compare the Quran preservation method with those of other scriptures',young:'The Quran is the only book preserved with the exact same words since it was revealed! ⚖️'},
    fr:{title:'Coran vs Preservation de la Bible',desc:'Alors que la Bible a subi des changements et de multiples traditions manuscrites au fil des siecles, le Coran est reste preserve dans son texte original. La methode double — preservation orale et ecrite — est inegalee dans l\'histoire des textes sacres.',verse:'Ne reflechissent-ils pas sur le Coran ? S\'il provenait d\'un autre qu\'Allah, ils y trouveraient beaucoup de contradictions',verseRef:'An-Nisa 82',hadith:'Le Coran est une preuve pour ou contre vous — Muslim',action:'Comparez la methode de preservation du Coran avec celles des autres ecritures',young:'Le Coran est le seul livre preserve avec les memes mots exacts depuis sa revelation ! ⚖️'}
  },
  {
    id:8, emoji:'🏺',
    ar:{title:'مخطوطة برمنغهام',desc:'اكتُشفت في مكتبة جامعة برمنغهام عام ٢٠١٥، وأُرّخت بالكربون المشع إلى الفترة بين ٥٦٨ و٦٤٥م. هذا يعني أنها قد تكون من عهد النبي ﷺ نفسه! نصها مطابق تماماً لما بين أيدينا.',verse:'وَالْقُرْآنِ الْمَجِيدِ',verseRef:'ق ١',hadith:'تعاهدوا القرآن فوالذي نفسي بيده لهو أشد تفلتاً من الإبل — متفق عليه',action:'ابحث عن صور مخطوطة برمنغهام وقارنها بالمصحف الذي بين يديك',young:'وجد العلماء مخطوطة قرآنية عمرها أكثر من ١٣٧٠ سنة وهي نفس ما نقرأه! 🏺'},
    en:{title:'The Birmingham Manuscript',desc:'Discovered in the University of Birmingham library in 2015, radiocarbon dated to between 568 and 645 CE. This means it could be from the Prophet\'s own lifetime! Its text matches exactly what we have today.',verse:'By the Glorious Quran',verseRef:'Qaf 1',hadith:'Commit to the Quran, for by the One in whose Hand is my soul, it escapes faster than camels — Agreed upon',action:'Search for images of the Birmingham manuscript and compare it with the Quran in your hands',young:'Scientists found a Quran manuscript over 1370 years old and it is the same as what we read! 🏺'},
    fr:{title:'Le Manuscrit de Birmingham',desc:'Decouvert dans la bibliotheque de l\'Universite de Birmingham en 2015, date au radiocarbone entre 568 et 645 ap. J.-C. Cela signifie qu\'il pourrait dater de l\'epoque du Prophete ! Son texte correspond exactement a ce que nous avons aujourd\'hui.',verse:'Par le Coran Glorieux',verseRef:'Qaf 1',hadith:'Engagez-vous avec le Coran, car il s\'echappe plus vite que les chameaux — Unanimement reconnu',action:'Recherchez des images du manuscrit de Birmingham et comparez-le avec le Coran que vous avez',young:'Les scientifiques ont trouve un manuscrit coranique de plus de 1370 ans et c\'est le meme que ce que nous lisons ! 🏺'}
  },
  {
    id:9, emoji:'📃',
    ar:{title:'مخطوطات صنعاء',desc:'اكتُشفت عام ١٩٧٢ في الجامع الكبير بصنعاء. تضم آلاف الأجزاء من مخطوطات قرآنية قديمة جداً. حاول بعض المستشرقين استغلالها للتشكيك لكن الدراسات أثبتت تطابقها مع النص القرآني المعروف.',verse:'كِتَابٌ أُحْكِمَتْ آيَاتُهُ ثُمَّ فُصِّلَتْ مِنْ لَدُنْ حَكِيمٍ خَبِيرٍ',verseRef:'هود ١',hadith:'من قرأ حرفاً من كتاب الله فله به حسنة — رواه الترمذي',action:'اقرأ عن اكتشاف مخطوطات صنعاء وكيف أكدت حفظ القرآن',young:'وُجدت مخطوطات قرآنية قديمة جداً في اليمن وكلها تطابق القرآن الذي نقرأه! 📃'},
    en:{title:'The Sanaa Manuscripts',desc:'Discovered in 1972 in the Great Mosque of Sanaa, containing thousands of fragments from very ancient Quran manuscripts. Some Orientalists tried to use them to cast doubt, but studies confirmed they match the known Quranic text.',verse:'A Book whose verses are perfected and then detailed, from One who is Wise and Aware',verseRef:'Hud 1',hadith:'Whoever reads a letter from the Book of Allah receives a good deed — Tirmidhi',action:'Read about the discovery of the Sanaa manuscripts and how they confirmed Quran preservation',young:'Very old Quran manuscripts were found in Yemen and they all match the Quran we read today! 📃'},
    fr:{title:'Les Manuscrits de Sanaa',desc:'Decouverts en 1972 dans la Grande Mosquee de Sanaa, contenant des milliers de fragments de manuscrits coraniques tres anciens. Certains orientalistes ont tente de les utiliser pour semer le doute, mais les etudes ont confirme leur concordance.',verse:'Un Livre dont les versets sont parfaits puis detailles, de la part d\'un Sage, Parfaitement Informe',verseRef:'Hud 1',hadith:'Quiconque lit une lettre du Livre d\'Allah recoit une bonne action — Tirmidhi',action:'Lisez sur la decouverte des manuscrits de Sanaa et comment ils ont confirme la preservation du Coran',young:'De tres anciens manuscrits coraniques ont ete trouves au Yemen et ils correspondent tous au Coran que nous lisons ! 📃'}
  },
  {
    id:10, emoji:'🔍',
    ar:{title:'مقارنة مخطوطات البحر الميت',desc:'مخطوطات البحر الميت كشفت اختلافات كبيرة في نسخ التوراة عبر الزمن، بينما المخطوطات القرآنية أظهرت ثباتاً مذهلاً. هذه المقارنة تُبرز تفرد حفظ القرآن بين الكتب السماوية.',verse:'وَأَنْزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِمَا بَيْنَ يَدَيْهِ مِنَ الْكِتَابِ وَمُهَيْمِنًا عَلَيْهِ',verseRef:'المائدة ٤٨',hadith:'ما أنزل الله داءً إلا أنزل له شفاءً — رواه البخاري',action:'قارن بين ثبات المخطوطات القرآنية وتغيرات مخطوطات الكتب السابقة',young:'عندما قارن العلماء المخطوطات القديمة، وجدوا أن القرآن هو الأكثر حفظاً! 🔍'},
    en:{title:'Dead Sea Scrolls Comparison',desc:'The Dead Sea Scrolls revealed significant variations in Torah copies over time, while Quran manuscripts showed remarkable consistency. This comparison highlights the unique preservation of the Quran among sacred books.',verse:'And We have revealed to you the Book in truth, confirming what was before it of Scripture and a guardian over it',verseRef:'Al-Maida 48',hadith:'Allah has not sent down a disease except that He also sent down its cure — Bukhari',action:'Compare the consistency of Quran manuscripts with the variations found in other ancient scriptures',young:'When scientists compared ancient manuscripts, they found the Quran is the best preserved! 🔍'},
    fr:{title:'Comparaison avec les Manuscrits de la Mer Morte',desc:'Les Manuscrits de la Mer Morte ont revele des variations significatives dans les copies de la Torah au fil du temps, tandis que les manuscrits coraniques ont montre une coherence remarquable. Cette comparaison met en evidence la preservation unique du Coran.',verse:'Et Nous avons revele le Livre avec la verite, confirmant ce qui le precedait des Ecritures et gardien sur elles',verseRef:'Al-Maida 48',hadith:'Allah n\'a pas envoye une maladie sans envoyer aussi son remede — Bukhari',action:'Comparez la coherence des manuscrits coraniques avec les variations trouvees dans d\'autres ecritures anciennes',young:'Quand les scientifiques ont compare les anciens manuscrits, ils ont trouve que le Coran est le mieux preserve ! 🔍'}
  },
  {
    id:11, emoji:'🔬',
    ar:{title:'الإعجاز العلمي',desc:'يحتوي القرآن على إشارات علمية دقيقة عن الأجنّة والجبال والبحار والفلك لم تُكتشف إلا حديثاً. هذا يثبت أن القرآن ليس من تأليف بشر بل هو وحي من الله العليم.',verse:'سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنْفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ',verseRef:'فصلت ٥٣',hadith:'إن الله لم يُنزل داءً إلا أنزل له شفاءً — رواه البخاري',action:'ابحث عن إعجاز علمي في القرآن وشاركه مع صديق',young:'القرآن ذكر حقائق علمية عن الكون والجسم قبل أن يكتشفها العلماء بقرون! 🔬'},
    en:{title:'Scientific Miracles',desc:'The Quran contains precise scientific references about embryology, mountains, seas, and astronomy that were only discovered recently. This proves the Quran is not a human composition but a revelation from the All-Knowing Allah.',verse:'We will show them Our signs in the horizons and within themselves until it becomes clear that it is the truth',verseRef:'Fussilat 53',hadith:'Allah has not sent down a disease except that He also sent down its cure — Bukhari',action:'Research a scientific miracle in the Quran and share it with a friend',young:'The Quran mentioned scientific facts about the universe and the body centuries before scientists discovered them! 🔬'},
    fr:{title:'Les Miracles Scientifiques',desc:'Le Coran contient des references scientifiques precises sur l\'embryologie, les montagnes, les mers et l\'astronomie qui n\'ont ete decouvertes que recemment. Cela prouve que le Coran n\'est pas une composition humaine mais une revelation du Tout-Savant.',verse:'Nous leur montrerons Nos signes dans les horizons et en eux-memes jusqu\'a ce qu\'il leur devienne clair que c\'est la verite',verseRef:'Fussilat 53',hadith:'Allah n\'a pas envoye une maladie sans envoyer aussi son remede — Bukhari',action:'Recherchez un miracle scientifique dans le Coran et partagez-le avec un ami',young:'Le Coran a mentionne des faits scientifiques sur l\'univers et le corps des siecles avant que les scientifiques ne les decouvrent ! 🔬'}
  },
  {
    id:12, emoji:'🎨',
    ar:{title:'التحدي الأدبي',desc:'تحدى القرآن العرب — وهم أساطين البلاغة — أن يأتوا بمثله ثم بعشر سور ثم بسورة واحدة. عجزوا جميعاً رغم حرصهم على هزيمة الدعوة. هذا الإعجاز اللغوي دليل على مصدره الإلهي.',verse:'قُلْ لَئِنِ اجْتَمَعَتِ الْإِنْسُ وَالْجِنُّ عَلَىٰ أَنْ يَأْتُوا بِمِثْلِ هَٰذَا الْقُرْآنِ لَا يَأْتُونَ بِمِثْلِهِ',verseRef:'الإسراء ٨٨',hadith:'ما من الأنبياء نبي إلا أُعطي ما مثله آمن عليه البشر، وإنما كان الذي أُوتيته وحياً — متفق عليه',action:'اقرأ سورة قصيرة وتأمل بلاغتها وإيقاعها ومعانيها العميقة',young:'تحدى القرآن كل البشر أن يكتبوا مثله ولم يستطع أحد حتى الآن! 🎨'},
    en:{title:'The Literary Challenge',desc:'The Quran challenged the Arabs — masters of eloquence — to produce anything like it, then ten chapters, then one chapter. They all failed despite their eagerness to defeat the message. This linguistic miracle proves its divine source.',verse:'Say: If mankind and jinn gathered to produce the like of this Quran, they could not produce its like',verseRef:'Al-Isra 88',hadith:'Every Prophet was given miracles that caused people to believe, and what I was given is revelation — Agreed upon',action:'Read a short surah and reflect on its eloquence, rhythm, and deep meanings',young:'The Quran challenged all humans to write something like it and no one has been able to! 🎨'},
    fr:{title:'Le Defi Litteraire',desc:'Le Coran a defie les Arabes — maitres de l\'eloquence — de produire quelque chose de semblable, puis dix sourates, puis une seule sourate. Ils ont tous echoue malgre leur desir de vaincre le message. Ce miracle linguistique prouve sa source divine.',verse:'Dis : Si les humains et les djinns se reunissaient pour produire quelque chose de semblable a ce Coran, ils ne pourraient pas le faire',verseRef:'Al-Isra 88',hadith:'Chaque Prophete a recu des miracles, et ce que j\'ai recu est la revelation — Unanimement reconnu',action:'Lisez une courte sourate et reflechissez a son eloquence, son rythme et ses significations profondes',young:'Le Coran a defie tous les humains d\'ecrire quelque chose de semblable et personne n\'a pu le faire ! 🎨'}
  },
  {
    id:13, emoji:'🌟',
    ar:{title:'النبوءات المحققة',desc:'يحتوي القرآن على نبوءات تحققت بالفعل مثل انتصار الروم وفتح مكة وحفظ جسد فرعون. تحقق هذه النبوءات يثبت أن القرآن من عند الله لا من صنع بشر.',verse:'غُلِبَتِ الرُّومُ فِي أَدْنَى الْأَرْضِ وَهُمْ مِنْ بَعْدِ غَلَبِهِمْ سَيَغْلِبُونَ',verseRef:'الروم ٢-٣',hadith:'لتُفتحنّ القسطنطينية — رواه أحمد',action:'ابحث عن نبوءة قرآنية تحققت وتأمل عظمة هذا الكتاب',young:'القرآن أخبر عن أشياء ستحدث في المستقبل وتحققت فعلاً! 🌟'},
    en:{title:'Fulfilled Prophecies',desc:'The Quran contains prophecies that actually came true, such as the Roman victory, the conquest of Mecca, and the preservation of Pharaoh\'s body. The fulfillment of these prophecies proves the Quran is from Allah, not man-made.',verse:'The Romans have been defeated in the nearest land, but they will win after their defeat',verseRef:'Ar-Rum 2-3',hadith:'Constantinople will be conquered — Ahmad',action:'Research a Quranic prophecy that came true and reflect on the greatness of this Book',young:'The Quran told about things that would happen in the future and they actually came true! 🌟'},
    fr:{title:'Les Propheties Realisees',desc:'Le Coran contient des propheties qui se sont reellement realisees, comme la victoire des Romains, la conquete de La Mecque et la preservation du corps de Pharaon. La realisation de ces propheties prouve que le Coran vient d\'Allah.',verse:'Les Romains ont ete vaincus dans la terre la plus proche, mais ils vaincront apres leur defaite',verseRef:'Ar-Rum 2-3',hadith:'Constantinople sera conquise — Ahmad',action:'Recherchez une prophetie coranique qui s\'est realisee et reflechissez a la grandeur de ce Livre',young:'Le Coran a parle de choses qui allaient arriver dans le futur et elles se sont reellement realisees ! 🌟'}
  },
  {
    id:14, emoji:'🏴',
    ar:{title:'محاولات التحريف الاستعمارية',desc:'حاولت القوى الاستعمارية تشويه القرآن وترجمته بشكل مغلوط لتحريف معانيه. طبعوا مصاحف محرّفة ونشروا ترجمات مضللة. لكن يقظة العلماء المسلمين أفشلت كل هذه المحاولات.',verse:'إِنَّ الَّذِينَ كَفَرُوا يُنْفِقُونَ أَمْوَالَهُمْ لِيَصُدُّوا عَنْ سَبِيلِ اللَّهِ',verseRef:'الأنفال ٣٦',hadith:'لا تزال طائفة من أمتي ظاهرين على الحق — رواه مسلم',action:'كن واعياً بمحاولات التحريف وتحقق دائماً من مصادر الترجمات',young:'حاول بعض الناس تغيير القرآن لكنهم فشلوا لأن الله يحفظ كتابه! 🏴'},
    en:{title:'Colonial Distortion Attempts',desc:'Colonial powers attempted to distort the Quran by producing flawed translations to twist its meanings. They printed altered copies and spread misleading translations. But the vigilance of Muslim scholars defeated all these attempts.',verse:'Those who disbelieve spend their wealth to avert people from the way of Allah',verseRef:'Al-Anfal 36',hadith:'A group of my ummah will always be upon the truth — Muslim',action:'Be aware of distortion attempts and always verify translation sources',young:'Some people tried to change the Quran but they failed because Allah protects His Book! 🏴'},
    fr:{title:'Les Tentatives de Distorsion Coloniales',desc:'Les puissances coloniales ont tente de deformer le Coran en produisant des traductions erronees pour tordre ses significations. Ils ont imprime des copies alterees et repandu des traductions trompeuses. Mais la vigilance des savants musulmans a dejoue toutes ces tentatives.',verse:'Ceux qui ont mecru depensent leurs biens pour detourner du sentier d\'Allah',verseRef:'Al-Anfal 36',hadith:'Un groupe de ma communaute restera toujours sur la verite — Muslim',action:'Soyez conscient des tentatives de distorsion et verifiez toujours les sources de traduction',young:'Certains ont essaye de changer le Coran mais ils ont echoue car Allah protege Son Livre ! 🏴'}
  },
  {
    id:15, emoji:'💻',
    ar:{title:'الحفظ الرقمي',desc:'في العصر الحديث، أصبح القرآن محفوظاً رقمياً في ملايين الأجهزة والتطبيقات والمواقع. مشروع مصحف المدينة الرقمي ومشاريع أخرى تضمن دقة النص الرقمي. التكنولوجيا أضافت طبقة حماية جديدة.',verse:'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ',verseRef:'القمر ٢٢',hadith:'بلّغوا عني ولو آية — رواه البخاري',action:'حمّل تطبيقاً موثوقاً للقرآن واجعله رفيقك اليومي',young:'القرآن الآن موجود في الهواتف والحواسيب حتى يستطيع الجميع قراءته بسهولة! 💻'},
    en:{title:'Digital Preservation',desc:'In the modern era, the Quran is digitally preserved across millions of devices, apps, and websites. The Madinah Mushaf digital project and others ensure the accuracy of the digital text. Technology has added a new layer of protection.',verse:'And We have certainly made the Quran easy for remembrance, so is there any who will remember?',verseRef:'Al-Qamar 22',hadith:'Convey from me even if it is one verse — Bukhari',action:'Download a trusted Quran app and make it your daily companion',young:'The Quran is now on phones and computers so everyone can read it easily! 💻'},
    fr:{title:'La Preservation Numerique',desc:'A l\'ere moderne, le Coran est preserve numeriquement sur des millions d\'appareils, applications et sites web. Le projet numerique du Mushaf de Medine et d\'autres assurent la precision du texte numerique. La technologie a ajoute une nouvelle couche de protection.',verse:'Et Nous avons certes rendu le Coran facile pour le rappel. Y a-t-il quelqu\'un pour se rappeler ?',verseRef:'Al-Qamar 22',hadith:'Transmettez de ma part, meme un seul verset — Bukhari',action:'Telechargez une application coranique fiable et faites-en votre compagnon quotidien',young:'Le Coran est maintenant sur les telephones et les ordinateurs pour que tout le monde puisse le lire facilement ! 💻'}
  },
  {
    id:16, emoji:'🧠',
    ar:{title:'الحفظ حول العالم',desc:'يُقدَّر عدد حفّاظ القرآن في العالم بأكثر من عشرة ملايين. في كل بلد مسلم مدارس تحفيظ. حتى غير العرب يحفظون القرآن بالعربية. لا يوجد كتاب آخر يُحفظ بهذا الشكل في تاريخ البشرية.',verse:'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ',verseRef:'القمر ٣٢',hadith:'خيركم من تعلم القرآن وعلّمه — رواه البخاري',action:'ابدأ بحفظ جزء جديد من القرآن اليوم ولو آية واحدة',young:'أكثر من عشرة ملايين شخص في العالم يحفظون القرآن كاملاً عن ظهر قلب! 🧠'},
    en:{title:'Memorization Worldwide',desc:'The number of Quran memorizers worldwide is estimated at over ten million. Every Muslim country has memorization schools. Even non-Arabs memorize the Quran in Arabic. No other book in human history is memorized like this.',verse:'And We have certainly made the Quran easy for remembrance, so is there any who will remember?',verseRef:'Al-Qamar 32',hadith:'The best of you are those who learn the Quran and teach it — Bukhari',action:'Start memorizing a new portion of the Quran today, even if it is just one verse',young:'Over ten million people around the world memorize the entire Quran by heart! 🧠'},
    fr:{title:'La Memorisation dans le Monde',desc:'Le nombre de memorisateurs du Coran dans le monde est estime a plus de dix millions. Chaque pays musulman a des ecoles de memorisation. Meme les non-arabes memorisent le Coran en arabe. Aucun autre livre dans l\'histoire n\'est memorise ainsi.',verse:'Et Nous avons certes rendu le Coran facile pour le rappel. Y a-t-il quelqu\'un pour se rappeler ?',verseRef:'Al-Qamar 32',hadith:'Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et l\'enseignent — Bukhari',action:'Commencez a memoriser une nouvelle portion du Coran aujourd\'hui, meme un seul verset',young:'Plus de dix millions de personnes dans le monde memorisent le Coran entier par coeur ! 🧠'}
  },
  {
    id:17, emoji:'⚔️',
    ar:{title:'الهجمات الحديثة',desc:'لم تتوقف الهجمات على القرآن في العصر الحديث. من حرق المصاحف إلى الإساءة الرقمية إلى محاولات التشكيك الأكاديمية. يحتاج المسلمون لمعرفة هذه الهجمات والرد عليها بالعلم والحكمة.',verse:'وَلَنْ تَرْضَىٰ عَنْكَ الْيَهُودُ وَلَا النَّصَارَىٰ حَتَّىٰ تَتَّبِعَ مِلَّتَهُمْ',verseRef:'البقرة ١٢٠',hadith:'المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف — رواه مسلم',action:'تعلم كيف تدافع عن القرآن بالعلم والأدب لا بالعنف والتطرف',young:'بعض الناس يحاولون الإساءة للقرآن لكن المسلمين يدافعون عنه بالعلم والأخلاق! ⚔️'},
    en:{title:'Modern Attacks',desc:'Attacks on the Quran have not stopped in the modern era. From burning copies to digital abuse to academic doubt campaigns. Muslims need to know these attacks and respond with knowledge and wisdom.',verse:'And never will the Jews or the Christians approve of you until you follow their religion',verseRef:'Al-Baqarah 120',hadith:'The strong believer is better and more beloved to Allah than the weak believer — Muslim',action:'Learn how to defend the Quran with knowledge and good manners, not violence',young:'Some people try to attack the Quran but Muslims defend it with knowledge and good character! ⚔️'},
    fr:{title:'Les Attaques Modernes',desc:'Les attaques contre le Coran ne se sont pas arretees a l\'ere moderne. Des copies brulees aux abus numeriques aux campagnes de doute academiques. Les musulmans doivent connaitre ces attaques et y repondre avec science et sagesse.',verse:'Et jamais les Juifs ni les Chretiens ne seront satisfaits de toi jusqu\'a ce que tu suives leur religion',verseRef:'Al-Baqarah 120',hadith:'Le croyant fort est meilleur et plus aime d\'Allah que le croyant faible — Muslim',action:'Apprenez a defendre le Coran avec la science et les bonnes manieres, pas la violence',young:'Certains essaient d\'attaquer le Coran mais les musulmans le defendent avec la science et le bon caractere ! ⚔️'}
  },
  {
    id:18, emoji:'📊',
    ar:{title:'منهجية الرد الأكاديمي',desc:'يعتمد الرد على الشبهات على منهج علمي رصين: دراسة المخطوطات، علم الإسناد، مقارنة النصوص، والتحليل اللغوي. هذا المنهج أقوى وأنجع من الردود العاطفية.',verse:'قُلْ هَاتُوا بُرْهَانَكُمْ إِنْ كُنْتُمْ صَادِقِينَ',verseRef:'البقرة ١١١',hadith:'اطلبوا العلم ولو في الصين — حديث مشهور',action:'تعلم أساسيات منهج الرد العلمي على الشبهات حول القرآن',young:'العلماء يستخدمون العلم والأدلة للدفاع عن القرآن بطريقة ذكية ومنظمة! 📊'},
    en:{title:'Academic Response Methodology',desc:'Responding to doubts relies on a rigorous scientific method: manuscript study, chain of narration science, text comparison, and linguistic analysis. This method is stronger and more effective than emotional responses.',verse:'Say: Produce your proof, if you should be truthful',verseRef:'Al-Baqarah 111',hadith:'Seek knowledge even in China — Famous hadith',action:'Learn the basics of the scientific methodology for responding to doubts about the Quran',young:'Scholars use science and evidence to defend the Quran in a smart and organized way! 📊'},
    fr:{title:'Methodologie de Reponse Academique',desc:'Repondre aux doutes repose sur une methode scientifique rigoureuse : etude des manuscrits, science de la chaine de narration, comparaison de textes et analyse linguistique. Cette methode est plus forte et plus efficace que les reponses emotionnelles.',verse:'Dis : Apportez votre preuve, si vous etes veridiques',verseRef:'Al-Baqarah 111',hadith:'Cherchez la science meme en Chine — Hadith celebre',action:'Apprenez les bases de la methodologie scientifique pour repondre aux doutes sur le Coran',young:'Les savants utilisent la science et les preuves pour defendre le Coran de maniere intelligente et organisee ! 📊'}
  },
  {
    id:19, emoji:'🎓',
    ar:{title:'القرآن في التعليم',desc:'يُعدّ القرآن أساس المنهج التعليمي في الحضارة الإسلامية. من الكتاتيب إلى الجامعات، كان القرآن محور التعلم. حركة تحفيظ القرآن اليوم تستمر بقوة مع مناهج تعليمية حديثة.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'سجّل في حلقة تحفيظ أو ساهم في دعم مشاريع تعليم القرآن',young:'القرآن هو أول شيء يتعلمه أطفال المسلمين في المدارس منذ قديم الزمان! 🎓'},
    en:{title:'Quran in Education',desc:'The Quran is the foundation of the educational curriculum in Islamic civilization. From traditional schools to universities, the Quran was the center of learning. Today\'s memorization movement continues strongly with modern educational methods.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq 1',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Enroll in a Quran memorization circle or support Quran education projects',young:'The Quran is the first thing Muslim children learn in schools since ancient times! 🎓'},
    fr:{title:'Le Coran dans l\'Education',desc:'Le Coran est le fondement du programme educatif dans la civilisation islamique. Des ecoles traditionnelles aux universites, le Coran etait le centre de l\'apprentissage. Le mouvement de memorisation d\'aujourd\'hui continue fortement avec des methodes educatives modernes.',verse:'Lis au nom de ton Seigneur qui a cree',verseRef:'Al-Alaq 1',hadith:'Quiconque emprunte un chemin a la recherche du savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',action:'Inscrivez-vous dans un cercle de memorisation du Coran ou soutenez des projets d\'education coranique',young:'Le Coran est la premiere chose que les enfants musulmans apprennent a l\'ecole depuis les temps anciens ! 🎓'}
  },
  {
    id:20, emoji:'🌍',
    ar:{title:'الأهمية الأبدية',desc:'القرآن ليس كتاب تاريخ بل هو كتاب حياة لكل زمان ومكان. رسالته صالحة لكل عصر. معركة الدفاع عنه مستمرة وكل مسلم جندي في هذه المعركة بعلمه وأخلاقه وتمسكه بكتاب الله.',verse:'إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ',verseRef:'الإسراء ٩',hadith:'القرآن شافع مُشفَّع — رواه ابن حبان',action:'اجعل القرآن رفيقك اليومي: اقرأ، احفظ، تدبّر، وعلّم غيرك',young:'القرآن كتاب لكل الأزمان ولكل الناس — وحمايته مسؤولية كل مسلم! 🌍'},
    en:{title:'Eternal Relevance',desc:'The Quran is not a history book but a book of life for every time and place. Its message is valid for every era. The battle to defend it continues and every Muslim is a soldier in this battle through knowledge, character, and holding firm to the Book of Allah.',verse:'Indeed, this Quran guides to that which is most upright',verseRef:'Al-Isra 9',hadith:'The Quran is an intercessor whose intercession is accepted — Ibn Hibban',action:'Make the Quran your daily companion: read, memorize, reflect, and teach others',young:'The Quran is a book for all times and all people — and protecting it is every Muslim\'s responsibility! 🌍'},
    fr:{title:'La Pertinence Eternelle',desc:'Le Coran n\'est pas un livre d\'histoire mais un livre de vie pour chaque epoque et chaque lieu. Son message est valable pour chaque ere. La bataille pour le defendre continue et chaque musulman est un soldat dans cette bataille par la science et le bon caractere.',verse:'Certes, ce Coran guide vers ce qui est le plus droit',verseRef:'Al-Isra 9',hadith:'Le Coran est un intercesseur dont l\'intercession est acceptee — Ibn Hibban',action:'Faites du Coran votre compagnon quotidien : lisez, memorisez, reflechissez et enseignez aux autres',young:'Le Coran est un livre pour tous les temps et tous les peuples — et le proteger est la responsabilite de chaque musulman ! 🌍'}
  }
];

// ═══════════════ 15 QUIZ QUESTIONS ═══════════════
const QUIZ = [
  {
    ar:{q:'من أشار على أبي بكر بجمع القرآن بعد معركة اليمامة؟',opts:['علي بن أبي طالب','عمر بن الخطاب','عثمان بن عفان','زيد بن ثابت'],correct:1,hint:'هو الخليفة الثاني',quran:'الحجر ٩'},
    en:{q:'Who suggested to Abu Bakr to compile the Quran after the Battle of Yamama?',opts:['Ali ibn Abi Talib','Umar ibn al-Khattab','Uthman ibn Affan','Zayd ibn Thabit'],correct:1,hint:'He was the second Caliph',quran:'Al-Hijr 9'},
    fr:{q:'Qui a suggere a Abu Bakr de compiler le Coran apres la bataille de Yamama ?',opts:['Ali ibn Abi Talib','Umar ibn al-Khattab','Uthman ibn Affan','Zayd ibn Thabit'],correct:1,hint:'Il etait le deuxieme calife',quran:'Al-Hijr 9'}
  },
  {
    ar:{q:'من كُلّف بجمع القرآن في عهد أبي بكر؟',opts:['أُبي بن كعب','عبدالله بن مسعود','زيد بن ثابت','عمر بن الخطاب'],correct:2,hint:'كان كاتب الوحي الرئيسي',quran:'الحجر ٩'},
    en:{q:'Who was tasked with compiling the Quran under Abu Bakr?',opts:['Ubay ibn Kaab','Abdullah ibn Masud','Zayd ibn Thabit','Umar ibn al-Khattab'],correct:2,hint:'He was the chief scribe of revelation',quran:'Al-Hijr 9'},
    fr:{q:'Qui a ete charge de compiler le Coran sous Abu Bakr ?',opts:['Ubay ibn Kaab','Abdullah ibn Masud','Zayd ibn Thabit','Umar ibn al-Khattab'],correct:2,hint:'Il etait le scribe principal de la revelation',quran:'Al-Hijr 9'}
  },
  {
    ar:{q:'أكمل الآية: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ ..."',opts:['لَمُنْزِلُونَ','لَحَافِظُونَ','لَنَاشِرُونَ','لَمُبَيِّنُونَ'],correct:1,hint:'هذه آية حفظ القرآن الشهيرة',quran:'الحجر ٩'},
    en:{q:'Complete the verse: "Indeed, it is We who sent down the reminder, and indeed We will be its..."',opts:['Revealers','Guardians','Spreaders','Explainers'],correct:1,hint:'This is the famous verse about Quran preservation',quran:'Al-Hijr 9'},
    fr:{q:'Completez le verset : « C\'est Nous qui avons fait descendre le Rappel et c\'est Nous qui en sommes les... »',opts:['Revelateurs','Gardiens','Diffuseurs','Explicateurs'],correct:1,hint:'C\'est le fameux verset sur la preservation du Coran',quran:'Al-Hijr 9'}
  },
  {
    ar:{q:'في عهد أي خليفة تم توحيد المصاحف؟',opts:['أبو بكر الصديق','عمر بن الخطاب','عثمان بن عفان','علي بن أبي طالب'],correct:2,hint:'يُنسب إليه المصحف الشريف',quran:'القمر ١٧'},
    en:{q:'Under which Caliph were the Quran manuscripts unified?',opts:['Abu Bakr','Umar ibn al-Khattab','Uthman ibn Affan','Ali ibn Abi Talib'],correct:2,hint:'The standard codex is attributed to him',quran:'Al-Qamar 17'},
    fr:{q:'Sous quel calife les manuscrits du Coran ont-ils ete unifies ?',opts:['Abu Bakr','Umar ibn al-Khattab','Uthman ibn Affan','Ali ibn Abi Talib'],correct:2,hint:'Le codex standard lui est attribue',quran:'Al-Qamar 17'}
  },
  {
    ar:{q:'كم عدد القراءات القرآنية المتواترة الأساسية؟',opts:['ثلاث','خمس','سبع','عشر'],correct:2,hint:'هذا العدد ورد في حديث الأحرف السبعة',quran:'الكهف ٥٤'},
    en:{q:'How many main mutawatir Quran readings are there?',opts:['Three','Five','Seven','Ten'],correct:2,hint:'This number is mentioned in the hadith of seven modes',quran:'Al-Kahf 54'},
    fr:{q:'Combien y a-t-il de lectures coraniques mutawatir principales ?',opts:['Trois','Cinq','Sept','Dix'],correct:2,hint:'Ce nombre est mentionne dans le hadith des sept modes',quran:'Al-Kahf 54'}
  },
  {
    ar:{q:'أين اكتُشفت مخطوطة برمنغهام القرآنية؟',opts:['في مسجد','في جامعة برمنغهام','في متحف لندن','في مكتبة باريس'],correct:1,hint:'اكتُشفت في مكتبة جامعية بريطانية',quran:'ق ١'},
    en:{q:'Where was the Birmingham Quran manuscript discovered?',opts:['In a mosque','At the University of Birmingham','In the London Museum','In the Paris Library'],correct:1,hint:'It was discovered in a British university library',quran:'Qaf 1'},
    fr:{q:'Ou le manuscrit coranique de Birmingham a-t-il ete decouvert ?',opts:['Dans une mosquee','A l\'Universite de Birmingham','Au Musee de Londres','A la Bibliotheque de Paris'],correct:1,hint:'Il a ete decouvert dans une bibliotheque universitaire britannique',quran:'Qaf 1'}
  },
  {
    ar:{q:'في أي عام اكتُشفت مخطوطات صنعاء؟',opts:['١٩٤٥','١٩٦٠','١٩٧٢','١٩٩٠'],correct:2,hint:'اكتُشفت أثناء ترميم الجامع الكبير بصنعاء',quran:'هود ١'},
    en:{q:'In what year were the Sanaa manuscripts discovered?',opts:['1945','1960','1972','1990'],correct:2,hint:'They were discovered during renovation of the Great Mosque of Sanaa',quran:'Hud 1'},
    fr:{q:'En quelle annee les manuscrits de Sanaa ont-ils ete decouverts ?',opts:['1945','1960','1972','1990'],correct:2,hint:'Ils ont ete decouverts lors de la renovation de la Grande Mosquee de Sanaa',quran:'Hud 1'}
  },
  {
    ar:{q:'ما أول سورة نزلت في القرآن الكريم؟',opts:['الفاتحة','البقرة','العلق','المدثر'],correct:2,hint:'أول آية فيها أمر بالقراءة',quran:'العلق ١'},
    en:{q:'What is the first surah revealed in the Quran?',opts:['Al-Fatiha','Al-Baqarah','Al-Alaq','Al-Muddathir'],correct:2,hint:'Its first verse is a command to read',quran:'Al-Alaq 1'},
    fr:{q:'Quelle est la premiere sourate revelee dans le Coran ?',opts:['Al-Fatiha','Al-Baqarah','Al-Alaq','Al-Muddathir'],correct:2,hint:'Son premier verset est un ordre de lire',quran:'Al-Alaq 1'}
  },
  {
    ar:{q:'كم عدد سور القرآن الكريم؟',opts:['١٠٠','١١٠','١١٤','١٢٠'],correct:2,hint:'أكثر من ١١٠ وأقل من ١٢٠',quran:'الحجر ٨٧'},
    en:{q:'How many surahs are in the Quran?',opts:['100','110','114','120'],correct:2,hint:'More than 110 and less than 120',quran:'Al-Hijr 87'},
    fr:{q:'Combien de sourates y a-t-il dans le Coran ?',opts:['100','110','114','120'],correct:2,hint:'Plus de 110 et moins de 120',quran:'Al-Hijr 87'}
  },
  {
    ar:{q:'ما المقصود بالإعجاز اللغوي للقرآن؟',opts:['كثرة الكلمات','عدم قدرة أحد على الإتيان بمثله','صعوبة الفهم','طول السور'],correct:1,hint:'تحدى القرآن البشر بسورة واحدة',quran:'الإسراء ٨٨'},
    en:{q:'What does the linguistic miracle of the Quran mean?',opts:['Many words','No one can produce anything like it','Difficult to understand','Long chapters'],correct:1,hint:'The Quran challenged humans with just one chapter',quran:'Al-Isra 88'},
    fr:{q:'Que signifie le miracle linguistique du Coran ?',opts:['Beaucoup de mots','Personne ne peut produire quelque chose de semblable','Difficile a comprendre','Longs chapitres'],correct:1,hint:'Le Coran a defie les humains avec un seul chapitre',quran:'Al-Isra 88'}
  },
  {
    ar:{q:'أي معركة تاريخية ذكر القرآن نتيجتها قبل حدوثها؟',opts:['بدر','أحد','معركة الروم والفرس','حنين'],correct:2,hint:'ذُكرت في سورة الروم',quran:'الروم ٢-٣'},
    en:{q:'Which historical battle did the Quran predict the outcome of before it happened?',opts:['Badr','Uhud','The Roman-Persian war','Hunayn'],correct:2,hint:'It is mentioned in Surah Ar-Rum',quran:'Ar-Rum 2-3'},
    fr:{q:'Quelle bataille historique le Coran a-t-il predit le resultat avant qu\'elle ne se produise ?',opts:['Badr','Uhud','La guerre romano-perse','Hunayn'],correct:2,hint:'Elle est mentionnee dans la Sourate Ar-Rum',quran:'Ar-Rum 2-3'}
  },
  {
    ar:{q:'كم يُقدَّر عدد حفّاظ القرآن في العالم اليوم؟',opts:['مليون','خمسة ملايين','أكثر من عشرة ملايين','مئة ألف'],correct:2,hint:'رقم كبير جداً يتجاوز الملايين',quran:'القمر ٣٢'},
    en:{q:'How many Quran memorizers are estimated in the world today?',opts:['One million','Five million','Over ten million','One hundred thousand'],correct:2,hint:'A very large number exceeding millions',quran:'Al-Qamar 32'},
    fr:{q:'Combien de memorisateurs du Coran estime-t-on dans le monde aujourd\'hui ?',opts:['Un million','Cinq millions','Plus de dix millions','Cent mille'],correct:2,hint:'Un tres grand nombre depassant les millions',quran:'Al-Qamar 32'}
  },
  {
    ar:{q:'ما المنهج الأفضل للرد على الشبهات حول القرآن؟',opts:['الغضب والعنف','التجاهل التام','العلم والحجة والأدب','السخرية والاستهزاء'],correct:2,hint:'القرآن نفسه يأمر بالحوار بالحكمة',quran:'البقرة ١١١'},
    en:{q:'What is the best method to respond to doubts about the Quran?',opts:['Anger and violence','Complete ignorance','Knowledge, evidence, and good manners','Mockery and ridicule'],correct:2,hint:'The Quran itself commands dialogue with wisdom',quran:'Al-Baqarah 111'},
    fr:{q:'Quelle est la meilleure methode pour repondre aux doutes sur le Coran ?',opts:['La colere et la violence','L\'ignorance totale','La science, les preuves et les bonnes manieres','La moquerie et le ridicule'],correct:2,hint:'Le Coran lui-meme ordonne le dialogue avec sagesse',quran:'Al-Baqarah 111'}
  },
  {
    ar:{q:'أكمل الحديث: "خيركم من تعلم القرآن و..."',opts:['حفظه','فهمه','علّمه','كتبه'],correct:2,hint:'نشر العلم من أعظم الأعمال',quran:'البقرة ١٥١'},
    en:{q:'Complete the hadith: "The best of you are those who learn the Quran and..."',opts:['Memorize it','Understand it','Teach it','Write it'],correct:2,hint:'Spreading knowledge is one of the greatest deeds',quran:'Al-Baqarah 151'},
    fr:{q:'Completez le hadith : « Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et... »',opts:['Le memorisent','Le comprennent','L\'enseignent','L\'ecrivent'],correct:2,hint:'Repandre la science est l\'un des plus grands actes',quran:'Al-Baqarah 151'}
  },
  {
    ar:{q:'ما الآية الأولى التي نزلت على النبي ﷺ؟',opts:['بسم الله الرحمن الرحيم','اقرأ باسم ربك الذي خلق','الحمد لله رب العالمين','قل هو الله أحد'],correct:1,hint:'أول أمر إلهي كان بالقراءة',quran:'العلق ١'},
    en:{q:'What was the first verse revealed to the Prophet (PBUH)?',opts:['In the name of Allah, the Merciful','Read in the name of your Lord who created','Praise be to Allah, Lord of the worlds','Say: He is Allah, the One'],correct:1,hint:'The first divine command was to read',quran:'Al-Alaq 1'},
    fr:{q:'Quel fut le premier verset revele au Prophete (PSL) ?',opts:['Au nom d\'Allah, le Misericordieux','Lis au nom de ton Seigneur qui a cree','Louange a Allah, Seigneur des mondes','Dis : Il est Allah, l\'Unique'],correct:1,hint:'Le premier ordre divin etait de lire',quran:'Al-Alaq 1'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء قبل قراءة القرآن',text:'اللَّهُمَّ افْتَحْ عَلَيَّ حِكْمَتَكَ وَانْشُرْ عَلَيَّ رَحْمَتَكَ وَذَكِّرْنِي مَا نَسِيتُ',tr:'دعاء مأثور'},
    en:{label:'Dua Before Reading Quran',text:'اللَّهُمَّ افْتَحْ عَلَيَّ حِكْمَتَكَ وَانْشُرْ عَلَيَّ رَحْمَتَكَ وَذَكِّرْنِي مَا نَسِيتُ',tr:'O Allah, open for me Your wisdom and spread over me Your mercy and remind me of what I have forgotten'},
    fr:{label:'Dua Avant la Lecture du Coran',text:'اللَّهُمَّ افْتَحْ عَلَيَّ حِكْمَتَكَ وَانْشُرْ عَلَيَّ رَحْمَتَكَ وَذَكِّرْنِي مَا نَسِيتُ',tr:'O Allah, ouvre-moi Ta sagesse et repands sur moi Ta misericorde et rappelle-moi ce que j\'ai oublie'} },
  { ar:{label:'دعاء حفظ القرآن',text:'اللَّهُمَّ ارْحَمْنِي بِالقُرْآنِ وَاجْعَلْهُ لِي إِمَاماً وَنُوراً وَهُدىً وَرَحْمَةً',tr:'دعاء مأثور'},
    en:{label:'Dua for Quran Memorization',text:'اللَّهُمَّ ارْحَمْنِي بِالقُرْآنِ وَاجْعَلْهُ لِي إِمَاماً وَنُوراً وَهُدىً وَرَحْمَةً',tr:'O Allah, have mercy on me through the Quran and make it for me a guide, a light, guidance and mercy'},
    fr:{label:'Dua pour la Memorisation du Coran',text:'اللَّهُمَّ ارْحَمْنِي بِالقُرْآنِ وَاجْعَلْهُ لِي إِمَاماً وَنُوراً وَهُدىً وَرَحْمَةً',tr:'O Allah, aie misericorde de moi par le Coran et fais-en pour moi un guide, une lumiere et une misericorde'} },
  { ar:{label:'دعاء التدبر',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',tr:'طه ٢٥-٢٨'},
    en:{label:'Dua for Understanding',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',tr:'My Lord, expand my chest, ease my task, and untie the knot from my tongue — Taha 25-28'},
    fr:{label:'Dua pour la Comprehension',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',tr:'Mon Seigneur, ouvre-moi la poitrine, facilite-moi ma tache et denoue le noeud de ma langue — Taha 25-28'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء النور',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُوراً وَفِي بَصَرِي نُوراً وَفِي سَمْعِي نُوراً',tr:'متفق عليه'},
    en:{label:'Dua for Light',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُوراً وَفِي بَصَرِي نُوراً وَفِي سَمْعِي نُوراً',tr:'O Allah, place light in my heart, light in my sight, and light in my hearing — Agreed upon'},
    fr:{label:'Dua pour la Lumiere',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُوراً وَفِي بَصَرِي نُوراً وَفِي سَمْعِي نُوراً',tr:'O Allah, mets de la lumiere dans mon coeur, dans ma vue et dans mon ouie — Unanimement reconnu'} },
  { ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'رواه مسلم'},
    en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Allah, guide me and make me steadfast — Muslim'},
    fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Allah, guide-moi et affermis-moi — Muslim'} },
  { ar:{label:'دعاء الحفظ من النسيان',text:'اللَّهُمَّ ذَكِّرْنِي مِنْهُ مَا نَسِيتُ وَعَلِّمْنِي مِنْهُ مَا جَهِلْتُ',tr:'دعاء مأثور'},
    en:{label:'Dua Against Forgetting',text:'اللَّهُمَّ ذَكِّرْنِي مِنْهُ مَا نَسِيتُ وَعَلِّمْنِي مِنْهُ مَا جَهِلْتُ',tr:'O Allah, remind me of what I have forgotten from it and teach me what I did not know of it'},
    fr:{label:'Dua Contre l\'Oubli',text:'اللَّهُمَّ ذَكِّرْنِي مِنْهُ مَا نَسِيتُ وَعَلِّمْنِي مِنْهُ مَا جَهِلْتُ',tr:'O Allah, rappelle-moi ce que j\'ai oublie et enseigne-moi ce que j\'ignorais'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor which You have bestowed upon me — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier pour Tes bienfaits — An-Naml 19'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'mushaf-xp';
const BADGES_KEY = 'mushaf-badges';
const READ_KEY = 'mushaf-read';
const STREAK_KEY = 'mushaf-streak';
const MODE_KEY = 'mushaf-mode';
const QUIZ_BEST_KEY = 'mushaf-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) {
  const read = getReadCards();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentCardIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabCards'); if(_e) _e.textContent=t.tabCards; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=document.getElementById('cardsTitle'); if(_e) _e.textContent=t.cardsTitle; }
  { const _e=document.getElementById('cardsDesc'); if(_e) _e.textContent=t.cardsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  // Render sections
  renderHome();
  renderCards();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const card = CARDS[dayIdx];
  const d = card[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${card.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`;
  // Grid
  (document.getElementById('homeGrid')||{}).innerHTML= CARDS.map(c => {
    const dd = c[lang];
    return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')">
      <span class="hc-icon">${c.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const readCards = getReadCards();
  const container = document.getElementById('cardsContainer');
  if (!container) return;
  // Search bar
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`;
  container.innerHTML = searchHTML + CARDS.map(c => {
    const d = c[lang];
    const isRead = readCards.includes(c.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}">
      <div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})">
        <span class="trait-num">${c.id}</span>
        <span class="trait-emoji">${c.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterCards(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareCard(id) {
  const card = CARDS.find(c => c.id === id);
  if (!card) return;
  const d = card[lang];
  const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  // Save best score
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20); // bonus for completing
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readCards = getReadCards();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  // Quick update if progress panel is visible
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«معركة المصحف في العالم الإسلامي» كتاب يتناول تاريخ حفظ القرآن الكريم والمعارك الفكرية التي خاضها المسلمون دفاعاً عنه. يستعرض الشيخ الغزالي محاولات التشكيك الاستشراقية والاستعمارية ويردّ عليها بالحجة العلمية، مؤكداً أن القرآن محفوظ بوعد إلهي.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "معركة المصحف في العالم الإسلامي" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending Islam with knowledge.',
      bookTitle: 'About the Book',
      bookDesc: '"Battle of the Quran in the Islamic World" addresses the history of Quran preservation and the intellectual battles Muslims fought to defend it. Sheikh al-Ghazali reviews Orientalist and colonial attempts to cast doubt and responds with scientific evidence, affirming the Quran is preserved by divine promise.',
      sourcesTitle: 'Sources',
      sources: ['"Battle of the Quran in the Islamic World" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"La Bataille du Coran dans le Monde Islamique" aborde l\'histoire de la preservation du Coran et les batailles intellectuelles que les musulmans ont menees pour le defendre. Le Sheikh al-Ghazali examine les tentatives orientalistes et coloniales et y repond avec des preuves scientifiques.',
      sourcesTitle: 'Sources',
      sources: ['"La Bataille du Coran dans le Monde Islamique" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "معركة المصحف في العالم الإسلامي" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/marakah-al-mushaf'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Battle of the Quran in the Islamic World" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 cards, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/marakah-al-mushaf'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"La Bataille du Coran dans le Monde Islamique" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 cartes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/marakah-al-mushaf'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء عند قراءة القرآن','⭐ أكمل ٢٠ بطاقة لتصبح خبيراً'],
    en: ['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua when reading Quran','⭐ Complete all 20 cards to become an Expert'],
    fr: ['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas en lisant le Coran','⭐ Completez les 20 cartes pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  // Re-init scroll reveal
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-cards');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentCardIdx = Math.max(0, Math.min(cards.length-1, currentCardIdx+dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','cards','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  // Set age mode class
  document.body.classList.toggle('young-mode', ageMode === 'young');
  // Update streak
  updateStreak();
  // Init
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
