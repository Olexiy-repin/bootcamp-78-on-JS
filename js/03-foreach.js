/*
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// console.log('numbers:', numbers);

// for (let i = 0; i < numbers.length; i++) {
//   console.log(`${i + 1} - ${numbers[i]}`);
// }

//~ Повна версія
// numbers.forEach((el, idx, arr) => {
//   console.log(`${idx + 1} - ${el}`);
// });
//~ Скорочена версія
// numbers.forEach((el, idx) => console.log(`${idx + 1} - ${el}`));

/*
TODO: Виконайте рефакторинг коду за допомогою методу forEach та стрілочних функції.
 */
// const logItems = function (items) {
//   console.log('items:', items);

//   // for (let i = 0; i < items.length; i++) {
//   //   console.log(`${i + 1} - ${items[i]}`);
//   // }

//   //~ Повна версія
//   // items.forEach((el, idx, arr) => {
//   //   console.log(`${idx + 1} - ${el}`);
//   // });
//   //~ Скорочена версія
//   items.forEach((el, idx) => console.log(`${idx + 1} - ${el}`));
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
TODO: Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// const printContactsInfo = (names, phones) => {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   // for (let i = 0; i < nameList.length; i++) {
//   //   console.log(`${nameList[i]}: ${phoneList[i]}`);
//   // }

//   //~ Повна версія
//   // nameList.forEach((el, idx, arr) => {
//   //   console.log(`${el}: ${phoneList[idx]}`);
//   // });
//   //~ Скорочена версія
//   nameList.forEach((name, idx) => console.log(`${name}: ${phoneList[idx]}`));
// };

// printContactsInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');

/*
TODO: Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// const calculateAverage = (...args) => {
//   let total = 0;

//   // for (let i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }

//   //~ Повна версія
//   // args.forEach((el, idx, arr) => {
//   //   total += el;
//   // });
//   //~ Скорочена версія
//   args.forEach(arg => (total += arg));

//   return total / args.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
