// Treasure Hunt Questions and Answers
const questions = [
  {
    question:
      "I have keys but no locks. I have space but no room. You can enter but can't go outside. What am I?",
    answer: "keyboard",
  },
  {
    question: "What building has the most stories?",
    answer: "library",
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    answer: "footsteps",
  },
  {
    question: "I speak without a mouth and hear without ears. What am I?",
    answer: "echo",
  },
  {
    question: "What has hands but can't clap?",
    answer: "clock",
  },
  {
    question: "I'm tall when I'm young and short when I'm old. What am I?",
    answer: "candle",
  },
  {
    question: "What has a head and a tail but no body?",
    answer: "coin",
  },
  {
    question: "What can travel around the world while staying in a corner?",
    answer: "stamp",
  },
  {
    question: "What gets wetter the more it dries?",
    answer: "towel",
  },
  {
    question: "I have branches, but no fruit, trunk, or leaves. What am I?",
    answer: "bank",
  },
];

let currentQuestion = 0;

// Load question
function loadQuestion() {
  const container = document.getElementById("question-container");
  container.innerHTML = `
    <div class="clue-box">
      <h3>Clue ${currentQuestion + 1} / ${questions.length}</h3>
      <p>${questions[currentQuestion].question}</p>
      <input type="text" id="answer-input" placeholder="Enter your answer..." />
      <button onclick="checkAnswer()">Submit</button>
      <div id="result"></div>
    </div>
  `;
}

// Check answer
function checkAnswer() {
  const userAnswer = document
    .getElementById("answer-input")
    .value.toLowerCase()
    .trim();

  const correctAnswer = questions[currentQuestion].answer.toLowerCase();
  const resultBox = document.getElementById("result");

  if (userAnswer === correctAnswer) {
    resultBox.innerHTML = "✅ Correct!";

    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        endGame();
      }
    }, 800);
  } else {
    resultBox.innerHTML = "❌ Incorrect! Try again!";
  }
}

// End game
function endGame() {
  document.getElementById("question-container").innerHTML = `
    <div class="clue-box">
      <h2>🎉 Congratulations! 🎉</h2>
      <p>You’ve solved all the clues and found the treasure!</p>
      <p>Contact us at <strong>treasurehunt@email.com</strong> to claim your prize.</p>
      <button onclick="location.reload()">Play Again</button>
    </div>
  `;
}

// Start game
loadQuestion();
