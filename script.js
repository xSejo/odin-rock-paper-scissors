function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    displayResult.style.color = "gray";
    displayResult.textContent = "It's a tie... No one gained points";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    currentScore.textContent = `${humanScore}:${computerScore}`;
    displayResult.style.color = "green";
    displayResult.textContent = `You win ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    currentScore.textContent = `${humanScore}:${computerScore}`;
    displayResult.style.color = "red";
    displayResult.textContent = `You lose ${computerChoice} beats ${humanChoice}`;
  }

  humanScore === 5 || computerScore === 5 ? endGame() : 0;
}

function endGame() {
  const displayResult = document.querySelector(".displayResult");

  if (humanScore > computerScore) {
    displayResult.style.color = "green";
    displayResult.textContent = `YOU WON THE GAME VS THE COMPUTER!!!`;
  } else {
    displayResult.textContent = "red";
    displayResult.textContent = `YOU LOSED THE GAME VS THE COMPUTER!!!`;
  }

  humanScore = 0;
  computerScore = 0;
  tieCounter = 0;
}
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

const currentScore = document.querySelector(".currentScore");
const displayResult = document.querySelector(".displayResult");

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

let humanScore = 0;
let computerScore = 0;
let tieCounter = 0;
