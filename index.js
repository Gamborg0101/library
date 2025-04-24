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
  console.log(book.title);

  let addNewBook = document.createElement("div");
  let addDeleteButton = document.createElement("button");

  addDeleteButton.textContent = "Delete";
  addDeleteButton.type = "button";
  addDeleteButton.id = book.id;

  addNewBook.textContent = book.title;
  addNewBook.id = book.id;

  bookContainer.appendChild(addNewBook);
  addNewBook.appendChild(addDeleteButton);

  addDeleteButton.addEventListener("click", () => {
    addNewBook.remove();

    // console.log(book.id);
    myLibrary.filter((bookIterator) => bookIterator.id !== book.id);
    console.log(myLibrary);

    /*myLibrary = myLibrary.filter((book) => book.id !== book.id);*/
  });
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
