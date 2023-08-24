function changeText(textChangeElement, textSmallChangeElement, newText, newSmallText) {
  textChangeElement.textContent = newText;
  textSmallChangeElement.textContent = newSmallText;
}

const changeTextYes = document.querySelector('#field_visible_student');
const changeTextNot = document.querySelector('#field_hidden_student');
const textChange = document.querySelector('#text_change');
const textSmallChange = document.querySelector('#small_text_change');

changeTextYes.addEventListener('click', () => {
  changeText(textChange, textSmallChange, "Onde Estuda", "Esse campo se refere ao ano que está.");
});

changeTextNot.addEventListener('click', () => {
  changeText(textChange, textSmallChange, "Onde Estudou", "Esse campo se refere ao ano em que terminou.");
});
