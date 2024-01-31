const submitBtn = document.getElementById('submit-btn');
const recordsList = document.querySelector('ul');
const form = document.getElementById('form-id');

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
        // checkDuplicateEntry(date, weight, comment);
    }
}

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    checkRequired();
});