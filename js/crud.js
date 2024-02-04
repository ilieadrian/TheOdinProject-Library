const myLibrary = [];

let container = document.getElementById('cards-container');
let deleteButton = document.getElementById("modal-message-all");

function Book(author, title, pages, isRead){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(author, title, pages, isRead) {
        let newBook = new Book(author, title, pages, isRead);
        myLibrary.push(newBook);

        updateDisplay()
}

function updateDisplay() {
    if (myLibrary.length > 0) {
        container.innerHTML = ""; // Clear the table only if there is data
        myLibrary.forEach(function(book) {
            let listItem = document.createElement("div");
            listItem.classList = "card";
            listItem.innerHTML = `
            <div class="item" id="card-author">${book.author}</div>
            <div class="item" id="name">Title: ${book.title}</div>
            <div class="item" id="pages">Pages: ${book.pages}</div>
            <div class="read-container">
                <div class="item" id="pages">Read? </div>
                <input type="checkbox" id="read" name="read-card" value="isRead" ${book.isRead ? `checked` : ''}/>
            </div>
            <i class="fa-sharp fa-solid fa-trash delete-record"></i>
            `;
            container.appendChild(listItem);

        });
    }
}

updateDisplay()



