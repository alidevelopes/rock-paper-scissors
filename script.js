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
  let player = playerSelection(),
    computer = computerSelection;

  let winMsg = `You win. You chose ${numToChoice(
    player
  )}, computer chose ${numToChoice(computer)}.`;
  let loseMsg = `You lose. You chose ${numToChoice(
    player
  )}, computer chose ${numToChoice(computer)}.`;
  let drawMsg = `It's a draw. You chose ${numToChoice(
    player
  )}, computer chose ${numToChoice(computer)}.`;
  //   if both sides choose the same, then it's draw
  if (player === computer) {
    alert(drawMsg);
    // conditions for player to win/lose;
  } else if (player === 0) {
    // conditions for player to win if player chooses "rock"
    if (computer === 2 && computer != 1) {
      alert(winMsg);
      score += 1;
    } else {
      alert(loseMsg);
    }
  } else if (player === 1) {
    // conditions for player to win if player chooses "paper"
    if (computer === 0 && computer != 2) {
      alert(winMsg);
      score += 1;
    } else {
      alert(loseMsg);
    }

    // if player chose "scissor":
  } else if (player === 2) {
    // conditions for player to win if player chooses "paper"
    if (computer === 1 && computer != 0) {
      alert(winMsg);
      score += 1;
    } else {
      alert(loseMsg);
    }
  }
  return score;
}

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

// this function keep track of number of rounds played and player's score
function game(rounds) {
  let score;
  i = 1;
  while (i < rounds) {
    score = playRound();
    i += 1;
  }
  return alert(`You played ${rounds} rounds. You won ${score} rounds.`);
}

// game(3);
