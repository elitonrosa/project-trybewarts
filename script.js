const btnForm = document.querySelector('#submit-btn');
const checkboxBtn = document.querySelector('#agreement');
btnForm.disabled = true;

checkboxBtn.addEventListener('change', () => {
  if (checkboxBtn.checked === true) {
    btnForm.disabled = false;
  } else {
    btnForm.disabled = true;
  }
});
