function updateTextAndPlaceholder(
  textChangeElement,
  textSmallChangeElement,
  newText,
  newSmallText,
  newPlaceholder,
) {
  textChangeElement.textContent = newText;
  textSmallChangeElement.textContent = newSmallText;
  newPlaceholder && (semesterInput.placeholder = newPlaceholder);
}

const changeTextYes = document.querySelector('#field_visible_student');
const changeTextNot = document.querySelector('#field_hidden_student');
const textChange = document.querySelector('#text_change');
const textSmallChange = document.querySelector('#small_text_change');
const semesterInput = document.querySelector('#semester');

changeTextYes.addEventListener('click', () => {
  updateTextAndPlaceholder(
    textChange,
    textSmallChange,
    'Onde estuda',
    'Esse campo se refere ao ano que está.',
    'Ex: 8º Ano',
  );
});

changeTextNot.addEventListener('click', () => {
  updateTextAndPlaceholder(
    textChange,
    textSmallChange,
    'Onde estudou',
    'Esse campo se refere ao ano em que terminou.',
    'Ex: 2010',
  );
});
