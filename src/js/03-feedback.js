import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
const emailInput = document.querySelector('input[type]');

function updateInputs() {
    if (!JSON.parse(localStorage.getItem(STORAGE_KEY))) {
        form.elements.message.value = "";
        form.elements.email.value = "";
        return;
    };
    form.elements.email.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
    form.elements.message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
};

function saveData() {
    // evt.preventDefault();
    const formState = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
};

function clearOnSubmit(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)) || '');
    form.elements.email.value = '';
    form.elements.message.value = '';
    localStorage.clear();
};

updateInputs();
form.addEventListener('input', throttle(saveData, 500));
form.addEventListener('submit', clearOnSubmit);