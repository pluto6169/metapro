// ===== بيانات المصادر الأولية (الهوية المصرية) =====
const initialItems = [
    // --- المصادر الأصلية (بتواريخ جديدة واقعية) ---
    {
        id: "1",
        type: "كتاب",
        title: "مستقبل الثقافة في مصر",
        creator: "طه حسين",
        year: "1938",
        language: "ar",
        description: "كتاب يناقش هوية مصر الثقافية وعلاقتها بالحضارتين الشرقية والغربية.",
        keywords: "هوية، ثقافة، غرب، شرق، تعليم، نهضة",
        publisher: "دار المعارف",
        location: "القاهرة",
        format: "كتاب مطبوع",
        extent: "320 صفحة",
        identifier: "ISBN 978-977-02-1234-5",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        abstract: "رؤية ثقافية تربط مصر بحضارة المتوسط.",
        geographicCoverage: "مصر، البحر المتوسط",
        temporalCoverage: "القرن العشرين",
        audience: "أكاديمي",
        collection: "المكتبة المركزية",
        contributors: [{ name: "أحمد أمين", role: "محرر" }],
        dateAdded: "2025-12-10"
    },
    {
        id: "2",
        type: "كتاب",
        title: "خصائص النفس المصرية",
        creator: "عباس محمود العقاد",
        year: "1936",
        language: "ar",
        description: "دراسة تدافع عن الشخصية المصرية وتؤكد امتدادها التاريخي.",
        keywords: "هوية، سيكولوجية، تاريخ، شخصية مصرية",
        publisher: "دار الكتب المصرية",
        location: "القاهرة",
        format: "كتاب مطبوع",
        extent: "280 صفحة",
        identifier: "ISBN 978-977-03-5678-9",
        rights: "الملكية العامة",
        accessRights: "عام",
        dateAdded: "2025-12-10"
    },
    {
        id: "3",
        type: "وثيقة تاريخية",
        title: "دستور مصر 1923",
        creator: "اللجنة الدستورية المصرية",
        year: "1923",
        language: "ar",
        description: "أول دستور بعد ثورة 1919.",
        keywords: "دستور، هوية، دولة، سيادة، استقلال",
        publisher: "المطبعة الأميرية",
        location: "القاهرة",
        format: "وثيقة رقمية",
        extent: "45 صفحة",
        rights: "الملكية العامة",
        accessRights: "عام",
        dateAdded: "2025-12-09"
    },
    {
        id: "4",
        type: "وثيقة تاريخية",
        title: "دستور الجمهورية المصرية 1956",
        creator: "مجلس الأمة المصري",
        year: "1956",
        language: "ar",
        description: "أول دستور يصرّح بأن مصر دولة عربية.",
        keywords: "دستور، عروبة، جمهورية",
        publisher: "المطبعة الأميرية",
        location: "القاهرة",
        format: "وثيقة رقمية",
        rights: "الملكية العامة",
        accessRights: "عام",
        dateAdded: "2025-12-09"
    },
    {
        id: "5",
        type: "أغنية",
        title: "مصر يا أم الزمان",
        creator: "محمد عبد الوهاب",
        year: "1960",
        language: "ar-EG",
        description: "أغنية وطنية تعبّر عن الفخر والانتماء.",
        keywords: "وطنية، هوية، تراث",
        format: "تسجيل صوتي",
        extent: "4:30 دقيقة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-08"
    },
    {
        id: "6",
        type: "فيلم",
        title: "عودة الروح",
        creator: "توفيق الحكيم (رواية)",
        year: "1977",
        language: "ar-EG",
        description: "فيلم يناقش فكرة البعث الوطني.",
        keywords: "هوية، شعب، ثورة 1919",
        format: "فيديو",
        extent: "120 دقيقة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-08"
    },
    {
        id: "7",
        type: "لوحة فنية",
        title: "ذاكرة النيل",
        creator: "حلمي التوني",
        year: "1995",
        language: "ar-EG",
        description: "لوحة تمزج التراث الشعبي بالرموز الفرعونية.",
        keywords: "فن تشكيلي، هوية، نيل",
        format: "صورة رقمية",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-07"
    },
    {
        id: "8",
        type: "مقال أكاديمي",
        title: "الهوية المصرية في أعمال التشكيل الخزفي المعاصر",
        creator: "د. محمد شاكر",
        year: "2018",
        language: "ar",
        description: "دراسة عن حضور الهوية في فن الخزف.",
        keywords: "فن خزف، تراث",
        format: "مقال PDF",
        extent: "25 صفحة",
        identifier: "DOI 10.1234/abcd.2018.5678",
        rights: "المشاع الإبداعي",
        accessRights: "عام",
        source: "https://example.com/article.pdf",
        dateAdded: "2025-12-06"
    },
    {
        id: "9",
        type: "مخطوطة",
        title: "قصة سنوحي",
        creator: "أدب مصري قديم",
        year: "1875 ق.م",
        language: "ar",
        description: "أحد أهم نصوص الحنين للوطن في التاريخ المصري.",
        keywords: "أدب قديم، انتماء، بردية",
        location: "متحف اللوفر",
        format: "مخطوطة",
        rights: "الملكية العامة",
        accessRights: "عام",
        dateAdded: "2025-12-06"
    },

    // -----------------------------------------
    // --------- المصادر الجديدة (10 → 50) ------
    // -----------------------------------------

    {
        id: "10",
        type: "بودكاست",
        title: "جذور الهوية المصرية",
        creator: "مؤسسة الدراسات العربية",
        year: "2022",
        language: "ar",
        description: "حلقة تناقش تطور الهوية المصرية منذ الدولة القديمة.",
        keywords: "بودكاست، هوية، تاريخ",
        format: "تسجيل صوتي",
        extent: "38 دقيقة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-10"
    },

    {
        id: "11",
        type: "تقرير بحثي",
        title: "تحولات الهوية الوطنية بعد 2011",
        creator: "المركز المصري للدراسات الاستراتيجية",
        year: "2020",
        language: "ar",
        description: "تحليل اجتماعي عن علاقة الأحداث السياسية بإعادة تشكيل الهوية.",
        keywords: "هوية، سياسة، مجتمع",
        format: "PDF",
        extent: "65 صفحة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-10"
    },

    {
        id: "12",
        type: "وثائقي",
        title: "مصر: الناس والهوية",
        creator: "قناة الجزيرة الوثائقية",
        year: "2019",
        language: "ar",
        description: "فيلم وثائقي عن ملامح الهوية المصرية.",
        keywords: "وثائقي، شعب، ثقافة",
        format: "فيديو",
        extent: "52 دقيقة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-10"
    },

    {
        id: "13",
        type: "صورة فوتوغرافية",
        title: "احتفالات شم النسيم",
        creator: "الأرشيف المصري",
        year: "1965",
        language: "ar",
        description: "صورة توثّق عادة مصرية قديمة تعكس استمرارية الهوية.",
        keywords: "تراث، أعياد، تصوير",
        format: "صورة رقمية",
        rights: "الملكية العامة",
        accessRights: "عام",
        dateAdded: "2025-12-09"
    },

    {
        id: "14",
        type: "خريطة",
        title: "خريطة مصر الثقافية",
        creator: "الجهاز المركزي للإحصاء",
        year: "2021",
        language: "ar",
        description: "خريطة توضّح التوزيع الثقافي واللغوي في المحافظات.",
        keywords: "خريطة، ثقافة، هوية",
        format: "صورة رقمية",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-09"
    },

    {
        id: "15",
        type: "مقابلة",
        title: "حوار مع جمال حمدان",
        creator: "التلفزيون المصري",
        year: "1984",
        language: "ar",
        description: "مقابلة نادرة عن كتابه شخصية مصر.",
        keywords: "هوية، جغرافيا، تاريخ",
        format: "فيديو",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-09"
    },

    {
        id: "16",
        type: "كتاب",
        title: "شخصية مصر",
        creator: "جمال حمدان",
        year: "1983",
        language: "ar",
        description: "عمل موسوعي يشرح الخصائص الجغرافية والنفسية للشخصية المصرية.",
        keywords: "جمال حمدان، هوية، جغرافيا",
        publisher: "دار الهلال",
        format: "كتاب مطبوع",
        extent: "4 مجلدات",
        identifier: "ISBN 977-1234-55-7",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-09"
    },

    {
        id: "17",
        type: "لوحة فنية",
        title: "المصري",
        creator: "محمود سعيد",
        year: "1934",
        language: "ar",
        description: "لوحة تعكس ملامح الوجه المصري في بدايات القرن العشرين.",
        keywords: "فن تشكيلي، هوية",
        format: "صورة رقمية",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-08"
    },

    {
        id: "18",
        type: "مقال صحفي",
        title: "كيف تتجلى الهوية المصرية في الأغاني الشعبية؟",
        creator: "جريدة الأهرام",
        year: "2023",
        language: "ar",
        description: "تحليل عن الرموز الشعبية في الغناء المصري.",
        keywords: "تراث، غناء، مجتمع",
        format: "HTML",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-08"
    },

    {
        id: "19",
        type: "أرشيف إذاعي",
        title: "خطاب جمال عبد الناصر عن الانتماء",
        creator: "صوت العرب",
        year: "1962",
        language: "ar",
        description: "خطاب تاريخي يربط الهوية بالحرية الوطنية.",
        keywords: "سياسة، استقلال، هوية",
        format: "تسجيل صوتي",
        extent: "18 دقيقة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-08"
    },
    {
        id: "20",
        type: "دراسة ميدانية",
        title: "القيم المشتركة بين الأجيال في مصر",
        creator: "جامعة القاهرة – قسم الاجتماع",
        year: "2022",
        language: "ar",
        description: "بحث ميداني يقيس استمرارية القيم الثقافية بين الأجيال الشابة.",
        keywords: "قيم، شباب، مجتمع، هوية",
        format: "PDF",
        extent: "42 صفحة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-10"
    },

    {
        id: "21",
        type: "كتاب",
        title: "الهوية في السينما المصرية",
        creator: "د. إيمان عبد الرازق",
        year: "2021",
        language: "ar",
        description: "تحليل لتمثيل الهوية الشعبية والوطنية في السينما عبر العقود.",
        keywords: "سينما، مجتمع، تمثيل، ثقافة",
        publisher: "الهيئة العامة للكتاب",
        format: "كتاب مطبوع",
        extent: "310 صفحات",
        identifier: "ISBN 978-977-12-8899-2",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-10"
    },

    {
        id: "22",
        type: "تقرير دولي",
        title: "ملامح الثقافة المصرية",
        creator: "منظمة اليونسكو",
        year: "2020",
        language: "ar",
        description: "تقرير يرصد عناصر الثقافة المصرية المادية وغير المادية.",
        keywords: "تراث، ثقافة، يونسكو",
        format: "PDF",
        rights: "المشاع الإبداعي",
        extent: "78 صفحة",
        accessRights: "عام",
        dateAdded: "2025-12-09"
    },

    {
        id: "23",
        type: "مقال أكاديمي",
        title: "تأثير النيل على تشكيل الهوية المصرية",
        creator: "د. أحمد الجندي",
        year: "2019",
        language: "ar",
        description: "مقال يدرس علاقة الجغرافيا بالانتماء الوطني.",
        keywords: "نيل، جغرافيا، هوية",
        format: "PDF",
        extent: "19 صفحة",
        identifier: "DOI 10.2145/egygeo.2019.4412",
        rights: "المشاع الإبداعي",
        accessRights: "عام",
        dateAdded: "2025-12-09"
    },

    {
        id: "24",
        type: "فيلم وثائقي",
        title: "المصري الأصيل",
        creator: "القناة المصرية الأولى",
        year: "2018",
        language: "ar",
        description: "وثائقي يستعرض مظاهر الشخصية المصرية الشعبية.",
        keywords: "شخصية، تراث، مجتمع",
        format: "فيديو",
        extent: "48 دقيقة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-09"
    },

    {
        id: "25",
        type: "سجل تراثي",
        title: "الأراجوز المصري",
        creator: "وزارة الثقافة",
        year: "2021",
        language: "ar",
        description: "تسجيل لفن الأراجوز كتراث غير مادي.",
        keywords: "تراث، فن شعبي",
        format: "وثيقة",
        rights: "الملكية العامة",
        accessRights: "عام",
        dateAdded: "2025-12-08"
    },

    {
        id: "26",
        type: "بودكاست",
        title: "صوت المصريين",
        creator: "راديو القاهرة",
        year: "2023",
        language: "ar",
        description: "سلسلة حلقات عن التحولات الثقافية في مصر الحديثة.",
        keywords: "ثقافة، هوية، تاريخ",
        format: "تسجيل صوتي",
        extent: "32 دقيقة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-08"
    },

    {
        id: "27",
        type: "صورة فوتوغرافية",
        title: "شارع المعز ليلاً",
        creator: "هيئة تنشيط السياحة",
        year: "2022",
        language: "ar",
        description: "صورة تعكس تداخل التراث الإسلامي مع الحياة المعاصرة.",
        keywords: "تراث، عمارة، تصوير",
        format: "صورة رقمية",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-08"
    },

    {
        id: "28",
        type: "كتاب",
        title: "الهوية المصرية بين الماضي والحاضر",
        creator: "د. ليلى صادق",
        year: "2020",
        language: "ar",
        description: "كتاب يناقش تطور الهوية من منظور اجتماعي وسياسي.",
        keywords: "مجتمع، سياسة، تاريخ",
        publisher: "دار الشروق",
        identifier: "ISBN 978-977-09-4433-1",
        extent: "290 صفحة",
        format: "كتاب مطبوع",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-08"
    },

    {
        id: "29",
        type: "وثيقة سياسية",
        title: "ميثاق العمل الوطني",
        creator: "رئاسة الجمهورية",
        year: "1962",
        language: "ar",
        description: "وثيقة تحدد مبادئ الهوية الوطنية خلال الحقبة الثورية.",
        keywords: "سياسة، مجتمع، هوية",
        format: "وثيقة",
        rights: "الملكية العامة",
        accessRights: "عام",
        extent: "60 صفحة",
        dateAdded: "2025-12-07"
    },

    {
        id: "30",
        type: "فيلم",
        title: "الكيت كات",
        creator: "داوود عبد السيد",
        year: "1991",
        language: "ar-EG",
        description: "فيلم يعكس صورة المجتمع المصري الشعبي.",
        keywords: "سينما، مجتمع، هوية",
        format: "فيديو",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        extent: "118 دقيقة",
        dateAdded: "2025-12-07"
    },

    {
        id: "31",
        type: "لوحة فنية",
        title: "الريف المصري",
        creator: "إنجي أفلاطون",
        year: "1974",
        language: "ar",
        description: "لوحة تعبّر عن الهوية الريفية المصرية.",
        keywords: "فن، ريف، هوية",
        format: "صورة رقمية",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-07"
    },

    {
        id: "32",
        type: "مقال أكاديمي",
        title: "اللغة العامية ودورها في تشكيل الهوية",
        creator: "د. سامي الشناوي",
        year: "2023",
        language: "ar",
        description: "بحث يحلل أثر اللهجة المصرية على الشعور بالانتماء.",
        keywords: "لغة، لهجة، ثقافة",
        format: "PDF",
        extent: "27 صفحة",
        identifier: "DOI 10.1221/lang2023.0182",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-07"
    },

    {
        id: "33",
        type: "تسجيلة تاريخية",
        title: "موكب نقل المومياوات الملكية",
        creator: "وزارة السياحة والآثار",
        year: "2021",
        language: "ar",
        description: "تسجيل للحظة تعكس العمق الحضاري المصري.",
        keywords: "حفل، حضارة، فرعونية",
        format: "فيديو",
        extent: "45 دقيقة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-07"
    },

    {
        id: "34",
        type: "خريطة",
        title: "خريطة مصر الإدارية",
        creator: "الجهاز المركزي للتعبئة والإحصاء",
        year: "2023",
        language: "ar",
        description: "خريطة توضّح التقسيم الإداري الحديث.",
        keywords: "خريطة، محافظات، مصر",
        format: "صورة رقمية",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-06"
    },

    {
        id: "35",
        type: "كتاب",
        title: "التراث الشعبي في مصر",
        creator: "د. منى عبد الله",
        year: "2019",
        language: "ar",
        description: "كتاب موسوعي يوثّق العناصر الشعبية في الهوية.",
        keywords: "تراث، فولكلور، ثقافة",
        publisher: "دار الثقافة الجديدة",
        extent: "350 صفحة",
        identifier: "ISBN 978-977-64-2241-5",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        format: "كتاب مطبوع",
        dateAdded: "2025-12-06"
    },

    {
        id: "36",
        type: "مقابلة",
        title: "حديث مع يوسف شاهين عن مصر",
        creator: "مجلة الكواكب",
        year: "1997",
        language: "ar",
        description: "مقابلة تناقش رؤيته للهوية المصرية في السينما.",
        keywords: "سينما، هوية، فن",
        format: "نص مكتوب",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-06"
    },

    {
        id: "37",
        type: "مقال صحفي",
        title: "كيف تغيّرت الهوية بين الريف والمدينة؟",
        creator: "جريدة المصري اليوم",
        year: "2024",
        language: "ar",
        description: "تحليل لاختلاف أنماط الحياة وتأثيرها على الهوية.",
        keywords: "مجتمع، ريف، مدينة",
        format: "HTML",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-06"
    },

    {
        id: "38",
        type: "صورة فوتوغرافية",
        title: "السوق الشعبي في أسوان",
        creator: "الأرشيف المصري",
        year: "2022",
        language: "ar",
        description: "صورة تعرض مزيج النوبي والعربي في الهوية.",
        keywords: "نوبة، أسوان، ثقافة",
        format: "صورة رقمية",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-05"
    },

    {
        id: "39",
        type: "كتاب",
        title: "الهوية القبطية عبر التاريخ",
        creator: "د. فادي ميخائيل",
        year: "2021",
        language: "ar",
        description: "دراسة تاريخية عن مكونات الهوية القبطية داخل الهوية المصرية.",
        keywords: "أقباط، تاريخ، ثقافة",
        publisher: "دار النهضة",
        identifier: "ISBN 978-977-02-9988-5",
        extent: "410 صفحات",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        format: "كتاب مطبوع",
        dateAdded: "2025-12-05"
    },

    {
        id: "40",
        type: "بودكاست",
        title: "اللهجة المصرية: تاريخ وتحوّل",
        creator: "منصة صوت",
        year: "2023",
        language: "ar",
        description: "حلقة تناقش تطور العامية المصرية وربطها بالهوية.",
        keywords: "لغة، لهجة، ثقافة",
        format: "تسجيل صوتي",
        extent: "28 دقيقة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-05"
    },

    {
        id: "41",
        type: "مقال أكاديمي",
        title: "الموسيقى المصرية كأداة لبناء الهوية",
        creator: "د. ريم السعدني",
        year: "2024",
        language: "ar",
        description: "تحليل للتأثير الاجتماعي للموسيقى الشعبية.",
        keywords: "موسيقى، ثقافة، مجتمع",
        format: "PDF",
        extent: "22 صفحة",
        identifier: "DOI 10.9987/music.2024.1122",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-05"
    },

    {
        id: "42",
        type: "وثيقة تاريخية",
        title: "قانون حماية التراث المصري",
        creator: "مجلس النواب",
        year: "2018",
        language: "ar",
        description: "وثيقة تشريعية لحماية التراث والهوية الثقافية.",
        keywords: "قانون، تراث، ثقافة",
        format: "وثيقة",
        rights: "الملكية العامة",
        accessRights: "عام",
        extent: "33 صفحة",
        dateAdded: "2025-12-05"
    },

    {
        id: "43",
        type: "فيلم وثائقي",
        title: "مصر القديمة… مصر الجديدة",
        creator: "BBC Arabic",
        year: "2020",
        language: "ar",
        description: "وثائقي يربط التطور المعاصر بالعمق التاريخي.",
        keywords: "حضارة، تاريخ، هوية",
        format: "فيديو",
        extent: "55 دقيقة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-05"
    },

    {
        id: "44",
        type: "كتاب",
        title: "الهوية البصرية في الثقافة المصرية",
        creator: "د. شريف خطاب",
        year: "2024",
        language: "ar",
        description: "كتاب يعرض عناصر الهوية في العمارة والملابس والزخارف.",
        keywords: "عمارة، فن، ثقافة",
        publisher: "دار العين",
        format: "كتاب مطبوع",
        extent: "260 صفحة",
        identifier: "ISBN 978-977-10-5544-8",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-04"
    },

    {
        id: "45",
        type: "صورة فوتوغرافية",
        title: "الطابور الصباحي في مدرسة مصرية",
        creator: "مؤسسة التعليم المصري",
        year: "2023",
        language: "ar",
        description: "صورة توثق جزء من الهوية التعليمية والوطنية.",
        keywords: "تعليم، مصر، مجتمع",
        format: "صورة رقمية",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-04"
    },

    {
        id: "46",
        type: "أرشيف إذاعي",
        title: "برنامج لغتنا الجميلة",
        creator: "إذاعة البرنامج الثقافي",
        year: "1973",
        language: "ar",
        description: "حلقة تناقش جماليات اللغة المصرية.",
        keywords: "لغة، عامية، تراث",
        format: "تسجيل صوتي",
        extent: "14 دقيقة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-04"
    },

    {
        id: "47",
        type: "مقال صحفي",
        title: "تأثير مواقع التواصل على الهوية",
        creator: "جريدة الوطن",
        year: "2024",
        language: "ar",
        description: "تحليل لتغيّر السلوكيات الاجتماعية ودورها في تشكيل الهوية.",
        keywords: "سوشيال ميديا، مجتمع، هوية",
        format: "HTML",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-04"
    },

    {
        id: "48",
        type: "كتاب",
        title: "النوبيون: التاريخ والهوية",
        creator: "د. حسن عابدين",
        year: "2022",
        language: "ar",
        description: "كتاب يوثّق ملامح الهوية النوبية داخل مصر.",
        keywords: "نوبة، تراث، تاريخ",
        publisher: "دار البستاني",
        extent: "330 صفحة",
        identifier: "ISBN 978-977-07-2212-6",
        rights: "حقوق النشر محفوظة",
        format: "كتاب مطبوع",
        accessRights: "عام",
        dateAdded: "2025-12-03"
    },

    {
        id: "49",
        type: "خريطة",
        title: "خريطة التنوع السكاني في مصر",
        creator: "المركز القومي للبحوث الاجتماعية",
        year: "2023",
        language: "ar",
        description: "خريطة توضّح المكونات الاجتماعية والعرقية داخل مصر.",
        keywords: "مجتمع، سكان، ثقافة",
        format: "صورة رقمية",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-03"
    },

    {
        id: "50",
        type: "وثائقي",
        title: "صوت الشعب المصري",
        creator: "القناة الوثائقية المصرية",
        year: "2024",
        language: "ar",
        description: "وثائقي عن كيفية تعبير المصريين عن هويتهم في الحياة اليومية.",
        keywords: "شعب، ثقافة، هوية",
        format: "فيديو",
        extent: "50 دقيقة",
        rights: "حقوق النشر محفوظة",
        accessRights: "عام",
        dateAdded: "2025-12-03"
    },

];


