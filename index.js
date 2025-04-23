function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `You have read ${this.title}, and it was by ${this.author}. The book was ${pages}`;
  };
}

let book1 = new Book("LOTR", "JJR", 225);

console.log(book1.info());
