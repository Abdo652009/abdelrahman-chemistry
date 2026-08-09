// إنهاء شاشة التحميل تلقائياً عند تحميل الصفحة
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.classList.add('hidden'), 500);
        runCounters();
    }, 1000);
});

// تشغيل عداد الأرقام بطريقة تصاعدية حماسية
function runCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = target / 50; 
        
        const updateCount = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + speed);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
}

// تشغيل النوافذ المنبثقة لتسجيل الدخول
function openModal() { document.getElementById('loginModal').style.display = 'flex'; }
function closeModal() { document.getElementById('loginModal').style.display = 'none'; }
function handleLogin(e) {
    e.preventDefault();
    const name = document.getElementById('studentName').value;
    alert(`أهلاً بك يا بطل الكيمياء: ${name}! جاهز لتحدي اليوم؟ 🔥`);
    closeModal();
}

// بنك الأسئلة التفاعلي الفوري للكورسات
const quizData = {
    basics: [
        { q: "ما هو الجسيم ذو الشحنة السالبة داخل الذرة؟", options: ["البروتون", "الإلكترون", "النيوترون"], answer: 1 }
    ],
    organic: [
        { q: "ما هو المركب الأساسي في الكيمياء العضوية؟", options: ["الكربون", "النيتروجين", "الأكسجين"], answer: 0 }
    ],
    problems: [
        { q: "ما هي وحدة قياس كمية المادة في النظام الدولي؟", options: ["الجرام", "المول", "اللتر"], answer: 1 }
    ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let userPoints = 0;

function startQuiz(type) {
    currentQuiz = quizData[type];
    currentQuestionIndex = 0;
    document.getElementById('quiz-zone').classList.remove('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    loadQuestion();
}

function loadQuestion() {
    const qData = currentQuiz[currentQuestionIndex];
    document.getElementById('question').innerText = qData.q;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    qData.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const qData = currentQuiz[currentQuestionIndex];
    if (selectedIndex === qData.answer) {
        userPoints += 10;
        document.getElementById('points').innerText = userPoints;
        alert("إجابة صحيحة يا بطل! 🌟 كسبت 10 نقاط.");
    } else {
        alert("حاول مرة أخرى! الكيمياء محتاجة شوية تركيز 🧪");
    }
    
    // إنهاء الاختبار مباشرة لتبسيط التجربة الأولى
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');
}

function closeQuiz() { document.getElementById('quiz-zone').classList.add('hidden'); }