// ===== بيانات المصادر الأولية (الهوية المصرية) =====


// ===== بيانات التطبيق الرئيسية =====
let items = [];
let currentItemId = null;
let isEditMode = false;

let currentSearchFilters = {
    type: '',
    language: '',
    yearFrom: '',
    yearTo: '',
    sortBy: 'newest',
    query: ''
};


// ===== تهيئة التطبيق =====
document.addEventListener('DOMContentLoaded', function () {
    console.log("جاري تحميل التطبيق...");

    // تحميل البيانات المحفوظة أو استخدام البيانات الأولية
    loadItems();

    // تهيئة جميع الأحداث
    initEvents();

    // عرض العناصر
    renderItems();

    // تحديث الإحصائيات
    updateStats();

    console.log("تم تحميل التطبيق بنجاح!");
});

// ===== الدوال الرئيسية =====
function loadItems() {
    const saved = localStorage.getItem('metadataItems');

    // لو في بيانات مخزنة وحجمها منطقي، استخدمها
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // لو المخزن فيه أقل من عدد العناصر الأوليـة، نفتـرض أنه قديم ونعيد الـ initialItems
            if (!Array.isArray(parsed) || parsed.length < initialItems.length) {
                console.warn('البيانات المخزنة قديمة أو تالفة — إعادة تعيين للبيانات الأولية');
                items = [...initialItems];
                saveItems();
            } else {
                items = parsed;
                console.log(`تم تحميل ${items.length} مصدر من التخزين المحلي`);
            }
        } catch (e) {
            console.error("خطأ في تحميل البيانات المحفوظة:", e);
            items = [...initialItems];
            saveItems();
        }
    } else {
        // استخدام البيانات الأولية إذا لم توجد بيانات محفوظة
        items = [...initialItems];
        saveItems();
        console.log(`تم استخدام ${items.length} مصدر أولي`);
    }
}


