const questions = [
  {
    question: "Que signifie HTML ?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "HighText Modern Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
    ],
  },
  {
    question: "Quel attribut HTML est utilisé pour définir une classe CSS ?",
    answers: [
      { text: "style", correct: false },
      { text: "class", correct: true },
      { text: "id", correct: false },
    ],
  },
  {
    question: "Quelle balise est utilisée pour insérer une image ?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<image>", correct: false },
      { text: "<pic>", correct: false },
    ],
  },
  {
    question: "Quel est le rôle de la balise <head> ?",
    answers: [
      { text: "Afficher le contenu principal", correct: false },
      { text: "Contenir les métadonnées du document", correct: true },
      { text: "Afficher un titre visible", correct: false },
    ],
  },
  {
    question: "Comment centrer un texte en CSS ?",
    answers: [
      { text: "text-center", correct: false },
      { text: "text-align: center;", correct: true },
      { text: "align-text: middle;", correct: false },
    ],
  },
  {
    question: "Quel est l'élément racine d’un document HTML ?",
    answers: [
      { text: "<html>", correct: true },
      { text: "<body>", correct: false },
      { text: "<root>", correct: false },
    ],
  },
  {
    question: "Quel attribut rend un champ de formulaire obligatoire ?",
    answers: [
      { text: "required", correct: true },
      { text: "validate", correct: false },
      { text: "needed", correct: false },
    ],
  },
  {
    question: "Quelle propriété CSS change la taille du texte ?",
    answers: [
      { text: "font-style", correct: false },
      { text: "font-size", correct: true },
      { text: "text-size", correct: false },
    ],
  },
  {
    question: "Quelle balise est utilisée pour un lien hypertexte ?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false },
    ],
  },
  {
    question: "Quel sélecteur CSS cible tous les éléments <p> ?",
    answers: [
      { text: "p", correct: true },
      { text: ".p", correct: false },
      { text: "#p", correct: false },
    ],
  },
  {
    question: "Quelle propriété CSS change la couleur de fond ?",
    answers: [
      { text: "background-color", correct: true },
      { text: "color", correct: false },
      { text: "bg-color", correct: false },
    ],
  },
  {
    question: "Quel est le bon doctype HTML5 ?",
    answers: [
      { text: "<!DOCTYPE html>", correct: true },
      { text: "<doctype html5>", correct: false },
      { text: "<!html>", correct: false },
    ],
  },
  {
    question: "Quelle balise est utilisée pour les tableaux ?",
    answers: [
      { text: "<table>", correct: true },
      { text: "<tab>", correct: false },
      { text: "<grid>", correct: false },
    ],
  },
  {
    question: "Quelle propriété CSS gère l’espace intérieur d’un élément ?",
    answers: [
      { text: "margin", correct: false },
      { text: "padding", correct: true },
      { text: "border", correct: false },
    ],
  },
  {
    question: "Comment écrire un commentaire en HTML ?",
    answers: [
      { text: "<!-- commentaire -->", correct: true },
      { text: "// commentaire", correct: false },
      { text: "/* commentaire */", correct: false },
    ],
  },
  {
    question: "Quelle balise est utilisée pour un titre de niveau 1 ?",
    answers: [
      { text: "<title>", correct: false },
      { text: "<h1>", correct: true },
      { text: "<header>", correct: false },
    ],
  },
  {
    question: "Quel attribut CSS arrondit les coins d’un élément ?",
    answers: [
      { text: "corner-radius", correct: false },
      { text: "border-radius", correct: true },
      { text: "radius", correct: false },
    ],
  },
  {
    question: "Quel attribut permet de donner un identifiant unique ?",
    answers: [
      { text: "class", correct: false },
      { text: "id", correct: true },
      { text: "ref", correct: false },
    ],
  },
  {
    question: "Quel élément HTML définit une liste non ordonnée ?",
    answers: [
      { text: "<ul>", correct: true },
      { text: "<ol>", correct: false },
      { text: "<li>", correct: false },
    ],
  },
  {
    question: "Quelle propriété CSS est utilisée pour cacher un élément ?",
    answers: [
      { text: "hidden", correct: false },
      { text: "display: none;", correct: true },
      { text: "visibility: hide;", correct: false },
    ],
  },
  // Question 21
{
  question: "Quelle valeur de `flex-direction` affiche les éléments en colonne ?",
  answers: [
    { text: "column", correct: true },
    { text: "row", correct: false },
    { text: "vertical", correct: false },
  ],
},

// Question 22
{
  question: "Quelle propriété Flexbox permet d'aligner les éléments verticalement au centre ?",
  answers: [
    { text: "justify-content: center;", correct: false },
    { text: "align-items: center;", correct: true },
    { text: "text-align: center;", correct: false },
  ],
},

// Question 23
{
  question: "Comment centrer complètement un élément avec Flexbox (horizontalement et verticalement) ?",
  answers: [
    { text: "justify-content: center; align-items: center;", correct: true },
    { text: "text-align: center; vertical-align: middle;", correct: false },
    { text: "margin: auto;", correct: false },
  ],
},

// Question 24
{
  question: "Que fait `position: absolute;` en CSS ?",
  answers: [
    { text: "L’élément est positionné par rapport à son parent positionné", correct: true },
    { text: "L’élément est centré dans la page", correct: false },
    { text: "L’élément est fixe en haut de la page", correct: false },
  ],
},

// Question 25
{
  question: "Quelle différence entre `position: relative;` et `absolute;` ?",
  answers: [
    { text: "relative garde sa place dans le flux, absolute non", correct: true },
    { text: "absolute garde sa place dans le flux, relative non", correct: false },
    { text: "les deux se comportent identiquement", correct: false },
  ],
}
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerText = "Suivant";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answersEl.appendChild(button);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answersEl.firstChild) {
    answersEl.removeChild(answersEl.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.style.backgroundColor = "#90ee90"; // vert
    score++;
  } else {
    selectedBtn.style.backgroundColor = "#f08080"; // rouge
  }

  Array.from(answersEl.children).forEach(button => {
    button.disabled = true;
  });

  nextBtn.style.display = "inline-block";
}

function showScore() {
  resetState();
  questionEl.innerText = `Quiz terminé !`;
  scoreEl.innerText = `Votre score est de ${score} / ${questions.length}`;
  nextBtn.innerText = "Recommencer";
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showScore();
  }
});

startQuiz();
