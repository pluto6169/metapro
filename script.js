// ===== بيانات المصادر الأولية (الهوية المصرية) =====
const initialItems = [
    {
        id: "1",
        type: "كتاب",
        title: "مستقبل الثقافة في مصر",
        creator: "طه حسين",
        year: "1938",
        language: "ar",
        description: "كتاب يناقش هوية مصر الثقافية وعلاقتها بالحضارتين الشرقية والغربية، مع التأكيد على انتماء مصر لحضارة البحر المتوسط.",
        keywords: "هوية، ثقافة، غرب، شرق، تعليم، نهضة",
        dateAdded: "2025-03-15"
    },
    {
        id: "2",
        type: "كتاب",
        title: "خصائص النفس المصرية",
        creator: "عباس محمود العقاد",
        year: "1936",
        language: "ar",
        description: "دراسة في كتاب 'عن هوية مصر والمصريين' تدافع عن الشخصية المصرية وتؤكد على تاريخها الطويل في المقاومة والإبداع.",
        keywords: "هوية، سيكولوجية، تاريخ، شخصية مصرية، دفاع",
        dateAdded: "2025-03-10"
    },
    {
        id: "3",
        type: "وثيقة تاريخية",
        title: "دستور مصر 1923",
        creator: "اللجنة الدستورية المصرية",
        year: "1923",
        language: "ar",
        description: "أول دستور لمصر الحديثة بعد ثورة 1919، نص على أن 'مصر دولة ذات سيادة، وهي حرة مستقلة'.",
        keywords: "دستور، هوية، دولة، سيادة، استقلال، ثورة 1919",
        dateAdded: "2025-03-05"
    },
    {
        id: "4",
        type: "وثيقة تاريخية",
        title: "دستور الجمهورية المصرية 1956",
        creator: "مجلس الأمة المصري",
        year: "1956",
        language: "ar",
        description: "أول دستور يصرح بأن 'مصر دولة عربية' و'الشعب المصري جزء من الأمة العربية'، مما يعكس تطور الهوية.",
        keywords: "دستور، عروبة، جمهورية، أمة عربية، قومية",
        dateAdded: "2025-03-01"
    },
    {
        id: "5",
        type: "أغنية",
        title: "مصر يا أم الزمان",
        creator: "محمد عبد الوهاب",
        year: "1960",
        language: "ar-EG",
        description: "أغنية وطنية تجسد حب مصر والفخر بانتمائها، تمثل صوت الهوية المصرية في القرن العشرين.",
        keywords: "وطنية، هوية، فخر، انتماء، غناء، تراث",
        dateAdded: "2025-02-28"
    },
    {
        id: "6",
        type: "فيلم",
        title: "عودة الروح",
        creator: "توفيق الحكيم (رواية)",
        year: "1977",
        language: "ar-EG",
        description: "فيلم مقتبس من رواية توفيق الحكيم، يجسد فكرة 'البعث' الروحي للأمة المصرية من خلال أسرة مصرية بسيطة.",
        keywords: "هوية، شعب، ثورة 1919، تراث، سينما مصرية",
        dateAdded: "2025-02-25"
    },
    {
        id: "7",
        type: "لوحة فنية",
        title: "ذاكرة النيل",
        creator: "حلمي التوني",
        year: "1995",
        language: "ar-EG",
        description: "لوحة تجمع بين عناصر الفن الشعبي المصري والرموز الفرعونية، تعبر عن استمرارية الهوية المصرية عبر العصور.",
        keywords: "فن تشكيلي، هوية، تراث شعبي، فرعوني، نيل، وشم",
        dateAdded: "2025-02-20"
    },
    {
        id: "8",
        type: "مقال أكاديمي",
        title: "الهوية المصرية في أعمال التشكيل الخزفي المعاصر",
        creator: "د. محمد شاكر",
        year: "2018",
        language: "ar",
        description: "بحث أكاديمي يدرس كيفية تجسيد الهوية المصرية في فن الخزف المعاصر، مع تحليل لأعمال رواد هذا المجال.",
        keywords: "فن خزف، هوية، حديث، تراث، أكاديميا، بحث",
        dateAdded: "2025-02-15"
    },
    {
        id: "9",
        type: "مخطوطة",
        title: "قصة سنوحى (سانهت)",
        creator: "أدب مصري قديم",
        year: "حوالي 1875 ق.م",
        language: "ar",
        description: "من أقدم النصوص الأدبية المصرية التي تعبر عن الحنين للوطن والهوية المصرية، تُظهر تجذر المشاعر الوطنية منذ العصور الفرعونية.",
        keywords: "أدب قديم، حنين للوطن، انتماء، تراث فرعوني، بردية",
        dateAdded: "2025-02-10"
    }
];

