const addBTN = document.querySelector('header > svg');
const closeBTN = document.querySelector('.modal > .content > form > .buttons > .close');
const form = document.querySelector('.modal > .content > form')
const modal = document.querySelector('.modal');
const cabinet = document.querySelector('.cabinet')

addBTN.addEventListener('click', () => {
  modal.classList.remove('hidden');
})

closeBTN.addEventListener('click', () => {
  modal.classList.add('hidden');
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
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

  myLibrary.forEach((book, index) => {
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
    readStatus.classList.add('toggle-container');

    let toggleContainer = document.createElement('label');
    toggleContainer.classList.add('switch');
    let checkBox = document.createElement('input');
    checkBox.setAttribute("type","checkbox");
    let slider = document.createElement('span');
    slider.className = "slider round";

    toggleContainer.appendChild(checkBox);
    toggleContainer.appendChild(slider);
    readStatus.appendChild(toggleContainer);

    if(book.read === true){
      statusMsg = "Finished";
      checkBox.checked = true;
    }else {
      statusMsg = "Unread";
      checkBox.checked = false;
    }

    let currentStatus = document.createElement('p');
    currentStatus.textContent = statusMsg;
    readStatus.appendChild(currentStatus);

    bookContainer.appendChild(readStatus);

    checkBox.addEventListener('click', () => {
      let bookStatus = myLibrary[index].read;
      if(bookStatus === true){
        myLibrary[index].read = false;
        currentStatus.textContent = "Unread";
      }else if(bookStatus === false){
        myLibrary[index].read = true;
        currentStatus.textContent = "Finished";
      }
    });

    let deleteBTN = document.createElement('button');
    deleteBTN.className = 'delete';
    deleteBTN.textContent = "Delete";
    bookContainer.appendChild(deleteBTN);

    deleteBTN.addEventListener('click', () => {
      cabinet.removeChild(deleteBTN.parentNode);
      myLibrary.splice(index, 1);
    });

  });
}

displayBooks();