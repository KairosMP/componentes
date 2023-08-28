const buttonClasses = [
  'optional_deficiency',
  'optional_instruments',
  'optional_student',
  'optional_school',
  'optional_job',
  'optional_benefit'
];

function addClickListenersToButtons(className) {
  const buttons = document.querySelectorAll(`.${className}`);
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonValue = button.value;
      console.log(`Valor do botão clicado (${className}):`, buttonValue);
    });
  });
}

buttonClasses.forEach(className => {
  addClickListenersToButtons(className);
});
