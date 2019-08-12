let options = ['rock', 'paper', 'scissors'];
let playerOpt1 = document.getElementById('rock');
let playerOpt2 = document.getElementById('paper');
let playerOpt3 = document.getElementById('scissors');
// let button = document.getElementById('btn').addEventListener('click');

// Computer randomized choice
function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}
function computerSelection() {
  computerPlay().trigger('click');
}

// Player's choice
function playerSelection(playerChose, playerOpt1, playerOpt2, playerOpt3) {
  if (playerOpt1) {
    console.log('chose rock');
  } else if (playerOpt2) {
    console.log('chose paper');
  } else if (playerOpt3) {
    console.log('chose scissors');
  } else {
    playerChose == undefined
  }
    
}

console.log(playerSelection())