let array = ['rock', 'paper', 'scissors'];
let x = 'rock';
let y = 'paper';
let z = 'scissors';
let ques = window.prompt('What will it be? Rock, Paper, or Scissors?').toLowerCase();
let compDec = computerPlay();
let playerDec = playerSelection(ques, x, y, z);

// Computer randomized choice
function computerPlay() {
  return array[Math.floor(Math.random() * array.length)];
}
function computerSelection() {
  computerPlay().trigger('click');
}

// Player's choice
function playerSelection(ques, x, y, z) {
  if (ques == 'rock') {
    console.log('player chose rock')
    return(x)
  } else if (ques == 'paper') {
    console.log('player chose paper')
    return(y)
  } else if (ques == 'scissors') {
    console.log('player chose scissors')
    return(z)
  } else if (ques !== 'rock' || 'paper' || 'scissors') {
    console.log("player didn't make a choice")
    alert('Make up your mind')
  }
};

// Compare choices
function playRound(playerDec, compDec) {
  if (playerDec === compDec) {
    console.log("It's a draw")
    alert("It's a draw")
  } else if (playerDec == 'rock' && compDec == 'scissors') {
    console.log('player win')
    alert('You won!')
  } else if (playerDec == 'paper' && compDec == 'rock') {
    console.log('player win')
    alert('You won!')
  } else if (playerDec == 'scissors' && compDec == 'rock') {
    console.log('player win')
    alert('You won!')
  } else if (playerDec == 'scissors' && compDec == 'rock') {
    console.log('computer win')
    alert('You lose!')
  } else if (playerDec == 'rock' && compDec == 'paper') {
    console.log('computer win')
    alert('You lose!')
  } else if (playerDec == 'paper' && compDec == 'scissors') {
    console.log('computer win')
    alert('You lose!')
  }
}

console.log(playerDec);

console.log(compDec);

console.log(playRound(playerDec, compDec));