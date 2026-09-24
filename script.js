function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    tieCounter++;
    displayResult.textContent = `It's a tie!
                                 Your score: ${humanScore}
                                 Computer score: ${computerScore}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    displayResult.textContent = `You win ${humanChoice} beats ${computerChoice}
                                 Your score: ${humanScore}
                                 Computer score: ${computerScore}`;
  } else {
    computerScore++;
    displayResult.textContent = `You lose ${computerChoice} beats ${humanChoice}
                                 Your score: ${humanScore}
                                 Computer score: ${computerScore}`;
  }

  humanScore === 5 || computerScore === 5 ? endGame() : 0;
}

function endGame() {
  const displayResult = document.querySelector(".displayResult");

  if (humanScore > computerScore) {
    displayResult.textContent = `YOU WON!!!
                                 Your score: ${humanScore}
                                 Computer score: ${computerScore}
                                 You tied against computer ${tieCounter} times`;
  } else {
    displayResult.textContent = `YOU LOSED!!!
                                 Your score: ${humanScore}
                                 Computer score: ${computerScore}
                                 You tied against computer ${tieCounter} times`;
  }

  humanScore = 0;
  computerScore = 0;
  tieCounter = 0;
}
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

const displayResult = document.querySelector(".displayResult");

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

let humanScore = 0;
let computerScore = 0;
let tieCounter = 0;
