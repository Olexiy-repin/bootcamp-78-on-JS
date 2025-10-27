/*
TODO: Створи об'єкт person, що містить ім'я, прізвище та вік користувача.
TODO: Виведи його у консоль.
*/

// const person = {
//   firstName: 'Rose',
//   lastName: 'Buchanan',
//   age: 30,
// };

// console.log('person:', person);

/*
TODO: Напиши скрипт, який для об'єкта user, послідовно:
TODO: - додає поле mood зі значенням 'happy'
TODO: - замінює значення hobby на 'skydiving'
TODO: - замінює значення premium на false
TODO: - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// console.log('user:', user);

// const userKeys = Object.keys(user);

// console.log('userKeys:', userKeys);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

//TODO: Зведіть у квадрат кожен елемент цього об'єкта.

// const coordinates = {
//   x: 2,
//   y: 3,
//   z: 4,
// };

// console.log('coordinates:', coordinates);

// const coordinatesKeys = Object.keys(coordinates);

// console.log('coordinatesKeys:', coordinatesKeys);

// for (const key of coordinatesKeys) {
//   coordinates[key] = coordinates[key] ** 2;
// }

// console.log('coordinates:', coordinates);

/*
TODO: Напиши функцію hasProperty(obj, key), яка перевіряє, чи є певний ключ у переданому об'єкті.
*/

// const hasProperty = function (obj, key) {
//   return key in obj;
// };

// const userAlice = { firstName: 'Alice', age: 25 };
// const userLeona = { firstName: 'Leona', age: 25 };

// console.log(hasProperty(userAlice, 'age')); // true
// console.log(hasProperty(userLeona, 'gender')); // false

/*
TODO: Напиши функцію mergeObjects(obj1, obj2), яка об'єднує два об'єкти в один.
*/

//~ Копія обʼєкта з примітивними типами даних
// const user = {
//   firstName: 'Oleksii',
// };
// const userCopy = Object.assign({}, user);

// console.log('user:', user);
// console.log('userCopy:', userCopy);

// userCopy.firstName = 'Theodore';

// console.log('user:', user);
// console.log('userCopy:', userCopy);

//~ Конкатенація обʼєктів
const objA = {
  a: 1,
};

const objB = {
  b: 10,
};

const objC = Object.assign({}, objA, objB);

console.log('objA:', objA);
console.log('objB:', objB);
console.log('objC:', objC);

//~ Вирішення задачі
// const mergeObjects = function (objA, objB) {
//   return Object.assign({}, objA, objB);
// };

// console.log(mergeObjects({ a: 1 }, { b: 2 }));

/*
TODO: Напиши функцію isEmptyObject(obj), яка перевіряє, чи містить обʼєкт властивості.
*/

// const isEmptyObject = function (obj) {
//   const objKeys = Object.keys(obj);

//   return objKeys.length === 0;
// };

// console.log(isEmptyObject({})); // true
// console.log(isEmptyObject({ a: 1 })); // false

/*
TODO: У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
TODO: підсумовування всіх зарплат і збережіть результат у змінній sum.
TODO: Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
*/

//~ Через for...in
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log('salaries:', salaries);

// let sum = 0;

// for (const key in salaries) {
//   sum += salaries[key];
// }

// console.log('sum:', sum);

//~ Через Object.keys() та for...of
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log('salaries:', salaries);

// let sum = 0;

// const salariesKeys = Object.keys(salaries);

// console.log('salariesKeys:', salariesKeys);

// for (const key of salariesKeys) {
//   sum += salaries[key];
// }

// console.log('sum:', sum);

//~ Через Object.values() та for...of
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log('salaries:', salaries);

// let sum = 0;

// const salariesValues = Object.values(salaries);

// console.log('salariesValues:', salariesValues);

// for (const value of salariesValues) {
//   sum += value;
// }

// console.log('sum:', sum);
