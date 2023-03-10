// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelectorAll('.item')

console.log('Number of categorie', categories.length)
console.log('')
categories.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent)
    console.log('Elements:', element.lastElementChild.children.length)
console.log('')
})




// ВаР________________
     
// const categoryEl = document.querySelectorAll(".item")
// console.log('Number of categories:', categoryEl.length);

// const categoryList = categoryEl.forEach((element) => {
//     console.log('Category:', element.firstElementChild.textContent);
//     console.log('Elements:', element.querySelectorAll('li').length);
// });



// ______________________############
// const counter = parent => { return parent.childElementCount };
// const message = elements => {
//     elements.forEach(element => {
//         const firstEl = element.firstElementChild;
//         const secondElem = firstEl.nextElementSibling;
//         console.log(`Category: ${firstEl.textContent}`);
//         console.log(`Elements: ${counter(secondElem)}`);
//     });
// };

// const categories = document.querySelector('#categories');
// const subCategories = categories.querySelectorAll('.item');
// console.log(`Number of Categories: ${counter(categories)}`);
// message(subCategories);

// --------------------##############
// const categories = document.querySelector("#categories");
// const elements = [...categories.children];

// console.log(`Number of categories: ${categories.childElementCount}`);

// elements.forEach((element) => {
//     console.log(`Category: ${element.firstElementChild.textContent}`);
//     console.log(`Elements: ${element.lastElementChild.chieldElementCount}`);
// });