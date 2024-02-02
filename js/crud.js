const myLibrary = [];

let table = document.getElementById('table');
let deleteButton = document.getElementById("modal-message-all");

function Book(author, name, pages, isRead){
    this.author = author;
    this.name = name;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(author, name, pages, isRead) {
    let newBook = new Book(author, name, pages, isRead)
    myLibrary.push(newBook);
    console.log(myLibrary[1])
}

addBookToLibrary("Vasile", "Popescu", 212, true);
addBookToLibrary("VasiDale", "sads", 321, false)


