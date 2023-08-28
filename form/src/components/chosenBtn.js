const btnDeficiency = document.querySelectorAll('.optional_deficiency');
const btnInstruments = document.querySelectorAll('.optional_instruments');
const btnBenefit = document.querySelectorAll('.optional_benefit');
const btnStudent = document.querySelectorAll('.optional_student')
const btnSchool = document.querySelectorAll('.optional_school')
const btnJob = document.querySelectorAll('.optional_job')
const btnResponsible = document.querySelectorAll('.btns_change_fields')

function handleButtonClick(event) {
  const clickedButton = event.target;
  const group = clickedButton.getAttribute('data-group');
  const buttons = document.querySelectorAll(`[data-group="${group}"]`);

  buttons.forEach((button) => {
    button.classList.toggle('active', button === clickedButton);
  });
}

btnDeficiency.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

btnInstruments.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

btnBenefit.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

btnStudent.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

btnSchool.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

btnJob.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

btnResponsible.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});
