const addBTN = document.querySelector('header > svg');
const closeBTN = document.querySelector('.modal > .content > form > .buttons > .close');
const form = document.querySelector('.modal > .content > form')
const modal = document.querySelector('.modal');
const submitBTN = document.querySelector('.add');
const cabinet = document.querySelector('.cabinet')

addBTN.addEventListener('click', () => {
  modal.classList.remove('hidden');
})

closeBTN.addEventListener('click', () => {
  modal.classList.add('hidden');
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

submitBTN.addEventListener('click', () => {
  addBookToLibrary();
});

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

  let inputTitle = document.getElementById('title').value;
  let inputAuthor = document.getElementById('author').value;
  let inputPages = document.getElementById('pages').value;
  let inputRead = document.getElementById('read');
    if(inputRead.checked){
      inputRead = true;
    }else{
      inputRead = false;
    }

    myLibrary.push(new Book(inputTitle,inputAuthor,inputPages,inputRead));
    displayBooks();
    form.reset();
    modal.classList.add('hidden');
}

function displayBooks() {
    
    let lastBook = cabinet.lastElementChild;
    while(lastBook){
      cabinet.removeChild(lastBook);
      lastBook = cabinet.lastElementChild;
    }

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