let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();

  addBookToLibrary(this);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

/*Section for test start */

let book1 = new Book("Lord of the Rings", "JJR", 225, true);
let book2 = new Book(
  "The Girl With the Dragon Tattoo",
  "Stieg Larsson",
  480,
  false
);
let book3 = new Book(
  "The Curious Incident of the Dog in the Night-Time",
  "Mark Haddon",
  226,
  false
);

createNewBook(book1);
createNewBook(book2);
createNewBook(book3);

/*Section for test end */

/* Create new entry in HTML */
function createNewBook(book) {
  const bookContainer = document.getElementById("book-container");

  let addNewBook = document.createElement("div");
  let addDeleteButton = document.createElement("button");
  addNewBook.id = book.id;

  let titleElement = document.createElement("p");
  titleElement.textContent = `Title: ${book.title} `;
  addNewBook.appendChild(titleElement);

  let authorElement = document.createElement("p");
  authorElement.textContent = `Author: ${book.author}`;
  addNewBook.appendChild(authorElement);

  let pagesElement = document.createElement("p");
  pagesElement.textContent = `Number of pages: ${book.pages} `;
  addNewBook.appendChild(pagesElement);

  let readStatusElement = document.createElement("p");
  readStatusElement.textContent = `Have you read it? ${
    book.read ? "Read" : "Not read"
  }`;
  addNewBook.appendChild(readStatusElement);

  bookContainer.appendChild(addNewBook);
  addNewBook.appendChild(addDeleteButton);

  /* Delete button */
  addDeleteButton.textContent = "Delete";
  addDeleteButton.type = "button";
  addDeleteButton.id = book.id;

  addDeleteButton.addEventListener("click", () => {
    addNewBook.remove();
    myLibrary = myLibrary.filter((bookIterator) => bookIterator.id !== book.id);
  });

  /* Add "read"-button */
  const readButton = document.createElement("button");

  readButton.textContent = book.read
    ? (readButton.textContent = "Not read")
    : (readButton.textContent = "Read");

  readButton.addEventListener("click", () => {
    book.read = !book.read;

    if (book.read === true) {
      readButton.textContent = "Not read";
      readStatusElement.textContent = `Have you read it? ${
        book.read ? "Read" : "Not read"
      }`;
    } else {
      readButton.textContent = "Read";
      readStatusElement.textContent = `Have you read it? ${
        book.read ? "Read" : "Not read"
      }`;
    }
  });
  readButton.addEventListener("click", () => {});

  addNewBook.appendChild(readButton);
}

/* Open modal */
const modal = document.getElementById("modal");
const openButton = document.getElementById("add-new-book");
const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

openButton.addEventListener("click", () => {
  modal.style.display = "block";
});

/* Storing information from form */
const form = document.getElementById("my-form");
const formSubmit = document.getElementById("my-form-submit");

formSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  let author = document.getElementById("author");
  let bookTitle = document.getElementById("book-title");
  let numberOfPages = document.getElementById("number-of-pages");
  let read = document.getElementById("read");

  let newBook = new Book(
    bookTitle.value,
    author.value,
    numberOfPages.value,
    read.value
  );

  createNewBook(newBook);
});
