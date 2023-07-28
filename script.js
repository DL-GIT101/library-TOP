const addBTN = document.querySelector('header > svg');
const closeBTN = document.querySelector('.modal > .content > form > .buttons > .close');
const submitBTN = document.querySelector('.modal > .content > form > .buttons > .add')
const modal = document.querySelector('.modal');
const cabinet = document.querySelector('.cabinet')

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
const sampleBook0 = new Book('Harry Potter', 'J.K. Rowling', 569, false);
const sampleBook1 = new Book('Hairy Shaver', 'Joke Rollin', 420, true);
let myLibrary = [sampleBook0,sampleBook1];

function Book(title, author, pages, read) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {

  myLibrary.forEach(book => {
    let bookContainer = document.createElement('div');
    bookContainer.classList.add('book');
    cabinet.appendChild(bookContainer);

    let bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    bookContainer.appendChild(bookTitle);

    let bookAuthor = document.createElement('p');
    bookAuthor.classList.add('author');
    bookAuthor.textContent = book.author;
    bookContainer.appendChild(bookAuthor);

    let bookPages = document.createElement('p');
    bookPages.classList.add('pages');
    bookPages.textContent = book.pages + ' pages';
    bookContainer.appendChild(bookPages);

    let readStatus = document.createElement('div');
    readStatus.classList.add('toggle');
    if(book.read === true){
      statusMsg = "Finished";
    }else {
      statusMsg = "Unread";
    }
    readStatus.textContent = statusMsg;
    bookContainer.appendChild(readStatus);
  });
}

displayBooks();