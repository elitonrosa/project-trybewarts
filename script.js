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

const btnLogin = document.getElementById('login-btn');
const inputEmail = document.getElementById('login');
const inputPassword = document.getElementById('senha');

function alerta() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', alerta);

const formName = document.querySelector('#input-name');
const formLastName = document.querySelector('#input-lastname');
const formEmail = document.querySelector('#input-email');
const formHouse = document.querySelector('#house');
const formFamily = document.querySelectorAll('.input-family');
const formSubjects = document.querySelectorAll('.subject');
const formRate = document.querySelectorAll('.input-ratio');
const formComments = textArea;

function showData(family, subjects, rate) {
  document.querySelector('#evaluation-form').style.display = 'none';
  document.querySelector('#form-name-data').innerHTML = (`${formName.value} ${formLastName.value}`);
  document.querySelector('#form-email-data').innerHTML = formEmail.value;
  document.querySelector('#form-house-data').innerHTML = formHouse.value;
  document.querySelector('#form-family-data').innerHTML = family;
  document.querySelector('#form-subjects-data').innerHTML = subjects;
  document.querySelector('#form-evaluation-data').innerHTML = rate;
  document.querySelector('#form-comments-data').innerHTML = formComments.value;
  document.querySelector('#form-data').style.display = 'block';
}

let family = '';
let subjects = '';
let rate = '';

function getData() {
  formFamily.forEach((e) => {
    if (e.checked) {
      family = e.value;
    }
  });
  formSubjects.forEach((e) => {
    if (e.checked) {
      subjects += `${e.value}, `;
    }
  });
  formRate.forEach((e) => {
    if (e.checked) {
      rate = e.value;
    }
  });
  showData(family, subjects.slice(0, -2), rate);
}

btnForm.addEventListener('click', (e) => {
  e.preventDefault();
  getData();
});
