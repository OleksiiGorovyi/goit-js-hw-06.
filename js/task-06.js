// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, 
// зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, 
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй 
// CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputId = document.querySelector("#validation-input");
console.log(inputId);
const length = Number(inputId.dataset.length);
console.log(length);

inputId.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === length) {
    inputId.classList.add('valid');
    inputId.classList.remove('invalid');
  } else {
    inputId.classList.add('invalid');
    inputId.classList.remove('valid');
  }
});