function saveItems() {
    try {
        localStorage.setItem('metadataItems', JSON.stringify(items));
        console.log("تم حفظ البيانات بنجاح");
    } catch (e) {
        console.error("خطأ في حفظ البيانات:", e);
    }
}

function renderItems(filteredItems = null) {
    console.log("جاري عرض العناصر...");
    if (filteredItems) {
        renderSearchResults(filteredItems);
        updateSearchStats(filteredItems);
    } else {
        performAdvancedSearch();
    }
}

function updateStats() {
    // تحديث العدد الكلي
    const totalItemsElement = document.getElementById('totalItems');
    if (totalItemsElement) {
        totalItemsElement.textContent = items.length;
    }

    // تحديث آخر الإضافات
    const recentList = document.getElementById('recentItems');
    if (recentList) {
        const recentItems = [...items].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, 3);

        recentList.innerHTML = recentItems.map(item => `
            <li>
                <strong>${item.title}</strong>
                <span>${item.type} - ${item.dateAdded || 'غير محدد'}</span>
            </li>
        `).join('');
    }

    // تحديث الرسم البياني البسيط
    updateSimpleChart();
}

function updateSimpleChart() {
    const chartDiv = document.getElementById('typeChart');
    if (!chartDiv) return;

    const typeCount = {};

    items.forEach(item => {
        typeCount[item.type] = (typeCount[item.type] || 0) + 1;
    });

    if (Object.keys(typeCount).length === 0) {
        chartDiv.innerHTML = '<p class="placeholder-chart">لا توجد بيانات للعرض</p>';
        return;
    }

    const maxCount = Math.max(...Object.values(typeCount));
    const chartHeight = 100;

    chartDiv.innerHTML = `
        <div class="chart-bars">
            ${Object.entries(typeCount).map(([type, count]) => `
                <div class="chart-bar-container">
                    <div class="chart-bar" style="height: ${(count / maxCount) * chartHeight}px" 
                         title="${type}: ${count} عنصر"></div>
                    <span class="chart-label">${type}</span>
                </div>
            `).join('')}
        </div>
        <div class="chart-legend">
            ${Object.entries(typeCount).map(([type, count]) => `
                <span><i class="${getTypeIcon(type)}"></i> ${type}: ${count}</span>
            `).join('')}
        </div>
    `;
}