// ===== بيانات التطبيق الرئيسية =====
let items = [];
let currentItemId = null;
let isEditMode = false;

// ===== تهيئة التطبيق =====
document.addEventListener('DOMContentLoaded', function () {
    // تحميل البيانات المحفوظة أو استخدام البيانات الأولية
    loadItems();

    // تهيئة جميع الأحداث
    initEvents();

    // عرض العناصر
    renderItems();

    // تحديث الإحصائيات
    updateStats();
});

// ===== الدوال الرئيسية =====
function loadItems() {
    const saved = localStorage.getItem('metadataItems');
    if (saved) {
        items = JSON.parse(saved);
    } else {
        // استخدام البيانات الأولية إذا لم توجد بيانات محفوظة
        items = [...initialItems];
        saveItems();
    }
}

function saveItems() {
    localStorage.setItem('metadataItems', JSON.stringify(items));
}

function renderItems(filteredItems = null) {
    const container = document.getElementById('itemsContainer');
    const itemsToShow = filteredItems || items;

    if (itemsToShow.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3>لا توجد مصادر تطابق بحثك</h3>
                <p>حاول تغيير كلمات البحث أو إضافة مصدر جديد</p>
                <button id="emptyAddBtn" class="btn btn-primary">
                    <i class="fas fa-plus"></i> أضف مصدراً جديداً
                </button>
            </div>
        `;
        document.getElementById('emptyAddBtn')?.addEventListener('click', showAddForm);
        return;
    }

    container.innerHTML = itemsToShow.map(item => `
        <div class="item-card" data-id="${item.id}">
            <div class="item-header">
                <span class="item-type-badge ${getTypeClass(item.type)}">
                    <i class="${getTypeIcon(item.type)}"></i> ${item.type}
                </span>
                <div class="item-actions">
                    <button class="icon-btn edit-btn" title="تعديل">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="icon-btn delete-btn" title="حذف">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="item-body">
                <h3 class="item-title">${item.title}</h3>
                <p class="item-creator"><i class="fas fa-user-pen"></i> ${item.creator || 'غير محدد'}</p>
                <p class="item-year"><i class="fas fa-calendar"></i> ${item.year || 'غير محدد'}</p>
                <p class="item-description">${item.description || 'لا يوجد وصف'}</p>
                <div class="item-keywords">
                    ${item.keywords ? item.keywords.split('، ').map(k => `<span class="keyword-tag">${k.trim()}</span>`).join('') : ''}
                </div>
            </div>
            <div class="item-footer">
                <span class="item-language"><i class="fas fa-language"></i> ${getLanguageName(item.language)}</span>
                <button class="btn btn-small preview-code-btn" data-id="${item.id}">
                    <i class="fas fa-code"></i> عرض الأكواد
                </button>
            </div>
        </div>
    `).join('');

    // إضافة أحداث لأزرار البطاقات
    attachCardEvents();
}

function updateStats() {
    // تحديث العدد الكلي
    document.getElementById('totalItems').textContent = items.length;

    // تحديث آخر الإضافات
    const recentList = document.getElementById('recentItems');
    const recentItems = [...items].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, 3);

    recentList.innerHTML = recentItems.map(item => `
        <li>
            <strong>${item.title}</strong>
            <span>${item.type} - ${item.dateAdded || 'غير محدد'}</span>
        </li>
    `).join('');

    // تحديث الرسم البياني البسيط (يمكن تطويره لاحقاً)
    updateSimpleChart();
}

function updateSimpleChart() {
    const chartDiv = document.getElementById('typeChart');
    const typeCount = {};

    items.forEach(item => {
        typeCount[item.type] = (typeCount[item.type] || 0) + 1;
    });

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
        'تسجيل صوتي': 'fas fa-podcast'
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
        'تسجيل صوتي': 'type-audio'
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

// ===== دوال عرض الأكواد =====
function generateSimpleCode(item) {
    return `<metaname ="title" content = "${item.title}" >
<metaname ="description" content = "${item.description || ''}" >
<metaname ="keywords" content = "${item.keywords || ''}" >
<metaname ="copyright" content = "حقوق النشر محفوظة ${new Date().getFullYear()}" >
<metaname ="author" content = "${item.creator || ''}" >
<metaHTTP-EGUIV ="name" content = "${item.title}" >
<metaHTTP-EGUIV ="dialect" content = "مصري" >
<metaHTTP-EGUIV ="language" content = "${getLanguageName(item.language)}" >
<metaHTTP-EGUIV ="content-type" content = "text/html; charset=ISO-2022-JP" >`;
}

function generateDublinCore(item) {
    return `<meta name="DC.title" content="${escapeHTML(item.title)}">
<meta name="DC.creator" content="${escapeHTML(item.creator || '')}">
<meta name="DC.contributor" content="${escapeHTML(item.creator || '')}">
<meta name="DC.publisher" content="مصر">
<meta name="DC.rights" content="حقوق النشر محفوظة">
<meta name="DC.date" content="${escapeHTML(item.year || '')}">
<meta name="DC.type" content="${escapeHTML(item.type)}">
<meta name="DC.format" content="نص">
<meta name="DC.format.extent" content="">
<meta name="DC.subject" content="${escapeHTML(item.keywords || '')}">
<meta name="DC.description" content="${escapeHTML(item.description || '')}">
<meta name="DC.coverage" content="مصر">
<meta name="DC.language" content="${escapeHTML(item.language)}">
<meta name="DC.identifier" content="${item.id}">`;
}
function generateMODS(item) {
    return `<mods>
<titleInfo>
<title>${escapeXML(item.title)}</title>
<subTitle></subTitle>
<partNumber></partNumber>
<partName></partName>
<nonSort></nonSort>
</titleInfo>
<name type="personal">
<namePart>${escapeXML(item.creator || '')}</namePart>
<role>
<roleTerm type="code" authority="marcrelator">aut</roleTerm>
<roleTerm type="text" authority="marcrelator">author</roleTerm>
</role>
</name>
<typeOfResource>text</typeOfResource>
<typeOfResource>still image</typeOfResource>
<originInfo>
<place>
<placeTerm type="text">مصر</placeTerm>
</place>
<publisher>غير محدد</publisher>
<dateIssued encoding="w3cdtf">${escapeXML(item.year || '')}</dateIssued>
<edition></edition>
</originInfo>
<language>
<languageTerm authority="iso639-2b">${escapeXML(item.language)}</languageTerm>
<languageTerm type="text">${getLanguageName(item.language)}</languageTerm>
</language>
<physicalDescription>
<internetMediaType>text/html</internetMediaType>
<digitalOrigin>born digital</digitalOrigin>
<extent></extent>
</physicalDescription>
<subject authority="lcsh">
<topic>${escapeXML(item.keywords || '')}</topic>
</subject>
<classification authority="ddc"></classification>
<identifier type="local">${item.id}</identifier>
<note>${escapeXML(item.description || '')}</note>
<location>
<physicalLocation>مصر</physicalLocation>
</location>
<recordInfo>
<recordContentSource>معرض الميتاداتا المصري</recordContentSource>
<recordCreationDate>${new Date().toISOString().split('T')[0]}</recordCreationDate>
<languageOfCataloging>
<languageTerm type="code" authority="iso639-2b">ar</languageTerm>
</languageOfCataloging>
</recordInfo>
</mods>`;
}

function escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
}
function escapeXML(text) {
    if (!text) return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

// ===== إدارة الأحداث =====
function initEvents() {
    // أحداث التبديل بين الأقسام
    document.getElementById('showAddFormBtn')?.addEventListener('click', showAddForm);
    document.getElementById('backToListBtn')?.addEventListener('click', showListSection);
    document.getElementById('previewBtn')?.addEventListener('click', showPreviewSection);
    document.getElementById('backToFormBtn')?.addEventListener('click', showFormSection);

    // أحداث النموذج
    document.getElementById('metadataForm')?.addEventListener('submit', handleFormSubmit);

    // أحداث البحث والتصفية
    document.getElementById('globalSearch')?.addEventListener('input', handleSearch);
    document.getElementById('typeFilter')?.addEventListener('change', handleFilter);

    // أحداث النسخ والتحميل
    document.getElementById('copyCodeBtn')?.addEventListener('click', copyCurrentCode);
    document.getElementById('downloadCodeBtn')?.addEventListener('click', downloadCurrentCode);

    // أحداث التصدير
    document.getElementById('exportAllBtn')?.addEventListener('click', exportAllAsJSON);
    document.getElementById('printAllBtn')?.addEventListener('click', printAll);

    // أحداث التبديل بين التنسيقات
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.code-display').forEach(d => d.classList.remove('active'));

            this.classList.add('active');
            const format = this.dataset.format;
            document.getElementById(`${format}Preview`).classList.add('active');
        });
    });

    // حدث الوضع الليلي
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

    // أحداث الحفظ من المعاينة
    document.getElementById('saveFromPreviewBtn')?.addEventListener('click', saveFromPreview);
}

function showListSection() {
    document.querySelectorAll('.main-section').forEach(s => s.style.display = 'none');
    document.getElementById('listSection').style.display = 'block';
    renderItems();
}

function showAddForm() {
    isEditMode = false;
    document.getElementById('formTitle').textContent = 'إضافة مصدر جديد';
    document.getElementById('metadataForm').reset();
    document.getElementById('itemId').value = '';
    currentItemId = null;

    document.querySelectorAll('.main-section').forEach(s => s.style.display = 'none');
    document.getElementById('formSection').style.display = 'block';
}

function showFormSection() {
    document.querySelectorAll('.main-section').forEach(s => s.style.display = 'none');
    document.getElementById('formSection').style.display = 'block';
}

function showPreviewSection() {
    // التحقق من صحة النموذج
    const form = document.getElementById('metadataForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // جمع البيانات من النموذج
    const itemData = {
        id: currentItemId || Date.now().toString(),
        type: document.getElementById('itemType').value,
        title: document.getElementById('itemTitle').value,
        creator: document.getElementById('itemCreator').value,
        year: document.getElementById('itemYear').value,
        language: document.getElementById('itemLanguage').value,
        description: document.getElementById('itemDescription').value,
        keywords: document.getElementById('itemKeywords').value,
        dateAdded: isEditMode ? items.find(i => i.id === currentItemId)?.dateAdded : new Date().toISOString().split('T')[0]
    };

    // عرض بيانات المصدر
    document.getElementById('previewSourceTitle').textContent = itemData.title;
    document.getElementById('previewSourceType').textContent = itemData.type;
    document.getElementById('previewSourceCreator').textContent = itemData.creator || 'غير محدد';
    document.getElementById('previewSourceYear').textContent = itemData.year || 'غير محدد';

    // توليد الأكواد
    document.getElementById('simpleCode').textContent = generateSimpleCode(itemData);
    document.getElementById('dublinCode').textContent = generateDublinCore(itemData);
    document.getElementById('modsCode').textContent = generateMODS(itemData);

    // عرض قسم المعاينة
    document.querySelectorAll('.main-section').forEach(s => s.style.display = 'none');
    document.getElementById('previewSection').style.display = 'block';
}

function handleFormSubmit(e) {
    e.preventDefault();

    const itemData = {
        id: currentItemId || Date.now().toString(),
        type: document.getElementById('itemType').value,
        title: document.getElementById('itemTitle').value,
        creator: document.getElementById('itemCreator').value,
        year: document.getElementById('itemYear').value,
        language: document.getElementById('itemLanguage').value,
        description: document.getElementById('itemDescription').value,
        keywords: document.getElementById('itemKeywords').value,
        dateAdded: isEditMode ? items.find(i => i.id === currentItemId)?.dateAdded : new Date().toISOString().split('T')[0]
    };

    if (isEditMode) {
        // تحديث العنصر الحالي
        const index = items.findIndex(item => item.id === currentItemId);
        if (index !== -1) {
            items[index] = itemData;
        }
    } else {
        // إضافة عنصر جديد
        items.push(itemData);
    }

    saveItems();
    showListSection();
    updateStats();
    showNotification(isEditMode ? 'تم تحديث المصدر بنجاح' : 'تم إضافة المصدر بنجاح');
}

function saveFromPreview() {
    // جمع البيانات من النموذج
    const itemData = {
        id: currentItemId || Date.now().toString(),
        type: document.getElementById('itemType').value,
        title: document.getElementById('itemTitle').value,
        creator: document.getElementById('itemCreator').value,
        year: document.getElementById('itemYear').value,
        language: document.getElementById('itemLanguage').value,
        description: document.getElementById('itemDescription').value,
        keywords: document.getElementById('itemKeywords').value,
        dateAdded: isEditMode ? items.find(i => i.id === currentItemId)?.dateAdded : new Date().toISOString().split('T')[0]
    };

    if (isEditMode) {
        // تحديث العنصر الحالي
        const index = items.findIndex(item => item.id === currentItemId);
        if (index !== -1) {
            items[index] = itemData;
        }
    } else {
        // إضافة عنصر جديد
        items.push(itemData);
    }

    saveItems();
    showListSection();
    updateStats();
    showNotification(isEditMode ? 'تم تحديث المصدر بنجاح' : 'تم إضافة المصدر بنجاح');
}

function attachCardEvents() {
    // أحداث تعديل العناصر
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const card = this.closest('.item-card');
            const id = card.dataset.id;
            editItem(id);
        });
    });

    // أحداث حذف العناصر
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const card = this.closest('.item-card');
            const id = card.dataset.id;
            confirmDelete(id);
        });
    });

    // أحداث عرض الأكواد
    document.querySelectorAll('.preview-code-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = this.dataset.id;
            previewItemCode(id);
        });
    });
}

function editItem(id) {
    const item = items.find(i => i.id === id);
    if (!item) return;

    isEditMode = true;
    currentItemId = id;

    document.getElementById('formTitle').textContent = 'تعديل مصدر';
    document.getElementById('itemId').value = item.id;
    document.getElementById('itemType').value = item.type;
    document.getElementById('itemTitle').value = item.title;
    document.getElementById('itemCreator').value = item.creator;
    document.getElementById('itemYear').value = item.year;
    document.getElementById('itemLanguage').value = item.language;
    document.getElementById('itemDescription').value = item.description;
    document.getElementById('itemKeywords').value = item.keywords;

    document.querySelectorAll('.main-section').forEach(s => s.style.display = 'none');
    document.getElementById('formSection').style.display = 'block';
}

function previewItemCode(id) {
    const item = items.find(i => i.id === id);
    if (!item) return;

    // عرض بيانات المصدر
    document.getElementById('previewSourceTitle').textContent = item.title;
    document.getElementById('previewSourceType').textContent = item.type;
    document.getElementById('previewSourceCreator').textContent = item.creator || 'غير محدد';
    document.getElementById('previewSourceYear').textContent = item.year || 'غير محدد';

    // توليد الأكواد
    document.getElementById('simpleCode').textContent = generateSimpleCode(item);
    document.getElementById('dublinCode').textContent = generateDublinCore(item);
    document.getElementById('modsCode').textContent = generateMODS(item);

    // عرض قسم المعاينة
    document.querySelectorAll('.main-section').forEach(s => s.style.display = 'none');
    document.getElementById('previewSection').style.display = 'block';
}

function confirmDelete(id) {
    const item = items.find(i => i.id === id);
    if (!item) return;

    // عرض نافذة التأكيد
    document.getElementById('confirmModal').style.display = 'flex';

    document.getElementById('cancelDeleteBtn').onclick = function () {
        document.getElementById('confirmModal').style.display = 'none';
    };

    document.getElementById('confirmDeleteBtn').onclick = function () {
        items = items.filter(i => i.id !== id);
        saveItems();
        renderItems();
        updateStats();
        document.getElementById('confirmModal').style.display = 'none';
        showNotification('تم حذف المصدر بنجاح');
    };
}

function handleSearch() {
    const query = document.getElementById('globalSearch').value.toLowerCase();
    const filtered = items.filter(item =>
        item.title.toLowerCase().includes(query) ||
        (item.creator && item.creator.toLowerCase().includes(query)) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        (item.keywords && item.keywords.toLowerCase().includes(query))
    );
    renderItems(filtered);
}

function handleFilter() {
    const type = document.getElementById('typeFilter').value;
    const filtered = type === 'all' ? items : items.filter(item => item.type === type);
    renderItems(filtered);
}

function copyCurrentCode() {
    const activeDisplay = document.querySelector('.code-display.active');
    const code = activeDisplay.querySelector('code').textContent;

    navigator.clipboard.writeText(code).then(() => {
        showNotification('تم نسخ الكود إلى الحافظة');
    });
}

function downloadCurrentCode() {
    const activeDisplay = document.querySelector('.code-display.active');
    const format = activeDisplay.id.replace('Preview', '');
    const code = activeDisplay.querySelector('code').textContent;

    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `metadata_${format}_${new Date().getTime()}.${format === 'simple' ? 'txt' : 'xml'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function exportAllAsJSON() {
    const dataStr = JSON.stringify(items, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `metadata_collection_${new Date().getTime()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('تم تصدير جميع البيانات كملف JSON');
}

function printAll() {
    const printWindow = window.open('', '_blank');
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
                    <h3>${item.title}</h3>
                    <p><strong>النوع:</strong> <span class="type">${item.type}</span></p>
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
    printWindow.print();
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');

    const icon = document.querySelector('#themeToggle i');
    const text = document.querySelector('#themeToggle span');

    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        text.textContent = 'الوضع النهاري';
    } else {
        icon.className = 'fas fa-moon';
        text.textContent = 'الوضع الليلي';
    }
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    const text = document.getElementById('notificationText');

    text.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}