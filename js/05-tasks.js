/*
TODO: Напиши скрипт для обчислення площі прямокутника зі сторонами,
TODO: значення яких зберігаються у змінній values у вигляді рядка.
TODO: Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const rectSides = values.split(' ');
// const rectArea = Number(rectSides[0]) * Number(rectSides[1]);

// console.log('values:', values);
// console.log('rectSides:', rectSides);
// console.log('rectArea:', rectArea);

/*
TODO: Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// console.log('numbers:', numbers);

// let total = 0;

// for (const num of numbers) {
//   if (num % 2 === 0) {
//     total += num;
//   }
// }

// console.log('total:', total);

/*
TODO: Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
TODO: У змінних names та phones зберігаються рядки імен та телефонних номерів,
TODO: розділені комами. Порядковий номер імен та телефонів у рядках вказують на
TODO: відповідність. Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// console.log('names:', names);
// console.log('phones:', phones);

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log('namesArr:', namesArr);
// console.log('phonesArr:', phonesArr);

// for (let i = 0; i < namesArr.length; i++) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
TODO: Напиши скрипт, який виводить у консоль усі слова рядка
TODO: крім першого і останнього. Результуючий рядок не повинен починатися
TODO: або закінчуватися символ пробілу.
TODO: Скрипт повинен працювати для будь-якого рядка.
*/

//~ 1 Варіант
// const string = 'Welcome to the future';
// const wordsArr = string.split(' ');

// console.log('string:', string);
// console.log('wordsArr:', wordsArr);

// let resultedStr = '';

// for (let i = 1; i < wordsArr.length - 1; i++) {
//   resultedStr += `${wordsArr[i]} `;
// }

// resultedStr = resultedStr.trim();

// console.log(resultedStr);

//~ 2 Варіант
// const string = 'Welcome to the future';
// const wordsArr = string.split(' ');
// const wordsArrCopy = wordsArr.slice(1, wordsArr.length - 1);
// const resultedStr = wordsArrCopy.join(' ');

// console.log('string:', string);
// console.log('wordsArr:', wordsArr);
// console.log('wordsArrCopy:', wordsArrCopy);
// console.log('resultedStr:', resultedStr);

//~ 3 Варіант
// const string = 'Welcome to the future';
// const idxOfFirstSpace = string.indexOf(' ');
// const idxOfLastSpace = string.lastIndexOf(' ');
// const resultedStr = string.slice(idxOfFirstSpace + 1, idxOfLastSpace);

// console.log('string:', string);
// console.log('idxOfFirstSpace:', idxOfFirstSpace);
// console.log('idxOfLastSpace:', idxOfLastSpace);
// console.log('resultedStr:', resultedStr);

/*
TODO: Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
TODO: для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

// const values = [-17, -10, 94, -30, 1, 23, -20];
// let min = values[0];

// for (let i = 1; i < values.length; i++) {
//   if (values[i] < min) {
//     min = values[i];
//   }
// }

// console.log('values:', values);
// console.log('min:', min);

/*
TODO: У нас є декілько масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// let totalSalary = 0;

// for (const salaryValue of managerSalaries) {
//   totalSalary += salaryValue;
// }

// console.log('totalSalary:', totalSalary);

// for (const salaryValue of developersSalaries) {
//   totalSalary += salaryValue;
// }

// console.log('totalSalary:', totalSalary);