// ===== دوال المساعدة =====
function getTypeIcon(type) {
    const icons = {
        'كتاب': 'fas fa-book',
        'مقال أكاديمي': 'fas fa-file-alt',
        'أغنية': 'fas fa-music',
        'فيلم': 'fas fa-film',
        'وثيقة تاريخية': 'fas fa-scroll',
        'لوحة فنية': 'fas fa-palette',
        'مخطوطة': 'fas fa-scroll-old',
        'تسجيل صوتي': 'fas fa-podcast',
        'بودكاست': 'fas fa-podcast'
    };
    return icons[type] || 'fas fa-question-circle';
}

function getTypeClass(type) {
    const classes = {
        'كتاب': 'type-book',
        'مقال أكاديمي': 'type-article',
        'أغنية': 'type-song',
        'فيلم': 'type-film',
        'وثيقة تاريخية': 'type-doc',
        'لوحة فنية': 'type-art',
        'مخطوطة': 'type-manuscript',
        'تسجيل صوتي': 'type-audio',
        'بودكاست': 'type-audio'
    };
    return classes[type] || 'type-other';
}

function getLanguageName(code) {
    const languages = {
        'ar': 'العربية',
        'ar-EG': 'العربية (مصر)',
        'en': 'الإنجليزية',
        'fr': 'الفرنسية',
        'other': 'أخرى'
    };
    return languages[code] || code;
}

// ===== دوال البحث والتصفية المتقدمة =====
function performAdvancedSearch() {
    console.log("جاري البحث المتقدم...");

    const query = document.getElementById('globalSearch')?.value.toLowerCase() || '';
    const type = document.getElementById('advancedTypeFilter')?.value || '';
    const language = document.getElementById('languageFilter')?.value || '';
    const yearFrom = document.getElementById('yearFrom')?.value || '';
    const yearTo = document.getElementById('yearTo')?.value || '';
    const sortBy = document.getElementById('sortResults')?.value || 'newest';

    // حفظ الفلاتر الحالية
    currentSearchFilters = { query, type, language, yearFrom, yearTo, sortBy };

    // تطبيق البحث والتصفية
    let filtered = [...items];

    // البحث النصي
    if (query) {
        filtered = filtered.filter(item =>
            (item.title && item.title.toLowerCase().includes(query)) ||
            (item.creator && item.creator.toLowerCase().includes(query)) ||
            (item.description && item.description.toLowerCase().includes(query)) ||
            (item.keywords && item.keywords.toLowerCase().includes(query))
        );
    }

    // تصفية النوع
    if (type) {
        filtered = filtered.filter(item => item.type === type);
    }

    // تصفية اللغة
    if (language) {
        filtered = filtered.filter(item => item.language === language);
    }

    // تصفية السنة
    if (yearFrom) {
        filtered = filtered.filter(item => {
            const year = parseInt(item.year) || 0;
            return year >= parseInt(yearFrom);
        });
    }

    if (yearTo) {
        filtered = filtered.filter(item => {
            const year = parseInt(item.year) || 0;
            return year <= parseInt(yearTo);
        });
    }

    // الترتيب
    filtered = sortItems(filtered, sortBy);

    // تحديث العرض
    renderSearchResults(filtered);
    updateSearchStats(filtered);
    updateActiveFiltersDisplay();
}

function sortItems(items, sortBy) {
    const sorted = [...items];

    switch (sortBy) {
        case 'newest':
            return sorted.sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
        case 'oldest':
            return sorted.sort((a, b) => new Date(a.dateAdded || 0) - new Date(b.dateAdded || 0));
        case 'title-asc':
            return sorted.sort((a, b) => (a.title || '').localeCompare(b.title || '', 'ar'));
        case 'title-desc':
            return sorted.sort((a, b) => (b.title || '').localeCompare(a.title || '', 'ar'));
        case 'year-asc':
            return sorted.sort((a, b) => (parseInt(a.year) || 0) - (parseInt(b.year) || 0));
        case 'year-desc':
            return sorted.sort((a, b) => (parseInt(b.year) || 0) - (parseInt(a.year) || 0));
        case 'type':
            return sorted.sort((a, b) => (a.type || '').localeCompare(b.type || '', 'ar'));
        default:
            return sorted;
    }
}

