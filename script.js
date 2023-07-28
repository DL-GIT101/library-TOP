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

let myLibrary = [sampleBook];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

const sampleBook = new Book('Harry Potter', 'J.K. Rowling', 569, false);
