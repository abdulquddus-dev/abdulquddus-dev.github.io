// ════════════════════════════════════════════════════════
//  projects.js — بيانات مشاريع AQ Dev
//  آخر تحديث: 2026
// ════════════════════════════════════════════════════════

var BASE_URL = "https://abdulquddus-dev.github.io/abdulquddus-aqdev.github.io";

const baseImageUrl = "https://abdulquddus-dev.github.io/abdulquddus-aqdev.github.io/images/";
const deptSystemUrl = baseImageUrl + "imageDeptSystem/";
const sougaAppUrl = baseImageUrl + "imageSougaApp/";
const findMyPhoneUrl = baseImageUrl + "imageFindMyPhone/";
const wifiManagerUrl = baseImageUrl + "imageWifiManager/";
// ════════ أنواع المشاريع ════════
var PROJECT_TYPES = {
  android: { label: "Android",      badge: "Android",   downloadLabel: "تحميل APK مجاناً",  color: "#3DDC84" },
  webapp:  { label: "تطبيق ويب",   badge: "Web App",   downloadLabel: "تحميل الملف",       color: "#4285F4" },
  desktop: { label: "سطح المكتب",  badge: "Desktop",   downloadLabel: "تحميل البرنامج",    color: "#9C27B0" },
  website: { label: "موقع ويب",    badge: "Website",   downloadLabel: "زيارة الموقع",      color: "#FF6D00" }
};

