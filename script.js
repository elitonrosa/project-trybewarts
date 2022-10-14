const btnForm = document.querySelector('#submit-btn');
const checkboxBtn = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

btnForm.disabled = true;

checkboxBtn.addEventListener('change', () => {
  if (checkboxBtn.checked === true) {
    btnForm.disabled = false;
  } else {
    btnForm.disabled = true;
  }
});

textArea.addEventListener('keyup', () => {
  counter.innerHTML = String(500 - textArea.value.length);
});

let btnLogin = document.getElementById('login-btn')
let inputEmail = document.getElementById('login')
let inputPassword = document.getElementById('senha')

function alerta() { 
    if (inputEmail.value === "tryber@teste.com" && inputPassword.value === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
}
btnLogin.addEventListener('click', alerta);
