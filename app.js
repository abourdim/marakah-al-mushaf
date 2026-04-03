/* معركة المصحف في العالم الإسلامي — BATTLE OF THE QURAN — app.js */
/* Based on "Ma'rakat al-Mushaf" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'معركة المصحف',
    splashSub: 'الدفاع عن القرآن الكريم عبر التاريخ',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الحجر ١٥: ٩',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabTimeline: 'التاريخ',
    tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات المعرفة',
    cardsDesc: '٢٠ بطاقة تكشف محاولات تحريف القرآن وكيف حفظه الله',
    timelineTitle: 'خط زمني',
    timelineDesc: 'مراحل الدفاع عن المصحف عبر القرون',
    quizTitle: 'اختبر معلوماتك',
    quizDesc: 'هل تعرف تاريخ الدفاع عن القرآن؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ حكمة اليوم',
    quizAgain: 'أعد الاختبار',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    splashFeatures: [
      '٢٠ بطاقة عن الدفاع عن القرآن',
      'خط زمني تاريخي',
      'اختبار معلوماتك',
      'ثلاث لغات + ثلاثة أنماط'
    ],
  },
  en: {
    appTitle: 'Battle of the Quran',
    splashSub: 'Defending the Holy Quran throughout history',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Hijr 15:9',
    tabHome: 'Home', tabCards: 'Cards', tabTimeline: 'Timeline',
    tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Knowledge Cards',
    cardsDesc: '20 cards revealing attacks on the Quran and how God preserved it',
    timelineTitle: 'Timeline',
    timelineDesc: 'Stages of defending the Quran across centuries',
    quizTitle: 'Test Your Knowledge',
    quizDesc: 'How well do you know the history of Quran preservation?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Wisdom',
    quizAgain: 'Retake Quiz',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    splashFeatures: [
      '20 cards on defending the Quran',
      'Historical timeline',
      'Test your knowledge',
      'Three languages + three themes'
    ],
  },
  fr: {
    appTitle: 'La Bataille du Coran',
    splashSub: 'La defense du Saint Coran a travers l\'histoire',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Hijr 15:9',
    tabHome: 'Accueil', tabCards: 'Cartes', tabTimeline: 'Chronologie',
    tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Cartes de Connaissance',
    cardsDesc: '20 cartes revelant les attaques contre le Coran et comment Dieu l\'a preserve',
    timelineTitle: 'Chronologie',
    timelineDesc: 'Les etapes de la defense du Coran a travers les siecles',
    quizTitle: 'Testez Vos Connaissances',
    quizDesc: 'Connaissez-vous l\'histoire de la preservation du Coran ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas',
    submitQuiz: 'Voir les Resultats',
    dailyLabel: '✨ Sagesse du Jour',
    quizAgain: 'Refaire le Quiz',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    splashFeatures: [
      '20 cartes sur la defense du Coran',
      'Chronologie historique',
      'Testez vos connaissances',
      'Trois langues + trois themes'
    ],
  }
};

// ═══════════════ CARDS DATA (20 cards) ═══════════════
const CARDS = [
  {
    id:1, emoji:'📖',
    ar:{title:'حفظ القرآن بالوعد الإلهي',desc:'الله تعالى تكفّل بحفظ القرآن من التحريف والتبديل. هذا الوعد الإلهي هو الأساس الذي يطمئن كل مسلم. لم يحظَ كتاب في التاريخ بمثل هذا الضمان الرباني.',verse:'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',action:'تأمل في عظمة هذا الوعد الإلهي وكيف تحقق عبر ١٤ قرناً'},
    en:{title:'Divine Promise of Preservation',desc:'God Himself guaranteed the preservation of the Quran from corruption and alteration. This divine promise is the foundation that reassures every Muslim. No book in history has received such a divine guarantee.',verse:'Indeed, it is We who sent down the reminder, and indeed, We will be its guardian',action:'Reflect on the greatness of this divine promise and how it has been fulfilled over 14 centuries'},
    fr:{title:'Promesse Divine de Preservation',desc:'Dieu Lui-meme a garanti la preservation du Coran contre toute corruption et alteration. Cette promesse divine est le fondement qui rassure chaque musulman.',verse:'C\'est Nous qui avons fait descendre le Rappel et c\'est Nous qui en sommes les gardiens',action:'Reflechissez a la grandeur de cette promesse divine et comment elle s\'est realisee en 14 siecles'}
  },
  {
    id:2, emoji:'🛡️',
    ar:{title:'جمع القرآن في عهد أبي بكر',desc:'بعد معركة اليمامة واستشهاد كثير من حفّاظ القرآن، أشار عمر على أبي بكر بجمع القرآن في مصحف واحد. كُلّف زيد بن ثابت بهذه المهمة العظيمة.',verse:'',action:'ابحث عن قصة جمع القرآن وشروط زيد بن ثابت الدقيقة في التوثيق'},
    en:{title:'Compilation Under Abu Bakr',desc:'After the Battle of Yamama and the martyrdom of many Quran memorizers, Umar suggested to Abu Bakr to compile the Quran in one manuscript. Zayd ibn Thabit was entrusted with this great task.',verse:'',action:'Research the story of the Quran compilation and Zayd ibn Thabit\'s strict verification methods'},
    fr:{title:'Compilation sous Abu Bakr',desc:'Apres la bataille de Yamama et le martyre de nombreux memorisateurs du Coran, Omar suggera a Abu Bakr de compiler le Coran en un seul manuscrit. Zayd ibn Thabit fut charge de cette grande tache.',verse:'',action:'Recherchez l\'histoire de la compilation du Coran et les methodes de verification de Zayd ibn Thabit'}
  },
  {
    id:3, emoji:'📜',
    ar:{title:'توحيد المصاحف في عهد عثمان',desc:'عندما اختلف المسلمون في القراءات، أمر عثمان بن عفان بنسخ مصاحف موحدة وإرسالها إلى الأمصار. هذا العمل حفظ وحدة النص القرآني إلى يومنا.',verse:'',action:'تعرّف على المصاحف العثمانية الباقية في المتاحف حول العالم'},
    en:{title:'Standardization Under Uthman',desc:'When Muslims differed in recitations, Uthman ibn Affan ordered the copying of standardized manuscripts and sent them to major cities. This work preserved the unity of the Quranic text to this day.',verse:'',action:'Learn about the surviving Uthmanic manuscripts in museums around the world'},
    fr:{title:'Standardisation sous Uthman',desc:'Quand les musulmans divergerent dans les recitations, Uthman ibn Affan ordonna la copie de manuscrits standardises et les envoya aux grandes villes. Ce travail a preserve l\'unite du texte coranique.',verse:'',action:'Decouvrez les manuscrits uthmaniques survivants dans les musees du monde'}
  },
  {
    id:4, emoji:'⚔️',
    ar:{title:'الحروب الصليبية والقرآن',desc:'خلال الحروب الصليبية، حاول الغزاة تدمير المصاحف وتشويه صورة الإسلام. لكن القرآن بقي محفوظاً في صدور الحفّاظ وفي النسخ المكتوبة المنتشرة في كل مكان.',verse:'',action:'اقرأ عن كيف حافظ المسلمون على المصاحف أثناء الحروب الصليبية'},
    en:{title:'The Crusades and the Quran',desc:'During the Crusades, invaders attempted to destroy Quran copies and distort Islam\'s image. But the Quran remained preserved in the hearts of memorizers and in written copies spread everywhere.',verse:'',action:'Read about how Muslims preserved Quran copies during the Crusades'},
    fr:{title:'Les Croisades et le Coran',desc:'Pendant les Croisades, les envahisseurs tenterent de detruire les copies du Coran et de deformer l\'image de l\'Islam. Mais le Coran resta preserve dans les coeurs des memorisateurs et dans les copies ecrites.',verse:'',action:'Lisez comment les musulmans ont preserve les copies du Coran pendant les Croisades'}
  },
  {
    id:5, emoji:'🔬',
    ar:{title:'المستشرقون والطعن في القرآن',desc:'حاول كثير من المستشرقين التشكيك في أصالة القرآن وزعموا أنه من تأليف النبي. لكن الدراسات العلمية المنصفة أثبتت استحالة ذلك بالأدلة اللغوية والتاريخية.',verse:'أَمْ يَقُولُونَ افْتَرَاهُ قُلْ فَأْتُوا بِسُورَةٍ مِّثْلِهِ',action:'تعرّف على أشهر الشبهات المستشرقية والردود العلمية عليها'},
    en:{title:'Orientalists and Quran Criticism',desc:'Many orientalists tried to question the Quran\'s authenticity, claiming it was authored by the Prophet. But fair scholarly studies proved this impossible through linguistic and historical evidence.',verse:'Or do they say he invented it? Say: Then produce a chapter like it',action:'Learn about the most famous orientalist doubts and the scholarly responses to them'},
    fr:{title:'Les Orientalistes et la Critique du Coran',desc:'De nombreux orientalistes ont tente de remettre en question l\'authenticite du Coran, pretendant qu\'il etait l\'oeuvre du Prophete. Mais les etudes scientifiques equitables ont prouve l\'impossibilite de cela.',verse:'Ou bien disent-ils qu\'il l\'a invente ? Dis : Apportez donc une sourate semblable',action:'Decouvrez les doutes orientalistes les plus celebres et les reponses scientifiques'}
  },
  {
    id:6, emoji:'🌍',
    ar:{title:'الاستعمار وحرب الهوية',desc:'استخدم الاستعمار الغربي أساليب متعددة لإبعاد المسلمين عن القرآن: من تغيير المناهج التعليمية إلى تشجيع العلمانية المتطرفة. الهدف كان فصل المسلم عن كتابه.',verse:'',action:'فكّر في كيف يؤثر الاستعمار الثقافي على علاقة المسلمين بالقرآن اليوم'},
    en:{title:'Colonialism and Identity War',desc:'Western colonialism used multiple methods to distance Muslims from the Quran: from changing educational curricula to promoting extreme secularism. The goal was to separate Muslims from their Book.',verse:'',action:'Think about how cultural colonialism affects Muslims\' relationship with the Quran today'},
    fr:{title:'Le Colonialisme et la Guerre d\'Identite',desc:'Le colonialisme occidental a utilise de multiples methodes pour eloigner les musulmans du Coran : du changement des programmes educatifs a la promotion d\'un secularisme extreme.',verse:'',action:'Reflechissez a l\'impact du colonialisme culturel sur la relation des musulmans avec le Coran'}
  },
  {
    id:7, emoji:'📚',
    ar:{title:'علم القراءات: ثراء لا اختلاف',desc:'القراءات القرآنية العشر ليست اختلافاً بل ثراء لغوي وتشريعي. كل قراءة متواترة بسند صحيح إلى النبي. هذا التنوع يُثبت حفظ القرآن لا ينقضه.',verse:'',action:'استمع إلى قراءات مختلفة لنفس الآية وتأمل في جمال التنوع'},
    en:{title:'Qiraat: Richness Not Contradiction',desc:'The ten Quranic readings are not contradictions but linguistic and legislative richness. Each reading has an authentic chain back to the Prophet. This diversity proves the Quran\'s preservation.',verse:'',action:'Listen to different readings of the same verse and appreciate the beauty of diversity'},
    fr:{title:'Les Qiraat : Richesse et Non Contradiction',desc:'Les dix lectures coraniques ne sont pas des contradictions mais une richesse linguistique et legislative. Chaque lecture a une chaine authentique remontant au Prophete.',verse:'',action:'Ecoutez differentes lectures du meme verset et appreciez la beaute de la diversite'}
  },
  {
    id:8, emoji:'💡',
    ar:{title:'الإعجاز العلمي في القرآن',desc:'يحتوي القرآن على إشارات علمية لم يكتشفها البشر إلا في العصر الحديث. هذا دليل على أنه ليس من تأليف بشر عاش في القرن السابع.',verse:'سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ',action:'ابحث عن مثال واحد للإعجاز العلمي في القرآن وشاركه مع أصدقائك'},
    en:{title:'Scientific Miracles in the Quran',desc:'The Quran contains scientific references that humans only discovered in modern times. This is evidence that it was not authored by a human living in the 7th century.',verse:'We will show them Our signs in the horizons and within themselves',action:'Find one example of a scientific miracle in the Quran and share it with friends'},
    fr:{title:'Miracles Scientifiques dans le Coran',desc:'Le Coran contient des references scientifiques que les humains n\'ont decouvertes qu\'a l\'ere moderne. C\'est la preuve qu\'il n\'a pas ete ecrit par un humain du 7e siecle.',verse:'Nous leur montrerons Nos signes dans les horizons et en eux-memes',action:'Trouvez un exemple de miracle scientifique dans le Coran et partagez-le'}
  },
  {
    id:9, emoji:'🎯',
    ar:{title:'تحدي الإتيان بمثله',desc:'تحدّى القرآن العرب — أبلغ الناس — أن يأتوا بسورة واحدة مثله. مضى ١٤ قرناً ولم يستطع أحد. هذا التحدي المفتوح دليل قاطع على مصدره الإلهي.',verse:'وَإِن كُنتُمْ فِي رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا بِسُورَةٍ مِّن مِّثْلِهِ',action:'تأمل في هذا التحدي المفتوح منذ ١٤ قرناً — لماذا لم ينجح أحد؟'},
    en:{title:'The Challenge to Produce Its Like',desc:'The Quran challenged the Arabs — the most eloquent of people — to produce even one chapter like it. 14 centuries have passed and no one has succeeded. This open challenge is definitive proof of its divine source.',verse:'And if you are in doubt about what We have sent down upon Our servant, then produce a chapter the like thereof',action:'Reflect on this open challenge spanning 14 centuries — why has no one succeeded?'},
    fr:{title:'Le Defi de Produire Son Equivalent',desc:'Le Coran a defie les Arabes — les plus eloquents des hommes — de produire ne serait-ce qu\'une sourate similaire. 14 siecles ont passe et personne n\'a reussi.',verse:'Si vous avez un doute sur ce que Nous avons revele a Notre serviteur, apportez donc une sourate semblable',action:'Reflechissez a ce defi ouvert depuis 14 siecles — pourquoi personne n\'a reussi ?'}
  },
  {
    id:10, emoji:'🏛️',
    ar:{title:'مخطوطات صنعاء القديمة',desc:'اكتُشفت مخطوطات قرآنية قديمة جداً في الجامع الكبير بصنعاء. أثبتت الدراسات أنها تطابق المصحف الذي بين أيدينا اليوم، مما يدحض ادعاءات التحريف.',verse:'',action:'ابحث عن مخطوطات صنعاء وبرمنغهام وكيف أثبتت حفظ القرآن'},
    en:{title:'Ancient Sanaa Manuscripts',desc:'Very old Quranic manuscripts were discovered in the Grand Mosque of Sanaa. Studies proved they match the Quran we have today, refuting claims of corruption.',verse:'',action:'Research the Sanaa and Birmingham manuscripts and how they proved Quran preservation'},
    fr:{title:'Les Manuscrits Anciens de Sanaa',desc:'De tres anciens manuscrits coraniques ont ete decouverts dans la Grande Mosquee de Sanaa. Les etudes ont prouve qu\'ils correspondent au Coran que nous avons aujourd\'hui.',verse:'',action:'Recherchez les manuscrits de Sanaa et de Birmingham et comment ils ont prouve la preservation du Coran'}
  },
  {
    id:11, emoji:'🧠',
    ar:{title:'الحفظ في الصدور',desc:'الطريقة الأولى لحفظ القرآن هي الحفظ في الصدور. ملايين المسلمين يحفظون القرآن كاملاً عن ظهر قلب في كل عصر. لا يوجد كتاب آخر في التاريخ يُحفظ بهذه الطريقة.',verse:'بَلْ هُوَ آيَاتٌ بَيِّنَاتٌ فِي صُدُورِ الَّذِينَ أُوتُوا الْعِلْمَ',action:'ابدأ بحفظ سورة جديدة اليوم — كن جزءاً من سلسلة الحفظ'},
    en:{title:'Memorization in Hearts',desc:'The primary method of Quran preservation is memorization. Millions of Muslims memorize the entire Quran by heart in every era. No other book in history is preserved this way.',verse:'Rather, it is distinct verses in the breasts of those who have been given knowledge',action:'Start memorizing a new surah today — be part of the chain of preservation'},
    fr:{title:'La Memorisation dans les Coeurs',desc:'La methode principale de preservation du Coran est la memorisation. Des millions de musulmans memorisent le Coran entier par coeur a chaque epoque. Aucun autre livre n\'est preserve ainsi.',verse:'Ce sont plutot des versets evidents dans les poitrines de ceux qui ont recu la science',action:'Commencez a memoriser une nouvelle sourate — faites partie de la chaine de preservation'}
  },
  {
    id:12, emoji:'⚡',
    ar:{title:'محاولات تحريف المعنى',desc:'عندما فشلوا في تحريف النص، لجأ المغرضون إلى تحريف المعنى عبر تفسيرات مغلوطة وترجمات مشوهة. الغزالي يحذّر من هذا الخطر الخفي.',verse:'يُحَرِّفُونَ الْكَلِمَ عَن مَّوَاضِعِهِ',action:'تعلّم التفسير من مصادر موثوقة ولا تعتمد على ترجمة واحدة'},
    en:{title:'Distorting the Meaning',desc:'When they failed to corrupt the text, ill-intentioned people resorted to distorting the meaning through false interpretations and biased translations. Al-Ghazali warns of this hidden danger.',verse:'They distort words from their proper usages',action:'Learn tafsir from reliable sources and don\'t depend on a single translation'},
    fr:{title:'Deformer le Sens',desc:'Quand ils ont echoue a corrompre le texte, les malintentionnes ont eu recours a la deformation du sens par de fausses interpretations et des traductions biaisees.',verse:'Ils detournent les mots de leurs sens',action:'Apprenez le tafsir de sources fiables et ne dependez pas d\'une seule traduction'}
  },
  {
    id:13, emoji:'🌙',
    ar:{title:'القرآن والعلمانية',desc:'يرى بعض العلمانيين أن القرآن يجب أن يُقصر على العبادة فقط ولا دخل له في الحياة العامة. الغزالي يرد: القرآن منهج حياة شامل لا يُجزّأ.',verse:'',action:'فكّر في مجال واحد في حياتك يمكن أن يوجهه القرآن بشكل أفضل'},
    en:{title:'The Quran and Secularism',desc:'Some secularists believe the Quran should be limited to worship only, with no role in public life. Al-Ghazali responds: the Quran is a comprehensive life methodology that cannot be divided.',verse:'',action:'Think of one area in your life that the Quran could guide better'},
    fr:{title:'Le Coran et le Secularisme',desc:'Certains secularistes pensent que le Coran devrait etre limite au culte uniquement, sans role dans la vie publique. Al-Ghazali repond : le Coran est une methodologie de vie complete.',verse:'',action:'Pensez a un domaine de votre vie que le Coran pourrait mieux guider'}
  },
  {
    id:14, emoji:'📰',
    ar:{title:'الإعلام المعادي',desc:'يستخدم بعض الإعلام الغربي آيات من القرآن مجتزأة من سياقها لتشويه الإسلام. الغزالي يعلّمنا كيف نفهم الآيات في سياقها الصحيح ونرد على التشويه.',verse:'',action:'عندما تسمع ادعاءً عن القرآن، ارجع دائماً إلى السياق الكامل'},
    en:{title:'Hostile Media',desc:'Some Western media uses Quran verses taken out of context to distort Islam. Al-Ghazali teaches us how to understand verses in their proper context and respond to distortions.',verse:'',action:'When you hear a claim about the Quran, always go back to the full context'},
    fr:{title:'Les Medias Hostiles',desc:'Certains medias occidentaux utilisent des versets du Coran hors contexte pour deformer l\'Islam. Al-Ghazali nous apprend a comprendre les versets dans leur contexte et a repondre aux deformations.',verse:'',action:'Quand vous entendez une affirmation sur le Coran, revenez toujours au contexte complet'}
  },
  {
    id:15, emoji:'🔥',
    ar:{title:'حرق المصاحف: من التاريخ إلى اليوم',desc:'من المغول إلى الإسبان إلى بعض المتطرفين اليوم، حاول كثيرون حرق المصاحف. لكن القرآن بقي محفوظاً لأنه في الصدور قبل السطور.',verse:'يُرِيدُونَ لِيُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ',action:'احفظ آية جديدة اليوم — فالحفظ أقوى سلاح لحماية القرآن'},
    en:{title:'Burning Qurans: From History to Today',desc:'From the Mongols to the Spanish to some extremists today, many have tried to burn Qurans. But the Quran has remained preserved because it lives in hearts before pages.',verse:'They want to extinguish the light of God with their mouths',action:'Memorize a new verse today — memorization is the strongest weapon to protect the Quran'},
    fr:{title:'Bruler les Corans : De l\'Histoire a Aujourd\'hui',desc:'Des Mongols aux Espagnols aux extremistes d\'aujourd\'hui, beaucoup ont tente de bruler les Corans. Mais le Coran est reste preserve car il vit dans les coeurs avant les pages.',verse:'Ils veulent eteindre la lumiere de Dieu avec leurs bouches',action:'Memorisez un nouveau verset — la memorisation est l\'arme la plus forte pour proteger le Coran'}
  },
  {
    id:16, emoji:'🎓',
    ar:{title:'دور العلماء في حماية القرآن',desc:'عبر التاريخ، وقف العلماء المسلمون صفاً واحداً لحماية القرآن. من ابن مسعود إلى الإمام مالك إلى الغزالي نفسه، كل جيل حمل أمانة الدفاع عن كتاب الله.',verse:'',action:'اقرأ عن عالم واحد ساهم في حماية القرآن وشارك قصته'},
    en:{title:'Scholars\' Role in Protecting the Quran',desc:'Throughout history, Muslim scholars stood united to protect the Quran. From Ibn Masud to Imam Malik to Al-Ghazali himself, every generation carried the trust of defending God\'s Book.',verse:'',action:'Read about one scholar who contributed to protecting the Quran and share their story'},
    fr:{title:'Le Role des Savants dans la Protection du Coran',desc:'A travers l\'histoire, les savants musulmans se sont unis pour proteger le Coran. D\'Ibn Masoud a l\'Imam Malik a Al-Ghazali lui-meme, chaque generation a porte le depot de la defense du Livre de Dieu.',verse:'',action:'Lisez l\'histoire d\'un savant qui a contribue a proteger le Coran et partagez-la'}
  },
  {
    id:17, emoji:'🌐',
    ar:{title:'التكنولوجيا في خدمة القرآن',desc:'الإنترنت والتطبيقات الرقمية أصبحت أدوات قوية لنشر القرآن وتعليمه. ما كان يحتاج سنوات من السفر للتعلم أصبح متاحاً بلمسة زر.',verse:'',action:'حمّل تطبيقاً لتعلّم القرآن وخصص ١٠ دقائق يومياً'},
    en:{title:'Technology Serving the Quran',desc:'The internet and digital apps have become powerful tools for spreading and teaching the Quran. What once required years of travel to learn is now available at the touch of a button.',verse:'',action:'Download a Quran learning app and dedicate 10 minutes daily'},
    fr:{title:'La Technologie au Service du Coran',desc:'Internet et les applications numeriques sont devenus de puissants outils pour diffuser et enseigner le Coran. Ce qui necessitait des annees de voyage est maintenant disponible en un clic.',verse:'',action:'Telechargez une application d\'apprentissage du Coran et consacrez 10 minutes par jour'}
  },
  {
    id:18, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'تربية الأبناء على حب القرآن',desc:'يؤكد الغزالي أن أهم معركة هي معركة التربية. إذا نشأ الجيل الجديد بعيداً عن القرآن، فقد خسرنا المعركة الحقيقية.',verse:'',action:'اقرأ مع أطفالك أو إخوتك الصغار صفحة من القرآن اليوم'},
    en:{title:'Raising Children to Love the Quran',desc:'Al-Ghazali emphasizes that the most important battle is the battle of education. If the new generation grows up distant from the Quran, we have lost the real battle.',verse:'',action:'Read a page of the Quran with your children or younger siblings today'},
    fr:{title:'Elever les Enfants dans l\'Amour du Coran',desc:'Al-Ghazali souligne que la bataille la plus importante est celle de l\'education. Si la nouvelle generation grandit loin du Coran, nous avons perdu la vraie bataille.',verse:'',action:'Lisez une page du Coran avec vos enfants ou freres et soeurs aujourd\'hui'}
  },
  {
    id:19, emoji:'💪',
    ar:{title:'المسلم والتدبر',desc:'المعركة الحقيقية ليست فقط ضد الأعداء الخارجيين بل ضد جهلنا نحن. كم مسلم يملك مصحفاً لكن لا يقرأه؟ أكبر خطر على القرآن هو إهمال أهله.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا',action:'خصص ١٥ دقيقة يومياً لقراءة القرآن بتدبر وفهم'},
    en:{title:'Muslims and Reflection',desc:'The real battle is not only against external enemies but against our own ignorance. How many Muslims own a Quran but never read it? The greatest threat to the Quran is its own people\'s neglect.',verse:'Do they not reflect upon the Quran, or are there locks upon their hearts?',action:'Dedicate 15 minutes daily to reading the Quran with reflection and understanding'},
    fr:{title:'Les Musulmans et la Reflexion',desc:'La vraie bataille n\'est pas seulement contre les ennemis exterieurs mais contre notre propre ignorance. Combien de musulmans possedent un Coran mais ne le lisent pas ?',verse:'Ne meditent-ils pas sur le Coran ou y a-t-il des verrous sur leurs coeurs ?',action:'Consacrez 15 minutes par jour a la lecture du Coran avec reflexion et comprehension'}
  },
  {
    id:20, emoji:'🌅',
    ar:{title:'مستقبل القرآن مشرق',desc:'رغم كل المحاولات عبر التاريخ، القرآن باقٍ ومنتشر أكثر من أي وقت مضى. الإسلام هو أسرع الأديان نمواً. النور الإلهي لا يمكن إطفاؤه.',verse:'يُرِيدُونَ أَن يُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ وَيَأْبَى اللَّهُ إِلَّا أَن يُتِمَّ نُورَهُ',action:'شارك هذا التطبيق مع صديق — كن جزءاً من نشر نور القرآن'},
    en:{title:'The Quran\'s Bright Future',desc:'Despite all attempts throughout history, the Quran remains and spreads more than ever. Islam is the fastest growing religion. Divine light cannot be extinguished.',verse:'They want to extinguish God\'s light with their mouths, but God refuses except to perfect His light',action:'Share this app with a friend — be part of spreading the Quran\'s light'},
    fr:{title:'L\'Avenir Lumineux du Coran',desc:'Malgre toutes les tentatives a travers l\'histoire, le Coran demeure et se repand plus que jamais. L\'Islam est la religion qui croit le plus vite. La lumiere divine ne peut etre eteinte.',verse:'Ils veulent eteindre la lumiere de Dieu mais Dieu n\'accepte que de parfaire Sa lumiere',action:'Partagez cette application avec un ami — participez a la diffusion de la lumiere du Coran'}
  }
];

// ═══════════════ TIMELINE DATA ═══════════════
const TIMELINE = [
  {year:'610',emoji:'🌟',ar:{title:'نزول الوحي',desc:'بدأ نزول القرآن على النبي محمد ﷺ في غار حراء'},en:{title:'Revelation Begins',desc:'The Quran began to be revealed to Prophet Muhammad in the Cave of Hira'},fr:{title:'Debut de la Revelation',desc:'Le Coran a commence a etre revele au Prophete Muhammad dans la grotte de Hira'}},
  {year:'632',emoji:'📖',ar:{title:'جمع القرآن في عهد أبي بكر',desc:'بعد استشهاد حفّاظ القرآن في معركة اليمامة'},en:{title:'Compilation under Abu Bakr',desc:'After the martyrdom of Quran memorizers at the Battle of Yamama'},fr:{title:'Compilation sous Abu Bakr',desc:'Apres le martyre des memorisateurs a la bataille de Yamama'}},
  {year:'650',emoji:'📜',ar:{title:'توحيد المصاحف في عهد عثمان',desc:'نسخ مصاحف موحدة وإرسالها إلى الأمصار'},en:{title:'Standardization under Uthman',desc:'Standardized manuscripts copied and sent to major cities'},fr:{title:'Standardisation sous Uthman',desc:'Manuscrits standardises copies et envoyes aux grandes villes'}},
  {year:'1099',emoji:'⚔️',ar:{title:'الحروب الصليبية',desc:'محاولات تدمير المصاحف خلال احتلال القدس'},en:{title:'The Crusades',desc:'Attempts to destroy Quran copies during the occupation of Jerusalem'},fr:{title:'Les Croisades',desc:'Tentatives de destruction des copies du Coran pendant l\'occupation de Jerusalem'}},
  {year:'1258',emoji:'🔥',ar:{title:'سقوط بغداد',desc:'المغول يحرقون المكتبات لكن القرآن يبقى محفوظاً في الصدور'},en:{title:'Fall of Baghdad',desc:'Mongols burn libraries but the Quran remains preserved in hearts'},fr:{title:'Chute de Bagdad',desc:'Les Mongols brulent les bibliotheques mais le Coran reste preserve dans les coeurs'}},
  {year:'1492',emoji:'🏰',ar:{title:'سقوط الأندلس',desc:'محاكم التفتيش تحرق المصاحف في إسبانيا'},en:{title:'Fall of Andalusia',desc:'The Inquisition burns Qurans in Spain'},fr:{title:'Chute de l\'Andalousie',desc:'L\'Inquisition brule les Corans en Espagne'}},
  {year:'1800',emoji:'🔬',ar:{title:'عصر الاستشراق',desc:'بداية الدراسات الاستشراقية المشككة في القرآن'},en:{title:'Age of Orientalism',desc:'Beginning of orientalist studies questioning the Quran'},fr:{title:'Ere de l\'Orientalisme',desc:'Debut des etudes orientalistes remettant en question le Coran'}},
  {year:'1972',emoji:'🏛️',ar:{title:'اكتشاف مخطوطات صنعاء',desc:'اكتشاف مخطوطات قرآنية قديمة تؤكد حفظ النص'},en:{title:'Discovery of Sanaa Manuscripts',desc:'Discovery of ancient Quran manuscripts confirming text preservation'},fr:{title:'Decouverte des Manuscrits de Sanaa',desc:'Decouverte d\'anciens manuscrits coraniques confirmant la preservation'}},
  {year:'2015',emoji:'📱',ar:{title:'العصر الرقمي',desc:'ملايين التطبيقات والمواقع تنشر القرآن في كل مكان'},en:{title:'Digital Age',desc:'Millions of apps and websites spreading the Quran everywhere'},fr:{title:'Ere Numerique',desc:'Des millions d\'applications et de sites diffusent le Coran partout'}}
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل تعرف قصة جمع القرآن في عهد أبي بكر؟',en:'Do you know the story of the Quran compilation under Abu Bakr?',fr:'Connaissez-vous l\'histoire de la compilation du Coran sous Abu Bakr ?'},
  {ar:'هل تستطيع الرد على شبهة مستشرق حول القرآن؟',en:'Can you respond to an orientalist doubt about the Quran?',fr:'Pouvez-vous repondre a un doute orientaliste sur le Coran ?'},
  {ar:'هل تقرأ القرآن يومياً بتدبر؟',en:'Do you read the Quran daily with reflection?',fr:'Lisez-vous le Coran quotidiennement avec reflexion ?'},
  {ar:'هل تعرف الفرق بين القراءات القرآنية؟',en:'Do you know the difference between Quranic readings?',fr:'Connaissez-vous la difference entre les lectures coraniques ?'},
  {ar:'هل شاركت معرفتك عن القرآن مع غير مسلم؟',en:'Have you shared your knowledge about the Quran with a non-Muslim?',fr:'Avez-vous partage vos connaissances sur le Coran avec un non-musulman ?'},
  {ar:'هل تحفظ من القرآن ما يكفي للدفاع عنه؟',en:'Do you memorize enough Quran to defend it?',fr:'Memorisez-vous assez de Coran pour le defendre ?'},
  {ar:'هل تعلّم أطفالك أو إخوتك حب القرآن؟',en:'Do you teach your children or siblings to love the Quran?',fr:'Enseignez-vous a vos enfants ou freres l\'amour du Coran ?'},
  {ar:'هل تعرف عن المخطوطات القرآنية القديمة؟',en:'Do you know about ancient Quranic manuscripts?',fr:'Connaissez-vous les anciens manuscrits coraniques ?'}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء قبل قراءة القرآن',text:'اللهم انفعني بما علمتني وعلمني ما ينفعني وزدني علماً',tr:''},en:{label:'Before reading Quran',text:'اللهم انفعني بما علمتني وعلمني ما ينفعني وزدني علماً',tr:'O God, benefit me with what You taught me, teach me what benefits me, and increase me in knowledge'},fr:{label:'Avant la lecture du Coran',text:'اللهم انفعني بما علمتني وعلمني ما ينفعني وزدني علماً',tr:'O Dieu, fais-moi beneficier de ce que Tu m\'as enseigne, enseigne-moi ce qui me profite, et augmente ma science'}},
  {ar:{label:'دعاء بعد قراءة القرآن',text:'اللهم اجعل القرآن ربيع قلبي ونور صدري وجلاء حزني وذهاب همي',tr:''},en:{label:'After reading Quran',text:'اللهم اجعل القرآن ربيع قلبي ونور صدري وجلاء حزني وذهاب همي',tr:'O God, make the Quran the spring of my heart, the light of my chest, the remover of my sadness and worries'},fr:{label:'Apres la lecture du Coran',text:'اللهم اجعل القرآن ربيع قلبي ونور صدري وجلاء حزني وذهاب همي',tr:'O Dieu, fais du Coran le printemps de mon coeur, la lumiere de ma poitrine, le dissipateur de ma tristesse'}},
  {ar:{label:'دعاء حفظ القرآن',text:'اللهم ارزقني حفظ كتابك والعمل به والثبات عليه',tr:''},en:{label:'Dua for memorization',text:'اللهم ارزقني حفظ كتابك والعمل به والثبات عليه',tr:'O God, grant me memorization of Your Book, acting upon it, and steadfastness in it'},fr:{label:'Dua pour la memorisation',text:'اللهم ارزقني حفظ كتابك والعمل به والثبات عليه',tr:'O Dieu, accorde-moi la memorisation de Ton Livre, la mise en pratique et la perseverance'}},
  {ar:{label:'دعاء التدبر',text:'اللهم افتح علينا حكمتك وانشر علينا رحمتك',tr:''},en:{label:'Dua for reflection',text:'اللهم افتح علينا حكمتك وانشر علينا رحمتك',tr:'O God, open upon us Your wisdom and spread upon us Your mercy'},fr:{label:'Dua pour la reflexion',text:'اللهم افتح علينا حكمتك وانشر علينا رحمتك',tr:'O Dieu, ouvre-nous Ta sagesse et repands sur nous Ta misericorde'}}
];

// ═══════════════ GLOBAL STATE ═══════════════
let lang = localStorage.getItem('mm-lang') || 'ar';
let theme = localStorage.getItem('mm-theme') || 'earth';
const themes = ['earth', 'night', 'sand'];
const themeIcons = ['🏔️', '🌙', '🏜️'];
const themeNames = { earth: 'Earth / أرض', night: 'Night / ليل', sand: 'Sand / رمال' };
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderCards();
  renderTimeline();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('mm-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabTimeline', t.tabTimeline);
  set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('timelineTitle', t.timelineTitle); set('timelineDesc', t.timelineDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  renderHome(); renderCards(); renderTimeline(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('mm-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const c = CARDS[dayIdx];
  const cd = c[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>
  `;
  const sections = [
    {icon:'📖',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ بطاقة معرفية':lang==='fr'?'20 cartes de connaissance':'20 knowledge cards'},
    {icon:'📅',tab:'timeline',title:t.tabTimeline,desc:lang==='ar'?'خط زمني تاريخي':lang==='fr'?'Chronologie historique':'Historical timeline'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر معلوماتك':lang==='fr'?'Testez vos connaissances':'Test your knowledge'},
    {icon:'📚',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('card-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          ${d.verse ? `<div class="verse-box"><div class="verse-arabic">${d.verse}</div></div>` : ''}
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('cardsContainer').innerHTML = searchBar + cards;
}

function filterCards(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareCard(idx) {
  const c = CARDS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n${d.verse ? d.verse + '\n\n' : ''}💡 ${d.action}\n\n— معركة المصحف | Battle of the Quran`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try { await navigator.clipboard.writeText(text); showToast(lang==='ar'?'تم النسخ!':lang==='fr'?'Copie !':'Copied!'); } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: TIMELINE ═══════════════
function renderTimeline() {
  document.getElementById('timelineContainer').innerHTML = TIMELINE.map(t => {
    const d = t[lang];
    return `
    <div class="timeline-card scroll-reveal">
      <div class="timeline-year">${t.year}</div>
      <div class="timeline-content">
        <span class="timeline-emoji">${t.emoji}</span>
        <div class="timeline-title">${d.title}</div>
        <div class="timeline-desc">${d.desc}</div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  document.getElementById('quizContainer').innerHTML = QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
}

function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => {
    o.classList.toggle('selected', [2,1,0][oi] === val);
  });
  playSound('click');
}

function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang==='ar'?'أجب على جميع الأسئلة':lang==='fr'?'Repondez a toutes les questions':'Answer all questions');
    return;
  }
  let score = 0;
  Object.values(answers).forEach(v => { score += v; });
  const max = QUIZ.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) {
    emoji='🌟'; title=lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';
    desc=lang==='ar'?'معرفتك بتاريخ القرآن قوية. استمر في التعلم والنشر!':lang==='fr'?'Votre connaissance de l\'histoire du Coran est solide. Continuez !':'Your knowledge of Quran history is strong. Keep learning and sharing!';
  } else if (pct >= 50) {
    emoji='📖'; title=lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc=lang==='ar'?'لديك أساس جيد. راجع البطاقات لتعزيز معرفتك.':lang==='fr'?'Vous avez de bonnes bases. Revisez les cartes pour renforcer vos connaissances.':'You have a good foundation. Review the cards to strengthen your knowledge.';
  } else {
    emoji='📚'; title=lang==='ar'?'تحتاج المزيد':lang==='fr'?'Besoin de plus':'Need More';
    desc=lang==='ar'?'اقرأ البطاقات بتمعن لتعرف تاريخ الدفاع عن القرآن.':lang==='fr'?'Lisez les cartes attentivement pour connaitre l\'histoire de la defense du Coran.':'Read the cards carefully to learn the history of Quran defense.';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${pct}%</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${desc}</div>
    <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>
  `;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle:'⚠️ تنبيه مهم',disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.',
      authorName:'الشيخ محمد الغزالي',authorDates:'١٩١٧ — ١٩٩٦',
      authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. عُرف بالتجديد ومحاربة الجمود والتشدد والدفاع عن القرآن الكريم.',
      bookTitle:'عن الكتاب',bookDesc:'"معركة المصحف في العالم الإسلامي" كتاب يكشف المحاولات التاريخية والمعاصرة لتشويه القرآن والطعن فيه، ويوضح كيف حفظ الله كتابه عبر القرون. يتناول الغزالي شبهات المستشرقين، ومحاولات الاستعمار، وأهمية التدبر والحفظ.',
      sourcesTitle:'المصادر',sources:['كتاب "معركة المصحف في العالم الإسلامي" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم'],
      contact:'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle:'⚠️ Important Notice',disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName:'Sheikh Mohammed al-Ghazali',authorDates:'1917 — 1996',
      authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Known for renewal, fighting rigidity, and defending the Holy Quran.',
      bookTitle:'About the Book',bookDesc:'"Battle of the Quran in the Islamic World" reveals historical and contemporary attempts to distort and challenge the Quran, showing how God preserved His Book across centuries. Al-Ghazali addresses orientalist doubts, colonial attempts, and the importance of reflection and memorization.',
      sourcesTitle:'Sources',sources:['"Battle of the Quran in the Islamic World" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim'],
      contact:'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle:'⚠️ Avis Important',disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables.',
      authorName:'Sheikh Mohammed al-Ghazali',authorDates:'1917 — 1996',
      authorBio:'Savant et penseur islamique egyptien, surnomme « Le Litteraire de la Predication ». Auteur de plus de 94 livres. Connu pour le renouveau et la defense du Saint Coran.',
      bookTitle:'A Propos du Livre',bookDesc:'« La Bataille du Coran dans le Monde Islamique » revele les tentatives historiques et contemporaines de deformer et de contester le Coran, montrant comment Dieu a preserve Son Livre a travers les siecles.',
      sourcesTitle:'Sources',sources:['« La Bataille du Coran dans le Monde Islamique » — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim'],
      contact:'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s=>`<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar:[{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي.'},{title:'📚 المصادر',body:'كتاب "معركة المصحف" للشيخ محمد الغزالي، القرآن الكريم.'},{title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ بطاقة، خط زمني، اختبار، أدعية.'},{title:'⌨️ اختصارات',body:'استخدم الأسهم للتنقل. Escape لإغلاق اللوحات.'}],
    en:[{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom.'},{title:'📚 Sources',body:'"Battle of the Quran" by Sheikh Mohammed al-Ghazali, the Holy Quran.'},{title:'✨ Features',body:'Three languages, 3 themes, 20 cards, timeline, quiz, duas.'},{title:'⌨️ Shortcuts',body:'Use arrow keys to navigate. Escape to close panels.'}],
    fr:[{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'« La Bataille du Coran » par Sheikh Mohammed al-Ghazali, le Saint Coran.'},{title:'✨ Fonctionnalites',body:'Trois langues, 3 themes, 20 cartes, chronologie, quiz, duas.'},{title:'⌨️ Raccourcis',body:'Utilisez les fleches pour naviguer. Echap pour fermer les panneaux.'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h=>`<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); });
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-cards');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t=document.getElementById('toast'),m=document.getElementById('toastMsg'); if(t&&m){m.textContent=msg;t.style.display='block';setTimeout(()=>t.style.display='none',2500);} }
function initScrollTop() { const btn=document.getElementById('scrollTop'); window.addEventListener('scroll',()=>{if(btn)btn.classList.toggle('visible',window.scrollY>300);}); }

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
    if (type==='click'){osc.frequency.value=800;osc.type='sine';gain.gain.value=0.04;}
    else if(type==='success'){osc.frequency.value=523;osc.type='sine';gain.gain.value=0.06;}
    else if(type==='theme'){osc.frequency.value=440;osc.type='triangle';gain.gain.value=0.05;}
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}
