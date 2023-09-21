// In this code, rock, paper and scissors are assigned to num 0, 1, 2, respectively.

// making a random number generator for computer to imitate choice
function computerNum() {
  let randNum = Math.random();
  randNum = Math.floor(randNum * 3);
  return randNum;
}

// This function asks for player's input and assign it to num in order to compare it with computer's
function playerSelection() {
  let playerInput = prompt("Type you choice \nRock / Paper / Scissor?  ");
  playerInput = playerInput.toLowerCase();

  let playerNum = 0;
  if (playerInput === "paper") {
    playerNum = 1;
  } else if (playerInput === "scissor") {
    playerNum = 2;
  }
  return playerNum;
}

// creating a new function to compare player and computer's choices,
function playRound() {
  let score = 0;
  let compScore = 0;

  // win/ lose + player/computer choice
  let playerNum = playerSelection(),
    computer = computerNum();

  let winMsg = `You win. You chose ${numToChoice(
    playerNum
  )}, computer chose ${numToChoice(computer)}.`;

  let loseMsg = `You lose. You chose ${numToChoice(
    playerNum
  )}, computer chose ${numToChoice(computer)}.`;

  let drawMsg = `It's a draw. You chose ${numToChoice(
    playerNum
  )}, computer chose ${numToChoice(computer)}.`;

  // condition for draw
  if (playerNum === computer) {
    alert(drawMsg);
  } else if (playerNum === 0) {
    // conditions for player to win if player chooses "rock"
    if (computer === 2 && computer != 1) {
      alert(winMsg);
      score += 1;
    } else {
      alert(loseMsg);
      compScore += 1;
    }
  } else if (playerNum === 1) {
    // conditions for player to win if player chooses "paper"
    if (computer === 0 && computer != 2) {
      alert(winMsg);
      score += 1;
    } else {
      alert(loseMsg);
      compScore += 1;
    }

    // if player chose "scissor":
  } else if (playerNum === 2) {
    // conditions for player to win if player chooses "paper"
    if (computer === 1 && computer != 0) {
      alert(winMsg);
      score += 1;
    } else {
      alert(loseMsg);
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
// the purpose of this function is to show the choices made in text rather than num.
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
function game(totalRounds) {
  let result;
  let playerScore = 0;
  let compScore = 0;

  i = 0;
  while (i < totalRounds) {
    result = playRound();
    playerScore += result[0];
    compScore += result[1];

    i += 1;
  }

  let matchResult = "";
  let drawMatches = totalRounds - (playerScore + compScore);
  if (playerScore === compScore) {
    matchResult = `It's a draw. You won ${playerScore} time(s) and computer won ${compScore} time(s).`;
  } else if (playerScore > compScore) {
    matchResult = `You win! You played ${totalRounds} rounds and won ${playerScore} time(s)!`;
  } else {
    matchResult = `Final result:\nYou played ${totalRounds} rounds, tied ${drawMatches} and lost ${compScore} time(s). You lose:( `;
  }

  alert(matchResult);
}
// game(3);

const numOfRounds = Number(prompt("How many round(s) do you wanna play? "));
game(numOfRounds);
