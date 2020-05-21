'use strict';

//variables
const email = document.getElementById('email');
const subject = document.getElementById('asunto');
const msj = document.getElementById('mensaje');
const sendBtn = document.getElementById('enviar');
const sendForm = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

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

function sendEmail(e) {
  //spinner appears on click from send button
  const spinnerGif = document.querySelector('#spinner');
  spinnerGif.style.display = 'block';

  //create sent gif
  const sendGif = document.createElement('img');
  sendGif.src = 'img/mail.gif';
  sendGif.style.display = 'block';

  //hidden spinner and shows sent gif
  setTimeout(function () {
    spinnerGif.style.display = 'none';

    document.querySelector('#loaders').appendChild(sendGif);
    setTimeout(function () {
      sendGif.remove();
      sendForm.reset();
    }, 5000);
  }, 3000);

  e.preventDefault();
}

//reset form
function resetForm(e) {
  sendForm.reset();
  e.preventDefault();
}

//event
document.addEventListener('DOMContentLoaded', startApp);
email.addEventListener('blur', validateInput);
subject.addEventListener('blur', validateInput);
msj.addEventListener('blur', validateInput);
sendBtn.addEventListener('click', sendEmail);
resetBtn.addEventListener('click', resetForm);
