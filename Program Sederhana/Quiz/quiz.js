const quizData = [
  {
    question:
      "1. Bagaimana cara mengatakan 'Nama saya adalah' dalam bahasa Jepang?",
    a: "わたしのなまえは [nama Anda] です",
    b: "わたしは [nama Anda] です",
    c: "おはようございます",
    d: "こんにちは",
    correct: "a",
  },
  {
    question: "2. Apa arti dari salam ini? おはようございます",
    a: "Selamat malam",
    b: "Selamat pagi",
    c: "Selamat siang",
    d: "Terima kasih",
    correct: "b",
  },
  {
    question:
      "3. Bagaimana cara menanyakan 'Siapa nama Anda?' dalam bahasa Jepang?",
    a: "あなたはだれですか？",
    b: "あなたのしごとはなんですか？",
    c: "あなたのなまえはなんですか？",
    d: "あなたのかぞくは？",
    correct: "c",
  },
  {
    question:
      "4. Bagaimana cara mengatakan 'Saya berasal dari Indonesia' dalam bahasa Jepang?",
    a: "わたしはインドネシアです",
    b: "わたしはインドネシアじんです",
    c: "わたしはインドネシアへいきます",
    d: "わたしはインドネシアからきました",
    correct: "d",
  },
  {
    question:
      "5. Bagaimana cara mengatakan 'Saya seorang guru' dalam bahasa Jepang?",
    a: "わたしはがくせいです",
    b: "わたしはせんせいです",
    c: "わたしはかいしゃいんです",
    d: "わたしはしゅふです",
    correct: "b",
  },
  {
    question:
      "6. Bagaimana cara menanyakan 'Berapa umur Anda?' dalam bahasa Jepang?",
    a: "あなたはどこにすんでいますか？",
    b: "あなたはなんじですか？",
    c: "あなたはなんさいですか？",
    d: "あなたはなんねんせいですか？",
    correct: "c",
  },
];

const quizHeader = document.querySelector(".header h2");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("next");
const result = document.getElementById("result");
const answerEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  quizHeader.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
  nextBtn.disabled = true;
  result.innerText = "";
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
      result.innerText = "Benar!";
      result.style.color = "green";
    } else {
      result.innerText =
        "Salah! Jawaban yang benar adalah: " +
        quizData[currentQuiz][quizData[currentQuiz].correct];
      result.style.color = "red";
    }
    submitBtn.disabled = true;
    nextBtn.disabled = false;
  } else {
    result.innerText = "Pilih jawaban terlebih dahulu!";
    result.style.color = "orange";
  }
});

nextBtn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
    submitBtn.disabled = false;
  } else {
    document.querySelector(".container").innerHTML = `
      <h2>Kuis Selesai!</h2>
      <p>Skor Anda: ${score}/${quizData.length}</p>
      <button onclick="location.reload()">Ulangi Kuis</button>
    `;
  }
});

loadQuiz();
