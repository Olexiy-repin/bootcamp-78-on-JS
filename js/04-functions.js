/*
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 * - Порядок виконання коду
 * - Області видимості
 */

// function greetUser(firstName, lastName) {
//   // let firstName = 'Oleksii';
//   // let lastName = 'Repin';

//   console.log(`Welcome ${firstName} ${lastName}!`);
// }

// greetUser('Oleksii', 'Repin');
// greetUser('Elnora', 'Pearson');

// function sum(numA, numB) {
//   // let numA = 10;
//   // let numB = 20;

//   return numA + numB;
// }

// const total1 = sum(10, 20);

// console.log('total1:', total1);

// const total2 = sum(234, 23);

// console.log('total2:', total2);

/*
TODO: Напишіть функцію isAdult(age), яка буде перевіряти вік користувач.
TODO: Якщо користувачу більше 18 років, то функція повертає true інакше false.
*/

// function isAdult(userAge) {
//   // let userAge = 29;

//   return userAge >= 18;
// }

// console.log(isAdult(29)); // true
// console.log(isAdult(18)); // true
// console.log(isAdult(7)); // false

/*
TODO: Напишіть функцію isNumberEven(num), яка перевіряє число на парність.
TODO: Якщо число парне, то функція повертає true інакше false.
*/

// function isNumberEven(num) {
//   return num % 2 === 0;
// }

// console.log(isNumberEven(10)); // true
// console.log(isNumberEven(15)); // false
// console.log(isNumberEven(100)); // true

/*
TODO: Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника.
TODO: Сторони прямокутника будуть переденні до параметрів sideA та sideB.
*/

// function getRectArea(sideA, sideB) {
//   return sideA * sideB;
// }

// console.log(getRectArea(8, 11)); // 88
// console.log(getRectArea(18, 11)); // 198
// console.log(getRectArea(8, 21)); // 168

/*
TODO: Напишіть функцію toCelsius(fahrenheit), яка буде переводити градуси Фаренгейта в градуси Цельсія.
TODO: Заокругліть значення до однієї цифри після коми.
TODO:
TODO: Формула: С = (F - 32) * (5/9);
*/

// function toCelsius(fahrenheit) {
//   const celsius = (fahrenheit - 32) * (5 / 9);

//   return Number(celsius.toFixed(1));
// }

// console.log(toCelsius(10)); // -12.2
// console.log(toCelsius(0)); // -17.8
// console.log(toCelsius(-10)); // -23.3

/*
 TODO: Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 TODO: маси тіла людини. Для цього необхідно розділити вагу на квадрат висоти.
 TODO:
 TODO: Вага та висота будуть спеціально передані як рядки.
 TODO:
 TODO: Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// function calcBMI(weight, height) {
//   weight = Number(weight);
//   height = Number(height);

//   const resultBmi = weight / height ** 2;

//   return Number(resultBmi.toFixed(1));
// }

// console.log(calcBMI('85.3', '1.74'));
