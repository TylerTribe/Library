class Book {
    constructor(
      title = 'Unknown',
      author = 'Unknown',
      genre = 'Unknown',
      publicationDate = 'Unknown',
      pages = '0',
      isRead = false
    ) {
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.publicationDate = publicationDate;
      this.pages = pages;
      this.isRead = isRead;
    }
  }
  
  let myLibrary = [];

  function removeBook(index) {
    myLibrary.splice(index, 1)
    render();
  }
  
  function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let publicationDate = document.getElementById("publicationDate").value;
    let pages = document.getElementById("pages").value;
    let isRead = document.getElementById("read").checked;
    let newBook = new Book(title, author, genre, publicationDate, pages, isRead);
    myLibrary.push(newBook);
    console.log("Added book:", newBook);
    render();
  }
  
  
  document.querySelector("#newBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    alert('Book added to library!');
  });
  
  let newBookBtn = document.querySelector(".newBookBtn");
  newBookBtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#newBookForm");
    newBookForm.style.display = "block";
  });
  
  function render() {
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i];
      let bookEl = document.createElement("div");
      bookEl.setAttribute("class", "bookCard");
      bookEl.innerHTML = `
        <div class="cardHeader">
          <h3>${book.title}</h3>
          <h5 class="author">by ${book.author}</h5>
        </div>
        <div class="cardBody">
          <p class="genre">${book.genre}</p>
          <p>${book.pages} pages</p>
          <p class="readStatus">${book.isRead ? "Read" : "Not Read"}</p>
        </div>
        <button class="removeBook">Remove Book</button>
      `;
      libraryEl.appendChild(bookEl);
      let removeBtn = bookEl.querySelector(".removeBook");
      removeBtn.addEventListener("click", function() {
        removeBook(i);
      });
    }
  }
  
  let closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("#newBookForm");
  newBookForm.style.display = "none";
});
