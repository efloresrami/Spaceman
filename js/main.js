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
const playAgainEl = document.getElementById('PA-button')
/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleclick)
playAgainEl.addEventListener('click', init)
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
  gameStatus = getGameStatus();
  render();
}

function renderMessage() {
  if (gameStatus === "W") {
    message.textContent = "Spaceman came back in one piece!";
  } else if (gameStatus === "L") {
    message.textContent = `Spaceman has been lost! The secret word is ${secretWord.join("")}`;
  } else {
    message.textContent = `You have only ${MAX_WRONG - wrongGuesses.length} tries left!`
  }
}

function getGameStatus() {
  if (!wordStatus.includes("_")) return "W";
  if(wrongGuesses.length > MAX_WRONG) return "L";
  return null;
}

function renderButtonStyle() {
  letterButton.forEach(function(btn) {
    const letter = btn.textContent;
    if (wrongGuesses.includes(letter)) {
      btn.className = 'Incorrect'
    } else if (wordStatus.includes(letter)) {
      btn.className = 'Correct'
    } else {
      btn.className = ''
    }
  }) 
}

function render() {
  spaceman.src = `img/spaceman-${wrongGuesses.length}.jpg`;
  wordDisplay.textContent = wordStatus.join(' ')
  renderMessage()
  renderButtonStyle()
}