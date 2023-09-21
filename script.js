// In this code, rock, paper and scissors are assigned to num 0, 1, 2, respectively.

// making a random number generator for computer
// the number can be 0, 1 or 2
function computerNum() {
  let randNum = Math.random();
  randNum = Math.floor(randNum * 3);
  return randNum;
}

let computerSelection = computerNum();

// This function asks for player's input in string, then converts it to num
function playerSelection() {
  // ask for player's input
  let playerInput = prompt("Type you choice \nRock / Paper / Scissor?  ");
  playerInput = playerInput.toLowerCase();

  //  assigning number to player's choice, rock, paper, and scissor to 0, 1, 2, respectively.
  let playerNum = 0;
  if (playerInput === "paper") {
    playerNum = 1;
  } else if (playerInput === "scissor") {
    playerNum = 2;
  }
  return playerNum;
}

// for a single round
function playRound() {
  let score = 0;
  let compScore = 0;

  let playerNum = playerSelection(),
    computer = computerSelection;

  let winMsg = `You win. You chose ${numToChoice(
    playerNum
  )}, computer chose ${numToChoice(computer)}.`;

  let loseMsg = `You lose. You chose ${numToChoice(
    playerNum
  )}, computer chose ${numToChoice(computer)}.`;

  let drawMsg = `It's a draw. You chose ${numToChoice(
    playerNum
  )}, computer chose ${numToChoice(computer)}.`;

  // determining the winner
  //   if both sides choose the same, then it's draw
  if (playerNum === computer) {
    alert(drawMsg);

    // conditions for player to win/lose;
  } else if (playerNum === 0) {
    // conditions for player to win if player chooses "rock"
    if (computer === 2 && computer != 1) {
      alert(winMsg);
      score += 1;
      // compScore -= 1;
    } else {
      alert(loseMsg);
      // score -= 1;
      compScore += 1;
    }
  } else if (playerNum === 1) {
    // conditions for player to win if player chooses "paper"
    if (computer === 0 && computer != 2) {
      alert(winMsg);
      score += 1;
      // compScore -= 1;
    } else {
      alert(loseMsg);
      // score -= 1;
      compScore += 1;
    }

    // if player chose "scissor":
  } else if (playerNum === 2) {
    // conditions for player to win if player chooses "paper"
    if (computer === 1 && computer != 0) {
      alert(winMsg);
      score += 1;
      // compScore -= 1;
    } else {
      alert(loseMsg);
      // score -= 1;
      compScore += 1;
    }
  }

  let roundResult = [score, compScore];
  // return score;
  // alert(roundResult);
  return roundResult;
}
// playRound();

// convert 0, 1, 2 back to rock, paper, scissor, respectively.
function numToChoice(n) {
  let choice = "Rock";
  if (n === 1) {
    choice = "Paper";
  } else if (n === 2) {
    choice = "Scissor";
  }
  return choice;
}
// some

// this function keeps track of number of rounds played and player's score
function game(rounds) {
  let result;
  let playerScore = 0;
  let compScore = 0;

  // let result = rounds - compScore;
  i = 0;
  while (i < rounds) {
    result = playRound();
    playerScore += result[0];
    compScore += result[1];

    i += 1;
  }

  let matchResult = "";
  let drawMatches = rounds - (playerScore + compScore);
  if (playerScore === compScore) {
    matchResult = `It's a draw. You won ${playerScore} time(s) and computer won ${compScore} time(s).`;
  } else if (playerScore > compScore) {
    matchResult = `You win! You played ${rounds} rounds and won ${playerScore} time(s)!`;
  } else {
    matchResult = `You played ${rounds} rounds, tied ${drawMatches} and lost ${compScore} time(s). You lose:( `;
  }

  alert(matchResult);
}
// game(3);
