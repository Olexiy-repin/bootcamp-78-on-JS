/*
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

//~ 6 хибних значень: false, NaN, null, undefined, 0, ''.

// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(''));

// console.log(Boolean(3.14));
// console.log(Boolean(-10));
// console.log(Boolean('hello'));
// console.log(Boolean('false'));

/*
 ~ Оператор &&
 */

// console.log(false && true)
// console.log('' && 100);

// const num = 25;

// if (num >= 0 && num <= 20) {
//   console.log('Hello');
// }

// if (num >= 0) {
//   if (num <= 20) {
//     console.log('Hello!');
//   }
// }

/*
 ~ Оператор ||
 */

// console.log(true || false);
// console.log('Hello' || 0);

// const num = 5;

// if (num < 0 || num > 10) {
//   console.log('Hello');
// }

/*
 ~ Оператор !
 */

// console.log(!'Hello');

/*
 TODOD: Що буде виведено до консолі?
 */

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && 0 && 2) > 0);

// console.log(0 || (2 && 3) || 4);
