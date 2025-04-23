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

/* Adding to page */

const bookContainer = document.getElementById("book-container");

for (let element of myLibrary) {
  let addNewBook = document.createElement("div");
  addNewBook.innerText = element.title;
  addNewBook.id = element.id;
  bookContainer.appendChild(addNewBook);
}
