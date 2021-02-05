const questionData =[
    {
        question: 'Ayberk kaç yaşında? ( Kolay sorularla başlayalım :) )',
        ch_1: '21',
        ch_2: '18',
        ch_3: '20',
        ch_4: '22',
        ch_5: '19',
        correct: 'ch_5'
    },{
        question: 'Ayberk\'in annesinin ismi ne?',
        ch_1: 'Aynur',
        ch_2: 'Berrin',
        ch_3: 'Aysel',
        ch_4: 'Mine',
        ch_5: 'Zübeyde',
        correct: 'ch_3'
    },{
        question: 'Ayberk\'in en sevdiği yemek nedir?',
        ch_1: 'Zeytinyağlı Sarma',
        ch_2: 'Çiğ Köfte',
        ch_3: 'Burger',
        ch_4: 'Pizza',
        ch_5: 'Mantı',
        correct: 'ch_1'
    },{
        question: 'Ayberk\'in manitası var mı?',
        ch_1: 'Yoktur',
        ch_2: 'boş',
        ch_3: 'boş',
        ch_4: 'Kesin vardır',
        ch_5: 'Bilmiyorum',
        correct: 'ch_4' 
    },{
        question: 'Ayberk hangi günde doğmuştur?',
        ch_1: '11 Eylül 2001',
        ch_2: '10 Eylül 2000',
        ch_3: '10 Eylül 2001',
        ch_4: '12 Eylül 2001',
        ch_5: '09 Eylül 2000',
        correct: 'ch_3' 
    },{
        question: 'En yakın kız arkadaşlarının ismi?',
        ch_1: 'Ayşe & Fatma & Hayriye',
        ch_2: 'Kezban & Duygu',
        ch_3: 'Eda & Sude',
        ch_4: 'İrem & Lale',
        ch_5: 'Bilmiyorum',
        correct: 'ch_4' 
    },{
        question: 'En son aldığı tişörtün markası?',
        ch_1: 'Zara',
        ch_2: 'Bershka',
        ch_3: 'Koton',
        ch_4: 'Lacoste',
        ch_5: 'Pull&Bear',
        correct: 'ch_2' 
    },{
        question: 'Ayberk nasıl biridir?',
        ch_1: 'Bilmiyorum',
        ch_2: 'Kıskanç',
        ch_3: 'Sürekli boş yapan',
        ch_4: 'Aynı Cem Yılmaz',
        ch_5: 'CEO, bazen güldüren, fırsatları kendine çeken...',
        correct: 'ch_5' 
    },{
        question: 'Ayberk\'in bilgisayarının markası?',
        ch_1: 'Bilgisayarı yoktur.',
        ch_2: 'MSI',
        ch_3: 'Monster oyun canavarı',
        ch_4: 'Apple',
        ch_5: 'Bilmiyorum',
        correct: 'ch_4' 
    },{
        question: 'Ayberk\'in Instagram\'dan DM\'leştiği ünlü kimdir?',
        ch_1: 'Kemal Sunal',
        ch_2: 'Jason Statham',
        ch_3: 'BEDÜK',
        ch_4: 'Müzeyyen Senar',
        ch_5: 'Zeki Müren',
        correct: 'ch_3' 
    },{
        question: 'Ayberk\'in doğum gününde istediği hediye tarzı?',
        ch_1: 'Anlamsız tişört ve kıyafetler',
        ch_2: 'Anlamsız kitaplar',
        ch_3: 'Anlamsız sıradan kişisel bakım ürünleri',
        ch_4: 'Anlamsız her şey',
        ch_5: 'Kişiye özel, arandaki bağı ifade eden anlamlı bir şey...',
        correct: 'ch_5'
    },{
        question: 'Ayberk\'in bu dönemki okul ortalaması(GPA) nedir?',
        ch_1: '3.5',
        ch_2: '4.00',
        ch_3: '3.00',
        ch_4: '2.00',
        ch_5: '2.70',
        correct: 'ch_4'
    },{
        question: 'Ayberk\'in babasının adı?',
        ch_1: 'Mahmut',
        ch_2: 'Mahir',
        ch_3: 'Mahsun',
        ch_4: 'Metin',
        ch_5: 'Mansur',
        correct: 'ch_4'
    },{
        question: 'Ayberk\'in üniversiteden en yakın arkadaşı?',
        ch_1: 'Hüsnü Özyeğin',
        ch_2: 'Ekrem İmamoğlu',
        ch_3: 'Atakan Eyice',
        ch_4: 'Trump',
        ch_5: 'Joe Biden',
        correct: 'ch_3'
    },{
        question: 'Ayberk hangi yemeği yerken aşırı terler?',
        ch_1: 'Acılı Çiğ Köfte',
        ch_2: 'İmam Bayıldı',
        ch_3: 'Pırasa',
        ch_4: 'Ispanak',
        ch_5: 'Terlemez',
        correct: 'ch_1'
    }
];
const questionBoards = document.getElementById("questionBoards");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const ch_1 = document.getElementById("ch_1-text");
const ch_2 = document.getElementById("ch_2-text");
const ch_3 = document.getElementById("ch_3-text");
const ch_4 = document.getElementById("ch_4-text");
const ch_5 = document.getElementById("ch_5-text")
const submitBtn = document.getElementById("button");
let currentQuiz = 0;
let click = 1;
let answers = undefined;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = questionData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    ch_1.innerHTML=currentQuizData.ch_1;
    ch_2.innerHTML=currentQuizData.ch_2;
    ch_3.innerHTML=currentQuizData.ch_3;
    ch_4.innerHTML=currentQuizData.ch_4;
    ch_5.innerHTML=currentQuizData.ch_5;
}

function getSelected(){


    let answer = undefined;

    answerEls.forEach((answerEl) =>{
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}
function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
     answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
    if (answer === questionData[currentQuiz].correct) {
    score+=1;
    }
    click++;
    currentQuiz++;
    if(currentQuiz <= questionData.length-1){
            loadQuiz();
            
            if(click>questionData.length-1){
            submitBtn.innerHTML = "BİTİR";
            }
        }else{
            if (score>questionData.length/2) {
                questionBoards.innerHTML = `<h2>TEBRİKLER</h2><br><h3> ${questionData.length} sorunun ${score} tanesini doğru cevapladın!</h3>`;
            }else if (score==questionData.length/2) {
                questionBoards.innerHTML = `<h2>YARI YARIYA :(</h2><br><h3> ${questionData.length} sorunun ${score} tanesini doğru cevapladın!</h3><button onclick="location.reload()" id="buttonlast">YENİDEN DENE??</button>`;
            }else{
                questionBoards.innerHTML = `<h2>BENİ TANIMIYORSUN :'(</h2><br><h3> ${questionData.length} sorunun ${score} tanesini doğru cevapladın!</h3><button onclick="location.reload()" id="buttonlast">YENİDEN DENE??</button>`;
            }
        
        }
        }
    
    });

