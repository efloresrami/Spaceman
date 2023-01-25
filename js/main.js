/*----- constants -----*/
const WORD_BANK = ['Venus', 'Pluto', 'Apollo', 'Atlas', 'Luna']
const MAX_WRONG = 6
const IMGS = [
  "img/spaceman-0.jpg",
  "img/spaceman-1.jpg",
  "img/spaceman-2.jpg",
  "img/spaceman-3.jpg",
  "img/spaceman-4.jpg",
  "img/spaceman-5.jpg",
  "img/spaceman-6.jpg",
]
/*----- app's state (variables) -----*/
let gameStatus
let answer
let wrongGuesses
let wordStatus = 'null'

/*----- cached element references -----*/
const message = document.getElementById('message')
const wordDisplay = document.getElementById('p-guess-word')
const letterButton = [...document.querySelectorAll('main > button')]
const spaceman = document.querySelector('img')
/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleclick)
/*----- functions -----*/
init();
console.log(WORD_BANK)

function init() {
  secretWord = WORD_BANK[Math.floor(Math.random() *WORD_BANK.length)].toUpperCase('').split('');
  wrongGuesses = []
  wordStatus = secretWord.map(ltr => ltr === '' ? '' : '_')
  gameStatus = null
  console.log(secretWord, 'secret')
  console.log(wordStatus, "Word Status")
  render();
};

function handleclick(evt) {
  const ltr = evt.target.textContent
  if (evt.target.tagName !== 'BUTTON' || wrongGuesses.includes(ltr)) return
  if (secretWord.includes(ltr)) {
    secretWord.forEach(function(char, idx) {
      if (char === ltr) wordStatus[idx] = ltr
    }) 
  } else {
    wrongGuesses.push(ltr)
  }
  render();
}



function renderLives() {
  
}
function render() {
  spaceman.src = `img/spaceman-${wrongGuesses.length}.jpg`;
  wordDisplay.textContent = wordStatus.join(' ')
  
}