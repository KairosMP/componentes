const physicalPersonField = document.querySelector('#physical_person');

function physicalPersonValidation(physicalPersonValue) {
  const cpf = physicalPersonValue.replace(/[\D]/g, '');

  if (cpf.length !== 11) {
    return false;
  }

  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let rest = 11 - (sum % 11);
  let type1 = (rest >= 10) ? 0 : rest;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  rest = 11 - (sum % 11);
  let type2 = (rest >= 10) ? 0 : rest;

  return (parseInt(cpf.charAt(9)) === type1 && parseInt(cpf.charAt(10)) === type2);
}

physicalPersonField.addEventListener('change', () => {
  const physicalPersonValue = physicalPersonField.value;
  if (physicalPersonValidation(physicalPersonValue)) {
    physicalPersonField.classList.add('success_input')
    physicalPersonField.classList.remove('failure_input')
  } else {
    physicalPersonField.classList.remove('success_input')
    physicalPersonField.classList.add('failure_input')
  }
});

