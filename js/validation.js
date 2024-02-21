const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('form-id');
let checkbox;

function checkRequired() {
    const formElementsIDs = ['author', 'title'];
    let isError = false;

    formElementsIDs.forEach(elementId => {
        const inputElement = document.getElementById(elementId);
        const errorTxtElement = document.getElementById(`${elementId}-form-error`);
        const value = inputElement.value.trim();
        

        if (value.length === 0) {
            inputElement.classList.add("error");
            errorTxtElement.classList.add("error");
            isError = true;
        } else {
            inputElement.classList.remove("error");
            errorTxtElement.classList.remove("error");
        }
    });

    if(!isError) {
        checkbox = document.getElementById("read-form").checked;
        let authorValue = document.getElementById("author").value;
        let titleValue = document.getElementById("title").value;
        let pagesValue = document.getElementById("pages").value;

        Book.addBookToLibrary(authorValue, titleValue, pagesValue, checkbox);
    }
}

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    checkRequired();
});