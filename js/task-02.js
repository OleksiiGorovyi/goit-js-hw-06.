// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.




const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredients__list = document.getElementById('ingredients');

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredients__item = document.createElement('li');
  ingredients__item.classList.add('item');
  ingredients__item.textContent = ingredients[i];

  elements.push(ingredients__item);
}

ingredients__list.append(...elements);





//  _________________############
// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];
// console.log(ingredients);

// const makeList = ingredients => {
//   return ingredients.map(ingredient => {
//     const listItem = document.createElement('li');
//     listItem.textContent = ingredient;
//     listItem.classList.add('item');
//     return listItem
//   })
// }

// const listEl = makeList(ingredients);
// const list = document.querySelector("#ingredients");
// list.append(...listEl)



// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];
// const elementUl = document.getElementById('ingredients');
// console.log(elementUl);

// for( const ingredient of ingredients) {
//   const elementLi = document.createElement('li');
//   elementLi.classList.add('item');
//   elementLi.textContent = ingredient;
//   elementUl.appendChild(elementLi);
// };