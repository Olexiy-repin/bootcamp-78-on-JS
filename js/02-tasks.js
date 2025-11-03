// TODO: Що буде виведено в консоль
// const foo = function () {
//   console.log('this:', this);
// };

// foo();

// TODO: Що буде виведено в консоль
// const book = {
//   title: 'React for beginners',

//   showThis: function () {
//     console.log('this:', this);
//   },

//   showTitle: function () {
//     console.log('this:', this.title);
//   },
// };

// book.showThis();

// const outerShowThis = book.showThis;

// outerShowThis();

// const outerShowTitle = book.showTitle;

// outerShowTitle();

/*
TODO: Тут функція makeUser повертає об'єкт.
TODO: Яким буде результат при зверненні до об'єкта ref? Чому?
*/
// const makeUser = function () {
//   // let this = undefined;

//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user.ref.name);

// TODO: Що буде виведено в консоль
// const makeUser = function () {
//   return {
//     name: 'Джон',

//     ref() {
//       return this;
//     },
//   };
// };

// const user = makeUser();

// console.log(user.ref().name);

/*
TODO: Рефакторинг метода getAverageGrade().
TODO:
TODO: Метод getAverageGrade() повинен повертати середній бал студента. Виправ this, де потрібно.
*/
// const student = {
//   firstName: 'Віктор',
//   grades: [90, 80, 100],

//   getAverageGrade() {
//     const totalGrade = this.grades.reduce((acc, mark) => acc + mark);

//     return `${this.firstName} має середній бал ${totalGrade / this.grades.length}`;
//   },
// };

// console.log(student.getAverageGrade());

/*
TODO: Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
TODO: розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
TODO: кількістю з властивості stones.
 */
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     stoneName = stoneName.toLowerCase();

//     const searchedStone = this.stones.find(stone => stone.name.toLowerCase() === stoneName);

//     if (searchedStone === undefined) {
//       return 'Камінь не знайдено!';
//     }

//     return searchedStone.price * searchedStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Aconit')); // Aconit не знайдено!
