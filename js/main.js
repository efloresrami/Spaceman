/*----- constants -----*/

/*----- app's state (variables) -----*/
let remainingLetters
let lives
let winner

/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/
init();

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
  renderRemainingLetters();
  renderLives();
  
}