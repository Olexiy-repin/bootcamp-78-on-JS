/*
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.log('friends:', friends);

// for (let i = 0; i < friends.length; i++) {
//   const friend = friends[i];

//   console.log(friend);
// }

// for (const friend of friends) {
//   console.log(friend);
// }

/*
TODO: Напиши скрипт для перебору масиву fruits.
TODO: Для кожного елемента масиву виведи в консоль рядок
TODO: у форматі номер_елемента: значення_елемента.
TODO: Нумерація елементів повинна починатися з 1.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// console.log('fruits:', fruits);

//~ Через цикл for
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

//~ Через цикл for...of
// for (const fruit of fruits) {
//   const idxOfFruit = fruits.indexOf(fruit);

//   console.log(`${idxOfFruit + 1}: ${fruit}`);
// }
