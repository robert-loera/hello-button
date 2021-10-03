const BUTTON = document.querySelector('.btn')
const INPUT = document.querySelector('.input')
const CONTAINER = document.querySelector('.container')

BUTTON.addEventListener('click', () => {
  //toggle switches add/remove when clicked
  CONTAINER.classList.toggle('active')
  INPUT.focus()
})