function renderSearchResults(filteredItems) {
    const container = document.getElementById('itemsContainer');
    if (!container) return;

    if (filteredItems.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3>لا توجد مصادر حتى الآن</h3>
                <p>ابدأ بإضافة أول مصدر في مجموعتك</p>
                <button id="emptyAddBtn" class="btn btn-primary">
                    <i class="fas fa-plus"></i> أضف مصدراً جديداً
                </button>
            </div>
        `;
        return;
    }

    // عرض النتائج
    container.innerHTML = filteredItems.map(item => `
        <div class="item-card" data-id="${item.id}">
            <div class="item-header">
                <span class="item-type-badge ${getTypeClass(item.type)}">
                    <i class="${getTypeIcon(item.type)}"></i> ${item.type}
                </span>
                <div class="item-actions">
                    <button class="icon-btn edit-btn" title="تعديل" data-id="${item.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="icon-btn delete-btn" title="حذف" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="item-body">
                <h3 class="item-title">
                    ${highlightSearchTerms(item.title || '', currentSearchFilters.query)}
                </h3>
                <p class="item-creator">
                    <i class="fas fa-user-pen"></i> 
                    ${highlightSearchTerms(item.creator || 'غير محدد', currentSearchFilters.query)}
                </p>
                <p class="item-year"><i class="fas fa-calendar"></i> ${item.year || 'غير محدد'}</p>
                <p class="item-description">
                    ${highlightSearchTerms(item.description || 'لا يوجد وصف', currentSearchFilters.query)}
                </p>
                <div class="item-keywords">
                    ${item.keywords ? item.keywords.split('، ').map(k => `
                        <span class="keyword-tag" data-keyword="${k.trim()}">${k.trim()}</span>
                    `).join('') : ''}
                </div>
            </div>
            <div class="item-footer">
                <span class="item-language">
                    <i class="fas fa-language"></i> ${getLanguageName(item.language)}
                </span>
                <button class="btn btn-small preview-code-btn" data-id="${item.id}">
                    <i class="fas fa-code"></i> عرض الأكواد
                </button>
            </div>
        </div>
    `).join('');
}

function highlightSearchTerms(text, query) {
    if (!query || !text) return text || '';

    const terms = query.split(' ').filter(term => term.length > 0);
    let highlighted = text;

    terms.forEach(term => {
        const regex = new RegExp(`(${term})`, 'gi');
        highlighted = highlighted.replace(regex, '<mark class="search-highlight">$1</mark>');
    });

    return highlighted;
}

function updateSearchStats(filteredItems) {
    const total = items.length;
    const filtered = filteredItems.length;

    const searchResultsCount = document.getElementById('searchResultsCount');
    if (searchResultsCount) {
        searchResultsCount.innerHTML = `
            <i class="fas fa-search"></i>
            <span>النتائج: <strong>${filtered}</strong> من ${total}</span>
        `;
    }
}

// ===== إدارة الأحداث =====
function initEvents() {
    console.log("جاري تهيئة الأحداث...");

    // 1. الأحداث الأساسية
    setupBasicEvents();

    // 2. أحداث البحث
    setupSearchEvents();

    // 3. أحداث النموذج
    setupFormEvents();

    // 4. أحداث المعاينة
    setupPreviewEvents();

    // 5. أحداث التصدير
    setupExportEvents();

    // 6. أحداث الوضع الليلي
    setupThemeEvents();

    // 7. أحداث النافذة المنبثقة
    setupModalEvents();

    // 8. استخدام event delegation للأحداث الديناميكية
    setupEventDelegation();

    console.log("تم تهيئة جميع الأحداث");
}

function setupBasicEvents() {
    // زر إضافة جديد
    const showAddFormBtn = document.getElementById('showAddFormBtn');
    if (showAddFormBtn) {
        showAddFormBtn.addEventListener('click', showAddForm);
    }

    // زر العودة للقائمة
    const backToListBtn = document.getElementById('backToListBtn');
    if (backToListBtn) {
        backToListBtn.addEventListener('click', showListSection);
    }
}

function setupSearchEvents() {
    // البحث الفوري
    const globalSearch = document.getElementById('globalSearch');
    if (globalSearch) {
        globalSearch.addEventListener('input', performAdvancedSearch);
    }

    // فلاتر البحث
    const filterElements = [
        'advancedTypeFilter',
        'languageFilter',
        'yearFrom',
        'yearTo',
        'sortResults'
    ];

    filterElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', performAdvancedSearch);
        }
    });

    // أزرار البحث
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

function setupFormEvents() {
    const metadataForm = document.getElementById('metadataForm');
    if (metadataForm) {
        metadataForm.addEventListener('submit', function (e) {
            e.preventDefault();
            saveItem();
        });
    }

    // زر المعاينة
    const previewBtn = document.getElementById('previewBtn');
    if (previewBtn) {
        previewBtn.addEventListener('click', showPreviewSection);
    }

    // زر الحقول المتقدمة
    const toggleAdvancedBtn = document.getElementById('toggleAdvancedBtn');
    if (toggleAdvancedBtn) {
        toggleAdvancedBtn.addEventListener('click', toggleAdvancedFields);
    }

    // زر إضافة مساهم
    const addContributorBtn = document.getElementById('addContributorBtn');
    if (addContributorBtn) {
        addContributorBtn.addEventListener('click', addContributor);
    }
}

function setupPreviewEvents() {
    // زر العودة للتعديل
    const backToFormBtn = document.getElementById('backToFormBtn');
    if (backToFormBtn) {
        backToFormBtn.addEventListener('click', showFormSection);
    }

    // زر الحفظ من المعاينة
    const saveFromPreviewBtn = document.getElementById('saveFromPreviewBtn');
    if (saveFromPreviewBtn) {
        saveFromPreviewBtn.addEventListener('click', saveFromPreview);
    }

    // أزرار التبويب
    document.addEventListener('click', function (e) {
        if (e.target.closest('.tab-btn')) {
            const tabBtn = e.target.closest('.tab-btn');
            const format = tabBtn.dataset.format;

            // إزالة النشاط من جميع الأزرار
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // إخفاء جميع المحتويات
            document.querySelectorAll('.code-display').forEach(display => {
                display.classList.remove('active');
            });

            // تفعيل الزر والعرض المحدد
            tabBtn.classList.add('active');
            const previewElement = document.getElementById(format + 'Preview');
            if (previewElement) {
                previewElement.classList.add('active');
            }
        }
    });

    // نسخ الكود
    const copyCodeBtn = document.getElementById('copyCodeBtn');
    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', copyCurrentCode);
    }

    // تحميل الكود
    const downloadCodeBtn = document.getElementById('downloadCodeBtn');
    if (downloadCodeBtn) {
        downloadCodeBtn.addEventListener('click', downloadCurrentCode);
    }
}

function setupExportEvents() {
    // تصدير JSON
    const exportAllBtn = document.getElementById('exportAllBtn');
    if (exportAllBtn) {
        exportAllBtn.addEventListener('click', exportAllAsJSON);
    }

    // طباعة
    const printAllBtn = document.getElementById('printAllBtn');
    if (printAllBtn) {
        printAllBtn.addEventListener('click', printAll);
    }
}

function setupThemeEvents() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function setupModalEvents() {
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    if (cancelDeleteBtn) {
        cancelDeleteBtn.addEventListener('click', function () {
            document.getElementById('confirmModal').style.display = 'none';
        });
    }

    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', confirmDeleteAction);
    }
}

function setupEventDelegation() {
    // استخدام event delegation للأحداث الديناميكية
    document.addEventListener('click', function (e) {
        // زر إضافة من القائمة الفارغة
        if (e.target && e.target.id === 'emptyAddBtn') {
            showAddForm();
            return;
        }

        // حذف مصدر
        if (e.target.closest('.delete-btn')) {
            const btn = e.target.closest('.delete-btn');
            const id = btn.dataset.id;
            if (id) {
                confirmDelete(id);
            }
            return;
        }

        // تعديل مصدر
        if (e.target.closest('.edit-btn')) {
            const btn = e.target.closest('.edit-btn');
            const id = btn.dataset.id;
            if (id) {
                editItem(id);
            }
            return;
        }

        // معاينة الأكواد من البطاقة
        if (e.target.closest('.preview-code-btn')) {
            const btn = e.target.closest('.preview-code-btn');
            const id = btn.dataset.id;
            if (id) {
                previewItemCode(id);
            }
            return;
        }

        // الكلمات المفتاحية
        if (e.target.closest('.keyword-tag')) {
            const tag = e.target.closest('.keyword-tag');
            const keyword = tag.dataset.keyword;
            if (keyword) {
                searchByKeyword(keyword);
            }
            return;
        }
    });
}

// ===== دوال الحقول المتقدمة =====
function toggleAdvancedFields() {
    const section = document.querySelector('.advanced-fields-section');
    const toggleBtn = document.getElementById('toggleAdvancedBtn');

    if (section && toggleBtn) {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
            toggleBtn.innerHTML = '<i class="fas fa-chevron-up"></i> إخفاء الحقول المتقدمة';
        } else {
            section.style.display = 'none';
            toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i> إظهار الحقول المتقدمة';
        }
    }
}

function addContributor() {
    const container = document.querySelector('.contributors-container');
    if (!container) return;

    const newGroup = document.createElement('div');
    newGroup.className = 'contributor-input-group';
    newGroup.innerHTML = `
        <input type="text" class="contributor-name" placeholder="اسم المساهم">
        <select class="contributor-role">
            <option value="محرر">محرر</option>
            <option value="مترجم">مترجم</option>
            <option value="رسام">رسام</option>
            <option value="معد">معد</option>
            <option value="مراجع">مراجع</option>
            <option value="موزع">موزع</option>
        </select>
        <button type="button" class="btn btn-small remove-contributor">
            <i class="fas fa-times"></i>
        </button>
    `;

    container.appendChild(newGroup);

    // إضافة حدث للحذف
    const removeBtn = newGroup.querySelector('.remove-contributor');
    if (removeBtn) {
        removeBtn.addEventListener('click', function () {
            if (container.children.length > 1) {
                newGroup.remove();
            }
        });
    }
}

// ===== دوال إدارة المحتوى =====
function showListSection() {
    // إخفاء جميع الأقسام
    document.querySelectorAll('.main-section').forEach(section => {
        section.classList.remove('active-section');
        section.style.display = 'none';
    });

    // إظهار قسم القائمة
    const listSection = document.getElementById('listSection');
    if (listSection) {
        listSection.classList.add('active-section');
        listSection.style.display = 'block';
        renderItems();
    }
}

function showAddForm() {
    isEditMode = false;
    currentItemId = null;

    // إعادة تعيين النموذج
    const form = document.getElementById('metadataForm');
    if (form) {
        form.reset();
        document.getElementById('itemId').value = '';
        document.getElementById('formTitle').textContent = 'إضافة مصدر جديد';

        // إعادة تعيين الحقول المتقدمة
        const advancedFields = [
            'itemPublisher', 'itemLocation', 'itemFormat', 'itemExtent',
            'itemIdentifier', 'itemSource', 'itemRights', 'itemAccessRights',
            'itemSubjects', 'itemAbstract', 'itemStartDate', 'itemEndDate',
            'itemGeographicCoverage', 'itemTemporalCoverage', 'itemAudience',
            'itemProvenance', 'itemCollection'
        ];

        advancedFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) field.value = '';
        });

        // إعادة تعيين المساهمين
        const container = document.querySelector('.contributors-container');
        if (container) {
            container.innerHTML = `
                <div class="contributor-input-group">
                    <input type="text" class="contributor-name" placeholder="اسم المساهم">
                    <select class="contributor-role">
                        <option value="محرر">محرر</option>
                        <option value="مترجم">مترجم</option>
                        <option value="رسام">رسام</option>
                        <option value="معد">معد</option>
                        <option value="مراجع">مراجع</option>
                        <option value="موزع">موزع</option>
                    </select>
                    <button type="button" class="btn btn-small remove-contributor" style="display: none;">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        }
    }

    // إخفاء جميع الأقسام
    document.querySelectorAll('.main-section').forEach(section => {
        section.classList.remove('active-section');
        section.style.display = 'none';
    });

    // إظهار قسم النموذج
    const formSection = document.getElementById('formSection');
    if (formSection) {
        formSection.classList.add('active-section');
        formSection.style.display = 'block';
    }
}

