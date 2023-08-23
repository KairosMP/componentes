function toggleFieldVisibility(field, buttonVisible, buttonHidden) {
  buttonVisible.addEventListener('click', () => {
    field.classList.add('active_field');
  });

  buttonHidden.addEventListener('click', () => {
    field.classList.remove('active_field');
  });
}

const fieldElements = [
  {
    field: document.querySelector('#field_optional_deficiency'),
    buttonVisible: document.querySelector('#field_visible_deficiency'),
    buttonHidden: document.querySelector('#field_hidden_deficiency')
  },
  {
    field: document.querySelector('#field_optional_benefit'),
    buttonVisible: document.querySelector('#field_visible_benefit'),
    buttonHidden: document.querySelector('#field_hidden_benefit')
  },
  {
    field: document.querySelector('#field_optional_student'),
    buttonVisible: document.querySelector('#field_visible_student'),
    buttonHidden: document.querySelector('#field_hidden_student')
  }
];

fieldElements.forEach((fieldElement) => {
  toggleFieldVisibility(fieldElement.field, fieldElement.buttonVisible, fieldElement.buttonHidden);
});


const fieldResponsible = document.querySelector('.field_responsible');
const buttonResponsible = document.querySelector('#btns_responsible');

const fieldsParent = document.querySelectorAll('.field_parent');
const buttonParent = document.querySelector('#btns_parent');

const fiedlsStudent = document.querySelectorAll('.field_optional_student')
const buttonVisibleStudent = document.querySelector('#field_visible_student')
const buttonHiddenStudent = document.querySelector('#field_hidden_student')

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

buttonVisibleStudent.addEventListener('click', () => {
  fiedlsStudent.forEach((fields => {
    fields.classList.add('active_field')
  }))
})

buttonHiddenStudent.addEventListener('click', () => {
  fiedlsStudent.forEach((fields => {
    fields.classList.remove('active_field')
  }))
})