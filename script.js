// In this code, rock, paper and scissors are assigned to num 0, 1, 2, respectively.

// score
let computerScore = 0;
let playerScore = 0;
let singleRoundWinner = "";

// get computer choice
function getComputerChoice() {
  let compChoice = "";
  let randNum = Math.random();
  randNum = Math.floor(randNum * 3);
  switch (randNum) {
    case 0:
      compChoice = "rock";
      break;
    case 1:
      compChoice = "paper";
      break;

    case 2:
      compChoice = "scissor";
      break;
  }
  return compChoice;
}

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");
const scoreContainer = document.querySelector("#score-container");

rockBtn.addEventListener("click", clickHandler);
paperBtn.addEventListener("click", clickHandler);
scissorBtn.addEventListener("click", clickHandler);

const playerScorePara = document.querySelector("#player-score");
const computerScorePara = document.querySelector("#computer-score");
const finalResultPara = document.querySelector(".result-para");

//  get a single round winner
function playRound(playerChoice, computerChoice) {
  // condition for draw
  if (playerChoice === computerChoice) {
    // singleRoundWinner = "It's a draw";
  }
  // player wins
  if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper")
  ) {
    playerScore++;
    singleRoundWinner = "player";
  }
  // computer wins
  if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissor") ||
    (playerChoice === "scissor" && computerChoice === "rock")
  ) {
    computerScore++;
    singleRoundWinner = "computer";
  }
  // adding score for display
  playerScorePara.textContent = playerScore;
  computerScorePara.textContent = computerScore;
}

function getGameStatus() {
  let keepPlaying = true;
  if (playerScore === 5) {
    keepPlaying = false;
  } else if (computerScore === 5) {
    keepPlaying = false;
  }

  return keepPlaying;
}

function endGameWinner() {
  let WINNER = "";
  if (playerScore === 5) {
    WINNER = `Congrats! You are the winner.`;
  } else if (computerScore === 5) {
    WINNER = `You lose. Computer wins.`;
  }
  return WINNER;
}

function clickHandler() {
  let playerChoice = this.value;
  let computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);

  if (!getGameStatus()) {
    finalResultPara.textContent = endGameWinner();

    // resetting all scores
    playerScore = 0;
    computerScore = 0;
  }
}
