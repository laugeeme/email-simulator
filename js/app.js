'use strict';

//variables
const email = document.getElementById('email');
const subject = document.getElementById('asunto');
const msj = document.getElementById('mensaje');
const sendBtn = document.getElementById('enviar');






//disable sendBtn at app started
function startApp(){
    sendBtn.disabled = true;
}






//event
document.addEventListener('DOMContentLoaded', startApp);