function showFormSection() {
    // إخفاء جميع الأقسام
    document.querySelectorAll('.main-section').forEach(section => {
        section.classList.remove('active-section');
        section.style.display = 'none';
    });

    // إظهار قسم النموذج
    const formSection = document.getElementById('formSection');
    if (formSection) {
        formSection.classList.add('active-section');
        formSection.style.display = 'block';
    }
}

function showPreviewSection() {
    // التحقق من صحة النموذج
    const form = document.getElementById('metadataForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // جمع البيانات
    const itemData = collectFormData();

    // تحديث معاينة المعلومات
    document.getElementById('previewSourceTitle').textContent = itemData.title || 'بدون عنوان';
    document.getElementById('previewSourceType').textContent = itemData.type || 'غير محدد';
    document.getElementById('previewSourceCreator').textContent = itemData.creator || 'غير محدد';
    document.getElementById('previewSourceYear').textContent = itemData.year || 'غير محدد';

    // توليد الأكواد
    document.getElementById('simpleCode').textContent = generateSimpleCode(itemData);
    document.getElementById('dublinCode').textContent = generateDublinCore(itemData);
    document.getElementById('modsCode').textContent = generateMODS(itemData);

    // إخفاء جميع الأقسام
    document.querySelectorAll('.main-section').forEach(section => {
        section.classList.remove('active-section');
        section.style.display = 'none';
    });

    // إظهار قسم المعاينة
    const previewSection = document.getElementById('previewSection');
    if (previewSection) {
        previewSection.classList.add('active-section');
        previewSection.style.display = 'block';
    }
}

function saveItem() {
    const form = document.getElementById('metadataForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const itemData = collectFormData();

    if (isEditMode && currentItemId) {
        // تحديث العنصر الحالي
        const index = items.findIndex(item => item.id === currentItemId);
        if (index !== -1) {
            items[index] = itemData;
        }
    } else {
        // إضافة عنصر جديد
        itemData.id = Date.now().toString();
        itemData.dateAdded = new Date().toISOString().split('T')[0];
        items.push(itemData);
    }

    saveItems();
    showListSection();
    updateStats();
    showNotification(isEditMode ? 'تم تحديث المصدر بنجاح' : 'تم إضافة المصدر بنجاح');
}

function saveFromPreview() {
    const itemData = collectFormData();

    if (isEditMode && currentItemId) {
        // تحديث العنصر الحالي
        const index = items.findIndex(item => item.id === currentItemId);
        if (index !== -1) {
            items[index] = itemData;
        }
    } else {
        // إضافة عنصر جديد
        itemData.id = Date.now().toString();
        itemData.dateAdded = new Date().toISOString().split('T')[0];
        items.push(itemData);
    }

    saveItems();
    showListSection();
    updateStats();
    showNotification(isEditMode ? 'تم تحديث المصدر بنجاح' : 'تم إضافة المصدر بنجاح');
}

function editItem(id) {
    const item = items.find(i => i.id === id);
    if (!item) return;

    isEditMode = true;
    currentItemId = id;

    // تعبئة النموذج بالبيانات
    populateFormForEdit(item);

    // إخفاء جميع الأقسام
    document.querySelectorAll('.main-section').forEach(section => {
        section.classList.remove('active-section');
        section.style.display = 'none';
    });

    // إظهار قسم النموذج
    const formSection = document.getElementById('formSection');
    if (formSection) {
        formSection.classList.add('active-section');
        formSection.style.display = 'block';
        document.getElementById('formTitle').textContent = 'تعديل مصدر';
    }
}

function populateFormForEdit(item) {
    // الحقول الأساسية
    document.getElementById('itemId').value = item.id || '';
    document.getElementById('itemType').value = item.type || '';
    document.getElementById('itemTitle').value = item.title || '';
    document.getElementById('itemCreator').value = item.creator || '';
    document.getElementById('itemYear').value = item.year || '';
    document.getElementById('itemLanguage').value = item.language || 'ar';
    document.getElementById('itemDescription').value = item.description || '';
    document.getElementById('itemKeywords').value = item.keywords || '';

    // الحقول المتقدمة
    document.getElementById('itemPublisher').value = item.publisher || '';
    document.getElementById('itemLocation').value = item.location || '';
    document.getElementById('itemFormat').value = item.format || '';
    document.getElementById('itemExtent').value = item.extent || '';
    document.getElementById('itemIdentifier').value = item.identifier || '';
    document.getElementById('itemSource').value = item.source || '';
    document.getElementById('itemRights').value = item.rights || '';
    document.getElementById('itemAccessRights').value = item.accessRights || 'عام';
    document.getElementById('itemSubjects').value = item.subjects || '';
    document.getElementById('itemAbstract').value = item.abstract || '';
    document.getElementById('itemStartDate').value = item.startDate || '';
    document.getElementById('itemEndDate').value = item.endDate || '';
    document.getElementById('itemGeographicCoverage').value = item.geographicCoverage || '';
    document.getElementById('itemTemporalCoverage').value = item.temporalCoverage || '';
    document.getElementById('itemAudience').value = item.audience || '';
    document.getElementById('itemProvenance').value = item.provenance || '';
    document.getElementById('itemCollection').value = item.collection || '';

    // المساهمون
    const container = document.querySelector('.contributors-container');
    if (container && item.contributors && item.contributors.length > 0) {
        container.innerHTML = '';

        item.contributors.forEach((contributor, index) => {
            const group = document.createElement('div');
            group.className = 'contributor-input-group';
            group.innerHTML = `
                <input type="text" class="contributor-name" value="${contributor.name || ''}" placeholder="اسم المساهم">
                <select class="contributor-role">
                    <option value="محرر" ${contributor.role === 'محرر' ? 'selected' : ''}>محرر</option>
                    <option value="مترجم" ${contributor.role === 'مترجم' ? 'selected' : ''}>مترجم</option>
                    <option value="رسام" ${contributor.role === 'رسام' ? 'selected' : ''}>رسام</option>
                    <option value="معد" ${contributor.role === 'معد' ? 'selected' : ''}>معد</option>
                    <option value="مراجع" ${contributor.role === 'مراجع' ? 'selected' : ''}>مراجع</option>
                    <option value="موزع" ${contributor.role === 'موزع' ? 'selected' : ''}>موزع</option>
                </select>
                <button type="button" class="btn btn-small remove-contributor" ${index === 0 ? 'style="display: none;"' : ''}>
                    <i class="fas fa-times"></i>
                </button>
            `;

            container.appendChild(group);
        });
    }
}

function previewItemCode(id) {
    const item = items.find(i => i.id === id);
    if (!item) return;

    // تحديث معاينة المعلومات
    document.getElementById('previewSourceTitle').textContent = item.title || 'بدون عنوان';
    document.getElementById('previewSourceType').textContent = item.type || 'غير محدد';
    document.getElementById('previewSourceCreator').textContent = item.creator || 'غير محدد';
    document.getElementById('previewSourceYear').textContent = item.year || 'غير محدد';

    // توليد الأكواد
    document.getElementById('simpleCode').textContent = generateSimpleCode(item);
    document.getElementById('dublinCode').textContent = generateDublinCore(item);
    document.getElementById('modsCode').textContent = generateMODS(item);

    // إخفاء جميع الأقسام
    document.querySelectorAll('.main-section').forEach(section => {
        section.classList.remove('active-section');
        section.style.display = 'none';
    });

    // إظهار قسم المعاينة
    const previewSection = document.getElementById('previewSection');
    if (previewSection) {
        previewSection.classList.add('active-section');
        previewSection.style.display = 'block';
    }
}

function confirmDelete(id) {
    const modal = document.getElementById('confirmModal');
    if (modal) {
        modal.style.display = 'flex';

        // تخزين معرف العنصر المراد حذفه
        modal.dataset.itemToDelete = id;
    }
}

function confirmDeleteAction() {
    const modal = document.getElementById('confirmModal');
    const id = modal.dataset.itemToDelete;

    if (id) {
        items = items.filter(item => item.id !== id);
        saveItems();
        renderItems();
        updateStats();
        showNotification('تم حذف المصدر بنجاح');
    }

    modal.style.display = 'none';
    delete modal.dataset.itemToDelete;
}

// ===== دوال جمع البيانات =====
function collectFormData() {
    // جمع بيانات المساهمين
    const contributors = [];
    document.querySelectorAll('.contributor-input-group').forEach(group => {
        const name = group.querySelector('.contributor-name')?.value;
        const role = group.querySelector('.contributor-role')?.value;
        if (name && name.trim()) {
            contributors.push({ name: name.trim(), role });
        }
    });

    return {
        id: document.getElementById('itemId').value || Date.now().toString(),
        type: document.getElementById('itemType').value,
        title: document.getElementById('itemTitle').value,
        creator: document.getElementById('itemCreator').value,
        year: document.getElementById('itemYear').value,
        language: document.getElementById('itemLanguage').value,
        description: document.getElementById('itemDescription').value,
        keywords: document.getElementById('itemKeywords').value,
        publisher: document.getElementById('itemPublisher').value,
        location: document.getElementById('itemLocation').value,
        format: document.getElementById('itemFormat').value,
        extent: document.getElementById('itemExtent').value,
        identifier: document.getElementById('itemIdentifier').value,
        source: document.getElementById('itemSource').value,
        rights: document.getElementById('itemRights').value,
        accessRights: document.getElementById('itemAccessRights').value,
        subjects: document.getElementById('itemSubjects').value,
        abstract: document.getElementById('itemAbstract').value,
        startDate: document.getElementById('itemStartDate').value,
        endDate: document.getElementById('itemEndDate').value,
        geographicCoverage: document.getElementById('itemGeographicCoverage').value,
        temporalCoverage: document.getElementById('itemTemporalCoverage').value,
        audience: document.getElementById('itemAudience').value,
        provenance: document.getElementById('itemProvenance').value,
        collection: document.getElementById('itemCollection').value,
        contributors: contributors,
        dateAdded: isEditMode ? items.find(i => i.id === currentItemId)?.dateAdded : new Date().toISOString().split('T')[0]
    };
}

// ===== دوال توليد الأكواد =====
function generateSimpleCode(item) {
    return `<meta name="title" content="${escapeHTML(item.title || '')}">
<meta name="description" content="${escapeHTML(item.description || '')}">
<meta name="keywords" content="${escapeHTML(item.keywords || '')}">
<meta name="copyright" content="${escapeHTML(item.rights || 'حقوق النشر محفوظة')}">
<meta name="author" content="${escapeHTML(item.creator || '')}">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="language" content="${getLanguageName(item.language)}">
<meta name="publisher" content="${escapeHTML(item.publisher || '')}">
<meta name="date" content="${escapeHTML(item.year || '')}">
<meta name="format" content="${escapeHTML(item.format || '')}">
<meta name="identifier" content="${escapeHTML(item.identifier || '')}">
<meta name="source" content="${escapeHTML(item.source || '')}">`;
}

function generateDublinCore(item) {
    return `<meta name="DC.title" content="${escapeHTML(item.title || '')}">
<meta name="DC.creator" content="${escapeHTML(item.creator || '')}">
<meta name="DC.subject" content="${escapeHTML(item.keywords || '')}">
<meta name="DC.description" content="${escapeHTML(item.description || '')}">
<meta name="DC.publisher" content="${escapeHTML(item.publisher || '')}">
<meta name="DC.date" content="${escapeHTML(item.year || '')}">
<meta name="DC.type" content="${escapeHTML(item.type || '')}">
<meta name="DC.format" content="${escapeHTML(item.format || '')}">
<meta name="DC.identifier" content="${escapeHTML(item.identifier || '')}">
<meta name="DC.source" content="${escapeHTML(item.source || '')}">
<meta name="DC.language" content="${escapeHTML(item.language || 'ar')}">
<meta name="DC.rights" content="${escapeHTML(item.rights || '')}">`;
}

function generateMODS(item) {
    return `<mods xmlns="http://www.loc.gov/mods/v3">
    <titleInfo>
        <title>${escapeXML(item.title || '')}</title>
    </titleInfo>
    <name type="personal">
        <namePart>${escapeXML(item.creator || '')}</namePart>
        <role>
            <roleTerm type="text">creator</roleTerm>
        </role>
    </name>
    <typeOfResource>${escapeXML(getMODSType(item.type))}</typeOfResource>
    <originInfo>
        <place>
            <placeTerm type="text">${escapeXML(item.location || '')}</placeTerm>
        </place>
        <publisher>${escapeXML(item.publisher || '')}</publisher>
        <dateIssued>${escapeXML(item.year || '')}</dateIssued>
    </originInfo>
    <language>
        <languageTerm type="code">${escapeXML(item.language || 'ar')}</languageTerm>
    </language>
    <physicalDescription>
        <form>${escapeXML(item.format || '')}</form>
        <extent>${escapeXML(item.extent || '')}</extent>
    </physicalDescription>
    <abstract>${escapeXML(item.description || '')}</abstract>
    <subject>
        <topic>${escapeXML(item.keywords || '')}</topic>
    </subject>
    <identifier type="local">${escapeXML(item.identifier || item.id)}</identifier>
    <location>
        <url>${escapeXML(item.source || '')}</url>
    </location>
    <accessCondition type="useAndReproduction">${escapeXML(item.rights || '')}</accessCondition>
</mods>`;
}

function getMODSType(type) {
    const typeMapping = {
        'كتاب': 'text',
        'مقال أكاديمي': 'text',
        'أغنية': 'sound recording',
        'فيلم': 'moving image',
        'وثيقة تاريخية': 'text',
        'لوحة فنية': 'still image',
        'مخطوطة': 'text',
        'تسجيل صوتي': 'sound recording',
        'بودكاست': 'sound recording'
    };
    return typeMapping[type] || 'text';
}

function escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
}

function escapeXML(text) {
    if (!text) return '';
    return text.toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

// ===== دوال إضافية =====
function clearAllFilters() {
    document.getElementById('globalSearch').value = '';
    document.getElementById('advancedTypeFilter').value = '';
    document.getElementById('languageFilter').value = '';
    document.getElementById('yearFrom').value = '';
    document.getElementById('yearTo').value = '';
    document.getElementById('sortResults').value = 'newest';

    performAdvancedSearch();
}

function searchByKeyword(keyword) {
    document.getElementById('globalSearch').value = keyword;
    performAdvancedSearch();
}

function copyCurrentCode() {
    const activeDisplay = document.querySelector('.code-display.active');
    if (!activeDisplay) return;

    const code = activeDisplay.querySelector('code')?.textContent;
    if (!code) return;

    navigator.clipboard.writeText(code).then(() => {
        showNotification('تم نسخ الكود إلى الحافظة');
    }).catch(err => {
        console.error('فشل نسخ الكود:', err);
        showNotification('فشل نسخ الكود');
    });
}

function downloadCurrentCode() {
    const activeDisplay = document.querySelector('.code-display.active');
    if (!activeDisplay) return;

    const format = activeDisplay.id.replace('Preview', '');
    const code = activeDisplay.querySelector('code')?.textContent;
    if (!code) return;

    const extension = format === 'simple' ? 'txt' : 'xml';
    const filename = `metadata_${format}_${new Date().getTime()}.${extension}`;
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showNotification(`تم تحميل الملف: ${filename}`);
}

function exportAllAsJSON() {
    const dataStr = JSON.stringify(items, null, 2);
    const filename = `metadata_collection_${new Date().getTime()}.json`;
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showNotification(`تم تصدير ${items.length} مصدر كملف JSON`);
}

function printAll() {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        showNotification('الرجاء السماح بالنوافذ المنبثقة للطباعة');
        return;
    }

    printWindow.document.write(`
        <html dir="rtl">
        <head>
            <title>طباعة مصادر الهوية المصرية</title>
            <style>
                body { font-family: 'Cairo', sans-serif; padding: 20px; }
                h1 { color: #2c3e50; text-align: center; }
                .item { border: 1px solid #ddd; margin: 10px 0; padding: 15px; }
                .type { background: #3498db; color: white; padding: 3px 8px; border-radius: 3px; }
            </style>
        </head>
        <body>
            <h1>مصادر الهوية المصرية - معرض الميتاداتا</h1>
            <p>عدد المصادر: ${items.length} | تاريخ الطباعة: ${new Date().toLocaleDateString('ar-EG')}</p>
            <hr>
            ${items.map(item => `
                <div class="item">
                    <h3>${item.title || 'بدون عنوان'}</h3>
                    <p><strong>النوع:</strong> <span class="type">${item.type || 'غير محدد'}</span></p>
                    <p><strong>المؤلف:</strong> ${item.creator || 'غير محدد'}</p>
                    <p><strong>السنة:</strong> ${item.year || 'غير محدد'}</p>
                    <p><strong>الوصف:</strong> ${item.description || 'لا يوجد'}</p>
                    <p><strong>الكلمات المفتاحية:</strong> ${item.keywords || 'لا يوجد'}</p>
                </div>
            `).join('')}
        </body>
        </html>
    `);
    printWindow.document.close();

    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 500);
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark-mode');
    const icon = document.querySelector('#themeToggle i');
    const text = document.querySelector('#themeToggle span');

    if (isDark) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        if (icon) icon.className = 'fas fa-moon';
        if (text) text.textContent = 'الوضع الليلي';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        if (icon) icon.className = 'fas fa-sun';
        if (text) text.textContent = 'الوضع النهاري';
    }

    // حفظ التفضيل
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    const text = document.getElementById('notificationText');

    if (!notification || !text) return;

    text.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function updateActiveFiltersDisplay() {
    // هذه الدالة لتحديث عرض الفلاتر النشطة
    const tagsContainer = document.getElementById('activeFiltersTags');
    if (!tagsContainer) return;

    // يمكن إضافة كود هنا لعرض الفلاتر النشطة
}

// ===== تهيئة الوضع الليلي من التخزين المحلي =====
function initThemeFromStorage() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        const icon = document.querySelector('#themeToggle i');
        const text = document.querySelector('#themeToggle span');
        if (icon) icon.className = 'fas fa-sun';
        if (text) text.textContent = 'الوضع النهاري';
    }
}

// تهيئة الوضع الليلي عند تحميل الصفحة
initThemeFromStorage();
// ===== التصفح عبر الصفحات =====
let currentPage = 1;
const itemsPerPage = 1000;

onDiv.innerHTML = paginationHTML;

// أحداث أزرار التصفح
document.getElementById('prevPageBtn')?.addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
});

document.getElementById('nextPageBtn')?.addEventListener('click', function () {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
    }
});


function renderPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = items.slice(startIndex, endIndex);

    renderSearchResults(pageItems);
    updateSearchStats(pageItems);
}
