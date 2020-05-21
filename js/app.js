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
  verifyLength(this);

  //validate email format
  if (this.type === 'email') {
    validateEmail(this);
  }

  let errors = document.querySelectorAll('.error');

  if (email.value !== '' && subject.value !== '' && msj.value !== '') {
    if (errors.length === 0) {
      sendBtn.disabled = false;
    }
  }
}

function verifyLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = 'green';
    field.classList.remove('error');
  } else {
    field.style.borderBottomColor = 'red';
    field.classList.add('error');
  }
}

function validateEmail(field) {
  const msj = field.value;
  if (msj.indexOf('@') !== -1) {
    field.style.borderBottomColor = 'green';
    field.classList.remove('error');
  } else {
    field.style.borderBottomColor = 'red';
    field.classList.add('error');
  }
}

//event
document.addEventListener('DOMContentLoaded', startApp);
email.addEventListener('blur', validateInput);
subject.addEventListener('blur', validateInput);
msj.addEventListener('blur', validateInput);
