const checkboxField = document.querySelector('#checkbox_field')


checkboxField.addEventListener("click", () => {
  if (checkboxField.checked) {
    console.log(checkboxField.value);
  }
});

checkboxField.addEventListener('click', () => {
  checkboxField.classList.toggle('active_checkbox')
})