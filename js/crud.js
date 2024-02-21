let myLibrary = [];

let container = document.getElementById('cards-container');
let deleteButton = document.getElementById("modal-message-all");

class Book {
    constructor(author, title, pages, checkbox) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.checkbox = checkbox;
    }

    static addBookToLibrary(author, title, pages, checkbox) {
        let newBook = new Book(author, title, pages, checkbox);
        console.log(checkbox)
        myLibrary.push(newBook);

        updateDisplay()
    }
}

function updateDisplay() {
    if (myLibrary.length > 0) {
        container.innerHTML = "";

        myLibrary.forEach(function(book, index) {
            
            let listItem = document.createElement("div");
            listItem.classList = "card";
            listItem.setAttribute("data-card-index", index); 
            listItem.innerHTML = `
            <div class="item" id="card-author">${book.author}</div>
            <div class="item" id="name">Title: ${book.title}</div>
            <div class="item" id="pages">Pages: ${book.pages}</div>
            <div class="read-container">
                <div class="item" id="pages">Read? </div>
                <input type="checkbox" id="read-${index}" name="read-card" value="isRead" ${book.checkbox ? `checked` : ''}/>
            </div>
            <i class="fa-sharp fa-solid fa-trash delete-record" id="delete-${index}"></i>
            
            `;
            container.appendChild(listItem);

            let isReadCheck = document.getElementById(`read-${index}`);
            let deleteBtn = document.getElementById(`delete-${index}`);
            const cardIndex = listItem.getAttribute('data-card-index');

            isReadCheck.addEventListener('click', function() {
                toggleIsRead(cardIndex);
            });
            
            deleteBtn.addEventListener('click', function() {
                deleteFromLibrary(cardIndex);
            });
        });
    }
}

function toggleIsRead(cardIndex) {
    if (myLibrary[cardIndex].isRead == false) {
        myLibrary[cardIndex].isRead = true;
    } else {
        myLibrary[cardIndex].isRead = false;
    }
    
    updateDisplay()
}

function deleteFromLibrary(cardIndex) {
    delete myLibrary[cardIndex];

    updateDisplay()
}

updateDisplay()






