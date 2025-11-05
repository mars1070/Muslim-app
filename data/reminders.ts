import { Reminder } from '../types';

export const reminders: Reminder[] = [
  // Coran
  {
    id: 1,
    type: 'coran',
    french: "Dis : 'Lui, Allah, est Unique.'",
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    source: { surahName: "Al-Ikhlas", surahNumber: 112, verseNumber: 1 }
  },
  {
    id: 5,
    type: 'coran',
    french: "Souvenez-vous de Moi, Je Me souviendrai de vous.",
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 152 }
  },
  {
    id: 7,
    type: 'coran',
    french: "Et dis : 'Ô mon Seigneur, accrois mes connaissances !'",
    arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
    source: { surahName: "Ta-Ha", surahNumber: 20, verseNumber: 114 }
  },
  {
    id: 9,
    type: 'coran',
    french: "Et quiconque craint Allah, Il lui donnera une issue favorable.",
    arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
    source: { surahName: "At-Talaq", surahNumber: 65, verseNumber: 2 }
  },
  {
    id: 12,
    type: 'coran',
    french: "N'est-ce point par l'évocation d'Allah que les cœurs se tranquillisent ?",
    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    source: { surahName: "Ar-Ra'd", surahNumber: 13, verseNumber: 28 }
  },
  {
    id: 16,
    type: 'coran',
    french: "Si vous êtes reconnaissants, Je vous augmenterai (Mes bienfaits).",
    arabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
    source: { surahName: "Ibrahim", surahNumber: 14, verseNumber: 7 }
  },
  {
    id: 18,
    type: 'coran',
    french: "En vérité, avec la difficulté vient la facilité.",
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    source: { surahName: "Ash-Sharh", surahNumber: 94, verseNumber: 6 }
  },
  {
    id: 19,
    type: 'coran',
    french: "Et ne désespérez pas de la miséricorde d'Allah.",
    arabic: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ",
    source: { surahName: "Yusuf", surahNumber: 12, verseNumber: 87 }
  },
  {
    id: 20,
    type: 'coran',
    french: "Allah n'impose à aucune âme une charge supérieure à sa capacité.",
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 286 }
  },
   {
    id: 21,
    type: 'coran',
    french: "Le bien que vous faites, Allah le sait.",
    arabic: "وَمَا تَفْعَلُوا مِنْ خَيْرٍ يَعْلَمْهُ اللَّهُ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 197 }
  },
  {
    id: 22,
    type: 'coran',
    french: "C'est Lui qui vous a créés de terre.",
    arabic: "هُوَ الَّذِي خَلَقَكُم مِّن تُرَابٍ",
    source: { surahName: "Ghafir", surahNumber: 40, verseNumber: 67 }
  },
  {
    id: 23,
    type: 'coran',
    french: "Et c'est en Allah que les croyants doivent placer leur confiance.",
    arabic: "وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ",
    source: { surahName: "At-Tawbah", surahNumber: 9, verseNumber: 51 }
  },
  {
    id: 24,
    type: 'coran',
    french: "Et accomplissez la Salât et acquittez la Zakât.",
    arabic: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 43 }
  },
   {
    id: 25,
    type: 'coran',
    french: "Et sois patient. Car Allah ne laisse pas perdre la récompense des bienfaisants.",
    arabic: "وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ",
    source: { surahName: "Hud", surahNumber: 11, verseNumber: 115 }
  },

  // Hadiths
  {
    id: 2,
    type: 'hadith',
    french: "Les actions ne valent que par les intentions.",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 1 }
  },
  {
    id: 3,
    type: 'hadith',
    french: "La purification est la moitié de la foi.",
    arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ",
    source: { collection: "Sahih Muslim", hadithNumber: 223 }
  },
  {
    id: 4,
    type: 'hadith',
    french: "Celui qui emprunte un chemin pour rechercher la connaissance, Allah lui facilite un chemin vers le Paradis.",
    arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2646, grading: "Sahih (صحيح)" }
  },
  {
    id: 6,
    type: 'hadith',
    french: "Aucun de vous n'est véritablement croyant tant qu'il n'aime pas pour son frère ce qu'il aime pour lui-même.",
    arabic: "لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 13 }
  },
  {
    id: 8,
    type: 'hadith',
    french: "Une bonne parole est une aumône.",
    arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6023 }
  },
  {
    id: 10,
    type: 'hadith',
    french: "L'invocation, c'est l'adoration.",
    arabic: "الدُّعَاءُ هُوَ الْعِبَادَةُ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2969, grading: "Sahih (صحيح)" }
  },
  {
    id: 11,
    type: 'hadith',
    french: "Ton sourire au visage de ton frère est une aumône.",
    arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 1956, grading: "Sahih (صحيح)" }
  },
  {
    id: 13,
    type: 'hadith',
    french: "Quiconque lit une lettre du Livre d'Allah aura une bonne action, et la bonne action a dix fois sa récompense.",
    arabic: "مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2910, grading: "Sahih (صحيح)" }
  },
  {
    id: 14,
    type: 'hadith',
    french: "Le meilleur d'entre vous est celui qui apprend le Coran et l'enseigne.",
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5027 }
  },
  {
    id: 15,
    type: 'hadith',
    french: "Certes, Allah ne regarde pas vos corps ni vos apparences, mais Il regarde vos cœurs et vos actions.",
    arabic: "إِنَّ اللَّهَ لا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    source: { collection: "Sahih Muslim", hadithNumber: 2564 }
  },
  {
    id: 26,
    type: 'hadith',
    french: "La richesse ne consiste pas en l'abondance de biens, mais la vraie richesse est la richesse de l'âme.",
    arabic: "لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6446 }
  },
  {
    id: 27,
    type: 'hadith',
    french: "Le musulman est celui dont les musulmans sont à l'abri de sa langue et de sa main.",
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 10 }
  },
  {
    id: 29,
    type: 'hadith',
    french: "Le fort n'est pas celui qui terrasse les gens, mais le fort est celui qui se maîtrise au moment de la colère.",
    arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6114 }
  },
  {
    id: 30,
    type: 'hadith',
    french: "Facilitez les choses et ne les rendez pas difficiles, annoncez la bonne nouvelle et ne faites pas fuir.",
    arabic: "يَسِّرُوا وَلا تُعَسِّرُوا وَبَشِّرُوا وَلا تُنَفِّرُوا",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 69 }
  },
  {
    id: 32,
    type: 'hadith',
    french: "La pudeur fait partie de la foi.",
    arabic: "الْحَيَاءُ مِنَ الإِيمَانِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 24 }
  },
  {
    id: 33,
    type: 'hadith',
    french: "Il n'y a pas d'obéissance à une créature dans la désobéissance au Créateur.",
    arabic: "لا طَاعَةَ لِمَخْلُوقٍ فِي مَعْصِيَةِ الْخَالِقِ",
    source: { collection: "Musnad Ahmad", hadithNumber: 1098, grading: "Sahih (صحيح)" }
  },
  {
    id: 34,
    type: 'hadith',
    french: "Celui qui ne remercie pas les gens n'a pas remercié Allah.",
    arabic: "مَنْ لَمْ يَشْكُرِ النَّاسَ لَمْ يَشْكُرِ اللَّهَ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 1954, grading: "Sahih (صحيح)" }
  },
  {
    id: 35,
    type: 'hadith',
    french: "Celui qui croit en Allah et au Jour Dernier, qu'il dise du bien ou qu'il se taise.",
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6018 }
  },
  {
    id: 36,
    type: 'hadith',
    french: "Certes, Allah est Doux et Il aime la douceur en toute chose.",
    arabic: "إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الأَمْرِ كُلِّهِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6928 }
  },
  {
    id: 37,
    type: 'coran',
    french: "Et mangez et buvez, mais ne gaspillez pas. Car [Allah] n'aime pas les gaspilleurs.",
    arabic: "وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ",
    source: { surahName: "Al-A'raf", surahNumber: 7, verseNumber: 31 }
  },
  {
    id: 38,
    type: 'coran',
    french: "Ne marche pas sur la terre avec arrogance.",
    arabic: "وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا",
    source: { surahName: "Al-Isra", surahNumber: 17, verseNumber: 37 }
  },
  {
    id: 39,
    type: 'coran',
    french: "Et parlez gentiment aux gens.",
    arabic: "وَقُولُوا لِلنَّاسِ حُسْنًا",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 83 }
  },
  {
    id: 40,
    type: 'hadith',
    french: "La patience est une lumière.",
    arabic: "وَالصَّبْرُ ضِيَاءٌ",
    source: { collection: "Sahih Muslim", hadithNumber: 223 }
  },
  {
    id: 41,
    type: 'hadith',
    french: "Ne méprise aucune bonne action, ne serait-ce que de rencontrer ton frère avec un visage souriant.",
    arabic: "لا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا وَلَوْ أَنْ تَلْقَى أَخَاكَ بِوَجْهٍ طَلْقٍ",
    source: { collection: "Sahih Muslim", hadithNumber: 2626 }
  },
  {
    id: 42,
    type: 'hadith',
    french: "Quiconque récite 'Dis : Il est Allah, l'Unique' dix fois, Allah lui construira une maison au Paradis.",
    arabic: "مَنْ قَرَأَ 'قُلْ هُوَ اللَّهُ أَحَدٌ' عَشْرَ مَرَّاتٍ بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ",
    source: { collection: "Musnad Ahmad", hadithNumber: "15609", grading: "Sahih (صحيح)" }
  },
  {
    id: 43,
    type: 'hadith',
    french: "Les deux paroles les plus aimées d'Allah sont : 'Subhan'Allahi wa bihamdihi' et 'Subhan'Allahil 'Adhim'.",
    arabic: "كَلِمَتَانِ حَبِيبَتَانِ إِلَى الرَّحْمَنِ، خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    source: { collection: "Sahih Muslim", hadithNumber: 2694 }
  },
  // Nouveaux ajouts
  {
    id: 44,
    type: 'coran',
    french: "En vérité, la prière préserve de la turpitude et du blâmable.",
    arabic: "إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ",
    source: { surahName: "Al-'Ankabut", surahNumber: 29, verseNumber: 45 }
  },
  {
    id: 45,
    type: 'hadith',
    french: "Les plus aimées des actions auprès d'Allah sont les plus constantes, même si elles sont minimes.",
    arabic: "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6464 }
  },
  {
    id: 46,
    type: 'coran',
    french: "Et cherchez secours dans la patience et la prière.",
    arabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 45 }
  },
  {
    id: 47,
    type: 'hadith',
    french: "Celui qui guide vers un bien a la même récompense que celui qui le fait.",
    arabic: "مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ",
    source: { collection: "Sahih Muslim", hadithNumber: 1893 }
  },
  {
    id: 48,
    type: 'coran',
    french: "Quiconque fait un bien fût-ce du poids d'un atome, le verra.",
    arabic: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ",
    source: { surahName: "Az-Zalzalah", surahNumber: 99, verseNumber: 7 }
  },
  {
    id: 49,
    type: 'hadith',
    french: "L'aumône n'a jamais diminué une richesse.",
    arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ",
    source: { collection: "Sahih Muslim", hadithNumber: 2588 }
  },
  {
    id: 50,
    type: 'coran',
    french: "Ô vous qui avez cru ! Craignez Allah et parlez avec droiture.",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا",
    source: { surahName: "Al-Ahzab", surahNumber: 33, verseNumber: 70 }
  },
  {
    id: 51,
    type: 'hadith',
    french: "Allah est plus joyeux du repentir de Son serviteur que l'un de vous ne le serait en retrouvant sa monture perdue.",
    arabic: "لَلَّهُ أَشَدُّ فَرَحًا بِتَوْبَةِ عَبْدِهِ حِينَ يَتُوبُ إِلَيْهِ مِنْ أَحَدِكُمْ كَانَ عَلَى رَاحِلَتِهِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6309 }
  },
  {
    id: 52,
    type: 'coran',
    french: "Et Il sait ce que vous cachez et ce que vous divulguez.",
    arabic: "وَيَعْلَمُ مَا تُسِرُّونَ وَمَا تُعْلِنُونَ",
    source: { surahName: "At-Taghabun", surahNumber: 64, verseNumber: 4 }
  },
  {
    id: 53,
    type: 'hadith',
    french: "L'un des signes de la qualité de l'Islam d'une personne est de délaisser ce qui ne la regarde pas.",
    arabic: "مِنْ حُسْنِ إِسْلامِ الْمَرْءِ تَرْكُهُ مَا لا يَعْنِيهِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2317, grading: "Sahih (صحيح)" }
  },
  {
    id: 54,
    type: 'coran',
    french: "Et ne soyez pas comme ceux qui ont oublié Allah; [Allah] leur a fait oublier leurs propres âmes.",
    arabic: "وَلَا تَكُونُوا كَالَّذِينَ نَسُوا اللَّهَ فَأَنسَاهُمْ أَنفُسَهُمْ",
    source: { surahName: "Al-Hashr", surahNumber: 59, verseNumber: 19 }
  },
  {
    id: 55,
    type: 'hadith',
    french: "Gardez-vous de l'injustice, car l'injustice sera des ténèbres le Jour de la Résurrection.",
    arabic: "اتَّقُوا الظُّلْمَ فَإِنَّ الظُّلْمَ ظُلُمَاتٌ يَوْمَ الْقِيَامَةِ",
    source: { collection: "Sahih Muslim", hadithNumber: 2578 }
  },
  {
    id: 56,
    type: 'coran',
    french: "C'est à Allah qu'appartient tout ce qui est dans les cieux et sur la terre.",
    arabic: "وَلِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
    source: { surahName: "An-Nisa", surahNumber: 4, verseNumber: 126 }
  },
  {
    id: 57,
    type: 'hadith',
    french: "Quand le fils d'Adam meurt, ses œuvres s'arrêtent sauf trois : une aumône continue, une science dont les gens profitent, ou un enfant pieux qui invoque pour lui.",
    arabic: "إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ: إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ",
    source: { collection: "Sahih Muslim", hadithNumber: 1631 }
  },
  {
    id: 58,
    type: 'coran',
    french: "Et la bonne action et la mauvaise ne sont pas pareilles. Repousse (le mal) par ce qui est meilleur.",
    arabic: "وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ ۚ ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ",
    source: { surahName: "Fussilat", surahNumber: 41, verseNumber: 34 }
  },
  {
    id: 59,
    type: 'hadith',
    french: "Vis dans ce monde comme si tu étais un étranger ou un voyageur de passage.",
    arabic: "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6416 }
  },
  {
    id: 60,
    type: 'coran',
    french: "Il donne la sagesse à qui Il veut. Et celui à qui la sagesse est donnée, vraiment, c'est un bien immense qui lui est donné.",
    arabic: "يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ ۚ وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 269 }
  },
  {
    id: 61,
    type: 'hadith',
    french: "Sept personnes seront ombragées par Allah sous Son ombre le Jour où il n'y aura d'autre ombre que la Sienne...",
    arabic: "سَبْعَةٌ يُظِلُّهُمُ اللَّهُ فِي ظِلِّهِ يَوْمَ لا ظِلَّ إِلا ظِلُّهُ...",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 660 }
  },
  {
    id: 62,
    type: 'coran',
    french: "Le mois de Ramadan au cours duquel le Coran a été descendu comme guide pour les gens.",
    arabic: "شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 185 }
  },
  {
    id: 63,
    type: 'hadith',
    french: "Celui qui jeûne le Ramadan avec foi et en espérant la récompense, ses péchés passés lui seront pardonnés.",
    arabic: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 38 }
  },
  // Ajouts du 24/05
  {
    id: 64,
    type: 'coran',
    french: "Et ne perdez pas espoir, ni ne vous affligez, alors que vous êtes les supérieurs, si vous êtes de vrais croyants.",
    arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ",
    source: { surahName: "Al 'Imran", surahNumber: 3, verseNumber: 139 }
  },
  {
    id: 65,
    type: 'coran',
    french: "Et quiconque place sa confiance en Allah, Il lui suffit.",
    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    source: { surahName: "At-Talaq", surahNumber: 65, verseNumber: 3 }
  },
  {
    id: 66,
    type: 'coran',
    french: "Ô les croyants ! Cherchez secours dans l'endurance et la Salât. Car Allah est avec ceux qui sont endurants.",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 153 }
  },
  {
    id: 67,
    type: 'coran',
    french: "Et dépensez de ce que Nous vous avons attribué, avant que la mort ne vienne à l'un de vous...",
    arabic: "وَأَنفِقُوا مِن مَّا رَزَقْنَاكُم مِّن قَبْلِ أَن يَأْتِيَ أَحَدَكُمُ الْمَوْتُ",
    source: { surahName: "Al-Munafiqun", surahNumber: 63, verseNumber: 10 }
  },
  {
    id: 68,
    type: 'coran',
    french: "La rivalité vous a distraits, jusqu'à ce que vous visitiez les tombes.",
    arabic: "أَلْهَاكُمُ التَّكَاثُرُ حَتَّىٰ زُرْتُمُ الْمَقَابِرَ",
    source: { surahName: "At-Takathur", surahNumber: 102, verseNumber: "1-2" }
  },
  {
    id: 69,
    type: 'coran',
    french: "Par le Temps ! L'homme est certes, en perdition, sauf ceux qui croient et accomplissent les bonnes œuvres, s'enjoignent mutuellement la vérité et s'enjoignent mutuellement l'endurance.",
    arabic: "وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
    source: { surahName: "Al-'Asr", surahNumber: 103, verseNumber: "1-3" }
  },
  {
    id: 70,
    type: 'coran',
    french: "Ceux qui dépensent dans l'aisance et dans l'adversité, qui dominent leur rage et pardonnent à autrui - car Allah aime les bienfaisants.",
    arabic: "الَّذِينَ يُنفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ",
    source: { surahName: "Al 'Imran", surahNumber: 3, verseNumber: 134 }
  },
  {
    id: 71,
    type: 'coran',
    french: "En effet, Nous avons créé l'homme dans la plus belle forme.",
    arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
    source: { surahName: "At-Tin", surahNumber: 95, verseNumber: 4 }
  },
  {
    id: 72,
    type: 'coran',
    french: "Et adore ton Seigneur jusqu'à ce que te vienne la certitude (la mort).",
    arabic: "وَاعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ الْيَقِينُ",
    source: { surahName: "Al-Hijr", surahNumber: 15, verseNumber: 99 }
  },
  {
    id: 73,
    type: 'coran',
    french: "Et abaisse pour eux l'aile de l'humilité par miséricorde, et dis : 'Ô mon Seigneur, fais-leur miséricorde comme ils m'ont élevé tout petit'.",
    arabic: "وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُل رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    source: { surahName: "Al-Isra", surahNumber: 17, verseNumber: 24 }
  },
  {
    id: 74,
    type: 'coran',
    french: "Nulle contrainte en religion ! Car le bon chemin s'est distingué de l'égarement.",
    arabic: "لَا إِكْرَاهَ فِي الدِّينِ ۖ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 256 }
  },
  {
    id: 75,
    type: 'coran',
    french: "Et concourez au pardon de votre Seigneur, et à un Jardin (Paradis) large comme les cieux et la terre, préparé pour les pieux.",
    arabic: "وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ أُعِدَّتْ لِلْمُتَّقِينَ",
    source: { surahName: "Al 'Imran", surahNumber: 3, verseNumber: 133 }
  },
  {
    id: 76,
    type: 'coran',
    french: "La vie présente n'est que jeu et amusement. La Demeure de l'au-delà est meilleure pour ceux qui sont pieux.",
    arabic: "وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا لَعِبٌ وَلَهْوٌ ۖ وَلَلدَّارُ الْآخِرَةُ خَيْرٌ لِّلَّذِينَ يَتَّقُونَ",
    source: { surahName: "Al-An'am", surahNumber: 6, verseNumber: 32 }
  },
  {
    id: 77,
    type: 'coran',
    french: "Et quand Mes serviteurs t'interrogent sur Moi, alors Je suis tout proche : Je réponds à l'appel de celui qui Me prie quand il Me prie.",
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 186 }
  },
  {
    id: 78,
    type: 'coran',
    french: "Ô vous qui avez cru ! Évitez de trop conjecturer [sur autrui] car une partie des conjectures est péché. Et n'espionnez pas.",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِّنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ ۖ وَلَا تَجَسَّسُوا",
    source: { surahName: "Al-Hujurat", surahNumber: 49, verseNumber: 12 }
  },
  // Nouveaux ajouts (Lot 1)
  {
    id: 79,
    type: 'coran',
    french: "Entraidez-vous dans l'accomplissement des bonnes œuvres et de la piété et ne vous entraidez pas dans le péché et la transgression.",
    arabic: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ",
    source: { surahName: "Al-Ma'idah", surahNumber: 5, verseNumber: 2 }
  },
  {
    id: 80,
    type: 'hadith',
    french: "Celui qui n'est pas miséricordieux envers les autres, Allah ne sera pas miséricordieux envers lui.",
    arabic: "مَنْ لا يَرْحَمُ النَّاسَ لا يَرْحَمْهُ اللَّهُ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5971 }
  },
  {
    id: 81,
    type: 'coran',
    french: "Ô vous qui avez cru ! Qu'un groupe ne se raille pas d'un autre groupe : ceux-ci sont peut-être meilleurs qu'eux.",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ عَسَىٰ أَن يَكُونُوا خَيْرًا مِّنْهُمْ",
    source: { surahName: "Al-Hujurat", surahNumber: 49, verseNumber: 11 }
  },
  {
    id: 82,
    type: 'coran',
    french: "Les serviteurs du Tout Miséricordieux sont ceux qui marchent humblement sur terre.",
    arabic: "وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا",
    source: { surahName: "Al-Furqan", surahNumber: 25, verseNumber: 63 }
  },
  {
    id: 83,
    type: 'hadith',
    french: "Crains Allah où que tu sois, fais suivre la mauvaise action par une bonne qui l'effacera et comporte-toi avec les gens avec un bon caractère.",
    arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 1987, grading: "Hasan (حسن)" }
  },
  {
    id: 84,
    type: 'coran',
    french: "Les vrais croyants sont ceux dont les cœurs frémissent quand on mentionne Allah.",
    arabic: "إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ",
    source: { surahName: "Al-Anfal", surahNumber: 8, verseNumber: 2 }
  },
  {
    id: 85,
    type: 'hadith',
    french: "N'entrera pas au Paradis celui qui a dans son cœur le poids d'un atome d'orgueil.",
    arabic: "لا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ",
    source: { collection: "Sahih Muslim", hadithNumber: 95 }
  },
  {
    id: 86,
    type: 'coran',
    french: "Et qui profère plus belles paroles que celui qui appelle à Allah, fait bonne œuvre et dit : 'Je suis du nombre des Musulmans' ?",
    arabic: "وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا وَقَالَ إِنَّنِي مِنَ الْمُسْلِمِينَ",
    source: { surahName: "Fussilat", surahNumber: 41, verseNumber: 33 }
  },
  {
    id: 87,
    type: 'hadith',
    french: "Le Paradis est plus proche de l'un de vous que le lacet de sa sandale, et l'Enfer de même.",
    arabic: "الْجَنَّةُ أَقْرَبُ إِلَى أَحَدِكُمْ مِنْ شِرَاكِ نَعْلِهِ، وَالنَّارُ مِثْلُ ذَلِكَ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6011 }
  },
  {
    id: 88,
    type: 'coran',
    french: "Dis : 'Ô Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d'Allah. Car Allah pardonne tous les péchés.'",
    arabic: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
    source: { surahName: "Az-Zumar", surahNumber: 39, verseNumber: 53 }
  },
  {
    id: 89,
    type: 'hadith',
    french: "Ô Mes serviteurs, Je Me suis interdit l'injustice à Moi-même, et Je l'ai rendue interdite entre vous, alors ne soyez pas injustes les uns envers les autres.",
    arabic: "يَا عِبَادِي إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا فَلا تَظَالَمُوا",
    source: { collection: "Sahih Muslim", hadithNumber: 2581 }
  },
  {
    id: 90,
    type: 'coran',
    french: "Et ton Seigneur a décrété : 'N'adorez que Lui ; et marquez de la bonté envers les père et mère.'",
    arabic: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا",
    source: { surahName: "Al-Isra", surahNumber: 17, verseNumber: 23 }
  },
  {
    id: 91,
    type: 'hadith',
    french: "N'est pas des nôtres celui qui n'honore pas nos aînés et n'est pas miséricordieux envers nos jeunes.",
    arabic: "لَيْسَ مِنَّا مَنْ لَمْ يُوَقِّرْ كَبِيرَنَا وَيَرْحَمْ صَغِيرَنَا",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 1920, grading: "Sahih (صحيح)"}
  },
  {
    id: 92,
    type: 'coran',
    french: "Certes, Allah commande l'équité, la bienfaisance et l'assistance aux proches.",
    arabic: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ",
    source: { surahName: "An-Nahl", surahNumber: 16, verseNumber: 90 }
  },
  {
    id: 93,
    type: 'hadith',
    french: "Ne rompez pas les liens, ne vous tournez pas le dos, ne vous haïssez pas, ne vous enviez pas, et soyez des serviteurs d'Allah, des frères.",
    arabic: "لا تَقَاطَعُوا وَلا تَدَابَرُوا وَلا تَبَاغَضُوا وَلا تَحَاسَدُوا وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا",
    source: { collection: "Sahih Muslim", hadithNumber: 2559 }
  },
  {
    id: 94,
    type: 'coran',
    french: "Ô vous qui croyez ! Craignez Allah et soyez avec les véridiques.",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ",
    source: { surahName: "At-Tawbah", surahNumber: 9, verseNumber: 119 }
  },
  {
    id: 95,
    type: 'hadith',
    french: "La foi comporte un peu plus de soixante-dix branches. La plus élevée est la parole 'Il n'y a de divinité digne d'adoration qu'Allah', et la plus modeste est d'ôter un obstacle du chemin.",
    arabic: "الإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً، أَفْضَلُهَا قَوْلُ لا إِلَهَ إِلا اللَّهُ، وَأَدْنَاهَا إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 52 }
  },
  {
    id: 96,
    type: 'coran',
    french: "Y a-t-il d'autre récompense pour le bien, que le bien ?",
    arabic: "هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ",
    source: { surahName: "Ar-Rahman", surahNumber: 55, verseNumber: 60 }
  },
  {
    id: 97,
    type: 'hadith',
    french: "Le monde est la prison du croyant et le paradis du mécréant.",
    arabic: "الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ",
    source: { collection: "Sahih Muslim", hadithNumber: 2956 }
  },
  {
    id: 98,
    type: 'coran',
    french: "Et recherche à travers ce qu'Allah t'a donné, la Demeure dernière. Et n'oublie pas ta part en cette vie.",
    arabic: "وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا",
    source: { surahName: "Al-Qasas", surahNumber: 28, verseNumber: 77 }
  },
  {
    id: 99,
    type: 'hadith',
    french: "La meilleure prière après la prière obligatoire est la prière de nuit.",
    arabic: "أَفْضَلُ الصَّلاةِ بَعْدَ الْفَرِيضَةِ صَلاةُ اللَّيْلِ",
    source: { collection: "Sahih Muslim", hadithNumber: 1054 }
  },
  {
    id: 100,
    type: 'coran',
    french: "Celui qui a créé la mort et la vie afin de vous éprouver (et de savoir) qui de vous est le meilleur en œuvre.",
    arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا",
    source: { surahName: "Al-Mulk", surahNumber: 67, verseNumber: 2 }
  },
  {
    id: 101,
    type: 'hadith',
    french: "Si le fils d'Adam possédait une vallée pleine d'or, il souhaiterait en avoir une deuxième.",
    arabic: "لَوْ أَنَّ لابْنِ آدَمَ وَادِيًا مِنْ ذَهَبٍ أَحَبَّ أَنْ يَكُونَ لَهُ وَادِيَانِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6304 }
  },
  {
    id: 102,
    type: 'coran',
    french: "À chacun une direction vers laquelle il se tourne. Rivalisez donc dans les bonnes œuvres.",
    arabic: "وَلِكُلٍّ وِجْهَةٌ هُوَ مُوَلِّيهَا ۖ فَاسْتَبِقُوا الْخَيْرَاتِ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 148 }
  },
  {
    id: 103,
    type: 'hadith',
    french: "Protégez-vous de l'Enfer, ne serait-ce qu'avec la moitié d'une datte.",
    arabic: "اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 1417 }
  },
  {
    id: 104,
    type: 'coran',
    french: "Ô mon enfant, accomplis la Salât, commande le convenable, interdis le blâmable et endure ce qui t'arrive avec patience.",
    arabic: "يَا بُنَيَّ أَقِمِ الصَّلَاةَ وَأْمُرْ بِالْمَعْرُوفِ وَانْهَ عَنِ الْمُنكَرِ وَاصْبِرْ عَلَىٰ مَا أَصَابَكَ",
    source: { surahName: "Luqman", surahNumber: 31, verseNumber: 17 }
  },
  {
    id: 105,
    type: 'hadith',
    french: "Quiconque emprunte un chemin à la recherche d'une science, Allah lui facilite par cela un chemin vers le Paradis.",
    arabic: "مَنْ سَلَكَ طَرِيقًا يَطْلُبُ فِيهِ عِلْمًا سَلَكَ اللَّهُ بِهِ طَرِيقًا مِنْ طُرُقِ الْجَنَّةِ",
    source: { collection: "Sahih Muslim", hadithNumber: 145 }
  },
  {
    id: 106,
    type: 'coran',
    french: "Dis : 'En vérité, ma Salât, mes actes de dévotion, ma vie et ma mort appartiennent à Allah, Seigneur de l'Univers.'",
    arabic: "قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ",
    source: { surahName: "Al-An'am", surahNumber: 6, verseNumber: 162 }
  },
  {
    id: 107,
    type: 'hadith',
    french: "Le jeûne est une protection.",
    arabic: "الصِّيَامُ جُنَّةٌ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 1904 }
  },
  {
    id: 108,
    type: 'coran',
    french: "Et ne pense point qu'Allah soit inattentif à ce que font les injustes.",
    arabic: "وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا عَمَّا يَعْمَلُ الظَّالِمُونَ",
    source: { surahName: "Ibrahim", surahNumber: 14, verseNumber: 42 }
  },
  {
    id: 109,
    type: 'hadith',
    french: "Quiconque veille les nuits de Ramadan en prière avec foi et en espérant la récompense, ses péchés passés lui seront pardonnés.",
    arabic: "مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 37 }
  },
  {
    id: 110,
    type: 'coran',
    french: "Ceux qui croient, accomplissent les bonnes œuvres, observent la Salât et acquittent la Zakât, auront leur récompense auprès de leur Seigneur.",
    arabic: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَأَقَامُوا الصَّلَاةَ وَآتَوُا الزَّكَاةَ لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 277 }
  },
  {
    id: 111,
    type: 'hadith',
    french: "Allah aide le serviteur tant que le serviteur aide son frère.",
    arabic: "وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ",
    source: { collection: "Sahih Muslim", hadithNumber: 2699 }
  },
  {
    id: 112,
    type: 'coran',
    french: "Adorez Allah et ne Lui donnez aucun associé. Agissez avec bonté envers (vos) père et mère, les proches, les orphelins, les pauvres.",
    arabic: "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا ۖ وَبِالْوَالِدَيْنِ إِحْسَانًا وَبِذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ",
    source: { surahName: "An-Nisa", surahNumber: 4, verseNumber: 36 }
  },
  {
    id: 113,
    type: 'hadith',
    french: "La main qui donne est meilleure que celle qui reçoit.",
    arabic: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 1429 }
  },
  {
    id: 114,
    type: 'coran',
    french: "En effet, vous avez dans le Messager d'Allah un excellent modèle [à suivre].",
    arabic: "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ",
    source: { surahName: "Al-Ahzab", surahNumber: 33, verseNumber: 21 }
  },
  {
    id: 115,
    type: 'hadith',
    french: "Je vous ai laissé deux choses, vous ne vous égarerez jamais tant que vous vous y accrocherez : le Livre d'Allah et la Sounnah de Son Prophète.",
    arabic: "تَرَكْتُ فِيكُمْ أَمْرَيْنِ لَنْ تَضِلُّوا مَا تَمَسَّكْتُمْ بِهِمَا: كِتَابَ اللَّهِ وَسُنَّةَ نَبِيِّهِ",
    source: { collection: "Muwatta Malik", hadithNumber: 1628, grading: "Sahih (صحيح)" }
  },
  {
    id: 116,
    type: 'coran',
    french: "Et votre Seigneur dit : 'Appelez-Moi, Je vous répondrai.'",
    arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    source: { surahName: "Ghafir", surahNumber: 40, verseNumber: 60 }
  },
  {
    id: 117,
    type: 'hadith',
    french: "Notre Seigneur descend chaque nuit au ciel le plus proche... et dit : 'Qui M'invoque, que Je l'exauce ? Qui Me demande, que Je lui donne ?'",
    arabic: "يَنْزِلُ رَبُّنَا تَبَارَكَ وَتَعَالَى كُلَّ لَيْلَةٍ إِلَى السَّمَاءِ الدُّنْيَا... فَيَقُولُ: مَنْ يَدْعُونِي فَأَسْتَجِيبَ لَهُ؟ مَنْ يَسْأَلُنِي فَأُعْطِيَهُ؟",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 1152 }
  },
  {
    id: 118,
    type: 'coran',
    french: "Puis quand la Salât est terminée, dispersez-vous sur la terre, et recherchez de la grâce d'Allah, et invoquez beaucoup Allah afin que vous réussissiez.",
    arabic: "فَإِذَا قُضِيَتِ الصَّلَاةُ فَانتَشِرُوا فِي الْأَرْضِ وَابْتَغُوا مِن فَضْلِ اللَّهِ وَاذْكُرُوا اللَّهَ كَثِيرًا لَّعَلَّكُمْ تُفْلِحُونَ",
    source: { surahName: "Al-Jumu'ah", surahNumber: 62, verseNumber: 10 }
  },
  {
    id: 119,
    type: 'hadith',
    french: "L'Islam a commencé comme quelque chose d'étrange et il redeviendra quelque chose d'étrange comme il a commencé, alors bonne nouvelle aux étrangers.",
    arabic: "بَدَأَ الإِسْلامُ غَرِيبًا وَسَيَعُودُ كَمَا بَدَأَ غَرِيبًا فَطُوبَى لِلْغُرَبَاءِ",
    source: { collection: "Sahih Muslim", hadithNumber: 232 }
  },
  {
    id: 120,
    type: 'coran',
    french: "Seigneur ! Accorde nous belle part ici-bas, et belle part aussi dans l'au-delà ; et protège-nous du châtiment du Feu !",
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 201 }
  },
  {
    id: 121,
    type: 'hadith',
    french: "Il n'y a pas une maladie qu'Allah a créée sans qu'Il n'ait également créé son remède.",
    arabic: "مَا أَنْزَلَ اللَّهُ دَاءً إِلا أَنْزَلَ لَهُ شِفَاءً",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5641 }
  },
  {
    id: 122,
    type: 'coran',
    french: "Les croyants ne sont que des frères. Établissez la concorde entre vos frères, et craignez Allah, afin qu'on vous fasse miséricorde.",
    arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ ۚ وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ",
    source: { surahName: "Al-Hujurat", surahNumber: 49, verseNumber: 10 }
  },
  {
    id: 123,
    type: 'hadith',
    french: "Le lien de parenté est suspendu au Trône et dit : 'Celui qui me préserve, Allah le préservera et celui qui me rompt, Allah rompra avec lui'.",
    arabic: "الرَّحِمُ مُعَلَّقَةٌ بِالْعَرْشِ تَقُولُ: مَنْ وَصَلَنِي وَصَلَهُ اللَّهُ، وَمَنْ قَطَعَنِي قَطَعَهُ اللَّهُ",
    source: { collection: "Sahih Muslim", hadithNumber: 2566 }
  },
  {
    id: 124,
    type: 'coran',
    french: "Craignez donc Allah autant que vous pouvez, écoutez, obéissez et faites des dépenses [dans le bien], ce sera un bien pour vous.",
    arabic: "فَاتَّقُوا اللَّهَ مَا اسْتَطَعْتُمْ وَاسْمَعُوا وَأَطِيعُوا وَأَنفِقُوا خَيْرًا لِّأَنفُسِكُمْ",
    source: { surahName: "At-Taghabun", surahNumber: 64, verseNumber: 16 }
  },
  {
    id: 125,
    type: 'hadith',
    french: "Le meilleur d'entre vous est le meilleur envers sa famille.",
    arabic: "خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 3895, grading: "Sahih (صحيح)"}
  },
  {
    id: 126,
    type: 'coran',
    french: "Et que la haine pour un peuple ne vous incite pas à être injustes. Soyez justes, cela est plus proche de la piété.",
    arabic: "وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا ۚ اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَىٰ",
    source: { surahName: "Al-Ma'idah", surahNumber: 5, verseNumber: 8 }
  },
  {
    id: 127,
    type: 'hadith',
    french: "Le croyant fort est meilleur et plus aimé d'Allah que le croyant faible, et en chacun d'eux il y a du bien.",
    arabic: "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ وَفِي كُلٍّ خَيْرٌ",
    source: { collection: "Sahih Muslim", hadithNumber: 2999 }
  },
  {
    id: 128,
    type: 'coran',
    french: "Et ne détourne pas ton visage des hommes, et ne foule pas la terre avec arrogance : car Allah n'aime pas le présomptueux plein de gloriole.",
    arabic: "وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ",
    source: { surahName: "Luqman", surahNumber: 31, verseNumber: 18 }
  },
  {
    id: 129,
    type: 'coran',
    french: "Sachez que la vie de ce monde n'est que jeu, amusement, vaine parure, une course à l'orgueil entre vous...",
    arabic: "اعْلَمُوا أَنَّمَا الْحَيَاةُ الدُّنْيَا لَعِبٌ وَلَهْوٌ وَزِينَةٌ وَتَفَاخُرٌ بَيْنَكُمْ",
    source: { surahName: "Al-Hadid", surahNumber: 57, verseNumber: 20 }
  },
  {
    id: 130,
    type: 'coran',
    french: "Et quiconque craint Allah, Il lui facilite les choses.",
    arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا",
    source: { surahName: "At-Talaq", surahNumber: 65, verseNumber: 4 }
  },
  // Nouveaux ajouts (Lot 2 - Atteindre 200)
  {
    id: 131,
    type: 'coran',
    french: "Ô vous qui avez cru ! Le jeûne vous est prescrit comme il a été prescrit à ceux d'avant vous, ainsi atteindrez-vous la piété.",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 183 }
  },
  {
    id: 132,
    type: 'coran',
    french: "Allah veut pour vous la facilité, Il ne veut pas pour vous la difficulté.",
    arabic: "يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 185 }
  },
  {
    id: 133,
    type: 'coran',
    french: "Et quiconque fait le bien, que ce soit un homme ou une femme, tout en étant croyant... voilà ceux qui entreront au Paradis.",
    arabic: "وَمَن يَعْمَلْ مِنَ الصَّالِحَاتِ مِن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَأُولَٰئِكَ يَدْخُلُونَ الْجَنَّةَ",
    source: { surahName: "An-Nisa", surahNumber: 4, verseNumber: 124 }
  },
  {
    id: 134,
    type: 'coran',
    french: "Ne médisez pas les uns des autres.",
    arabic: "وَلَا يَغْتَب بَّعْضُكُم بَعْضًا",
    source: { surahName: "Al-Hujurat", surahNumber: 49, verseNumber: 12 }
  },
  {
    id: 135,
    type: 'coran',
    french: "Les bonnes œuvres dissipent les mauvaises.",
    arabic: "إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ",
    source: { surahName: "Hud", surahNumber: 11, verseNumber: 114 }
  },
  {
    id: 136,
    type: 'coran',
    french: "Certes, il y a dans la création des cieux et de la terre... des signes pour les doués d'intelligence.",
    arabic: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ... لَآيَاتٍ لِّأُولِي الْأَلْبَابِ",
    source: { surahName: "Al 'Imran", surahNumber: 3, verseNumber: 190 }
  },
  {
    id: 137,
    type: 'coran',
    french: "Votre Dieu est un Dieu unique. Il n'y a de divinité que Lui, le Tout Miséricordieux, le Très Miséricordieux.",
    arabic: "وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ ۖ لَّا إِلَٰهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 163 }
  },
  {
    id: 138,
    type: 'coran',
    french: "Et ne suivez pas les pas du Diable, car il est pour vous un ennemi déclaré.",
    arabic: "وَلَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ ۚ إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 168 }
  },
  {
    id: 139,
    type: 'coran',
    french: "Allah n'aime pas qu'on profère de mauvaises paroles en public, sauf si l'on a été injustement provoqué.",
    arabic: "لَّا يُحِبُّ اللَّهُ الْجَهْرَ بِالسُّوءِ مِنَ الْقَوْلِ إِلَّا مَن ظُلِمَ",
    source: { surahName: "An-Nisa", surahNumber: 4, verseNumber: 148 }
  },
  {
    id: 140,
    type: 'coran',
    french: "N'est-ce pas à Allah qu'appartient la religion pure ?",
    arabic: "أَلَا لِلَّهِ الدِّينُ الْخَالِصُ",
    source: { surahName: "Az-Zumar", surahNumber: 39, verseNumber: 3 }
  },
  {
    id: 141,
    type: 'coran',
    french: "Et quiconque se repent et accomplit une bonne œuvre, c'est vers Allah qu'il retourne, d'un retour sincère.",
    arabic: "وَمَن تَابَ وَعَمِلَ صَالِحًا فَإِنَّهُ يَتُوبُ إِلَى اللَّهِ مَتَابًا",
    source: { surahName: "Al-Furqan", surahNumber: 25, verseNumber: 71 }
  },
  {
    id: 142,
    type: 'coran',
    french: "C'est Nous qui donnons la vie et la mort et c'est Nous qui sommes l'Héritier [de tout].",
    arabic: "وَإِنَّا لَنَحْنُ نُحْيِي وَنُمِيتُ وَنَحْنُ الْوَارِثُونَ",
    source: { surahName: "Al-Hijr", surahNumber: 15, verseNumber: 23 }
  },
  {
    id: 143,
    type: 'coran',
    french: "N'ont-ils pas vu que Nous poussons l'eau vers un sol aride, puis Nous en faisons sortir une culture ?",
    arabic: "أَوَلَمْ يَرَوْا أَنَّا نَسُوقُ الْمَاءَ إِلَى الْأَرْضِ الْجُرُزِ فَنُخْرِجُ بِهِ زَرْعًا",
    source: { surahName: "As-Sajda", surahNumber: 32, verseNumber: 27 }
  },
  {
    id: 144,
    type: 'coran',
    french: "Dis : 'Si la mer était une encre [pour écrire] les paroles de mon Seigneur, la mer s'épuiserait avant que ne s'épuisent les paroles de mon Seigneur.'",
    arabic: "قُل لَّوْ كَانَ الْبَحْرُ مِدَادًا لِّكَلِمَاتِ رَبِّي لَنَفِدَ الْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَاتُ رَبِّي",
    source: { surahName: "Al-Kahf", surahNumber: 18, verseNumber: 109 }
  },
  {
    id: 145,
    type: 'coran',
    french: "Et Il est avec vous où que vous soyez. Et Allah observe parfaitement ce que vous faites.",
    arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
    source: { surahName: "Al-Hadid", surahNumber: 57, verseNumber: 4 }
  },
  {
    id: 146,
    type: 'coran',
    french: "Ceux qui dépensent [dans le sentier d'Allah] sans faire suivre leurs largesses ni d'un rappel ni d'un tort.",
    arabic: "الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ ثُمَّ لَا يُتْبِعُونَ مَا أَنفَقُوا مَنًّا وَلَا أَذًى",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 262 }
  },
  {
    id: 147,
    type: 'coran',
    french: "Ô vous qui avez cru ! Pourquoi dites-vous ce que vous ne faites pas ?",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ",
    source: { surahName: "As-Saff", surahNumber: 61, verseNumber: 2 }
  },
  {
    id: 148,
    type: 'coran',
    french: "Et accomplissez la Salât, acquittez la Zakât, et inclinez-vous avec ceux qui s'inclinent.",
    arabic: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 43 }
  },
  {
    id: 149,
    type: 'coran',
    french: "En vérité, Nous appartenons à Allah, et c'est à Lui que nous retournerons.",
    arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 156 }
  },
  {
    id: 150,
    type: 'coran',
    french: "Les mois sacrés sont au nombre de quatre. Telle est la religion de droiture. Durant ces mois, ne faites pas de tort à vous-mêmes.",
    arabic: "مِنْهَا أَرْبَعَةٌ حُرُمٌ ۚ ذَٰلِكَ الدِّينُ الْقَيِّمُ ۚ فَلَا تَظْلِمُوا فِيهِنَّ أَنفُسَكُمْ",
    source: { surahName: "At-Tawbah", surahNumber: 9, verseNumber: 36 }
  },
  {
    id: 151,
    type: 'hadith',
    french: "Quand Allah veut du bien à quelqu'un, Il lui donne la compréhension de la religion.",
    arabic: "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 71 }
  },
  {
    id: 152,
    type: 'hadith',
    french: "L'affaire du croyant est étonnante ! Tout ce qui lui arrive est un bien pour lui.",
    arabic: "عَجَبًا لأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ",
    source: { collection: "Sahih Muslim", hadithNumber: 2999 }
  },
  {
    id: 153,
    type: 'hadith',
    french: "Quiconque dit 'Gloire et louange à Allah' cent fois par jour, ses péchés seront pardonnés, même s'ils étaient aussi nombreux que l'écume de la mer.",
    arabic: "مَنْ قَالَ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ فِي يَوْمٍ مِائَةَ مَرَّةٍ حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6405 }
  },
  {
    id: 154,
    type: 'hadith',
    french: "Profite de cinq choses avant cinq autres : ta jeunesse avant ta vieillesse, ta santé avant ta maladie, ta richesse avant ta pauvreté, ton temps libre avant ton occupation et ta vie avant ta mort.",
    arabic: "اغْتَنِمْ خَمْسًا قَبْلَ خَمْسٍ: شَبَابَكَ قَبْلَ هَرَمِكَ، وَصِحَّتَكَ قَبْلَ سَقَمِكَ، وَغِنَاكَ قَبْلَ فَقْرِكَ، وَفَرَاغَكَ قَبْلَ شُغْلِكَ، وَحَيَاتَكَ قَبْلَ مَوْتِكَ",
    source: { collection: "Mustadrak al-Hakim", hadithNumber: 7846, grading: "Sahih (صحيح)" }
  },
  {
    id: 155,
    type: 'hadith',
    french: "Celui qui construit une mosquée pour Allah, Allah lui construira une demeure semblable au Paradis.",
    arabic: "مَنْ بَنَى مَسْجِدًا لِلَّهِ بَنَى اللَّهُ لَهُ مِثْلَهُ فِي الْجَنَّةِ",
    source: { collection: "Sahih Muslim", hadithNumber: 533 }
  },
  {
    id: 156,
    type: 'hadith',
    french: "Celui qui pourvoit aux besoins d'une veuve ou d'un pauvre est comme celui qui lutte dans le sentier d'Allah.",
    arabic: "السَّاعِي عَلَى الأَرْمَلَةِ وَالْمِسْكِينِ كَالْمُجَاهِدِ فِي سَبِيلِ اللَّهِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5353 }
  },
  {
    id: 157,
    type: 'hadith',
    french: "La prière en groupe est supérieure de vingt-sept degrés à la prière accomplie seul.",
    arabic: "صَلاةُ الْجَمَاعَةِ تَفْضُلُ صَلاةَ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 645 }
  },
  {
    id: 158,
    type: 'hadith',
    french: "Chaque bonne action est une aumône.",
    arabic: "كُلُّ مَعْرُوفٍ صَدَقَةٌ",
    source: { collection: "Sahih Muslim", hadithNumber: 1005 }
  },
  {
    id: 159,
    type: 'hadith',
    french: "Méfiez-vous de la suspicion, car la suspicion est le discours le plus mensonger.",
    arabic: "إِيَّاكُمْ وَالظَّنَّ فَإِنَّ الظَّنَّ أَكْذَبُ الْحَدِيثِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5143 }
  },
  {
    id: 160,
    type: 'hadith',
    french: "Celui qui ne demande pas à Allah, Allah se met en colère contre lui.",
    arabic: "مَنْ لَمْ يَسْأَلِ اللَّهَ يَغْضَبْ عَلَيْهِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 3373, grading: "Hasan (حسن)" }
  },
  {
    id: 161,
    type: 'hadith',
    french: "La 'Umra accomplie durant le Ramadan équivaut à un Hajj en ma compagnie.",
    arabic: "عُمْرَةٌ فِي رَمَضَانَ تَعْدِلُ حَجَّةً مَعِي",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 1863 }
  },
  {
    id: 162,
    type: 'hadith',
    french: "Celui qui récite le verset du Trône après chaque prière obligatoire, rien ne l'empêche d'entrer au Paradis si ce n'est la mort.",
    arabic: "مَنْ قَرَأَ آيَةَ الْكُرْسِيِّ دُبُرَ كُلِّ صَلاةٍ مَكْتُوبَةٍ لَمْ يَمْنَعْهُ مِنْ دُخُولِ الْجَنَّةِ إِلا أَنْ يَمُوتَ",
    source: { collection: "Sunan an-Nasa'i", grading: "Sahih (صحيح)" }
  },
  {
    id: 163,
    type: 'hadith',
    french: "Le Prophète ﷺ était le plus généreux des hommes, et il était encore plus généreux pendant le Ramadan.",
    arabic: "كَانَ النَّبِيُّ ﷺ أَجْوَدَ النَّاسِ، وَكَانَ أَجْوَدُ مَا يَكُونُ فِي رَمَضَانَ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6 }
  },
  {
    id: 164,
    type: 'hadith',
    french: "Trois invocations sont exaucées sans aucun doute : l'invocation de l'opprimé, celle du voyageur et celle du père pour son enfant.",
    arabic: "ثَلاثُ دَعَوَاتٍ مُسْتَجَابَاتٌ لا شَكَّ فِيهِنَّ: دَعْوَةُ الْمَظْلُومِ، وَدَعْوَةُ الْمُسَافِرِ، وَدَعْوَةُ الْوَالِدِ عَلَى وَلَدِهِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 1905, grading: "Hasan (حسن)" }
  },
  {
    id: 165,
    type: 'hadith',
    french: "Quiconque prie les douze unités de prière surérogatoires dans une journée et une nuit, une maison lui sera construite au Paradis.",
    arabic: "مَنْ صَلَّى فِي يَوْمٍ وَلَيْلَةٍ ثِنْتَيْ عَشْرَةَ رَكْعَةً بُنِيَ لَهُ بَيْتٌ فِي الْجَنَّةِ",
    source: { collection: "Sahih Muslim", hadithNumber: 728 }
  },
  {
    id: 166,
    type: 'hadith',
    french: "L'aumône éteint le péché comme l'eau éteint le feu.",
    arabic: "الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 614, grading: "Sahih (صحيح)" }
  },
  {
    id: 167,
    type: 'hadith',
    french: "Le repentir efface ce qui l'a précédé.",
    arabic: "التَّائِبُ مِنَ الذَّنْبِ كَمَنْ لا ذَنْبَ لَهُ",
    source: { collection: "Musnad Ahmad", grading: "Sahih (صحيح)" }
  },
  {
    id: 168,
    type: 'hadith',
    french: "La meilleure des aumônes est de donner de l'eau à boire.",
    arabic: "أَفْضَلُ الصَّدَقَةِ سَقْيُ الْمَاءِ",
    source: { collection: "Sunan Ibn Majah", hadithNumber: 3684, grading: "Hasan (حسن)" }
  },
  {
    id: 169,
    type: 'hadith',
    french: "Quiconque croit en Allah et au Jour Dernier, qu'il honore son invité.",
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيُكْرِمْ ضَيْفَهُ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6019 }
  },
  {
    id: 170,
    type: 'hadith',
    french: "Quiconque croit en Allah et au Jour Dernier, qu'il maintienne les liens de parenté.",
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَصِلْ رَحِمَهُ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6138 }
  },
  {
    id: 171,
    type: 'hadith',
    french: "Transmettez de ma part ne serait-ce qu'un verset.",
    arabic: "بَلِّغُوا عَنِّي وَلَوْ آيَةً",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 3461 }
  },
  {
    id: 172,
    type: 'hadith',
    french: "Les croyants, dans leur amour et leur compassion mutuels, sont comme un seul corps.",
    arabic: "مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ الْوَاحِدِ",
    source: { collection: "Sahih Muslim", hadithNumber: 2586 }
  },
  {
    id: 173,
    type: 'hadith',
    french: "L'agrément d'Allah se trouve dans l'agrément des parents.",
    arabic: "رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 1899, grading: "Sahih (صحيح)" }
  },
  {
    id: 174,
    type: 'hadith',
    french: "Le jeûne du jour de 'Arafat expie les péchés de l'année précédente et de l'année en cours.",
    arabic: "صِيَامُ يَوْمِ عَرَفَةَ أَحْتَسِبُ عَلَى اللَّهِ أَنْ يُكَفِّرَ السَّنَةَ الَّتِي قَبْلَهُ وَالسَّنَةَ الَّتِي بَعْدَهُ",
    source: { collection: "Sahih Muslim", hadithNumber: 1162 }
  },
  {
    id: 175,
    type: 'hadith',
    french: "La meilleure invocation est celle du jour de 'Arafat.",
    arabic: "خَيْرُ الدُّعَاءِ دُعَاءُ يَوْمِ عَرَفَةَ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 3585, grading: "Hasan (حسن)" }
  },
  {
    id: 176,
    type: 'hadith',
    french: "La prière effectuée dans le dernier tiers de la nuit est la plus susceptible d'être exaucée.",
    arabic: "أَقْرَبُ مَا يَكُونُ الرَّبُّ مِنَ الْعَبْدِ فِي جَوْفِ اللَّيْلِ الآخِرِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 3579, grading: "Hasan (حسن)" }
  },
  {
    id: 177,
    type: 'hadith',
    french: "Le siwak purifie la bouche et satisfait le Seigneur.",
    arabic: "السِّوَاكُ مَطْهَرَةٌ لِلْفَمِ مَرْضَاةٌ لِلرَّبِّ",
    source: { collection: "Sunan an-Nasa'i", hadithNumber: 5, grading: "Sahih (صحيح)" }
  },
  {
    id: 178,
    type: 'hadith',
    french: "Les anges n'entrent pas dans une maison où il y a un chien ou une image.",
    arabic: "لا تَدْخُلُ الْمَلائِكَةُ بَيْتًا فِيهِ كَلْبٌ وَلا صُورَةٌ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5949 }
  },
  {
    id: 179,
    type: 'hadith',
    french: "Celui qui est privé de douceur est privé de tout bien.",
    arabic: "مَنْ يُحْرَمِ الرِّفْقَ يُحْرَمِ الْخَيْرَ كُلَّهُ",
    source: { collection: "Sahih Muslim", hadithNumber: 2592 }
  },
  {
    id: 180,
    type: 'hadith',
    french: "Il n'est pas permis à un musulman de rompre avec son frère plus de trois jours.",
    arabic: "لا يَحِلُّ لِمُسْلِمٍ أَنْ يَهْجُرَ أَخَاهُ فَوْقَ ثَلاثِ لَيَالٍ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6237 }
  },
  {
    id: 181,
    type: 'hadith',
    french: "La recherche de la connaissance est une obligation pour chaque musulman.",
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    source: { collection: "Sunan Ibn Majah", hadithNumber: 224, grading: "Sahih (صحيح)" }
  },
  {
    id: 182,
    type: 'hadith',
    french: "Celui qui veut qu'on lui élargisse sa subsistance et qu'on prolonge sa vie, qu'il maintienne ses liens de parenté.",
    arabic: "مَنْ سَرَّهُ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ أَوْ يُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5986 }
  },
  {
    id: 183,
    type: 'hadith',
    french: "En vérité, la sincérité mène à la piété, et la piété mène au Paradis.",
    arabic: "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ",
    source: { collection: "Sahih Muslim", hadithNumber: 2607 }
  },
  {
    id: 184,
    type: 'hadith',
    french: "Nourrissez l'affamé, rendez visite au malade et libérez le captif.",
    arabic: "أَطْعِمُوا الْجَائِعَ وَعُودُوا الْمَرِيضَ وَفُكُّوا الْعَانِيَ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5373 }
  },
  {
    id: 185,
    type: 'hadith',
    french: "Le meilleur des jeûnes après le Ramadan est le jeûne du mois d'Allah, Muharram.",
    arabic: "أَفْضَلُ الصِّيَامِ بَعْدَ رَمَضَانَ شَهْرُ اللَّهِ الْمُحَرَّمُ",
    source: { collection: "Sahih Muslim", hadithNumber: 1163 }
  },
  {
    id: 186,
    type: 'hadith',
    french: "La différence entre notre jeûne et celui des gens du Livre est le repas de l'aube (Suhur).",
    arabic: "فَصْلُ مَا بَيْنَ صِيَامِنَا وَصِيَامِ أَهْلِ الْكِتَابِ أَكْلَةُ السَّحَرِ",
    source: { collection: "Sahih Muslim", hadithNumber: 1096 }
  },
  {
    id: 187,
    type: 'hadith',
    french: "Quand l'un de vous prie, qu'il ne crache pas devant lui, car Allah est en face de lui lorsqu'il prie.",
    arabic: "إِذَا صَلَّى أَحَدُكُمْ فَلا يَبْصُقْ قِبَلَ وَجْهِهِ فَإِنَّ اللَّهَ قِبَلَ وَجْهِهِ إِذَا صَلَّى",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 416 }
  },
  {
    id: 188,
    type: 'hadith',
    french: "Il y a une heure le vendredi pendant laquelle, si un serviteur musulman demande quelque chose à Allah, Il le lui accordera certainement.",
    arabic: "فِي الْجُمُعَةِ سَاعَةٌ لا يُوَافِقُهَا عَبْدٌ مُسْلِمٌ وَهُوَ قَائِمٌ يُصَلِّي يَسْأَلُ اللَّهَ شَيْئًا إِلا أَعْطَاهُ إِيَّاهُ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 935 }
  },
  {
    id: 189,
    type: 'hadith',
    french: "La prière d'un homme dans la mosquée est vingt-cinq fois plus récompensée que sa prière chez lui ou au marché.",
    arabic: "صَلاةُ الرَّجُلِ فِي الْجَمَاعَةِ تُضَعَّفُ عَلَى صَلاتِهِ فِي بَيْتِهِ وَفِي سُوقِهِ خَمْسًا وَعِشْرِينَ ضِعْفًا",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 647 }
  },
  {
    id: 190,
    type: 'hadith',
    french: "Le Prophète ﷺ nous a ordonné sept choses : rendre visite au malade, suivre les cortèges funèbres, invoquer pour celui qui éternue...",
    arabic: "أَمَرَنَا النَّبِيُّ ﷺ بِسَبْعٍ: بِعِيَادَةِ الْمَرِيضِ، وَاتِّبَاعِ الْجَنَائِزِ، وَتَشْمِيتِ الْعَاطِسِ...",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 1239 }
  },
  {
    id: 191,
    type: 'hadith',
    french: "La satisfaction du Seigneur réside dans la satisfaction du père.",
    arabic: "رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 1899, grading: "Sahih (صحيح)" }
  },
  {
    id: 192,
    type: 'hadith',
    french: "Écarter un obstacle du chemin est une aumône.",
    arabic: "إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 2989 }
  },
  {
    id: 193,
    type: 'hadith',
    french: "Celui qui imite un peuple en fait partie.",
    arabic: "مَنْ تَشَبَّهَ بِقَوْمٍ فَهُوَ مِنْهُمْ",
    source: { collection: "Sunan Abu Dawud", hadithNumber: 4031, grading: "Sahih (صحيح)" }
  },
  {
    id: 194,
    type: 'hadith',
    french: "Certes, Allah est beau et Il aime la beauté.",
    arabic: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
    source: { collection: "Sahih Muslim", hadithNumber: 91 }
  },
  {
    id: 195,
    type: 'hadith',
    french: "Le début de cette communauté a été sauvé par la certitude et l'ascétisme, et sa fin périra par l'avarice et les longues espérances.",
    arabic: "صَلَاحُ أَوَّلِ هَذِهِ الْأُمَّةِ بِالْيَقِينِ وَالزُّهْدِ، وَيَهْلِكُ آخِرُهَا بِالْبُخْلِ وَالْأَمَلِ",
    source: { collection: "Musnad Ahmad", grading: "Hasan (حسن)" }
  },
  {
    id: 196,
    type: 'hadith',
    french: "Aucun mal n'atteint le musulman, ni anxiété, ni chagrin... sans qu'Allah ne lui expie une partie de ses péchés.",
    arabic: "مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلا وَصَبٍ وَلا هَمٍّ وَلا حُزْنٍ... إِلا كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5641 }
  },
  {
    id: 197,
    type: 'hadith',
    french: "Soyez justes envers vos enfants.",
    arabic: "اعْدِلُوا بَيْنَ أَوْلادِكُمْ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 2587 }
  },
  {
    id: 198,
    type: 'hadith',
    french: "L'usure comporte soixante-treize portes, la moins grave est comme si un homme épousait sa propre mère.",
    arabic: "الرِّبَا ثَلاثَةٌ وَسَبْعُونَ بَابًا أَيْسَرُهَا مِثْلُ أَنْ يَنْكِحَ الرَّجُلُ أُمَّهُ",
    source: { collection: "Mustadrak al-Hakim", hadithNumber: 2259, grading: "Sahih (صحيح)" }
  },
  {
    id: 199,
    type: 'hadith',
    french: "Le Prophète maudissait celui qui pratique l'usure, celui qui la reçoit, celui qui l'écrit et ses deux témoins.",
    arabic: "لَعَنَ رَسُولُ اللَّهِ ﷺ آكِلَ الرِّبَا وَمُؤْكِلَهُ وَكَاتِبَهُ وَشَاهِدَيْهِ",
    source: { collection: "Sahih Muslim", hadithNumber: 1598 }
  },
  {
    id: 200,
    type: 'hadith',
    french: "Celui qui cache les défauts d'un musulman, Allah cachera ses défauts dans ce monde et dans l'au-delà.",
    arabic: "مَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ فِي الدُّنْيَا وَالآخِرَةِ",
    source: { collection: "Sahih Muslim", hadithNumber: 2699 }
  },
  // Nouveaux ajouts (Lot 3 - Atteindre 300)
  {
    id: 201,
    type: 'coran',
    french: "Et ne vous divisez pas. Et rappelez-vous le bienfait d'Allah sur vous lorsque vous étiez ennemis, c'est Lui qui réconcilia vos cœurs.",
    arabic: "وَلَا تَفَرَّقُوا ۚ وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ إِذْ كُنتُمْ أَعْدَاءً فَأَلَّفَ بَيْنَ قُلُوبِكُمْ",
    source: { surahName: "Al 'Imran", surahNumber: 3, verseNumber: 103 }
  },
  {
    id: 202,
    type: 'hadith',
    french: "L'homme suit la religion de son ami proche, que chacun de vous prenne donc garde à qui il prend pour ami.",
    arabic: "الرَّجُلُ عَلَى دِينِ خَلِيلِهِ فَلْيَنْظُرْ أَحَدُكُمْ مَنْ يُخَالِلُ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2378, grading: "Hasan (حسن)" }
  },
  {
    id: 203,
    type: 'coran',
    french: "Et ne vous approchez pas de la fornication. En vérité, c'est une turpitude et quel mauvais chemin !",
    arabic: "وَلَا تَقْرَبُوا الزِّنَا ۖ إِنَّهُ كَانَ فَاحِشَةً وَسَاءَ سَبِيلًا",
    source: { surahName: "Al-Isra", surahNumber: 17, verseNumber: 32 }
  },
  {
    id: 204,
    type: 'hadith',
    french: "Le signe de l'hypocrite est triple : quand il parle, il ment ; quand il promet, il ne tient pas sa promesse ; et quand on lui fait confiance, il trahit.",
    arabic: "آيَةُ الْمُنَافِقِ ثَلاثٌ: إِذَا حَدَّثَ كَذَبَ، وَإِذَا وَعَدَ أَخْلَفَ، وَإِذَا اؤْتُمِنَ خَانَ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 33 }
  },
  {
    id: 205,
    type: 'coran',
    french: "Ô les croyants ! Remplissez fidèlement vos engagements.",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ",
    source: { surahName: "Al-Ma'idah", surahNumber: 5, verseNumber: 1 }
  },
  {
    id: 206,
    type: 'hadith',
    french: "Celui qui est satisfait de ce qu'Allah lui a alloué comme subsistance, alors cela lui suffira.",
    arabic: "مَنْ رَضِيَ بِاللَّهِ رَبًّا وَبِالإِسْلامِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا وَجَبَتْ لَهُ الْجَنَّةُ",
    source: { collection: "Musnad Ahmad", grading: "Hasan (حسن)" }
  },
  {
    id: 207,
    type: 'coran',
    french: "Les gaspilleurs sont les frères des diables ; et le Diable est très ingrat envers son Seigneur.",
    arabic: "إِنَّ الْمُبَذِّرِينَ كَانُوا إِخْوَانَ الشَّيَاطِينِ ۖ وَكَانَ الشَّيْطَانُ لِرَبِّهِ كَفُورًا",
    source: { surahName: "Al-Isra", surahNumber: 17, verseNumber: 27 }
  },
  {
    id: 208,
    type: 'hadith',
    french: "La meilleure des aumônes est celle faite par une personne qui est en bonne santé et avare, craignant la pauvreté et espérant la richesse.",
    arabic: "أَفْضَلُ الصَّدَقَةِ أَنْ تَصَدَّقَ وَأَنْتَ صَحِيحٌ شَحِيحٌ تَخْشَى الْفَقْرَ وَتَأْمُلُ الْغِنَى",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 1419 }
  },
  {
    id: 209,
    type: 'coran',
    french: "Ceux qui évitent les grands péchés ainsi que les turpitudes et [qui ne commettent] que des fautes légères, ton Seigneur est certes, d'une immense absolution.",
    arabic: "الَّذِينَ يَجْتَنِبُونَ كَبَائِرَ الْإِثْمِ وَالْفَوَاحِشَ إِلَّا اللَّمَمَ ۚ إِنَّ رَبَّكَ وَاسِعُ الْمَغْفِرَةِ",
    source: { surahName: "An-Najm", surahNumber: 53, verseNumber: 32 }
  },
  {
    id: 210,
    type: 'hadith',
    french: "Allah aime celui qui, lorsqu'il fait un travail, le fait avec perfection.",
    arabic: "إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلاً أَنْ يُتْقِنَهُ",
    source: { collection: "Al-Bayhaqi", grading: "Hasan (حسن)" }
  },
  {
    id: 211,
    type: 'coran',
    french: "Allah ne veut pas vous imposer quelque gêne, mais Il veut vous purifier et parfaire sur vous Son bienfait.",
    arabic: "مَا يُرِيدُ اللَّهُ لِيَجْعَلَ عَلَيْكُم مِّنْ حَرَجٍ وَلَٰكِن يُرِيدُ لِيُطَهِّرَكُمْ وَلِيُتِمَّ نِعْمَتَهُ عَلَيْكُمْ",
    source: { surahName: "Al-Ma'idah", surahNumber: 5, verseNumber: 6 }
  },
  {
    id: 212,
    type: 'hadith',
    french: "Quiconque se lève la nuit durant Laylat al-Qadr avec foi et en espérant la récompense, ses péchés passés lui seront pardonnés.",
    arabic: "مَنْ قَامَ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 2014 }
  },
  {
    id: 213,
    type: 'coran',
    french: "Prélève de leurs biens une Sadaqa par laquelle tu les purifies et les bénis.",
    arabic: "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا",
    source: { surahName: "At-Tawbah", surahNumber: 9, verseNumber: 103 }
  },
  {
    id: 214,
    type: 'hadith',
    french: "Cherchez la Nuit du Destin dans les nuits impaires des dix derniers jours de Ramadan.",
    arabic: "تَحَرَّوْا لَيْلَةَ الْقَدْرِ فِي الْوِتْرِ مِنَ الْعَشْرِ الأَوَاخِرِ مِنْ رَمَضَانَ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 2017 }
  },
  {
    id: 215,
    type: 'coran',
    french: "Si l'un de vos débiteurs est dans la gêne, accordez-lui un délai jusqu'à ce qu'il soit dans l'aisance. Mais il est mieux pour vous de faire remise de la dette par charité !",
    arabic: "وَإِن كَانَ ذُو عُسْرَةٍ فَنَظِرَةٌ إِلَىٰ مَيْسَرَةٍ ۚ وَأَن تَصَدَّقُوا خَيْرٌ لَّكُمْ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 280 }
  },
  {
    id: 216,
    type: 'hadith',
    french: "La meilleure des paroles est la parole d'Allah, et la meilleure des guides est la guide de Muhammad ﷺ.",
    arabic: "إِنَّ أَصْدَقَ الْحَدِيثِ كِتَابُ اللَّهِ، وَأَحْسَنَ الْهَدْيِ هَدْيُ مُحَمَّدٍ ﷺ",
    source: { collection: "Sahih Muslim", hadithNumber: 867 }
  },
  {
    id: 217,
    type: 'coran',
    french: "Ne diminuez pas aux gens leurs biens et ne semez pas la corruption sur la terre après qu'elle ait été réformée.",
    arabic: "وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا",
    source: { surahName: "Al-A'raf", surahNumber: 7, verseNumber: 85 }
  },
  {
    id: 218,
    type: 'hadith',
    french: "Le péché est ce qui hésite dans ton âme et que tu détesterais que les gens découvrent.",
    arabic: "الإِثْمُ مَا حَاكَ فِي نَفْسِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ",
    source: { collection: "Sahih Muslim", hadithNumber: 2553 }
  },
  {
    id: 219,
    type: 'coran',
    french: "Et ne tuez pas vos enfants par crainte de pauvreté ; c'est Nous qui subvenons à leurs besoins et aux vôtres.",
    arabic: "وَلَا تَقْتُلُوا أَوْلَادَكُمْ خَشْيَةَ إِمْلَاقٍ ۖ نَّحْنُ نَرْزُقُهُمْ وَإِيَّاكُمْ",
    source: { surahName: "Al-Isra", surahNumber: 17, verseNumber: 31 }
  },
  {
    id: 220,
    type: 'hadith',
    french: "Allah a prescrit la bienfaisance en toute chose.",
    arabic: "إِنَّ اللَّهَ كَتَبَ الإِحْسَانَ عَلَى كُلِّ شَيْءٍ",
    source: { collection: "Sahih Muslim", hadithNumber: 1955 }
  },
  {
    id: 221,
    type: 'coran',
    french: "Remplissez l'engagement, car on sera interrogé au sujet des engagements.",
    arabic: "وَأَوْفُوا بِالْعَهْدِ ۖ إِنَّ الْعَهْدَ كَانَ مَسْئُولًا",
    source: { surahName: "Al-Isra", surahNumber: 17, verseNumber: 34 }
  },
  {
    id: 222,
    type: 'hadith',
    french: "Le paradis se trouve sous les pieds des mères.",
    arabic: "الْجَنَّةُ تَحْتَ أَقْدَامِ الأُمَّهَاتِ",
    source: { collection: "Sunan an-Nasa'i", hadithNumber: 3104, grading: "Hasan (حسن)" }
  },
  {
    id: 223,
    type: 'coran',
    french: "Ne mélangez pas le faux à la vérité, et ne cachez pas la vérité alors que vous savez.",
    arabic: "وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَأَنتُمْ تَعْلَمُونَ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 42 }
  },
  {
    id: 224,
    type: 'hadith',
    french: "Donnez à la route son dû : baisser le regard, s'abstenir de nuire, rendre le salut, ordonner le bien et interdire le mal.",
    arabic: "أَعْطُوا الطَّرِيقَ حَقَّهُ: غَضُّ الْبَصَرِ، وَكَفُّ الأَذَى، وَرَدُّ السَّلامِ، وَالأَمْرُ بِالْمَعْرُوفِ وَالنَّهْيُ عَنِ الْمُنْكَرِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 2465 }
  },
  {
    id: 225,
    type: 'coran',
    french: "Et quand on vous adresse un salut, saluez d'une façon meilleure, ou bien rendez-le simplement.",
    arabic: "وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا",
    source: { surahName: "An-Nisa", surahNumber: 4, verseNumber: 86 }
  },
  {
    id: 226,
    type: 'hadith',
    french: "Celui qui croit en Allah et au Jour Dernier, qu'il ne nuise pas à son voisin.",
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلا يُؤْذِ جَارَهُ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6019 }
  },
  {
    id: 227,
    type: 'coran',
    french: "Et Il a mis entre vous de l'affection et de la miséricorde. Il y a en cela des preuves pour des gens qui réfléchissent.",
    arabic: "وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    source: { surahName: "Ar-Rum", surahNumber: 30, verseNumber: 21 }
  },
  {
    id: 228,
    type: 'hadith',
    french: "N'entrera pas au Paradis le calomniateur.",
    arabic: "لا يَدْخُلُ الْجَنَّةَ قَتَّاتٌ",
    source: { collection: "Sahih Muslim", hadithNumber: 105 }
  },
  {
    id: 229,
    type: 'coran',
    french: "Ô vous qui avez cru ! Obéissez à Allah, obéissez au Messager et à ceux d'entre vous qui détiennent le commandement.",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ",
    source: { surahName: "An-Nisa", surahNumber: 4, verseNumber: 59 }
  },
  {
    id: 230,
    type: 'hadith',
    french: "L'honnêteté mène à la piété, et la piété mène au Paradis.",
    arabic: "عَلَيْكُمْ بِالصِّدْقِ فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6094 }
  },
  {
    id: 231,
    type: 'coran',
    french: "Seuls craignent Allah, parmi Ses serviteurs, les savants.",
    arabic: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ",
    source: { surahName: "Fatir", surahNumber: 35, verseNumber: 28 }
  },
  {
    id: 232,
    type: 'hadith',
    french: "Celui qui se tait est sauvé.",
    arabic: "مَنْ صَمَتَ نَجَا",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2501, grading: "Sahih (صحيح)" }
  },
  {
    id: 233,
    type: 'coran',
    french: "C'est Lui qui a fait de la nuit et du jour une succession pour quiconque veut se souvenir ou être reconnaissant.",
    arabic: "وَهُوَ الَّذِي جَعَلَ اللَّيْلَ وَالنَّهَارَ خِلْفَةً لِّمَنْ أَرَادَ أَن يَذَّكَّرَ أَوْ أَرَادَ شُكُورًا",
    source: { surahName: "Al-Furqan", surahNumber: 25, verseNumber: 62 }
  },
  {
    id: 234,
    type: 'hadith',
    french: "Toute innovation (en religion) est un égarement, et tout égarement est dans le Feu.",
    arabic: "وَكُلَّ بِدْعَةٍ ضَلالَةٌ، وَكُلَّ ضَلالَةٍ فِي النَّارِ",
    source: { collection: "Sunan an-Nasa'i", hadithNumber: 1578, grading: "Sahih (صحيح)" }
  },
  {
    id: 235,
    type: 'coran',
    french: "Et si vous comptez les bienfaits d'Allah, vous ne saurez les dénombrer. Car Allah est Pardonneur, et Très Miséricordieux.",
    arabic: "وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا ۗ إِنَّ اللَّهَ لَغَفُورٌ رَّحِيمٌ",
    source: { surahName: "An-Nahl", surahNumber: 16, verseNumber: 18 }
  },
  {
    id: 236,
    type: 'hadith',
    french: "Celui qui mange à sa faim alors que son voisin a faim à côté de lui n'est pas un croyant.",
    arabic: "لَيْسَ الْمُؤْمِنُ الَّذِي يَشْبَعُ وَجَارُهُ جَائِعٌ إِلَى جَنْبِهِ",
    source: { collection: "Al-Hakim", grading: "Sahih (صحيح)" }
  },
  {
    id: 237,
    type: 'coran',
    french: "Et Nous avons fait de l'eau toute chose vivante. Ne croiront-ils donc pas ?",
    arabic: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ",
    source: { surahName: "Al-Anbiya", surahNumber: 21, verseNumber: 30 }
  },
  {
    id: 238,
    type: 'hadith',
    french: "Quiconque jeûne un jour dans le sentier d'Allah, Allah éloignera son visage de l'Enfer d'une distance de soixante-dix ans.",
    arabic: "مَنْ صَامَ يَوْمًا فِي سَبِيلِ اللَّهِ بَعَّدَ اللَّهُ وَجْهَهُ عَنِ النَّارِ سَبْعِينَ خَرِيفًا",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 2840 }
  },
  {
    id: 239,
    type: 'coran',
    french: "Et ne faites pas de la main d'Allah un prétexte dans vos serments pour vous dispenser d'être pieux, bienfaisants et de réconcilier les gens.",
    arabic: "وَلَا تَجْعَلُوا اللَّهَ عُرْضَةً لِّأَيْمَانِكُمْ أَن تَبَرُّوا وَتَتَّقُوا وَتُصْلِحُوا بَيْنَ النَّاسِ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 224 }
  },
  {
    id: 240,
    type: 'hadith',
    french: "La prière est une lumière, l'aumône est une preuve, et la patience est une clarté.",
    arabic: "الصَّلاةُ نُورٌ، وَالصَّدَقَةُ بُرْهَانٌ، وَالصَّبْرُ ضِيَاءٌ",
    source: { collection: "Sahih Muslim", hadithNumber: 223 }
  },
  {
    id: 241,
    type: 'coran',
    french: "Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par lui-même.",
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 255 }
  },
  {
    id: 242,
    type: 'hadith',
    french: "Renouvelez votre foi en disant : 'La ilaha ill-Allah' (Il n'y a de divinité digne d'adoration qu'Allah).",
    arabic: "جَدِّدُوا إِيمَانَكُمْ بِقَوْلِ: لَا إِلَهَ إِلَّا اللَّهُ",
    source: { collection: "Musnad Ahmad", grading: "Hasan (حسن)" }
  },
  {
    id: 243,
    type: 'coran',
    french: "C'est Lui le Premier et le Dernier, l'Apparent et le Caché et Il est Omniscient.",
    arabic: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ ۖ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
    source: { surahName: "Al-Hadid", surahNumber: 57, verseNumber: 3 }
  },
  {
    id: 244,
    type: 'hadith',
    french: "Le Jour de la Résurrection, le soleil se rapprochera des créatures... Chacun sera dans sa sueur selon ses œuvres.",
    arabic: "تُدْنَى الشَّمْسُ يَوْمَ الْقِيَامَةِ مِنَ الْخَلْقِ... فَيَكُونُ النَّاسُ عَلَى قَدْرِ أَعْمَالِهِمْ فِي الْعَرَقِ",
    source: { collection: "Sahih Muslim", hadithNumber: 2864 }
  },
  {
    id: 245,
    type: 'coran',
    french: "Il n'engendre pas, et Il n'a pas été engendré. Et nul n'est égal à Lui.",
    arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
    source: { surahName: "Al-Ikhlas", surahNumber: 112, verseNumber: "3-4" }
  },
  {
    id: 246,
    type: 'hadith',
    french: "Dieu a quatre-vingt-dix-neuf noms, cent moins un. Quiconque les énumère entrera au Paradis.",
    arabic: "إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا مِائَةً إِلا وَاحِدًا مَنْ أَحْصَاهَا دَخَلَ الْجَنَّةَ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 2736 }
  },
  {
    id: 247,
    type: 'coran',
    french: "Si vous évitez les grands péchés qui vous sont interdits, Nous effacerons vos méfaits et Nous vous ferons entrer dans un endroit honorable.",
    arabic: "إِن تَجْتَنِبُوا كَبَائِرَ مَا تُنْهَوْنَ عَنْهُ نُكَفِّرْ عَنكُمْ سَيِّئَاتِكُمْ وَنُدْخِلْكُم مُّدْخَلًا كَرِيمًا",
    source: { surahName: "An-Nisa", surahNumber: 4, verseNumber: 31 }
  },
  {
    id: 248,
    type: 'hadith',
    french: "Évitez les sept péchés capitaux : associer à Allah, la sorcellerie, tuer l'âme qu'Allah a interdite sauf en droit...",
    arabic: "اجْتَنِبُوا السَّبْعَ الْمُوبِقَاتِ: الشِّرْكُ بِاللَّهِ، وَالسِّحْرُ، وَقَتْلُ النَّفْسِ الَّتِي حَرَّمَ اللَّهُ إِلا بِالْحَقِّ...",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 2766 }
  },
  {
    id: 249,
    type: 'coran',
    french: "C'est à Allah qu'appartient le royaume des cieux et de la terre. Et vers Allah sera le retour final.",
    arabic: "وَلِلَّهِ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ ۖ وَإِلَى اللَّهِ الْمَصِيرُ",
    source: { surahName: "An-Nur", surahNumber: 24, verseNumber: 42 }
  },
  {
    id: 250,
    type: 'hadith',
    french: "Certes, Allah n'est pas injuste du poids d'un atome.",
    arabic: "إِنَّ اللَّهَ لا يَظْلِمُ مِثْقَالَ ذَرَّةٍ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 3037, grading: "Sahih (صحيح)" }
  },
  {
    id: 251,
    type: 'coran',
    french: "Toute âme goûtera la mort. Et c'est seulement au Jour de la Résurrection que vous recevrez votre pleine rétribution.",
    arabic: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ۗ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ الْقِيَامَةِ",
    source: { surahName: "Al 'Imran", surahNumber: 3, verseNumber: 185 }
  },
  {
    id: 252,
    type: 'hadith',
    french: "Multipliez le souvenir de celle qui détruit les plaisirs : la mort.",
    arabic: "أَكْثِرُوا ذِكْرَ هَادِمِ اللَّذَّاتِ: الْمَوْتِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2307, grading: "Hasan (حسن)" }
  },
  {
    id: 253,
    type: 'coran',
    french: "Le jour où l'homme verra ce que ses deux mains ont préparé ; et l'infidèle dira : 'Hélas pour moi ! Comme j'aurais aimé n'être que poussière'.",
    arabic: "يَوْمَ يَنظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُولُ الْكَافِرُ يَا لَيْتَنِي كُنتُ تُرَابًا",
    source: { surahName: "An-Naba", surahNumber: 78, verseNumber: 40 }
  },
  {
    id: 254,
    type: 'hadith',
    french: "La tombe est la première demeure de l'au-delà. Si l'on en est sauvé, ce qui suit est plus facile.",
    arabic: "إِنَّ الْقَبْرَ أَوَّلُ مَنَازِلِ الآخِرَةِ، فَإِنْ نَجَا مِنْهُ فَمَا بَعْدَهُ أَيْسَرُ مِنْهُ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2308, grading: "Hasan (حسن)" }
  },
  {
    id: 255,
    type: 'coran',
    french: "Et la pesée, ce jour-là, sera la juste pesée : ceux dont les balances seront lourdes, voilà les bienheureux.",
    arabic: "وَالْوَزْنُ يَوْمَئِذٍ الْحَقُّ ۚ فَمَن ثَقُلَتْ مَوَازِينُهُ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
    source: { surahName: "Al-A'raf", surahNumber: 7, verseNumber: 8 }
  },
  {
    id: 256,
    type: 'hadith',
    french: "Il n'y a personne parmi vous à qui son Seigneur ne parlera pas directement, sans intermédiaire.",
    arabic: "مَا مِنْكُمْ مِنْ أَحَدٍ إِلا سَيُكَلِّمُهُ رَبُّهُ لَيْسَ بَيْنَهُ وَبَيْنَهُ تَرْجُمَانٌ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 7443 }
  },
  {
    id: 257,
    type: 'coran',
    french: "Ce jour-là, les gens sortiront séparément pour que leur soient montrées leurs œuvres.",
    arabic: "يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِّيُرَوْا أَعْمَالَهُمْ",
    source: { surahName: "Az-Zalzalah", surahNumber: 99, verseNumber: 6 }
  },
  {
    id: 258,
    type: 'hadith',
    french: "Le feu a été entouré de désirs, et le Paradis a été entouré de difficultés.",
    arabic: "حُفَّتِ النَّارُ بِالشَّهَوَاتِ وَحُفَّتِ الْجَنَّةُ بِالْمَكَارِهِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6487 }
  },
  {
    id: 259,
    type: 'coran',
    french: "Quant à celui qui recevra son livre dans sa main droite, il dira : 'Tenez ! Lisez mon livre'.",
    arabic: "فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ فَيَقُولُ هَاؤُمُ اقْرَءُوا كِتَابِيَهْ",
    source: { surahName: "Al-Haqqah", surahNumber: 69, verseNumber: 19 }
  },
  {
    id: 260,
    type: 'hadith',
    french: "Le pont (As-Sirat) est plus fin qu'un cheveu et plus tranchant qu'une épée.",
    arabic: "الصِّرَاطُ أَدَقُّ مِنَ الشَّعْرَةِ وَأَحَدُّ مِنَ السَّيْفِ",
    source: { collection: "Sahih Muslim", hadithNumber: 183 }
  },
  {
    id: 261,
    type: 'coran',
    french: "Implorez le pardon de votre Seigneur, car Il est grand Pardonneur.",
    arabic: "اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا",
    source: { surahName: "Nuh", surahNumber: 71, verseNumber: 10 }
  },
  {
    id: 262,
    type: 'hadith',
    french: "Tous les fils d'Adam commettent des erreurs, et les meilleurs d'entre eux sont ceux qui se repentent.",
    arabic: "كُلُّ ابْنِ آدَمَ خَطَّاءٌ وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2499, grading: "Hasan (حسن)" }
  },
  {
    id: 263,
    type: 'coran',
    french: "Et je ne m'innocente pas moi-même. L'âme est très certainement incitatrice au mal, à moins que mon Seigneur ne fasse miséricorde.",
    arabic: "وَمَا أُبَرِّئُ نَفْسِي ۚ إِنَّ النَّفْسَ لَأَمَّارَةٌ بِالسُّوءِ إِلَّا مَا رَحِمَ رَبِّي",
    source: { surahName: "Yusuf", surahNumber: 12, verseNumber: 53 }
  },
  {
    id: 264,
    type: 'hadith',
    french: "Par Allah, je demande pardon à Allah et je me repens à Lui plus de soixante-dix fois par jour.",
    arabic: "وَاللَّهِ إِنِّي لأَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ فِي الْيَوْمِ أَكْثَرَ مِنْ سَبْعِينَ مَرَّةً",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6307 }
  },
  {
    id: 265,
    type: 'coran',
    french: "Seigneur, pardonne-moi, ainsi qu'à mes père et mère et à celui qui entre dans ma demeure croyant, et aux croyants et croyantes.",
    arabic: "رَّبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
    source: { surahName: "Nuh", surahNumber: 71, verseNumber: 28 }
  },
  {
    id: 266,
    type: 'hadith',
    french: "Le regret est un repentir.",
    arabic: "النَّدَمُ تَوْبَةٌ",
    source: { collection: "Sunan Ibn Majah", hadithNumber: 4252, grading: "Sahih (صحيح)" }
  },
  {
    id: 267,
    type: 'coran',
    french: "Ceux qui, ayant commis une turpitude ou causé quelque préjudice à leurs propres âmes (en désobéissant à Allah), se souviennent d'Allah et demandent pardon pour leurs péchés.",
    arabic: "وَالَّذِينَ إِذَا فَعَلُوا فَاحِشَةً أَوْ ظَلَمُوا أَنفُسَهُمْ ذَكَرُوا اللَّهَ فَاسْتَغْفَرُوا لِذُنُوبِهِمْ",
    source: { surahName: "Al 'Imran", surahNumber: 3, verseNumber: 135 }
  },
  {
    id: 268,
    type: 'hadith',
    french: "Allah tend Sa main la nuit pour accepter le repentir du pécheur du jour, et Il tend Sa main le jour pour accepter le repentir du pécheur de la nuit.",
    arabic: "إِنَّ اللَّهَ عَزَّ وَجَلَّ يَبْسُطُ يَدَهُ بِاللَّيْلِ لِيَتُوبَ مُسِيءُ النَّهَارِ، وَيَبْسُطُ يَدَهُ بِالنَّهَارِ لِيَتُوبَ مُسِيءُ اللَّيْلِ",
    source: { collection: "Sahih Muslim", hadithNumber: 2759 }
  },
  {
    id: 269,
    type: 'coran',
    french: "Et repentez-vous tous devant Allah, ô croyants, afin que vous récoltiez le succès.",
    arabic: "وَتُوبُوا إِلَى اللَّهِ جَمِيعًا أَيُّهَ الْمُؤْمِنُونَ لَعَلَّكُمْ تُفْلِحُونَ",
    source: { surahName: "An-Nur", surahNumber: 24, verseNumber: 31 }
  },
  {
    id: 270,
    type: 'hadith',
    french: "Le meilleur d'entre vous est celui qui est le meilleur envers sa famille, et je suis le meilleur d'entre vous envers ma famille.",
    arabic: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ وَأَنَا خَيْرُكُمْ لِأَهْلِي",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 3895, grading: "Sahih (صحيح)" }
  },
  {
    id: 271,
    type: 'coran',
    french: "Vous n'atteindriez la (vraie) piété que si vous dépensez de ce que vous aimez.",
    arabic: "لَن تَنَالُوا الْبِرَّ حَتَّىٰ تُنفِقُوا مِمَّا تُحِبُّونَ",
    source: { surahName: "Al 'Imran", surahNumber: 3, verseNumber: 92 }
  },
  {
    id: 272,
    type: 'hadith',
    french: "Chaque articulation d'une personne doit faire une aumône chaque jour où le soleil se lève.",
    arabic: "عَلَى كُلِّ سُلامَى مِنْ أَحَدِكُمْ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ",
    source: { collection: "Sahih Muslim", hadithNumber: 720 }
  },
  {
    id: 273,
    type: 'coran',
    french: "Une parole agréable et un pardon valent mieux qu'une aumône suivie d'un tort.",
    arabic: "قَوْلٌ مَّعْرُوفٌ وَمَغْفِرَةٌ خَيْرٌ مِّن صَدَقَةٍ يَتْبَعُهَا أَذًى",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 263 }
  },
  {
    id: 274,
    type: 'hadith',
    french: "L'aumône secrète éteint la colère du Seigneur.",
    arabic: "صَدَقَةُ السِّرِّ تُطْفِئُ غَضَبَ الرَّبِّ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 664, grading: "Hasan (حسن)" }
  },
  {
    id: 275,
    type: 'coran',
    french: "Et dans leurs biens, il y avait un droit au mendiant et au déshérité.",
    arabic: "وَفِي أَمْوَالِهِمْ حَقٌّ لِّلسَّائِلِ وَالْمَحْرُومِ",
    source: { surahName: "Adh-Dhariyat", surahNumber: 51, verseNumber: 19 }
  },
  {
    id: 276,
    type: 'hadith',
    french: "Le croyant ne sera jamais rassasié de bien jusqu'à ce qu'il atteigne le Paradis.",
    arabic: "لَنْ يَشْبَعَ الْمُؤْمِنُ مِنْ خَيْرٍ حَتَّى يَكُونَ مُنْتَهَاهُ الْجَنَّةَ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2686, grading: "Hasan (حسن)" }
  },
  {
    id: 277,
    type: 'coran',
    french: "Le Diable vous fait craindre l'indigence et vous commande des turpitudes. Tandis qu'Allah vous promet pardon et faveur venant de Lui.",
    arabic: "الشَّيْطَانُ يَعِدُكُمُ الْفَقْرَ وَيَأْمُرُكُم بِالْفَحْشَاءِ ۖ وَاللَّهُ يَعِدُكُم مَّغْفِرَةً مِّنْهُ وَفَضْلًا",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 268 }
  },
  {
    id: 278,
    type: 'hadith',
    french: "La prière du vendredi au vendredi est une expiation pour ce qui est entre les deux, tant que les grands péchés sont évités.",
    arabic: "الصَّلَوَاتُ الْخَمْسُ وَالْجُمُعَةُ إِلَى الْجُمُعَةِ كَفَّارَةٌ لِمَا بَيْنَهُنَّ مَا لَمْ تُغْشَ الْكَبَائِرُ",
    source: { collection: "Sahih Muslim", hadithNumber: 233 }
  },
  {
    id: 279,
    type: 'coran',
    french: "Et ne porte pas la main à ton cou, par avarice, et ne l'étends pas non plus trop largement, sinon tu te trouveras blâmé et plein de remords.",
    arabic: "وَلَا تَجْعَلْ يَدَكَ مَغْلُولَةً إِلَىٰ عُنُقِكَ وَلَا تَبْسُطْهَا كُلَّ الْبَسْطِ فَتَقْعُدَ مَلُومًا مَّحْسُورًا",
    source: { surahName: "Al-Isra", surahNumber: 17, verseNumber: 29 }
  },
  {
    id: 280,
    type: 'hadith',
    french: "Le plus véridique d'entre vous en parole est le plus véridique en vision (rêve).",
    arabic: "أَصْدَقُكُمْ رُؤْيَا أَصْدَقُكُمْ حَدِيثًا",
    source: { collection: "Sahih Muslim", hadithNumber: 2263 }
  },
  {
    id: 281,
    type: 'coran',
    french: "Le soleil et la lune [évoluent] selon un calcul [minutieux].",
    arabic: "الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ",
    source: { surahName: "Ar-Rahman", surahNumber: 55, verseNumber: 5 }
  },
  {
    id: 282,
    type: 'hadith',
    french: "Quiconque récite les dix derniers versets de la sourate Al-Kahf sera protégé contre l'Antéchrist (Dajjal).",
    arabic: "مَنْ حَفِظَ عَشْرَ آيَاتٍ مِنْ أَوَّلِ سُورَةِ الْكَهْفِ عُصِمَ مِنَ الدَّجَّالِ",
    source: { collection: "Sahih Muslim", hadithNumber: 809 }
  },
  {
    id: 283,
    type: 'coran',
    french: "Et c'est Lui qui fait descendre la pluie après qu'on en a désespéré, et répand Sa miséricorde.",
    arabic: "وَهُوَ الَّذِي يُنَزِّلُ الْغَيْثَ مِن بَعْدِ مَا قَنَطُوا وَيَنشُرُ رَحْمَتَهُ",
    source: { surahName: "Ash-Shura", surahNumber: 42, verseNumber: 28 }
  },
  {
    id: 284,
    type: 'hadith',
    french: "Ne souhaitez pas la mort, mais si vous devez le faire, dites : 'Ô Allah, fais-moi vivre tant que la vie est meilleure pour moi...'",
    arabic: "لا يَتَمَنَّيَنَّ أَحَدُكُمُ الْمَوْتَ... اللَّهُمَّ أَحْيِنِي مَا كَانَتِ الْحَيَاةُ خَيْرًا لِي...",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5671 }
  },
  {
    id: 285,
    type: 'coran',
    french: "N'ont-ils donc pas observé le ciel au-dessus d'eux, comment Nous l'avons bâti et embelli, et comment il est sans fissures ?",
    arabic: "أَفَلَمْ يَنظُرُوا إِلَى السَّمَاءِ فَوْقَهُمْ كَيْفَ بَنَيْنَاهَا وَزَيَّنَّاهَا وَمَا لَهَا مِن فُرُوجٍ",
    source: { surahName: "Qaf", surahNumber: 50, verseNumber: 6 }
  },
  {
    id: 286,
    type: 'hadith',
    french: "L'aumône d'un musulman prolonge sa vie, prévient une mauvaise mort et Allah en éloigne l'orgueil et la vantardise.",
    arabic: "صَدَقَةُ الْمُسْلِمِ تَزِيدُ فِي الْعُمْرِ، وَتَمْنَعُ مِيتَةَ السُّوءِ، وَيُذْهِبُ اللَّهُ بِهَا الْكِبْرَ وَالْفَخْرَ",
    source: { collection: "Tabarani", grading: "Hasan (حسن)" }
  },
  {
    id: 287,
    type: 'coran',
    french: "Il a donné libre cours aux deux mers pour se rencontrer ; il y a entre elles une barrière qu'elles ne dépassent pas.",
    arabic: "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ",
    source: { surahName: "Ar-Rahman", surahNumber: 55, verseNumber: "19-20" }
  },
  {
    id: 288,
    type: 'hadith',
    french: "Celui qui patiente, Allah lui donne la patience. Et personne n'a reçu un don meilleur et plus vaste que la patience.",
    arabic: "وَمَنْ يَتَصَبَّرْ يُصَبِّرْهُ اللَّهُ، وَمَا أُعْطِيَ أَحَدٌ عَطَاءً خَيْرًا وَأَوْسَعَ مِنَ الصَّبْرِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 1469 }
  },
  {
    id: 289,
    type: 'coran',
    french: "Et Nous avons placé dans la terre des montagnes fermes pour qu'elle ne s'ébranle pas avec eux.",
    arabic: "وَجَعَلْنَا فِي الْأَرْضِ رَوَاسِيَ أَن تَمِيدَ بِهِمْ",
    source: { surahName: "Al-Anbiya", surahNumber: 21, verseNumber: 31 }
  },
  {
    id: 290,
    type: 'hadith',
    french: "Le plus lourd dans la balance du croyant le Jour de la Résurrection est le bon caractère.",
    arabic: "مَا مِنْ شَيْءٍ أَثْقَلُ فِي مِيزَانِ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ مِنْ خُلُقٍ حَسَنٍ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2002, grading: "Sahih (صحيح)" }
  },
  {
    id: 291,
    type: 'hadith',
    french: "Il n'y a pas de prière pour celui qui ne récite pas la Mère du Livre (Al-Fatiha).",
    arabic: "لا صَلاةَ لِمَنْ لَمْ يَقْرَأْ بِفَاتِحَةِ الْكِتَابِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 756 }
  },
  {
    id: 292,
    type: 'hadith',
    french: "L'invocation est l'arme du croyant, le pilier de la religion et la lumière des cieux et de la terre.",
    arabic: "الدُّعَاءُ سِلاحُ الْمُؤْمِنِ وَعِمَادُ الدِّينِ وَنُورُ السَّمَاوَاتِ وَالأَرْضِ",
    source: { collection: "Al-Hakim", grading: "Sahih (صحيح)" }
  },
  {
    id: 293,
    type: 'hadith',
    french: "Celui qui lit la sourate Al-Kahf le jour du vendredi, une lumière brillera pour lui entre les deux vendredis.",
    arabic: "مَنْ قَرَأَ سُورَةَ الْكَهْفِ يَوْمَ الْجُمُعَةِ أَضَاءَ لَهُ مِنَ النُّورِ مَا بَيْنَ الْجُمُعَتَيْنِ",
    source: { collection: "Al-Hakim", grading: "Sahih (صحيح)" }
  },
  {
    id: 294,
    type: 'hadith',
    french: "La première chose pour laquelle le serviteur sera jugé le Jour de la Résurrection est la prière.",
    arabic: "أَوَّلُ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ الصَّلاةُ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 413, grading: "Sahih (صحيح)" }
  },
  {
    id: 295,
    type: 'hadith',
    french: "Soyez miséricordieux envers ceux qui sont sur terre, Celui qui est au ciel sera miséricordieux envers vous.",
    arabic: "ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 1924, grading: "Sahih (صحيح)" }
  },
  {
    id: 296,
    type: 'hadith',
    french: "Certes, Allah n'enlève pas la science en l'arrachant aux gens, mais Il enlève la science en enlevant les savants.",
    arabic: "إِنَّ اللَّهَ لا يَقْبِضُ الْعِلْمَ انْتِزَاعًا يَنْتَزِعُهُ مِنَ الْعِبَادِ وَلَكِنْ يَقْبِضُ الْعِلْمَ بِقَبْضِ الْعُلَمَاءِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 100 }
  },
  {
    id: 297,
    type: 'hadith',
    french: "La prière de l'aube (Fajr) en groupe équivaut à prier toute la nuit.",
    arabic: "مَنْ صَلَّى الْعِشَاءَ فِي جَمَاعَةٍ فَكَأَنَّمَا قَامَ نِصْفَ اللَّيْلِ وَمَنْ صَلَّى الصُّبْحَ فِي جَمَاعَةٍ فَكَأَنَّمَا صَلَّى اللَّيْلَ كُلَّهُ",
    source: { collection: "Sahih Muslim", hadithNumber: 656 }
  },
  {
    id: 298,
    type: 'hadith',
    french: "Prenez le repas de l'aube (Suhur), car il y a une bénédiction dedans.",
    arabic: "تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 1923 }
  },
  {
    id: 299,
    type: 'hadith',
    french: "La clé du Paradis est la prière, et la clé de la prière est la purification.",
    arabic: "مِفْتَاحُ الْجَنَّةِ الصَّلاةُ وَمِفْتَاحُ الصَّلاةِ الطُّهُورُ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 4, grading: "Sahih (صحيح)" }
  },
  {
    id: 300,
    type: 'hadith',
    french: "Quiconque dit : 'Il n'y a de divinité digne d'adoration qu'Allah' sincèrement de son cœur entrera au Paradis.",
    arabic: "مَنْ قَالَ لا إِلَهَ إِلا اللَّهُ صَادِقًا مِنْ قَلْبِهِ دَخَلَ الْجَنَّةَ",
    source: { collection: "Musnad Ahmad", grading: "Sahih (صحيح)" }
  },
  // Nouveaux ajouts (Lot 4 - Atteindre 400)
  {
    id: 301,
    type: 'coran',
    french: "Et c'est Lui qui a créé la nuit et le jour, le soleil et la lune ; chacun voguant dans une orbite.",
    arabic: "وَهُوَ الَّذِي خَلَقَ اللَّيْلَ وَالنَّهَارَ وَالشَّمْسَ وَالْقَمَرَ ۖ كُلٌّ فِي فَلَكٍ يَسْبَحُونَ",
    source: { surahName: "Al-Anbiya", surahNumber: 21, verseNumber: 33 }
  },
  {
    id: 302,
    type: 'hadith',
    french: "Le croyant est sociable et il n'y a pas de bien en celui qui n'est pas sociable et avec qui on ne peut lier de relations.",
    arabic: "الْمُؤْمِنُ يَأْلَفُ وَيُؤْلَفُ، وَلا خَيْرَ فِيمَنْ لا يَأْلَفُ وَلا يُؤْلَفُ",
    source: { collection: "Musnad Ahmad", hadithNumber: 9146, grading: "Hasan (حسن)" }
  },
  {
    id: 303,
    type: 'coran',
    french: "Leurs peaux et leurs cœurs s'adoucissent à l'évocation d'Allah.",
    arabic: "تَقْشَعِرُّ مِنْهُ جُلُودُ الَّذِينَ يَخْشَوْنَ رَبَّهُمْ ثُمَّ تَلِينُ جُلُودُهُمْ وَقُلُوبُهُمْ إِلَىٰ ذِكْرِ اللَّهِ",
    source: { surahName: "Az-Zumar", surahNumber: 39, verseNumber: 23 }
  },
  {
    id: 304,
    type: 'hadith',
    french: "Celui qui lit la sourate Al-Mulk chaque nuit, Allah le préservera du châtiment de la tombe.",
    arabic: "مَنْ قَرَأَ سُورَةَ الْمُلْكِ كُلَّ لَيْلَةٍ مَنَعَهُ اللَّهُ بِهَا مِنْ عَذَابِ الْقَبْرِ",
    source: { collection: "Sunan an-Nasa'i", grading: "Hasan (حسن)" }
  },
  {
    id: 305,
    type: 'coran',
    french: "Et ne convoitez pas ce qu'Allah a attribué aux uns d'entre vous plus qu'aux autres.",
    arabic: "وَلَا تَتَمَنَّوْا مَا فَضَّلَ اللَّهُ بِهِ بَعْضَكُمْ عَلَىٰ بَعْضٍ",
    source: { surahName: "An-Nisa", surahNumber: 4, verseNumber: 32 }
  },
  {
    id: 306,
    type: 'hadith',
    french: "Ne vous enviez pas, n'enchérissez pas les uns sur les autres, ne vous haïssez pas, ne vous tournez pas le dos.",
    arabic: "لا تَحَاسَدُوا وَلا تَنَاجَشُوا وَلا تَبَاغَضُوا وَلا تَدَابَرُوا",
    source: { collection: "Sahih Muslim", hadithNumber: 2564 }
  },
  {
    id: 307,
    type: 'coran',
    french: "Parle à Mes serviteurs pour qu'ils disent la meilleure parole. Car le Diable sème la discorde parmi eux.",
    arabic: "وَقُل لِّعِبَادِي يَقُولُوا الَّتِي هِيَ أَحْسَنُ ۚ إِنَّ الشَّيْطَانَ يَنزَغُ بَيْنَهُمْ",
    source: { surahName: "Al-Isra", surahNumber: 17, verseNumber: 53 }
  },
  {
    id: 308,
    type: 'hadith',
    french: "Quiconque se montre humble pour Allah, Allah l'élèvera.",
    arabic: "مَنْ تَوَاضَعَ لِلَّهِ رَفَعَهُ اللَّهُ",
    source: { collection: "Sahih Muslim", hadithNumber: 2588 }
  },
  {
    id: 309,
    type: 'coran',
    french: "Certes, les hypocrites cherchent à tromper Allah, mais Allah retourne leur tromperie contre eux.",
    arabic: "إِنَّ الْمُنَافِقِينَ يُخَادِعُونَ اللَّهَ وَهُوَ خَادِعُهُمْ",
    source: { surahName: "An-Nisa", surahNumber: 4, verseNumber: 142 }
  },
  {
    id: 310,
    type: 'hadith',
    french: "Garantissez-moi six choses de votre part et je vous garantirai le Paradis : soyez véridiques quand vous parlez, tenez vos promesses...",
    arabic: "اضْمَنُوا لِي سِتًّا مِنْ أَنْفُسِكُمْ أَضْمَنْ لَكُمُ الْجَنَّةَ: اصْدُقُوا إِذَا حَدَّثْتُمْ، وَأَوْفُوا إِذَا وَعَدْتُمْ...",
    source: { collection: "Musnad Ahmad", hadithNumber: 22821, grading: "Hasan (حسن)" }
  },
  {
    id: 311,
    type: 'coran',
    french: "C'est Lui qui, du ciel, a fait descendre de l'eau qui vous sert de boisson et qui fait pousser des plantes dont vous nourrissez vos troupeaux.",
    arabic: "هُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً ۖ لَّكُم مِّنْهُ شَرَابٌ وَمِنْهُ شَجَرٌ فِيهِ تُسِيمُونَ",
    source: { surahName: "An-Nahl", surahNumber: 16, verseNumber: 10 }
  },
  {
    id: 312,
    type: 'hadith',
    french: "Aucun d'entre vous ne doit boire debout.",
    arabic: "لا يَشْرَبَنَّ أَحَدٌ مِنْكُمْ قَائِمًا",
    source: { collection: "Sahih Muslim", hadithNumber: 2026 }
  },
  {
    id: 313,
    type: 'coran',
    french: "Et quand le Coran est récité, prêtez-lui l'oreille attentivement et observez le silence, afin que vous obteniez la miséricorde.",
    arabic: "وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنصِتُوا لَعَلَّكُمْ تُرْحَمُونَ",
    source: { surahName: "Al-A'raf", surahNumber: 7, verseNumber: 204 }
  },
  {
    id: 314,
    type: 'hadith',
    french: "Le meilleur d'entre vous est celui qui a le meilleur comportement.",
    arabic: "إِنَّ مِنْ خِيَارِكُمْ أَحْسَنَكُمْ أَخْلاقًا",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6035 }
  },
  {
    id: 315,
    type: 'coran',
    french: "Et Nous ferons certainement de ce qui est dessus un sol aride.",
    arabic: "وَإِنَّا لَجَاعِلُونَ مَا عَلَيْهَا صَعِيدًا جُرُزًا",
    source: { surahName: "Al-Kahf", surahNumber: 18, verseNumber: 8 }
  },
  {
    id: 316,
    type: 'hadith',
    french: "Prenez garde à ce bas-monde et prenez garde aux femmes.",
    arabic: "فَاتَّقُوا الدُّنْيَا وَاتَّقُوا النِّسَاءَ",
    source: { collection: "Sahih Muslim", hadithNumber: 2742 }
  },
  {
    id: 317,
    type: 'coran',
    french: "Allah efface ce qu'Il veut et confirme ce qu'Il veut. Et auprès de Lui se trouve l'original du Livre.",
    arabic: "يَمْحُو اللَّهُ مَا يَشَاءُ وَيُثْبِتُ ۖ وَعِندَهُ أُمُّ الْكِتَابِ",
    source: { surahName: "Ar-Ra'd", surahNumber: 13, verseNumber: 39 }
  },
  {
    id: 318,
    type: 'hadith',
    french: "Rien ne repousse le destin si ce n'est l'invocation, et rien n'augmente la durée de vie si ce n'est la bienfaisance.",
    arabic: "لا يَرُدُّ الْقَدَرَ إِلا الدُّعَاءُ وَلا يَزِيدُ فِي الْعُمْرِ إِلا الْبِرُّ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2139, grading: "Hasan (حسن)" }
  },
  {
    id: 319,
    type: 'coran',
    french: "Et accomplis la prière aux deux extrémités du jour et à certaines heures de la nuit.",
    arabic: "وَأَقِمِ الصَّلَاةَ طَرَفَيِ النَّهَارِ وَزُلَفًا مِّنَ اللَّيْلِ",
    source: { surahName: "Hud", surahNumber: 11, verseNumber: 114 }
  },
  {
    id: 320,
    type: 'hadith',
    french: "Celui qui accomplit la prière de l'aube (fajr) est sous la protection d'Allah.",
    arabic: "مَنْ صَلَّى الصُّبْحَ فَهُوَ فِي ذِمَّةِ اللَّهِ",
    source: { collection: "Sahih Muslim", hadithNumber: 657 }
  },
  {
    id: 321,
    type: 'coran',
    french: "Et ne vous tuez pas vous-mêmes. Car Allah, en vérité, est Miséricordieux envers vous.",
    arabic: "وَلَا تَقْتُلُوا أَنفُسَكُمْ ۚ إِنَّ اللَّهَ كَانَ بِكُمْ رَحِيمًا",
    source: { surahName: "An-Nisa", surahNumber: 4, verseNumber: 29 }
  },
  {
    id: 322,
    type: 'hadith',
    french: "Quiconque se suicide avec une chose dans ce monde sera châtié avec cette même chose le Jour de la Résurrection.",
    arabic: "مَنْ قَتَلَ نَفْسَهُ بِشَيْءٍ فِي الدُّنْيَا عُذِّبَ بِهِ يَوْمَ الْقِيَامَةِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6047 }
  },
  {
    id: 323,
    type: 'coran',
    french: "Et honore l'orphelin. Et ne repousse pas le mendiant.",
    arabic: "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ",
    source: { surahName: "Ad-Duha", surahNumber: 93, verseNumber: "9-10" }
  },
  {
    id: 324,
    type: 'hadith',
    french: "Moi et celui qui s'occupe de l'orphelin serons comme ceci au Paradis', et il joignit son index et son majeur.",
    arabic: "أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ هَكَذَا' وَأَشَارَ بِالسَّبَّابَةِ وَالْوُسْطَى",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5304 }
  },
  {
    id: 325,
    type: 'coran',
    french: "Et quand vous parlez, soyez équitables, même s'il s'agit d'un proche parent.",
    arabic: "وَإِذَا قُلْتُمْ فَاعْدِلُوا وَلَوْ كَانَ ذَا قُرْبَىٰ",
    source: { surahName: "Al-An'am", surahNumber: 6, verseNumber: 152 }
  },
  {
    id: 326,
    type: 'hadith',
    french: "Gare au mensonge, car le mensonge mène à la perversion, et la perversion mène au Feu.",
    arabic: "إِيَّاكُمْ وَالْكَذِبَ فَإِنَّ الْكَذِبَ يَهْدِي إِلَى الْفُجُورِ وَإِنَّ الْفُجُورَ يَهْدِي إِلَى النَّارِ",
    source: { collection: "Sahih Muslim", hadithNumber: 2607 }
  },
  {
    id: 327,
    type: 'coran',
    french: "Si un pervers vous apporte une nouvelle, vérifiez-la de crainte que, par ignorance, vous ne portiez atteinte à des gens.",
    arabic: "إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا أَن تُصِيبُوا قَوْمًا بِجَهَالَةٍ",
    source: { surahName: "Al-Hujurat", surahNumber: 49, verseNumber: 6 }
  },
  {
    id: 328,
    type: 'hadith',
    french: "Il suffit comme mensonge à une personne de rapporter tout ce qu'elle entend.",
    arabic: "كَفَى بِالْمَرْءِ كَذِبًا أَنْ يُحَدِّثَ بِكُلِّ مَا سَمِعَ",
    source: { collection: "Sahih Muslim", hadithNumber: 5 }
  },
  {
    id: 329,
    type: 'coran',
    french: "Et ne gaspille pas indûment.",
    arabic: "وَلَا تُبَذِّرْ تَبْذِيرًا",
    source: { surahName: "Al-Isra", surahNumber: 17, verseNumber: 26 }
  },
  {
    id: 330,
    type: 'hadith',
    french: "Mangez, buvez, habillez-vous et faites l'aumône, sans gaspillage ni ostentation.",
    arabic: "كُلُوا وَاشْرَبُوا وَالْبَسُوا وَتَصَدَّقُوا فِي غَيْرِ إِسْرَافٍ وَلا مَخِيلَةٍ",
    source: { collection: "Sunan an-Nasa'i", hadithNumber: 2559, grading: "Hasan (حسن)" }
  },
  {
    id: 331,
    type: 'coran',
    french: "Et Nous avons fait du ciel une voûte protégée, et pourtant ils se détournent de Nos signes.",
    arabic: "وَجَعَلْنَا السَّمَاءَ سَقْفًا مَّحْفُوظًا ۖ وَهُمْ عَنْ آيَاتِهَا مُعْرِضُونَ",
    source: { surahName: "Al-Anbiya", surahNumber: 21, verseNumber: 32 }
  },
  {
    id: 332,
    type: 'hadith',
    french: "Le croyant ne mord pas deux fois dans le même trou.",
    arabic: "لا يُلْدَغُ الْمُؤْمِنُ مِنْ جُحْرٍ وَاحِدٍ مَرَّتَيْنِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6133 }
  },
  {
    id: 333,
    type: 'coran',
    french: "Et Nous l'avons certes facilité pour le rappel. Y a-t-il donc quelqu'un pour se souvenir ?",
    arabic: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
    source: { surahName: "Al-Qamar", surahNumber: 54, verseNumber: 17 }
  },
  {
    id: 334,
    type: 'hadith',
    french: "Celui qui est expert dans la récitation du Coran est avec les nobles et pieux scribes (anges).",
    arabic: "الْمَاهِرُ بِالْقُرْآنِ مَعَ السَّفَرَةِ الْكِرَامِ الْبَرَرَةِ",
    source: { collection: "Sahih Muslim", hadithNumber: 798 }
  },
  {
    id: 335,
    type: 'coran',
    french: "C'est Nous, en vérité, qui avons fait descendre le Rappel (le Coran), et c'est Nous qui en sommes gardien.",
    arabic: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
    source: { surahName: "Al-Hijr", surahNumber: 15, verseNumber: 9 }
  },
  {
    id: 336,
    type: 'hadith',
    french: "La meilleure chose que vous puissiez utiliser pour vous soigner est la hijama (saignée).",
    arabic: "إِنَّ أَفْضَلَ مَا تَدَاوَيْتُمْ بِهِ الْحِجَامَةُ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5696 }
  },
  {
    id: 337,
    type: 'coran',
    french: "Et quant au bienfait de ton Seigneur, proclame-le.",
    arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
    source: { surahName: "Ad-Duha", surahNumber: 93, verseNumber: 11 }
  },
  {
    id: 338,
    type: 'hadith',
    french: "Allah aime voir l'effet de Son bienfait sur Son serviteur.",
    arabic: "إِنَّ اللَّهَ يُحِبُّ أَنْ يَرَى أَثَرَ نِعْمَتِهِ عَلَى عَبْدِهِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2819, grading: "Hasan (حسن)" }
  },
  {
    id: 339,
    type: 'coran',
    french: "Lisez donc ce qui [vous] est facile du Coran.",
    arabic: "فَاقْرَءُوا مَا تَيَسَّرَ مِنَ الْقُرْآنِ",
    source: { surahName: "Al-Muzzammil", surahNumber: 73, verseNumber: 20 }
  },
  {
    id: 340,
    type: 'hadith',
    french: "La prière du Witr est un droit sur chaque musulman.",
    arabic: "الْوِتْرُ حَقٌّ عَلَى كُلِّ مُسْلِمٍ",
    source: { collection: "Sunan Abu Dawud", hadithNumber: 1422, grading: "Sahih (صحيح)" }
  },
  {
    id: 341,
    type: 'coran',
    french: "Et ne mangez pas les biens les uns des autres illégalement.",
    arabic: "وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 188 }
  },
  {
    id: 342,
    type: 'hadith',
    french: "Le marchand honnête et digne de confiance sera avec les prophètes, les véridiques et les martyrs.",
    arabic: "التَّاجِرُ الصَّدُوقُ الأَمِينُ مَعَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 1209, grading: "Hasan (حسن)" }
  },
  {
    id: 343,
    type: 'coran',
    french: "Et donne au proche parent son droit, ainsi qu'au pauvre et au voyageur en détresse.",
    arabic: "وَآتِ ذَا الْقُرْبَىٰ حَقَّهُ وَالْمِسْكِينَ وَابْنَ السَّبِيلِ",
    source: { surahName: "Al-Isra", surahNumber: 17, verseNumber: 26 }
  },
  {
    id: 344,
    type: 'hadith',
    french: "Quiconque désire qu'Allah le sauve des angoisses du Jour de la Résurrection, qu'il accorde un délai à un débiteur en difficulté ou qu'il annule sa dette.",
    arabic: "مَنْ سَرَّهُ أَنْ يُنْجِيَهُ اللَّهُ مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ فَلْيُنَفِّسْ عَنْ مُعْسِرٍ أَوْ يَضَعْ عَنْهُ",
    source: { collection: "Sahih Muslim", hadithNumber: 1563 }
  },
  {
    id: 345,
    type: 'coran',
    french: "Et Il vous a comblés de Ses bienfaits, apparents et cachés.",
    arabic: "وَأَسْبَغَ عَلَيْكُمْ نِعَمَهُ ظَاهِرَةً وَبَاطِنَةً",
    source: { surahName: "Luqman", surahNumber: 31, verseNumber: 20 }
  },
  {
    id: 346,
    type: 'hadith',
    french: "Le monde entier est une jouissance et la meilleure jouissance de ce monde est la femme pieuse.",
    arabic: "الدُّنْيَا كُلُّهَا مَتَاعٌ وَخَيْرُ مَتَاعِ الدُّنْيَا الْمَرْأَةُ الصَّالِحَةُ",
    source: { collection: "Sahih Muslim", hadithNumber: 1467 }
  },
  {
    id: 347,
    type: 'coran',
    french: "Et quand vous êtes en voyage, il n'y a pas de péché sur vous si vous abrégez la prière.",
    arabic: "وَإِذَا ضَرَبْتُمْ فِي الْأَرْضِ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَقْصُرُوا مِنَ الصَّلَاةِ",
    source: { surahName: "An-Nisa", surahNumber: 4, verseNumber: 101 }
  },
  {
    id: 348,
    type: 'hadith',
    french: "Certes, Allah a allégé pour le voyageur la moitié de la prière et le jeûne.",
    arabic: "إِنَّ اللَّهَ وَضَعَ عَنِ الْمُسَافِرِ شَطْرَ الصَّلاةِ وَالصَّوْمِ",
    source: { collection: "Sunan an-Nasa'i", hadithNumber: 2275, grading: "Sahih (صحيح)" }
  },
  {
    id: 349,
    type: 'coran',
    french: "Il sait ce qui est dans les cieux et sur la terre, et Il sait ce que vous cachez et ce que vous divulguez. Et Allah connaît bien le contenu des poitrines.",
    arabic: "يَعْلَمُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَيَعْلَمُ مَا تُسِرُّونَ وَمَا تُعْلِنُونَ ۚ وَاللَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ",
    source: { surahName: "At-Taghabun", surahNumber: 64, verseNumber: 4 }
  },
  {
    id: 350,
    type: 'hadith',
    french: "La meilleure chose qu'un père puisse donner à son enfant est une bonne éducation.",
    arabic: "مَا نَحَلَ وَالِدٌ وَلَدًا مِنْ نَحْلٍ أَفْضَلَ مِنْ أَدَبٍ حَسَنٍ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2819, grading: "Hasan (حسن)" }
  },
  // Nouveaux ajouts (Lot 5 - Atteindre 450)
  {
    id: 351,
    type: 'hadith',
    french: "Le Prophète ﷺ a dit : 'Allah dit : Je suis tel que Mon serviteur pense que Je suis.'",
    arabic: "قَالَ النَّبِيُّ ﷺ: يَقُولُ اللَّهُ تَعَالَى: أَنَا عِنْدَ ظَنِّ عَبْدِي بِي",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 7405 }
  },
  {
    id: 352,
    type: 'coran',
    french: "Et cramponnez-vous tous ensemble au 'Habl' (câble) d'Allah et ne soyez pas divisés.",
    arabic: "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا",
    source: { surahName: "Al 'Imran", surahNumber: 3, verseNumber: 103 }
  },
  {
    id: 353,
    type: 'hadith',
    french: "La prière la plus lourde pour les hypocrites est la prière de l'Isha et la prière du Fajr.",
    arabic: "إِنَّ أَثْقَلَ صَلاةٍ عَلَى الْمُنَافِقِينَ صَلاةُ الْعِشَاءِ وَصَلاةُ الْفَجْرِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 657 }
  },
  {
    id: 354,
    type: 'coran',
    french: "Et quand tu es libre, alors, lève-toi, et à ton Seigneur aspire.",
    arabic: "فَإِذَا فَرَغْتَ فَانصَبْ وَإِلَىٰ رَبِّكَ فَارْغَب",
    source: { surahName: "Ash-Sharh", surahNumber: 94, verseNumber: "7-8" }
  },
  {
    id: 355,
    type: 'hadith',
    french: "Le serviteur est le plus proche de son Seigneur lorsqu'il est en prosternation, alors multipliez les invocations.",
    arabic: "أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ فَأَكْثِرُوا الدُّعَاءَ",
    source: { collection: "Sahih Muslim", hadithNumber: 482 }
  },
  {
    id: 356,
    type: 'coran',
    french: "Et c'est Lui qui accepte le repentir de Ses serviteurs et pardonne les péchés.",
    arabic: "وَهُوَ الَّذِي يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ وَيَعْفُو عَنِ السَّيِّئَاتِ",
    source: { surahName: "Ash-Shura", surahNumber: 42, verseNumber: 25 }
  },
  {
    id: 357,
    type: 'hadith',
    french: "Les actions sont présentées (à Allah) le lundi et le jeudi, et j'aime que mes actions soient présentées pendant que je jeûne.",
    arabic: "تُعْرَضُ الأَعْمَالُ يَوْمَ الاثْنَيْنِ وَالْخَمِيسِ فَأُحِبُّ أَنْ يُعْرَضَ عَمَلِي وَأَنَا صَائِمٌ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 747, grading: "Sahih (صحيح)" }
  },
  {
    id: 358,
    type: 'coran',
    french: "Ô vous qui avez cru ! Soyez endurants. Rivalisez d'endurance. Et soyez constants (au service d'Allah).",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا",
    source: { surahName: "Al 'Imran", surahNumber: 3, verseNumber: 200 }
  },
  {
    id: 359,
    type: 'hadith',
    french: "Quiconque se prosterne une fois devant Allah, Allah l'élèvera d'un degré et lui pardonnera un péché.",
    arabic: "مَا مِنْ عَبْدٍ يَسْجُدُ لِلَّهِ سَجْدَةً إِلا رَفَعَهُ اللَّهُ بِهَا دَرَجَةً وَحَطَّ عَنْهُ بِهَا خَطِيئَةً",
    source: { collection: "Sahih Muslim", hadithNumber: 488 }
  },
  {
    id: 360,
    type: 'coran',
    french: "Certes, Allah est avec ceux qui Le craignent et ceux qui sont bienfaisants.",
    arabic: "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوا وَّالَّذِينَ هُم مُّحْسِنُونَ",
    source: { surahName: "An-Nahl", surahNumber: 16, verseNumber: 128 }
  },
  {
    id: 361,
    type: 'hadith',
    french: "Le pardon est accordé à tout serviteur musulman qui n'associe rien à Allah, sauf à un homme qui a de l'inimitié envers son frère.",
    arabic: "يُغْفَرُ لِكُلِّ عَبْدٍ مُسْلِمٍ لا يُشْرِكُ بِاللَّهِ شَيْئًا إِلا رَجُلا كَانَتْ بَيْنَهُ وَبَيْنَ أَخِيهِ شَحْنَاءُ",
    source: { collection: "Sahih Muslim", hadithNumber: 2565 }
  },
  {
    id: 362,
    type: 'coran',
    french: "Ceux qui répondent à l'appel de leur Seigneur, accomplissent la Salât, se consultent entre eux à propos de leurs affaires...",
    arabic: "وَالَّذِينَ اسْتَجَابُوا لِرَبِّهِمْ وَأَقَامُوا الصَّلَاةَ وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ",
    source: { surahName: "Ash-Shura", surahNumber: 42, verseNumber: 38 }
  },
  {
    id: 363,
    type: 'hadith',
    french: "L'aumône faite à un pauvre est une simple aumône, tandis que celle faite à un proche parent est à la fois une aumône et un maintien des liens de parenté.",
    arabic: "الصَّدَقَةُ عَلَى الْمِسْكِينِ صَدَقَةٌ وَهِيَ عَلَى ذِي الرَّحِمِ ثِنْتَانِ صَدَقَةٌ وَصِلَةٌ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 658, grading: "Hasan (حسن)" }
  },
  {
    id: 364,
    type: 'coran',
    french: "Il n'y a pas de bête sur la terre dont la subsistance n'incombe à Allah.",
    arabic: "وَمَا مِن دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا",
    source: { surahName: "Hud", surahNumber: 11, verseNumber: 6 }
  },
  {
    id: 365,
    type: 'hadith',
    french: "Ne rompez pas les liens de parenté, même si c'est par un simple salut.",
    arabic: "بُلُّوا أَرْحَامَكُمْ وَلَوْ بِالسَّلامِ",
    source: { collection: "Al-Bayhaqi", grading: "Sahih (صحيح)" }
  },
  {
    id: 366,
    type: 'coran',
    french: "Et quiconque accomplit une bonne action, Nous lui en augmenterons la valeur.",
    arabic: "وَمَن يَقْتَرِفْ حَسَنَةً نَّزِدْ لَهُ فِيهَا حُسْنًا",
    source: { surahName: "Ash-Shura", surahNumber: 42, verseNumber: 23 }
  },
  {
    id: 367,
    type: 'hadith',
    french: "L'Islam est bâti sur cinq piliers : le témoignage qu'il n'y a de divinité qu'Allah..., accomplir la prière, s'acquitter de la Zakat, jeûner le Ramadan et le pèlerinage.",
    arabic: "بُنِيَ الإِسْلامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لا إِلَهَ إِلا اللَّهُ... وَإِقَامِ الصَّلاةِ وَإِيتَاءِ الزَّكَاةِ وَصَوْمِ رَمَضَانَ وَحَجِّ الْبَيْتِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 8 }
  },
  {
    id: 368,
    type: 'coran',
    french: "Allah aime ceux qui se repentent, et Il aime ceux qui se purifient.",
    arabic: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 222 }
  },
  {
    id: 369,
    type: 'hadith',
    french: "Le jeûne est un bouclier contre le Feu de l'Enfer.",
    arabic: "الصِّيَامُ جُنَّةٌ مِنَ النَّارِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 764, grading: "Sahih (صحيح)" }
  },
  {
    id: 370,
    type: 'coran',
    french: "Et ne soyez pas comme celle qui défaisait brin par brin sa quenouille après l'avoir solidement filée.",
    arabic: "وَلَا تَكُونُوا كَالَّتِي نَقَضَتْ غَزْلَهَا مِن بَعْدِ قُوَّةٍ أَنكَاثًا",
    source: { surahName: "An-Nahl", surahNumber: 16, verseNumber: 92 }
  },
  {
    id: 371,
    type: 'hadith',
    french: "Ceux qui sont miséricordieux, le Tout-Miséricordieux leur fera miséricorde. Soyez miséricordieux envers ceux qui sont sur terre...",
    arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الأَرْضِ...",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 1924, grading: "Sahih (صحيح)" }
  },
  {
    id: 372,
    type: 'coran',
    french: "Et Nous avons fait de la nuit un vêtement, et désigné le jour pour les affaires de la vie.",
    arabic: "وَجَعَلْنَا اللَّيْلَ لِبَاسًا وَجَعَلْنَا النَّهَارَ مَعَاشًا",
    source: { surahName: "An-Naba", surahNumber: 78, verseNumber: "10-11" }
  },
  {
    id: 373,
    type: 'hadith',
    french: "Le plus aimé d'entre vous auprès de moi et le plus proche de moi le Jour de la Résurrection est celui qui a le meilleur caractère.",
    arabic: "إِنَّ مِنْ أَحَبِّكُمْ إِلَيَّ وَأَقْرَبِكُمْ مِنِّي مَجْلِسًا يَوْمَ الْقِيَامَةِ أَحَاسِنَكُمْ أَخْلاقًا",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2018, grading: "Sahih (صحيح)" }
  },
  {
    id: 374,
    type: 'coran',
    french: "Ceux qui croient et dont les cœurs se tranquillisent à l'évocation d'Allah. N'est-ce point par l'évocation d'Allah que les cœurs se tranquillisent ?",
    arabic: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    source: { surahName: "Ar-Ra'd", surahNumber: 13, verseNumber: 28 }
  },
  {
    id: 375,
    type: 'hadith',
    french: "La meilleure des invocations est 'Al-hamdu lillah' (Louange à Allah).",
    arabic: "أَفْضَلُ الدُّعَاءِ الْحَمْدُ لِلَّهِ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 3383, grading: "Hasan (حسن)" }
  },
  {
    id: 376,
    type: 'coran',
    french: "Et quand tu lis le Coran, cherche la protection d'Allah contre le Diable banni.",
    arabic: "فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    source: { surahName: "An-Nahl", surahNumber: 16, verseNumber: 98 }
  },
  {
    id: 377,
    type: 'hadith',
    french: "L'œil est véridique (le mauvais œil existe).",
    arabic: "الْعَيْنُ حَقٌّ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5740 }
  },
  {
    id: 378,
    type: 'coran',
    french: "Dis : 'Je cherche protection auprès du Seigneur de l'aube naissante, contre le mal des êtres qu'Il a créés.'",
    arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ",
    source: { surahName: "Al-Falaq", surahNumber: 113, verseNumber: "1-2" }
  },
  {
    id: 379,
    type: 'hadith',
    french: "Quiconque est interrogé sur une science qu'il connaît et la cache, sera bridé le Jour de la Résurrection avec une bride de feu.",
    arabic: "مَنْ سُئِلَ عَنْ عِلْمٍ فَكَتَمَهُ أُلْجِمَ يَوْمَ الْقِيَامَةِ بِلِجَامٍ مِنْ نَارٍ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2649, grading: "Sahih (صحيح)" }
  },
  {
    id: 380,
    type: 'coran',
    french: "Demandez donc aux gens du rappel si vous ne savez pas.",
    arabic: "فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ",
    source: { surahName: "An-Nahl", surahNumber: 16, verseNumber: 43 }
  },
  {
    id: 381,
    type: 'hadith',
    french: "Les anges déploient leurs ailes pour celui qui recherche la science, en signe de satisfaction de ce qu'il fait.",
    arabic: "وَإِنَّ الْمَلائِكَةَ لَتَضَعُ أَجْنِحَتَهَا لِطَالِبِ الْعِلْمِ رِضًا بِمَا يَصْنَعُ",
    source: { collection: "Sunan Ibn Majah", hadithNumber: 223, grading: "Sahih (صحيح)" }
  },
  {
    id: 382,
    type: 'coran',
    french: "Et les jardins d'Éden, où ils entreront, ainsi que tous ceux de leurs ascendants, conjoints et descendants, qui auront été de bons croyants.",
    arabic: "جَنَّاتُ عَدْنٍ يَدْخُلُونَهَا وَمَن صَلَحَ مِنْ آبَائِهِمْ وَأَزْوَاجِهِمْ وَذُرِّيَّاتِهِمْ",
    source: { surahName: "Ar-Ra'd", surahNumber: 13, verseNumber: 23 }
  },
  {
    id: 383,
    type: 'hadith',
    french: "Épousez la femme aimante et fertile, car je serai fier de votre grand nombre devant les autres nations.",
    arabic: "تَزَوَّجُوا الْوَدُودَ الْوَلُودَ فَإِنِّي مُكَاثِرٌ بِكُمُ الأُمَمَ",
    source: { collection: "Sunan Abu Dawud", hadithNumber: 2050, grading: "Sahih (صحيح)" }
  },
  {
    id: 384,
    type: 'coran',
    french: "Vos épouses sont pour vous un vêtement, et vous êtes un vêtement pour elles.",
    arabic: "هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 187 }
  },
  {
    id: 385,
    type: 'hadith',
    french: "Qu'un croyant ne déteste pas une croyante. S'il déteste un de ses traits de caractère, il en appréciera un autre.",
    arabic: "لا يَفْرَكْ مُؤْمِنٌ مُؤْمِنَةً إِنْ كَرِهَ مِنْهَا خُلُقًا رَضِيَ مِنْهَا آخَرَ",
    source: { collection: "Sahih Muslim", hadithNumber: 1469 }
  },
  {
    id: 386,
    type: 'coran',
    french: "Et si vous craignez un désaccord entre les deux (époux), envoyez alors un arbitre de sa famille à lui, et un de sa famille à elle.",
    arabic: "وَإِنْ خِفْتُمْ شِقَاقَ بَيْنِهِمَا فَابْعَثُوا حَكَمًا مِّنْ أَهْلِهِ وَحَكَمًا مِّنْ أَهْلِهَا",
    source: { surahName: "An-Nisa", surahNumber: 4, verseNumber: 35 }
  },
  {
    id: 387,
    type: 'hadith',
    french: "Le plus parfait des croyants dans la foi est celui qui a le meilleur caractère, et les meilleurs d'entre vous sont les meilleurs avec leurs femmes.",
    arabic: "أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا وَخِيَارُكُمْ خِيَارُكُمْ لِنِسَائِهِمْ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 1162, grading: "Sahih (صحيح)" }
  },
  {
    id: 388,
    type: 'coran',
    french: "Et ne vous approchez des biens de l'orphelin que de la plus belle manière.",
    arabic: "وَلَا تَقْرَبُوا مَالَ الْيَتِيمِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ",
    source: { surahName: "Al-An'am", surahNumber: 6, verseNumber: 152 }
  },
  {
    id: 389,
    type: 'hadith',
    french: "Évitez les sept péchés destructeurs... et manger l'argent de l'orphelin.",
    arabic: "اجْتَنِبُوا السَّبْعَ الْمُوبِقَاتِ... وَأَكْلُ مَالِ الْيَتِيمِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 2766 }
  },
  {
    id: 390,
    type: 'coran',
    french: "Et donnez la juste mesure et le bon poids, en toute justice.",
    arabic: "وَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ بِالْقِسْطِ",
    source: { surahName: "Al-An'am", surahNumber: 6, verseNumber: 152 }
  },
  {
    id: 391,
    type: 'hadith',
    french: "Qu'Allah fasse miséricorde à l'homme qui est indulgent lorsqu'il vend, lorsqu'il achète et lorsqu'il réclame son dû.",
    arabic: "رَحِمَ اللَّهُ رَجُلاً سَمْحًا إِذَا بَاعَ وَإِذَا اشْتَرَى وَإِذَا اقْتَضَى",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 2076 }
  },
  {
    id: 392,
    type: 'coran',
    french: "Et donnez aux femmes leur dot de bonne grâce.",
    arabic: "وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً",
    source: { surahName: "An-Nisa", surahNumber: 4, verseNumber: 4 }
  },
  {
    id: 393,
    type: 'hadith',
    french: "Le Jour du Jugement, on fera venir l'homme le plus misérable de ce monde qui était destiné au Paradis... 'Ô fils d'Adam, as-tu jamais connu la misère ?'",
    arabic: "يُؤْتَى بِأَنْعَمِ أَهْلِ الدُّنْيَا مِنْ أَهْلِ النَّارِ يَوْمَ الْقِيَامَةِ... فَيَقُولُ يَا ابْنَ آدَمَ هَلْ رَأَيْتَ بُؤْسًا قَطُّ؟",
    source: { collection: "Sahih Muslim", hadithNumber: 2807 }
  },
  {
    id: 394,
    type: 'coran',
    french: "Le bien ne consiste pas à tourner vos visages vers le Levant ou le Couchant. Mais le bien est de croire en Allah...",
    arabic: "لَّيْسَ الْبِرَّ أَن تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ بِاللَّهِ...",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 177 }
  },
  {
    id: 395,
    type: 'hadith',
    french: "La vraie piété est le bon caractère.",
    arabic: "الْبِرُّ حُسْنُ الْخُلُقِ",
    source: { collection: "Sahih Muslim", hadithNumber: 2553 }
  },
  {
    id: 396,
    type: 'coran',
    french: "Et accomplissez le pèlerinage (Hajj) et la 'Umra pour Allah.",
    arabic: "وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 196 }
  },
  {
    id: 397,
    type: 'hadith',
    french: "Celui qui accomplit le Hajj pour Allah et s'abstient de propos obscènes et d'actes pervers, reviendra (sans péchés) comme le jour où sa mère l'a enfanté.",
    arabic: "مَنْ حَجَّ لِلَّهِ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 1521 }
  },
  {
    id: 398,
    type: 'coran',
    french: "Il n'y a pas de grief contre vous à rechercher une grâce de votre Seigneur (pendant le pèlerinage).",
    arabic: "لَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَبْتَغُوا فَضْلًا مِّن رَّبِّكُمْ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 198 }
  },
  {
    id: 399,
    type: 'hadith',
    french: "Les 'Umra successives effacent les péchés commis entre elles, et un Hajj pieux n'a d'autre récompense que le Paradis.",
    arabic: "الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا وَالْحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلا الْجَنَّةُ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 1773 }
  },
  {
    id: 400,
    type: 'coran',
    french: "Et annonce aux gens le pèlerinage (Hajj). Ils viendront vers toi, à pied, et aussi sur toute monture, venant de tout chemin éloigné.",
    arabic: "وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ",
    source: { surahName: "Al-Hajj", surahNumber: 22, verseNumber: 27 }
  },
  {
    id: 401,
    type: 'hadith',
    french: "Le musulman est le miroir de son frère.",
    arabic: "الْمُؤْمِنُ مِرْآةُ الْمُؤْمِنِ",
    source: { collection: "Sunan Abu Dawud", hadithNumber: 4918, grading: "Hasan (حسن)" }
  },
  {
    id: 402,
    type: 'coran',
    french: "Et quant à ceux qui luttent pour Notre cause, Nous les guiderons certes sur Nos sentiers.",
    arabic: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا",
    source: { surahName: "Al-'Ankabut", surahNumber: 29, verseNumber: 69 }
  },
  {
    id: 403,
    type: 'hadith',
    french: "Le Jour de la Résurrection, les pieds du fils d'Adam ne bougeront pas avant qu'il ne soit interrogé sur cinq choses : sa vie, sa jeunesse, ses biens, sa science.",
    arabic: "لا تَزُولُ قَدَمَا ابْنِ آدَمَ يَوْمَ الْقِيَامَةِ مِنْ عِنْدِ رَبِّهِ حَتَّى يُسْأَلَ عَنْ خَمْسٍ: عَنْ عُمُرِهِ فِيمَا أَفْنَاهُ، وَعَنْ شَبَابِهِ فِيمَا أَبْلاهُ، وَمَالِهِ مِنْ أَيْنَ اكْتَسَبَهُ وَفِيمَا أَنْفَقَهُ، وَمَاذَا عَمِلَ فِيمَا عَلِمَ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2416, grading: "Hasan (حسن)" }
  },
  {
    id: 404,
    type: 'coran',
    french: "Et ne méprisez pas les gens, et ne marchez pas sur la terre avec arrogance. Car Allah n'aime pas tout présomptueux plein de gloriole.",
    arabic: "وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ",
    source: { surahName: "Luqman", surahNumber: 31, verseNumber: 18 }
  },
  {
    id: 405,
    type: 'hadith',
    french: "Chacun de vous est un berger et est responsable de son troupeau.",
    arabic: "كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْؤولٌ عَنْ رَعِيَّتِهِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 893 }
  },
  {
    id: 406,
    type: 'coran',
    french: "Dis : 'Voyagez sur la terre et voyez comment Il a commencé la création.'",
    arabic: "قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ",
    source: { surahName: "Al-'Ankabut", surahNumber: 29, verseNumber: 20 }
  },
  {
    id: 407,
    type: 'hadith',
    french: "Aucune âme n'est tuée injustement sans que le premier fils d'Adam n'en porte une part de la responsabilité, car il fut le premier à instituer le meurtre.",
    arabic: "لا تُقْتَلُ نَفْسٌ ظُلْمًا إِلا كَانَ عَلَى ابْنِ آدَمَ الأَوَّلِ كِفْلٌ مِنْ دَمِهَا لأَنَّهُ أَوَّلُ مَنْ سَنَّ الْقَتْلَ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 3335 }
  },
  {
    id: 408,
    type: 'coran',
    french: "Dis : 'Je cherche protection auprès du Seigneur des hommes, Le Souverain des hommes, Le Dieu des hommes.'",
    arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَٰهِ النَّاسِ",
    source: { surahName: "An-Nas", surahNumber: 114, verseNumber: "1-3" }
  },
  {
    id: 409,
    type: 'hadith',
    french: "Celui qui dissimule la science qu'Allah lui a donnée sera marqué au fer rouge le Jour de la Résurrection.",
    arabic: "مَنْ كَتَمَ عِلْمًا أَلْجَمَهُ اللَّهُ يَوْمَ الْقِيَامَةِ بِلِجَامٍ مِنْ نَارٍ",
    source: { collection: "Sunan Ibn Majah", hadithNumber: 261, grading: "Sahih (صحيح)" }
  },
  {
    id: 410,
    type: 'coran',
    french: "Ceux qui thésaurisent l'or et l'argent et ne les dépensent pas dans le sentier d'Allah, annonce-leur un châtiment douloureux.",
    arabic: "وَالَّذِينَ يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ وَلَا يُنفِقُونَهَا فِي سَبِيلِ اللَّهِ فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ",
    source: { surahName: "At-Tawbah", surahNumber: 9, verseNumber: 34 }
  },
  {
    id: 411,
    type: 'hadith',
    french: "Celui qui garantit ce qui est entre ses mâchoires (la langue) et ce qui est entre ses jambes (le sexe), je lui garantis le Paradis.",
    arabic: "مَنْ يَضْمَنْ لِي مَا بَيْنَ لَحْيَيْهِ وَمَا بَيْنَ رِجْلَيْهِ أَضْمَنْ لَهُ الْجَنَّةَ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6474 }
  },
  {
    id: 412,
    type: 'coran',
    french: "Et abaisse ton aile pour les croyants qui te suivent.",
    arabic: "وَاخْفِضْ جَنَاحَكَ لِمَنِ اتَّبَعَكَ مِنَ الْمُؤْمِنِينَ",
    source: { surahName: "Ash-Shu'ara", surahNumber: 26, verseNumber: 215 }
  },
  {
    id: 413,
    type: 'hadith',
    french: "La pudeur n'apporte que du bien.",
    arabic: "الْحَيَاءُ لا يَأْتِي إِلا بِخَيْرٍ",
    source: { collection: "Sahih Muslim", hadithNumber: 37 }
  },
  {
    id: 414,
    type: 'coran',
    french: "Et quand ils entendent des futilités, ils s'en détournent.",
    arabic: "وَإِذَا سَمِعُوا اللَّغْوَ أَعْرَضُوا عَنْهُ",
    source: { surahName: "Al-Qasas", surahNumber: 28, verseNumber: 55 }
  },
  {
    id: 415,
    type: 'hadith',
    french: "Si tu n'as pas de pudeur, fais ce que tu veux.",
    arabic: "إِذَا لَمْ تَسْتَحِ فَاصْنَعْ مَا شِئْتَ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 3484 }
  },
  {
    id: 416,
    type: 'coran',
    french: "Et ne vous jetez pas par vos propres mains dans la destruction.",
    arabic: "وَلَا تُلْقُوا بِأَيْدِيكُمْ إِلَى التَّهْلُكَةِ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 195 }
  },
  {
    id: 417,
    type: 'hadith',
    french: "Il est interdit de nuire aux autres ou de se nuire à soi-même.",
    arabic: "لا ضَرَرَ وَلا ضِرَارَ",
    source: { collection: "Sunan Ibn Majah", hadithNumber: 2340, grading: "Sahih (صحيح)" }
  },
  {
    id: 418,
    type: 'coran',
    french: "Ô vous qui avez cru, repentez-vous à Allah d'un repentir sincère.",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَّصُوحًا",
    source: { surahName: "At-Tahrim", surahNumber: 66, verseNumber: 8 }
  },
  {
    id: 419,
    type: 'hadith',
    french: "Les deux pieds de l'esclave ne bougeront pas le Jour de la Résurrection jusqu'à ce qu'on l'interroge sur sa vie...",
    arabic: "لا تَزُولُ قَدَمَا عَبْدٍ يَوْمَ الْقِيَامَةِ حَتَّى يُسْأَلَ عَنْ عُمُرِهِ فِيمَا أَفْنَاهُ...",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 2417, grading: "Sahih (صحيح)" }
  },
  {
    id: 420,
    type: 'coran',
    french: "Ceux qui ont cru et qui n'ont point troublé la pureté de leur foi par de l'injustice (association), ceux-là ont la sécurité ; et ce sont eux les bien-guidés.",
    arabic: "الَّذِينَ آمَنُوا وَلَمْ يَلْبِسُوا إِيمَانَهُم بِظُلْمٍ أُولَٰئِكَ لَهُمُ الْأَمْنُ وَهُم مُّهْتَدُونَ",
    source: { surahName: "Al-An'am", surahNumber: 6, verseNumber: 82 }
  },
  {
    id: 421,
    type: 'hadith',
    french: "Le plus grand péché est d'associer quelque chose à Allah.",
    arabic: "أَكْبَرُ الْكَبَائِرِ الإِشْرَاكُ بِاللَّهِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 5976 }
  },
  {
    id: 422,
    type: 'coran',
    french: "Ceux qui suivent le Messager, le Prophète illettré qu'ils trouvent écrit chez eux dans la Thora et l'Évangile.",
    arabic: "الَّذِينَ يَتَّبِعُونَ الرَّسُولَ النَّبِيَّ الْأُمِّيَّ الَّذِي يَجِدُونَهُ مَكْتُوبًا عِندَهُمْ فِي التَّوْرَاةِ وَالْإِنجِيلِ",
    source: { surahName: "Al-A'raf", surahNumber: 7, verseNumber: 157 }
  },
  {
    id: 423,
    type: 'hadith',
    french: "Quiconque ment à mon sujet intentionnellement, qu'il prenne sa place dans le Feu.",
    arabic: "مَنْ كَذَبَ عَلَيَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 110 }
  },
  {
    id: 424,
    type: 'coran',
    french: "Et Nous avons fait descendre le fer, dans lequel il y a une force redoutable, aussi bien que des utilités pour les gens.",
    arabic: "وَأَنزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ",
    source: { surahName: "Al-Hadid", surahNumber: 57, verseNumber: 25 }
  },
  {
    id: 425,
    type: 'hadith',
    french: "Celui qui prie sur moi une fois, Allah priera sur lui dix fois.",
    arabic: "مَنْ صَلَّى عَلَيَّ صَلاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا",
    source: { collection: "Sahih Muslim", hadithNumber: 408 }
  },
  {
    id: 426,
    type: 'coran',
    french: "Certes, Allah et Ses Anges prient sur le Prophète ; ô vous qui croyez priez sur lui et adressez [lui] vos salutations.",
    arabic: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا",
    source: { surahName: "Al-Ahzab", surahNumber: 33, verseNumber: 56 }
  },
  {
    id: 427,
    type: 'hadith',
    french: "L'avare est celui qui, lorsque je suis mentionné en sa présence, ne prie pas sur moi.",
    arabic: "الْبَخِيلُ مَنْ ذُكِرْتُ عِنْدَهُ فَلَمْ يُصَلِّ عَلَيَّ",
    source: { collection: "Jami` at-Tirmidhi", hadithNumber: 3546, grading: "Sahih (صحيح)" }
  },
  {
    id: 428,
    type: 'coran',
    french: "C'est Lui qui vous a fait la terre pour lit, et le ciel pour toit.",
    arabic: "الَّذِي جَعَلَ لَكُمُ الْأَرْضَ فِرَاشًا وَالسَّمَاءَ بِنَاءً",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 22 }
  },
  {
    id: 429,
    type: 'hadith',
    french: "La propreté est la moitié de la foi.",
    arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ",
    source: { collection: "Sahih Muslim", hadithNumber: 223 }
  },
  {
    id: 430,
    type: 'coran',
    french: "Il y a certes dans leur récit une leçon pour les gens doués d'intelligence.",
    arabic: "لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِّأُولِي الْأَلْبَابِ",
    source: { surahName: "Yusuf", surahNumber: 12, verseNumber: 111 }
  },
  {
    id: 431,
    type: 'hadith',
    french: "Le Jour de la Résurrection, Allah dira : 'Où sont ceux qui s'aimaient pour Ma Majesté ? Aujourd'hui Je les ombrage de Mon ombre.'",
    arabic: "يَقُولُ اللَّهُ يَوْمَ الْقِيَامَةِ: أَيْنَ الْمُتَحَابُّونَ بِجَلالِي؟ الْيَوْمَ أُظِلُّهُمْ فِي ظِلِّي",
    source: { collection: "Sahih Muslim", hadithNumber: 2566 }
  },
  {
    id: 432,
    type: 'coran',
    french: "Et fais preuve d'humilité envers les croyants.",
    arabic: "وَاخْفِضْ جَنَاحَكَ لِلْمُؤْمِنِينَ",
    source: { surahName: "Al-Hijr", surahNumber: 15, verseNumber: 88 }
  },
  {
    id: 433,
    type: 'hadith',
    french: "Une personne est avec celui qu'elle aime.",
    arabic: "الْمَرْءُ مَعَ مَنْ أَحَبَّ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 6169 }
  },
  {
    id: 434,
    type: 'coran',
    french: "Et obéissez à Allah et à Son messager et ne vous disputez pas, sinon vous fléchirez et perdrez votre force.",
    arabic: "وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ",
    source: { surahName: "Al-Anfal", surahNumber: 8, verseNumber: 46 }
  },
  {
    id: 435,
    type: 'hadith',
    french: "Celui qui couvre les fautes d'un Musulman, Allah couvrira ses fautes ici-bas et dans l'au-delà.",
    arabic: "مَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ فِي الدُّنْيَا وَالآخِرَةِ",
    source: { collection: "Sahih Muslim", hadithNumber: 2699 }
  },
  {
    id: 436,
    type: 'coran',
    french: "Et quand Mon serviteur t'interroge à Mon sujet... Je suis proche. Je réponds à l'appel de celui qui M'appelle.",
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 186 }
  },
  {
    id: 437,
    type: 'hadith',
    french: "Un juge ne doit pas rendre de jugement entre deux parties lorsqu'il est en colère.",
    arabic: "لا يَقْضِيَنَّ حَكَمٌ بَيْنَ اثْنَيْنِ وَهُوَ غَضْبَانُ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 7158 }
  },
  {
    id: 438,
    type: 'coran',
    french: "Et mangez de ce qu'Allah vous a attribué de licite et de bon.",
    arabic: "وَكُلُوا مِمَّا رَزَقَكُمُ اللَّهُ حَلَالًا طَيِّبًا",
    source: { surahName: "Al-Ma'idah", surahNumber: 5, verseNumber: 88 }
  },
  {
    id: 439,
    type: 'hadith',
    french: "Le licite est clair et l'illicite est clair.",
    arabic: "إِنَّ الْحَلالَ بَيِّنٌ وَإِنَّ الْحَرَامَ بَيِّنٌ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 52 }
  },
  {
    id: 440,
    type: 'coran',
    french: "Toute l'humanité ne formait qu'une seule communauté.",
    arabic: "كَانَ النَّاسُ أُمَّةً وَاحِدَةً",
    source: { surahName: "Al-Baqarah", surahNumber: 2, verseNumber: 213 }
  },
  {
    id: 441,
    type: 'hadith',
    french: "Il n'y a pas de supériorité d'un Arabe sur un non-Arabe, ni d'un non-Arabe sur un Arabe... si ce n'est par la piété.",
    arabic: "لا فَضْلَ لِعَرَبِيٍّ عَلَى عَجَمِيٍّ وَلا لِعَجَمِيٍّ عَلَى عَرَبِيٍّ... إِلا بِالتَّقْوَى",
    source: { collection: "Musnad Ahmad", hadithNumber: 23489, grading: "Sahih (صحيح)" }
  },
  {
    id: 442,
    type: 'coran',
    french: "Ô hommes ! Nous vous avons créés d'un mâle et d'une femelle, et Nous avons fait de vous des nations et des tribus, pour que vous vous entre-connaissiez.",
    arabic: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا",
    source: { surahName: "Al-Hujurat", surahNumber: 49, verseNumber: 13 }
  },
  {
    id: 443,
    type: 'hadith',
    french: "Le Musulman est le frère du Musulman, il ne l'opprime pas, ni ne le livre à ses ennemis.",
    arabic: "الْمُسْلِمُ أَخُو الْمُسْلِمِ لا يَظْلِمُهُ وَلا يُسْلِمُهُ",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 2442 }
  },
  {
    id: 444,
    type: 'coran',
    french: "Le plus noble d'entre vous, auprès d'Allah, est le plus pieux.",
    arabic: "إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ",
    source: { surahName: "Al-Hujurat", surahNumber: 49, verseNumber: 13 }
  },
  {
    id: 445,
    type: 'hadith',
    french: "Il n'est pas permis à un musulman de faire peur à un autre musulman.",
    arabic: "لا يَحِلُّ لِمُسْلِمٍ أَنْ يُرَوِّعَ مُسْلِمًا",
    source: { collection: "Sunan Abu Dawud", hadithNumber: 5004, grading: "Sahih (صحيح)" }
  },
  {
    id: 446,
    type: 'coran',
    french: "Malheur aux fraudeurs, qui, lorsqu'ils font mesurer pour eux-mêmes, exigent la pleine mesure, et qui, lorsqu'ils mesurent ou pèsent pour les autres, [leur] causent perte.",
    arabic: "وَيْلٌ لِّلْمُطَفِّفِينَ الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ",
    source: { surahName: "Al-Mutaffifin", surahNumber: 83, verseNumber: "1-3" }
  },
  {
    id: 447,
    type: 'hadith',
    french: "Le vendeur et l'acheteur ont le choix tant qu'ils ne se sont pas séparés.",
    arabic: "الْبَيِّعَانِ بِالْخِيَارِ مَا لَمْ يَتَفَرَّقَا",
    source: { collection: "Sahih al-Bukhari", hadithNumber: 2112 }
  },
  {
    id: 448,
    type: 'coran',
    french: "Et ne faites pas de la terre un lieu de corruption après qu'elle ait été mise en ordre.",
    arabic: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا",
    source: { surahName: "Al-A'raf", surahNumber: 7, verseNumber: 56 }
  },
  {
    id: 449,
    type: 'hadith',
    french: "Si l'Heure (de la fin du monde) arrive alors que l'un de vous tient un plant à la main, s'il peut le planter avant qu'elle n'arrive, qu'il le fasse.",
    arabic: "إِنْ قَامَتِ السَّاعَةُ وَفِي يَدِ أَحَدِكُمْ فَسِيلَةٌ فَإِنِ اسْتَطَاعَ أَنْ لا يَقُومَ حَتَّى يَغْرِسَهَا فَلْيَغْرِسْهَا",
    source: { collection: "Musnad Ahmad", hadithNumber: 12902, grading: "Sahih (صحيح)" }
  },
  {
    id: 450,
    type: 'coran',
    french: "Louange à Allah, Seigneur de l'univers.",
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    source: { surahName: "Al-Fatiha", surahNumber: 1, verseNumber: 2 }
  },
];