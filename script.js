function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    tieCounter++;
    console.log(`It's a tie!`);
    return `It's a tie!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win ${humanChoice} beats ${computerChoice}`);
    return `You win ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    console.log(`You lose ${computerChoice} beats ${humanChoice}`);
    return `You lose ${computerChoice} beats ${humanChoice}`;
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  tieCounter = 0;

  /**? Removed for-loop for Easier Testing*/
  const humanSelection = humanChoice;
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  if (humanScore > computerScore) {
    return `You win!
            Your score: ${humanScore}
            Computer score: ${computerScore}
            You tied against computer ${tieCounter} times`;
  } else if (computerScore > humanScore) {
    return `You lose!
            Your score: ${humanScore}
            Computer score: ${computerScore}
            You tied against computer ${tieCounter} times`;
  } else {
    return `You tied against the computer!
            Your score: ${humanScore}
            Computer score: ${computerScore}
            You tied against computer ${tieCounter} times`;
  }
}
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

let humanScore = 0;
let computerScore = 0;
let tieCounter = 0;
console.log(playGame());
