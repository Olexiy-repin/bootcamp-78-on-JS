/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

// var abc = 100;

// console.log(window);

// alert('Hello world!');

// console.dir(document);

// const btnEl = document.querySelector('body button');

// console.dir(btnEl);

// const navItemsEl = document.querySelectorAll('.js-site-nav-link');

// console.log(navItemsEl);

// const refs = {
//   magicBtn: document.querySelector('body button'),
//   navLinks: document.querySelectorAll('.js-site-nav-link'),
// };

// console.log(refs);

/*
 * Властивості «навігації» по DOM-вузлах
 */
const refs = {
  navList: document.querySelector('.js-site-nav'),
};

console.log(refs);

console.log(refs.navList.children);
console.log(refs.navList.parentNode);
console.log(refs.navList.previousElementSibling);
console.log(refs.navList.nextElementSibling);
