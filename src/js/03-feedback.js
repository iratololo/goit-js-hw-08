const throttle = require('lodash.throttle');


const selectors = {
    form: document.querySelector(".feedback-form"),
}


selectors.form.addEventListener("input", throttle(hendlerFormСhange, 500));

window.addEventListener("load", hendlerStorage);

selectors.form.addEventListener("submit", hendlerFormSubmit);


const settings = {};

function hendlerFormСhange(evt) {
    settings[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(settings));
}



function hendlerFormSubmit(event) {
    event.preventDefault();
    const { email, message } = event.currentTarget.elements;
    settings.email = email.value;
    settings.message = message.value;
    console.log(settings);
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    // localStorage.clear();
}


function hendlerStorage() {
    const savedSettings = localStorage.getItem("feedback-form-state");
    const parsedSettings = JSON.parse(savedSettings) ?? "";
    selectors.form.elements.email.value = parsedSettings.email || "";
    selectors.form.elements.message.value = parsedSettings.message || "";
}







