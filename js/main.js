/*----- constants -----*/
const WORD_BANK = []
/*----- app's state (variables) -----*/
let remainingLetters
let lives
let gameStatus
let secretWo
// let answer
// let mistakes
// let wordstatus
// let gamestatus

/*----- cached element references -----*/
const message = document.getElementById('message')
const wrongGuess = document.getElementById('spotlight')
const letterButton = [...document.querySelectorAll('main > button')]
const spaceman = document.querySelector('img')
/*----- event listeners -----*/
letterButton.addEventListener('click', handleclick)
/*----- functions -----*/
init();
function handleclick(evt) {
  console.log(evt.target)
}


function init() {
  remainingLetters = {A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z};
  lives = 6;
  winner = '';
  render();
};

let playerGuess = document.querySelector('main').addEventListener('click', handleLetter);

function renderRemainingLetters() {
  
}

function renderLives() {
  
}
function render() {
  spaceman.src = `img/spaceman-${wrongGuesses.length}.jpg`;
  
}