const addBTN = document.querySelector('header > svg');
const closeBTN = document.querySelector('.modal > .content > form > .buttons > .close');
const modal = document.querySelector('.modal');

addBTN.addEventListener('click', () => {
  modal.classList.remove('hidden');
})

closeBTN.addEventListener('click', (event) => {
  event.preventDefault()
  modal.classList.add('hidden');
})

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}