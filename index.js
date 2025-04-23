/* LOGIC */
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  addBookToLibrary(this.title, this.author, this.pages, this.read);
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = {
    title: title,
    author: author,
    pages: pages,
    read: read,
    id: crypto.randomUUID(),
  };
  myLibrary.push(newBook);
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
  addNewBook.textContent = book.title;

  addNewBook.id = book.id;
  bookContainer.appendChild(addNewBook);
}

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
  console.log(newBook);
});
