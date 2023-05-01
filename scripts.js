class Book {
    constructor(
      title = 'Unknown',
      author = 'Unknown',
      genre = 'Unknown',
      publicationDate = 'Unknown',
      pages = '0',
      isRead = false,

    ) {
      this.title = title
      this.author = author
      this.genre = genre
      this.publicationDate = publicationDate
      this.pages = pages
      this.isRead = isRead
    }
  }

let myLibrary = [];

function addBookToLibrary() {
    const title = prompt("Enter the book's title:");
    const author = prompt("Enter the author's name:");
    const genre = prompt("Enter the book's genre:");
    const publicationDate = prompt("Enter the book's publication date:");
    const pages = prompt("Enter the number of pages:");
    const isRead = confirm("Have you read this book?");
  
    const book = new Book(title, author, genre, publicationDate, pages, isRead);
    myLibrary.push(book);
}
  let newBookBtn = document.querySelector(".newBookBtn");
  newBookBtn.addEventListener("click", function() {
    alert("Hello World");
    let newBookForm = document.querySelector("#newBookForm");
    newBookForm.style.display = "block";
  })