// ════════════════════════════════════════════════════════
//  قائمة المشاريع
// ════════════════════════════════════════════════════════
var PROJECTS = [

  // ══════════════════════════════
  //  1. سوجا — Souga
  // ══════════════════════════════
  {
    id: "souga",
    title: "سوجا — Souga",
    subtitle: "سوق إلكتروني عربي بتقنيات متطورة — تحميل مجاني",
    shareTitle: "🛒 سوجا — تسوّق وبيع بذكاء من هاتفك | مجاني 100%",
    shareDesc: "تطبيق سوجا للتجارة الإلكترونية: دردشة مباشرة، ذكاء اصطناعي Gemini، 42 عملة عالمية، رفع صور فائق الجودة. آمن وسريع وعربي.",
    description: "منصة تجارة إلكترونية محلية متكاملة ببنية ثلاثية الأدوار: مشتري، بائع، مدير — مبنية بـ Flutter وFirebase.",
    longDescription: "سوجا ليست مجرد تطبيق تسوق، بل منصة تجارية متكاملة أعدتها لتكون بديلاً محلياً حقيقياً لمنصات التجارة الكبرى.\n\nما الذي يجعل سوجا مختلفة؟\n• دردشة مباشرة داخل التطبيق بين المشتري والبائع دون الحاجة لواتساب أو خارجي\n• ذكاء اصطناعي Gemini لكتابة إعلانات تسويقية جذابة بضغطة واحدة\n• رفع صور المنتجات عبر ImageKit بأعلى جودة وأسرع تحميل\n• نظام طلبات متكامل مع تتبع الحالة لحظة بلحظة\n• إشعارات فورية بكل تحديث على طلباتك\n• دعم 42 عملة عالمية مع تحويل آني\n• لوحة تحكم للمدير بصلاحيات شاملة ومرنة\n• تسجيل دخول آمن عبر Firebase Auth مع Google Sign-In",
    type: "android",
    platform: "Android 5.0+",
    status: "released",
    version: "1.1.1",
    size: "57 MB",
    category: "تجارة إلكترونية",
    tags: ["Flutter", "Firebase", "Dart", "ImageKit", "Gemini AI", "Provider"],
    keywords: "سوجا souga تطبيق تجارة إلكترونية flutter firebase android سوق عربي بيع شراء gemini ai",
    color: "#DC143C",
    accentColor: "#FFB300",
    icon: "🛒",
    appIcon: sougaAppUrl + "icon_app.png",
    screenshots: [
      sougaAppUrl + "1.png",
      sougaAppUrl + "2.png",
      sougaAppUrl + "3.png",
      sougaAppUrl + "4.png",
      sougaAppUrl + "5.png",
      sougaAppUrl + "6.png",
      sougaAppUrl + "7.png",
      sougaAppUrl + "8.png",
      sougaAppUrl + "9.png"
    ],
    downloadUrl: "https://github.com/AbdulQuddus-dev/abdulquddus-aqdev.github.io/releases/download/v1.1.1/app-release.apk",
    sourceUrl: "",
    demoUrl: "",
    featured: true,
    date: "2026"
  },

  // ══════════════════════════════
  //  2. مدير الواي فاي
  // ══════════════════════════════
  {
    id: "wifi_manager",
    title: "مدير الواي فاي",
    subtitle: "تتبع مصاريف الإنترنت والديون بذكاء — مجاني",
    shareTitle: "📶 مدير الواي فاي — نظّم مصاريف الإنترنت والاشتراكات بسهولة",
    shareDesc: "تطبيق مدير الواي فاي: تتبع المصاريف الشهرية، الديون، البطاقات، مع تخزين محلي Hive ومزامنة Firebase. عربي بالكامل.",
    description: "تطبيق Flutter لإدارة مصاريف الإنترنت، تتبع الاشتراكات، ومراقبة الديون والبطاقات بواجهة عربية سهلة.",
    longDescription: "مدير الواي فاي وُلد من حاجة حقيقية — إدارة اشتراكات الإنترنت وتتبع ديون العملاء كانت فوضى قبل هذا التطبيق.\n\nبنيته ليحل مشكلة واقعية يعاني منها الكثيرون:\n• تسجيل المصاريف الشهرية وتصنيفها بدقة\n• متابعة ديون العملاء وتواريخ استحقاقها\n• إدارة البطاقات والرصيد المتبقي\n• تخزين كل البيانات محلياً بـ Hive بدون إنترنت\n• مزامنة تلقائية مع Firebase عند الاتصال\n• تقارير مالية شهرية واضحة ومرتبة\n• واجهة RTL عربية احترافية سهلة الاستخدام",
    type: "android",
    platform: "Android 5.0+",
    status: "released",
    version: "1.0.0",
    size: "50 MB",
    category: "مالية وإنتاجية",
    tags: ["Flutter", "Firebase", "Hive", "Provider", "RTL"],
    keywords: "مدير الواي فاي wifi manager flutter hive firebase إدارة مصاريف إنترنت ديون اشتراكات android",
    color: "#1976D2",
    accentColor: "#42A5F5",
    icon: "📶",
    appIcon: wifiManagerUrl +"app_icon_512.png",
    screenshots: [
      wifiManagerUrl + "0.png",
      wifiManagerUrl + "1.png",
      wifiManagerUrl + "2.png",
      wifiManagerUrl + "3.png",
      wifiManagerUrl + "4.png",
      wifiManagerUrl + "5.png",
      wifiManagerUrl + "6.png",
      wifiManagerUrl + "7.png",
      wifiManagerUrl + "8.png"
    ],
    downloadUrl: "https://github.com/AbdulQuddus-dev/WIFI-Manager/releases/download/v1.0.0/app-release.apk",
    sourceUrl: "https://github.com/AbdulQuddus-dev/WIFI-Manager",
    demoUrl: "",
    featured: true,
    date: "2026-05-08"
  },

  // ══════════════════════════════
  //  3. ShaibAI Desktop
  // ══════════════════════════════
  {
    id: "shaibai-desktop",
    title: "ShaibAI Desktop",
    subtitle: "ذكاء اصطناعي محلي كامل بدون إنترنت — Windows",
    shareTitle: "🤖 ShaibAI — ذكاء اصطناعي محلي يعمل بدون إنترنت على Windows",
    shareDesc: "تحدث مع الذكاء الاصطناعي بالعربية دون إرسال بيانات للإنترنت. ShaibAI يعمل بالكامل على جهازك عبر LM Studio. مجاني.",
    description: "برنامج Windows يتصل بـ LM Studio لتشغيل نماذج الذكاء الاصطناعي محلياً بالكامل بدون إنترنت، مبني بـ C# و.NET WinForms.",
    longDescription: "ShaibAI جاء من قناعة شخصية: الخصوصية حق وليست رفاهية.\n\nبنيت هذا البرنامج ليتيح لك التحدث مع ذكاء اصطناعي متطور دون أن تغادر بياناتك جهازك:\n• يعمل بالكامل بدون إنترنت عبر LM Studio\n• يدعم نموذج Qwen2.5-7B-Instruct بشكل مثالي\n• يعمل على CPU بدون الحاجة لكارت شاشة GPU\n• استجابات تتدفق في الوقت الفعلي (Streaming)\n• شريط محادثات جانبي لتنظيم المحادثات\n• واجهة ثنائية اللغة تدعم العربية والإنجليزية\n• معالجة نصوص عربية محسّنة\n• اختيار النموذج وتحميله بضغطة واحدة",
    type: "desktop",
    platform: "Windows 10 / 11",
    status: "released",
    version: "2.0.0",
    size: "85 MB",
    category: "ذكاء اصطناعي",
    tags: ["C#", ".NET 4.8", "WinForms", "LM Studio", "Qwen2.5"],
    keywords: "ShaibAI shaibai desktop ذكاء اصطناعي محلي offline AI windows C# WinForms LM Studio Qwen بدون إنترنت",
    color: "#1565C0",
    accentColor: "#42A5F5",
    icon: "🤖",
    appIcon: baseImageUrl + "ShaibAI.ico",
    screenshots: [
      baseImageUrl + "shaibai-desktop-screenshot-1.png",
      baseImageUrl + "shaibai-desktop-screenshot-2.png"
    ],
    downloadUrl: "https://github.com/AbdulQuddus-dev/abdulquddus-aqdev.github.io/releases/download/shaibai-v2.0/ShaibAI-Setup.exe",
    sourceUrl: "",
    demoUrl: "",
    featured: false,
    date: "2026"
  },

  // ══════════════════════════════
  //  4. ShaibAI Web
  // ══════════════════════════════
  {
    id: "shaibai-web",
    title: "ShaibAI Web",
    subtitle: "ذكاء اصطناعي في متصفحك — ASP.NET WebForms",
    shareTitle: "🌐 ShaibAI Web — تحدث مع الذكاء الاصطناعي من أي متصفح",
    shareDesc: "نسخة ويب من ShaibAI مبنية بـ ASP.NET WebForms تعمل على أي متصفح وتتصل بـ LM Studio محلياً. لا رفع بيانات، لا إنترنت مطلوب.",
    description: "نسخة ASP.NET WebForms من ShaibAI تعمل من المتصفح وتتصل بـ LM Studio محلياً بدون إرسال أي بيانات للإنترنت.",
    longDescription: "ShaibAI Web هي النسخة التي تعمل من المتصفح مباشرة — بدون تثبيت، بدون إعداد معقد.\n\nفتحت الباب أمام من لا يريد تثبيت برنامج كامل:\n• تعمل على Chrome وFirefox وEdge بدون مشكلة\n• تتصل بـ LM Studio عبر REST API المحلي\n• استجابات تتدفق في الوقت الفعلي\n• واجهة RTL عربية بالكامل\n• تاريخ محادثات منظم\n• نسخ ومشاركة الردود في خطوة واحدة\n• تصميم متجاوب يعمل على سطح المكتب والموبايل",
    type: "webapp",
    platform: "ASP.NET / Windows / IIS",
    status: "released",
    version: "1.0.0",
    size: "12 MB",
    category: "ذكاء اصطناعي",
    tags: ["C#", "ASP.NET", "WebForms", "LM Studio", "JavaScript"],
    keywords: "ShaibAI Web ASP.NET WebForms C# ذكاء اصطناعي ويب ai chat arabic webforms local AI",
    color: "#7B1FA2",
    accentColor: "#CE93D8",
    icon: "🌐",
    appIcon: "",
    screenshots: [],
    downloadUrl: "https://github.com/AbdulQuddus-dev/abdulquddus-aqdev.github.io/releases/download/shaibai-web-v1.0/ShaibAI-WebForm.zip",
    sourceUrl: "",
    demoUrl: "",
    featured: false,
    date: "2026"
  },

  // ══════════════════════════════
  //  5. محفظة الديون الذكية
  // ══════════════════════════════
  {
    id: "smart-debt-wallet",
    title: "محفظة الديون الذكية",
    subtitle: "نظام متطور لإدارة الديون والمستحقات بالصوت",
    shareTitle: "💳 محفظة الديون الذكية — أسهل طريقة لتنظيم الديون احترافياً",
    shareDesc: "نظّم ديونك، تابع السداد، واحصل على تنبيهات ذكية مع إدخال وإخراج صوتي في واجهة عربية احترافية.",
    description: "تطبيق ذكي لإدارة الديون والحسابات المالية وتتبع عمليات السداد مع دعم الإدخال الصوتي.",
    longDescription: "محفظة الديون الذكية وُجدت لأن الأوراق والأقلام لم تعد كافية لتتبع الحسابات في عالم رقمي.\n\nهي نظام احترافي مصمم لكل من يتعامل مع ديون يومياً — سواء أفراداً أو أصحاب محلات:\n• تسجيل وتتبع الديون والمستحقات بدقة\n• تسجيل السداد الجزئي والكامل بسهولة\n• إدخال صوتي سريع بدون كتابة\n• إخراج صوتي يقرأ لك البيانات والتنبيهات\n• تنبيهات ذكية بمواعيد الاستحقاق\n• تقارير وإحصائيات مالية منظمة\n• سجل كامل لجميع العمليات والحركات\n• دعم النسخ والمشاركة والطباعة\n• واجهة RTL عربية احترافية",
    type: "webapp",
    platform: "Web / Android / Windows",
    status: "released",
    version: "1.0.0",
    size: "14 MB",
    category: "إدارة مالية",
    tags: ["إدارة الديون", "محفظة ذكية", "إدخال صوتي", "تقارير مالية", "RTL"],
    keywords: "محفظة الديون الذكية إدارة الديون debt wallet تسجيل ديون متابعة سداد إدخال صوتي تطبيق مالي عربي",
    color: "#0D47A1",
    accentColor: "#64B5F6",
    icon: "💳",
    appIcon: deptSystemUrl + "icon-debt.jpeg",
    screenshots: [
      deptSystemUrl + "1.png",
      deptSystemUrl + "2.png",
      deptSystemUrl + "3.png",
      deptSystemUrl + "4.png",
      deptSystemUrl + "5.png",
      deptSystemUrl + "6.png"
    ],
    downloadUrl: "https://github.com/abdulqddus/debt-qat-management-system/releases/download/v1.0.0/base.apk",
    sourceUrl: "",
    demoUrl: "",
    featured: true,
    date: "2026"
  },

  // ══════════════════════════════
  //  6. الأزرق نت
  // ══════════════════════════════
  {
    id: "azraknet",
    title: "الأزرق نت",
    subtitle: "واجهة تسجيل دخول احترافية لشبكات الإنترنت",
    shareTitle: "📡 الأزرق نت — واجهة دخول شبكة بتصميم عصري عربي",
    shareDesc: "صفحة تسجيل دخول احترافية لشبكة الأزرق نت، تصميم عربي RTL متجاوب، سريع التحميل وسهل الاستخدام.",
    description: "واجهة تسجيل دخول احترافية لشبكة الأزرق نت بتصميم عصري وعربي متجاوب مع جميع الأجهزة.",
    longDescription: "الأزرق نت — واجهة لتسجيل الدخول صممتها لتكون أول تجربة يراها مستخدم الشبكة.\n\nالانطباع الأول يهم:\n• تصميم عصري وجذاب يعكس هوية الشبكة\n• واجهة RTL عربية بالكامل\n• تحقق فوري من بيانات المستخدم\n• رسائل خطأ واضحة ومفهومة\n• متوافق مع جميع الأجهزة (موبايل، تابلت، كمبيوتر)\n• تحميل فائق السرعة",
    type: "website",
    platform: "Web",
    status: "coming_soon",
    version: "1.0.0",
    size: "—",
    category: "ويب",
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "RTL"],
    keywords: "الأزرق نت azraknet صفحة دخول شبكة إنترنت html css javascript login page arabic",
    color: "#0097A7",
    accentColor: "#80DEEA",
    icon: "📡",
    appIcon: "",
    screenshots: [],
    downloadUrl: "",
    sourceUrl: "",
    demoUrl: "",
    featured: false,
    date: "2026"
  },

  // ══════════════════════════════════════════════════════
  //  المشاريع القادمة — معلّقة حتى حين
  //  لتفعيل أي مشروع: أزل /* و */ المحيطَين به فقط
  // ══════════════════════════════════════════════════════

  /*
  // ══════════════════════════════
  //  7. رياحين الجنان (قادم)
  // ══════════════════════════════
  {
    id: "riyaheen",
    title: "رياحين الجنان",
    subtitle: "منصة إسلامية شاملة — قرآن، أذكار، تفسير، فقه",
    shareTitle: "🌿 رياحين الجنان — تطبيق إسلامي متكامل للقرآن والأذكار والفقه",
    shareDesc: "رياحين الجنان: قرآن كريم، أذكار صباح ومساء، تفسير، مسائل فقهية، مكتبة صوتية، واختبارات تفاعلية. كل ما تحتاجه في مكان واحد.",
    description: "منصة إسلامية متكاملة تضم القرآن الكريم، الأذكار، التفسير، الفقه، المكتبة الصوتية، والاختبارات — مبنية بـ Flutter.",
    longDescription: "رياحين الجنان حلم طالما أردت تحقيقه — منصة إسلامية حقيقية تجمع كل ما يحتاجه المسلم في تطبيق واحد.\n\nما الذي يميزها؟\n• قرآن كريم كامل مع تلاوة صوتية\n• أذكار الصباح والمساء مع عداد تفاعلي\n• تفسير ميسّر للآيات\n• مسائل فقهية منظمة بالأبواب\n• مكتبة صوتية إسلامية\n• اختبارات تفاعلية لاختبار معلوماتك\n• واجهة جميلة وسهلة الاستخدام",
    type: "android",
    platform: "Android 5.0+",
    status: "coming_soon",
    version: "1.0.0",
    size: "—",
    category: "إسلامية",
    tags: ["Flutter", "Firebase", "Dart", "Quran", "إسلامي"],
    keywords: "رياحين الجنان تطبيق إسلامي قرآن أذكار تفسير فقه flutter android إسلام مسلم",
    color: "#2E7D32",
    accentColor: "#81C784",
    icon: "🌿",
    appIcon: "",
    screenshots: [],
    downloadUrl: "",
    sourceUrl: "",
    demoUrl: "",
    featured: false,
    date: "2026"
  },
  */

  /*
  // ══════════════════════════════
  //  8. ذِمّة (قادم)
  // ══════════════════════════════
  {
    id: "dhimma",
    title: "ذِمّة",
    subtitle: "إدارة الديون الشخصية بذكاء — Firebase Sync",
    shareTitle: "📒 ذِمّة — تطبيق ذكي لإدارة الديون الشخصية مع مزامنة Firebase",
    shareDesc: "ذمة: سجّل ديونك، تابع السداد، وابحث بالاسم بذكاء. يعمل بدون إنترنت ويزامن تلقائياً مع Firebase. عربي بالكامل.",
    description: "تطبيق Flutter متكامل لإدارة الديون الشخصية مع مزامنة Firebase وقاموس أسماء عربي ذكي للبحث.",
    longDescription: "ذِمّة اسم يحمل معنى — الالتزام والأمانة — وهذا بالضبط ما بُني عليه التطبيق.\n\nميزاته التي تجعله فريداً:\n• قاموس أسماء عربي ذكي بخوارزمية Fuzzy Matching للبحث\n• يعمل بالكامل بدون إنترنت مع تخزين محلي\n• مزامنة تلقائية مع Firebase عند الاتصال\n• تسجيل سداد جزئي وكامل مع تاريخ كل عملية\n• فلترة وتصفية ذكية للديون\n• واجهة RTL عربية احترافية",
    type: "android",
    platform: "Android 5.0+",
    status: "coming_soon",
    version: "1.0.0",
    size: "—",
    category: "مالية",
    tags: ["Flutter", "Firebase", "Dart", "Fuzzy Search", "RTL"],
    keywords: "ذمة dhimma تطبيق ديون شخصية flutter firebase fuzzy search قاموس أسماء عربي android مالية",
    color: "#4A148C",
    accentColor: "#AB47BC",
    icon: "📒",
    appIcon: "",
    screenshots: [],
    downloadUrl: "",
    sourceUrl: "",
    demoUrl: "",
    featured: false,
    date: "2026"
  },
  */

  
  // ══════════════════════════════
  //  9. اعثر على هاتفي 
  // ══════════════════════════════
  {
    id: "find-my-phone",
    title: "اعثر على هاتفي",
    subtitle: "تطبيق تتبع الهاتف عن بُعد بالصوت والأوامر",
    shareTitle: "🔍 اعثر على هاتفي — تتبع وأوامر عن بُعد لهاتفك المفقود",
    shareDesc: "فقدت هاتفك؟ اعثر عليه بالصوت وأوامر بعيدة. اعثر على هاتفي يتيح لك إرسال صوت إنذار وتحديد الموقع والتحكم عن بُعد.",
    description: "تطبيق Flutter للعثور على الهاتف المفقود عن بُعد بإرسال صوت إنذار وتتبع الموقع وإرسال أوامر بعيدة.",
    longDescription: "اعثر على هاتفي — لأن كل شخص أضاع هاتفه مرة على الأقل.\n\nالتطبيق يمنحك راحة البال:\n• إطلاق صوت إنذار عالٍ حتى لو كان الصوت صامتاً\n• تحديد الموقع الجغرافي في الوقت الفعلي\n• إرسال أوامر بعيدة من أي جهاز آخر\n• قفل الشاشة عن بُعد لحماية بياناتك\n• تنبيهات فورية عند تغيير الشريحة\n• يعمل في الخلفية بدون إزعاج",
    type: "android",
    platform: "Android 5.0+",
    status: "coming_soon",
    version: "1.0.0",
    size: "—",
    category: "أدوات وأمان",
    tags: ["Flutter", "Firebase", "FCM", "Location", "Remote"],
    keywords: "اعثر على هاتفي find my phone تتبع هاتف مفقود صوت إنذار موقع flutter firebase android أمان",
    color: "#E65100",
    accentColor: "#FFA726",
    icon: "🔍",
    appIcon: findMyPhoneUrl + "find_my_phone_icon.png",
    screenshots: [
       findMyPhoneUrl + "1.png",
       findMyPhoneUrl + "2.png",
       findMyPhoneUrl + "3.png",
       findMyPhoneUrl + "4.png",
       findMyPhoneUrl + "5.png",
       findMyPhoneUrl + "6.png",
       findMyPhoneUrl + "7.png"
    ],
    downloadUrl: "https://github.com/AbdulQuddus-dev/findMyPhone/releases/download/v0.0.1/app-release.apk",
    sourceUrl: "",
    demoUrl: "",
    featured: false,
    date: "2026"
  },
  

];
