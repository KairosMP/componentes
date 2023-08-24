function toggleFieldVisibility(fields, buttonVisible, buttonHidden) {
  buttonVisible.addEventListener('click', () => {
    fields.forEach((field) => {
      field.classList.add('active_field');
    });
  });

  buttonHidden.addEventListener('click', () => {
    fields.forEach((field) => {
      field.classList.remove('active_field');
    });
  });
}

const fieldElements = [
  {
    fields: document.querySelectorAll('.field_optional_deficiency'),
    buttonVisible: document.querySelector('#field_visible_deficiency'),
    buttonHidden: document.querySelector('#field_hidden_deficiency')
  },
  {
    fields: document.querySelectorAll('.field_optional_benefit'),
    buttonVisible: document.querySelector('#field_visible_benefit'),
    buttonHidden: document.querySelector('#field_hidden_benefit')
  },
  {
    fields: document.querySelectorAll('.field_optional_student'),
    buttonVisible: document.querySelector('#field_visible_student'),
    buttonHidden: document.querySelector('#field_hidden_student')
  },
  {
    fields: document.querySelectorAll('.field_optional_job'),
    buttonVisible: document.querySelector('#field_visible_job'),
    buttonHidden: document.querySelector('#field_hidden_job')
  }
];

fieldElements.forEach((fieldElement) => {
  toggleFieldVisibility(fieldElement.fields, fieldElement.buttonVisible, fieldElement.buttonHidden);
});

const fieldResponsible = document.querySelector('.field_responsible');
const buttonResponsible = document.querySelector('#btns_responsible');

const fieldsParent = document.querySelectorAll('.field_parent');
const buttonParent = document.querySelector('#btns_parent');

buttonResponsible.addEventListener('click', () => {
  fieldResponsible.classList.add('active_field');
  fieldsParent.forEach((field) => {
    field.classList.remove('active_field');
  });
});

buttonParent.addEventListener('click', () => {
  fieldsParent.forEach((field) => {
    field.classList.add('active_field');
  });
  fieldResponsible.classList.remove('active_field');
});
