const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()

  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while ($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect")
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })

  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)

  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente! Você sabe muito."
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom mas pode melhorar... "
      break
    default:
      message = "Você foi muito mal :("
  }

  $questionsContainer.innerHTML =
    `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}

const questions = [

  {
    question: "Quantos tiros o 50 Cent levou no atendado que quase tirou sua vida?",
    answers: [
      { text: "2", correct: false },
      { text: "9", correct: true },
      { text: "4", correct: false },
      { text: "1", correct: false },
    ],
  },

  {
    question: "Quem é o principal suspeito de ter mandado assassinar o 2Pac e o Biggie Smalls?",
    answers: [
      { text: "Big L", correct: false },
      { text: "Suge Knight", correct: false },
      { text: "Puff Daddy", correct: true },
      { text: "50 Cent", correct: false },
    ],
  },

  {
    question: "Qual era o principal integrante do grupo N.W.A na sua formação original?",
    answers: [
      { text: "Eazy-e", correct: true },
      { text: "Mc Ren", correct: false },
      { text: "Dr. Dre", correct: false },
      { text: "Ice Cube", correct: false },
    ],
  },

  {
    question: "Qual o ano do lançamento do álbum 'Get Rich or Die Tryin'' do 50 Cent?",
    answers: [
      { text: "2000", correct: false },
      { text: "2003", correct: true },
      { text: "2002", correct: false },
      { text: "1999", correct: false },
    ],
  },

  {
    question: "Qual trio é associado à gravadora Death Row?",
    answers: [
      { text: "Dr. Dre, Eminem e 50 Cent", correct: true },
      { text: "Dr. Dre, Ice Cube e Snoop Dogg", correct: false },
      { text: "Dr. Dre, Tupac e Snoop Dogg", correct: false },
      { text: "Eminem, 50 Cent e Snoop Dogg", correct: false },
    ],
  },

  {
    question: "Qual ex-integrante do N.W.A lançou a Diss chamada de 'No Vaseline'?",
    answers: [
      { text: "Mobb Deep", correct: false },
      { text: "Dr. Dre", correct: false },
      { text: "Eazy-e", correct: false },
      { text: "Ice Cube", correct: true },
    ],
  },

  {
    question: "Qual música desencadeou a maior guerra entre regiões e rappers nos anos 90?",
    answers: [
      { text: "No Vaseline - Ice Cube", correct: false },
      { text: "Who Shot Ya' – Notorious BIG", correct: true },
      { text: "Hit 'em Up - 2Pac", correct: false },
      { text: "All Eyez on Me - 2Pac", correct: false },
    ],
  },

  {
    question: "Qual rapper feminina é conhecida como a 'Rainha do Rap' e lançou hits como 'Anaconda'?",
    answers: [
      { text: "Cardi B", correct: false },
      { text: "Nicki Minaj", correct: true },
      { text: "Ashanti", correct: false },
      { text: "Cassie", correct: false },
    ],
  },

  {
    question: "Qual rapper é conhecida por ser uma pioneira no hip-hop feminino nos anos 2000?",
    answers: [
      { text: "Missy Elliott", correct: true },
      { text: "Ciara", correct: false },
      { text: "Lil Kim", correct: false },
      { text: "Aaliyah", correct: false },
    ],
  },

  {
    question: "Qual rapper ganhou o Grammy de Melhor Álbum de Rap em 2019?",
    answers: [
      { text: "Travis Scott", correct: false },
      { text: "Offset", correct: false },
      { text: "Cardi B", correct: true },
      { text: "SZA", correct: false },
    ],
  },

  {
    question: "Qual rapper e ativista lançou músicas que abordam temas de desigualdade racial como 'Apeshit'?",
    answers: [
      { text: "Cassie", correct: false },
      { text: "Cardi B", correct: false },
      { text: "Beyoncé", correct: false },
      { text: "Rapsody", correct: true },
    ],
  },

  {
    question: "Qual rapper começou sua carreira com o grupo Fugees e depois lançou o aclamado álbum solo 'The Miseducation of...' ?",
    answers: [
      { text: "YG Marley", correct: false },
      { text: "Wyclef Jean", correct: false },
      { text: "Lauryn Hill", correct: true },
      { text: "Pras Michel", correct: false },
    ],
  },

  {
    question: "qual foi o trio formado para o feat na música 'Let It Go' da Keyshia Cole?",
    answers: [
      { text: "Lil Kim, Eve, Cassie", correct: false },
      { text: "Keyshia Cole, Aalyiah, Sammie", correct: false },
      { text: "Keyshia Cole, Beyoncé, Monica", correct: false },
      { text: "Keyshia Cole, Missy Elliot, Lil Kim", correct: true },
    ],
  },

  {
    question: "Quem é o rapper de Compton que lançou o aclamado álbum 'To Pimp a Butterfly'?",
    answers: [
      { text: "Kendrick Lamar", correct: true },
      { text: "Drake", correct: false },
      { text: "J. Cole", correct: false },
      { text: "Nenhuma Alternativa Acima", correct: false },
    ],
  },

  {
    question: "Quem é o rapper conhecido por seu estilo provocador e pelo álbum 'Yeezus'?",
    answers: [
      { text: "Kanye West", correct: true },
      { text: "Ye", correct: true },
    ],
  },
];