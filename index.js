let playerIcon = document.querySelector('.playerIcon')
let computerIcon = document.querySelectorAll('.computerIcon i')
let spanplayer1 = document.querySelector('.spanPlayer1')
let spanPlayer2 = document.querySelector('.spanPlayer2')
let spanComputer1 = document.querySelector('.spanComputer1')
let spanComputer2 = document.querySelector('.spanComputer2')
let reset = document.querySelector('.fa-arrows-rotate')
let result = document.querySelector('.result')

let playerinisial = 0
let computerinisial = 0
let playerSelect = ''
let compuetrSelect = ''

playerIcon.addEventListener('click', (event) => {
  if (event.target.className === 'fa fa-hand-rock-o') {
    spanPlayer2.innerText = '--- Rock'
    playerSelect = 'Rock'
    compuetr()
  } else if (event.target.className === 'fa fa-hand-paper-o') {
    spanPlayer2.innerText = '--- Paper'
    playerSelect = 'Paper'
    compuetr()
  } else if (event.target.className === 'fa fa-hand-scissors-o') {
    spanPlayer2.innerText = '--- Scissors'
    playerSelect = 'Scissor'
    compuetr()
  } else if (event.target.className === 'fa-solid fa-hand-spock') {
    spanPlayer2.innerText = '--- Spock'
    playerSelect = 'Spock'
    compuetr()
  } else if (event.target.className === 'fa-solid fa-hand-lizard') {
    spanPlayer2.innerText = '--- Lizard'
    playerSelect = 'Lizard'
    compuetr()
  }
})

function compuetr() {
  let arr = ['Rock', 'Paper', 'Scissor', 'Spock', 'Lizard']
  computerIcon.forEach((elm) => elm.classList.remove('active'))
  ci = Math.floor(Math.random() * 5)
  if (computerIcon[ci].id === arr[ci]) {
    computerIcon[ci].classList.add('active')
  }
  spanComputer2.innerText = `---${arr[ci]}`
  compuetrSelect = arr[ci]
  point()
}

function point() {
  if (compuetrSelect === playerSelect) {
    result.innerText = 'Tie'
  } else if (
    (playerSelect == 'Rock' && compuetrSelect == 'Lizard') ||
    (playerSelect == 'Rock' && compuetrSelect == 'Scissor') ||
    (playerSelect == 'Paper' && compuetrSelect == 'Rock') ||
    (playerSelect == 'Paper' && compuetrSelect == 'Spock') ||
    (playerSelect == 'Scissor' && compuetrSelect == 'Paper') ||
    (playerSelect == 'Scissor' && compuetrSelect == 'Lizard') ||
    (playerSelect == 'Lizard' && compuetrSelect == 'Paper') ||
    (playerSelect == 'Lizard' && compuetrSelect == 'Spock') ||
    (playerSelect == 'Spock' && compuetrSelect == 'Rock') ||
    (playerSelect == 'Spock' && compuetrSelect == 'Scissor')
  ) {
    playerinisial += 1
    result.innerText = 'You Win'
    audioplay()
  } else {
    computerinisial += 1
    result.innerText = 'You lost'
    audioStop()
  }
  spanplayer1.innerText = playerinisial
  spanComputer1.innerText = computerinisial
}
// reset button//
reset.addEventListener('click', () => {
  spanPlayer2.innerText = ''
  spanComputer2.innerText = ''
  playerinisial = 0
  computerinisial = 0
  spanplayer1.innerText = 0
  spanComputer1.innerText = 0
  computerIcon[ci].classList.remove('active')
  result.innerText = ''
})
let audio = document.createElement('audio')

// audio//
function audioplay() {
  audio.setAttribute('autoplay', '')
  audio.setAttribute(
    'src',
    './assets/Winner Winner Chicken Dinner - Notification.mp3',
  )
}

function audioStop() {
  alert('😝😝You Lost😝😝')
}
