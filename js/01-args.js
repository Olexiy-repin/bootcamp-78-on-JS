/*
 * - Function expression
 * - Псевдомасив arguments и Array.from
 */

//~ Function declaration (Можна викликати до оголошення в коді)

// greet('Oleksii', 'Repin');

// function greet(firstName, lastName) {
//   alert(`Welcome ${firstName} ${lastName}`);
// }

// function sum(numA, numB) {
//   return numA + numB;
// }

// const result = sum(10, 29);

// console.log(result);

//~ Function expression (Викликати тільки після оголошення в коді)

// const greet = function (firstName, lastName) {
//   alert(`Welcome ${firstName} ${lastName}`);
// };

// greet('Oleksii', 'Repin');

//~ Псевдомасив arguments

// const foo = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);

//   for (const item of arguments) {
//     console.log(item);
//   }
// };

// foo(100, 200, 300);

/*
TODO: Напиши функцію add для складання довільної кількості аргументів (чисел)
*/

// const add = function () {
//   console.log(arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
TODO: Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів
TODO: та розраховує середнє арефметичне.
*/

// const calculateAverage = function () {
//   console.log(arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total / arguments.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
