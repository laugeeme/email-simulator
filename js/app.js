'use strict';

//variables
const email = document.getElementById('email');
const subject = document.getElementById('asunto');
const msj = document.getElementById('mensaje');
const sendBtn = document.getElementById('enviar');

//disable sendBtn at app started
function startApp() {
  sendBtn.disabled = true;
}

//verify if there is some text
function validateInput() {
    //validates the length of the text and that the field is not empty

}

//event
document.addEventListener('DOMContentLoaded', startApp);
email.addEventListener('blur', validateInput);
subject.addEventListener('blur', validateInput);
msj.addEventListener('blur', validateInput);
