// Função para validar CPF
function validateCPF(cpf) {
  cpf = cpf.replace(/[\D]/g, '');

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

// Função genérica para validar e manipular campos
function validateAndHandleField(field, validationFunction) {
  const fieldValue = field.value;
  const isValid = validationFunction(fieldValue);

  if (isValid) {
    field.classList.add('success_input');
    field.classList.remove('failure_input');
  } else {
    field.classList.remove('success_input');
    field.classList.add('failure_input');
  }
}

// Campo CPF
const physicalPersonField = document.querySelector('#physical_person');
physicalPersonField.addEventListener('change', () => {
  validateAndHandleField(physicalPersonField, validateCPF);
});

// Campo Email
const emailStudentField = document.querySelector('#email_student');
emailStudentField.addEventListener('change', () => {
  const emailValue = emailStudentField.value;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  validateAndHandleField(emailStudentField, () => isValid);
});

// Campo RG
const generalRecordField = document.querySelector('#general_record');
generalRecordField.addEventListener('change', () => {
  const generalRecordValue = generalRecordField.value;
  const isValidRG = /^\d{7}-\d{1}$/.test(generalRecordValue);
  const isValidNoRepeatedDigits = !/^(\d)\1+$/.test(generalRecordValue.replace('-', ''));
  validateAndHandleField(generalRecordField, () => isValidRG && isValidNoRepeatedDigits);
});

// Campo CEP
const postalCodeField = document.querySelector('#postal_code');
postalCodeField.addEventListener('change', () => {
  const postalCodeValue = postalCodeField.value;
  const isValidCEP = /^\d{5}-\d{3}$/.test(postalCodeValue);
  const isValidNoRepeatedDigits = !/^(\d)\1+$/.test(postalCodeValue.replace('-', ''));
  validateAndHandleField(postalCodeField, () => isValidCEP && isValidNoRepeatedDigits);
});
