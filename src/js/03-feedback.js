const throttle = require('lodash.throttle');


const selectors = {
    form: document.querySelector(".feedback-form"),
}


selectors.form.addEventListener("input", throttle(hendlerFormСhange, 500));

window.addEventListener("load", hendlerStorage);

selectors.form.addEventListener("submit", hendlerFormSubmit);


let formState = {};
const LOCAL_KEY = "feedback-form-state";

function hendlerFormСhange(evt) {
    formState[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formState));
}



function hendlerFormSubmit(event) {
    event.preventDefault();
    console.log(formState);
    formState = {};
    event.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
}


function hendlerStorage() {
    try {
        const savedSettings = localStorage.getItem(LOCAL_KEY);
        if (!savedSettings) return;
        formState = JSON.parse(savedSettings);
        Object.entries(formState).forEach(([key, val]) => {
            selectors.form.elements[key].value = val;
        });
    } catch ({message}) {
        console.log(message);
    }
}







