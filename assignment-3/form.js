const satisfactionInput = document.querySelector('#form-satisfaction');
const satisfactionDisplay = document.querySelector('#satisfaction');

const updateSatisfaction = () => {
  satisfactionDisplay.innerText = satisfactionInput.value;
}

satisfactionInput.addEventListener('input', updateSatisfaction);
updateSatisfaction()

let checked = 0;

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const changeCheckbox = () => {
  const allRequired = [...checkboxes].reduce((sum, check) => sum + check.checked, 0) < 1;
  checkboxes.forEach(checkbox => checkbox.required = allRequired);
}

checkboxes.forEach(checkbox => checkbox.addEventListener('change', changeCheckbox));
