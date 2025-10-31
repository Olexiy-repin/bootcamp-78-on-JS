/*
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

// const numbers = [5, 10, 15, 20, 25];

// console.log('numbers:', numbers);

/*
  ~ 1 Ітерація
    acc = 0;
    el = 5;
    idx = 0;
    arr = [5, 10, 15, 20, 25];

    return 5;

  ~ 2 Ітерація
    acc = 5;
    el = 10;
    idx = 1;
    arr = [5, 10, 15, 20, 25];

    return 15;

  ~ 3 Ітерація
    acc = 15;
    el = 15;
    idx = 2;
    arr = [5, 10, 15, 20, 25];

    return 30;

  ~ 4 Ітерація
    acc = 30;
    el = 20;
    idx = 3;
    arr = [5, 10, 15, 20, 25];

    return 50;

  ~ 5 Ітерація
    acc = 50;
    el = 25;
    idx = 4;
    arr = [5, 10, 15, 20, 25];

    return 75;
*/

// const total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// }, 0);

// console.log('total:', total);

/*
TODO: Рахуємо загальну зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// console.log(salary);

// const salaryValues = Object.values(salary);

// console.log(salaryValues);

/*
  ~ 1 Ітерація
    acc = 100;
    el = 50;
    idx = 1;
    arr = [100, 50, 150];

    return 150;
  ~ 2 Ітерація
    acc = 150;
    el = 150;
    idx = 2;
    arr = [100, 50, 150];

    return 300;
*/

// const totalSalary = salaryValues.reduce((acc, el, idx, arr) => {
//   return acc + el;
// });

// console.log(totalSalary);

// const data = [
//   { url: 'https://picsum.photos/200/300', alt: 'some text 1' },
//   { url: 'https://picsum.photos/200/300', alt: 'some text 2' },
//   { url: 'https://picsum.photos/200/300', alt: 'some text 3' },
// ];

// const template = data.reduce((acc, el, idx, arr) => {
//   return acc + `<li><img src="${el.url} alt="${el.alt}" /></li>`;
// }, '');

// console.log(template);

/*
TODO: Рахуємо загальну кількість годин
 */
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// console.table(players);

/*
  ~ 1 Ітерація
    acc = { id: 'player-1', name: 'Mango', timePlayed: 310, online: false };
    el = { id: 'player-2', name: 'Poly', timePlayed: 470, online: true };
    idx = 1;
    arr = players;

    return '[object Object]470';
  ~ 2 Ітерація
    acc = '[object Object]470';
    el = { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true };
    idx = 2;
    arr = players;

    return '[object Object]470230';
*/

// const totalTimePlayed = players.reduce((acc, el, idx, arr) => {
//   return acc + el.timePlayed;
// }, 0);

// console.log('totalTimePlayed:', totalTimePlayed);

/*
TODO: Рахуємо загальну суму товарів кошика
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// console.table(cart);

// const total = cart.reduce((acc, el, idx, arr) => {
//   return acc + el.price * el.quantity;
// }, 0);

// console.log(total);
