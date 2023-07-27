const addBTN = document.querySelector('header > svg');
const closeBTN = document.querySelector('.modal > .content > form > .buttons > .close');
const submitBTN = document.querySelector('.modal > .content > form > .buttons > .add')
const modal = document.querySelector('.modal');

addBTN.addEventListener('click', () => {
  modal.classList.remove('hidden');
})

closeBTN.addEventListener('click', (event) => {
  event.preventDefault()
  modal.classList.add('hidden');
})

submitBTN.addEventListener('click', (event) => {
  event.preventDefault()
})

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}