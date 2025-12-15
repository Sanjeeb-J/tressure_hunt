// Treasure Hunt Questions and Answers
const questions = [
  {
    question:
      "I have keys but no locks. I have space but no room. You can enter but can’t go outside. What am I?",
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
  // Add more questions as needed
];

let currentQuestion = 0;

// Initialize the first question
function loadQuestion() {
  const container = document.getElementById("question-container");
  container.innerHTML = `
                <div class="clue-box">
                    <h3>Clue #${currentQuestion + 1}</h3>
                    <p>${questions[currentQuestion].question}</p>
                    <input type="text" id="answer-input" placeholder="Enter your answer...">
                    <button onclick="checkAnswer()">Submit</button>
                    <div id="result"></div>
                </div>
            `;
}

// Check if answer is correct
function checkAnswer() {
  const userAnswer = document
    .getElementById("answer-input")
    .value.toLowerCase()
    .trim();
  const correctAnswer = questions[currentQuestion].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      endGame();
    }
    document.getElementById("result").innerHTML =
      "✅ Correct! Loading next clue...";
  } else {
    document.getElementById("result").innerHTML = "❌ Incorrect! Try again!";
  }
}

// Final screen
function endGame() {
  document.getElementById("question-container").innerHTML = `
                <div class="clue-box">
                    <h2>🎉 Congratulations! 🎉</h2>
                    <p>You've found the treasure!</p>
                    <p>Contact us at treasurehunt@email.com to claim your prize!</p>
                    <button onclick="location.reload()">Play Again</button>
                </div>
            `;
}

// Start the game
loadQuestion();
