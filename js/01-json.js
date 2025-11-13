/*
 * Формат JSON
 *
 * - Метод JSON.strigify(value)
 * - Метод JSON.parse(value)
 */
// const user = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',
//   age: 30,
//   isAdmin: true,
// };

// console.log(user);

// const userJSON = JSON.stringify(true);

// console.log(userJSON);

// const users = [
//   {
//     firstName: 'Ethan',
//     lastName: 'Allison',
//     age: 30,
//   },
//   {
//     firstName: 'Sally',
//     lastName: 'Hunt',
//     age: 32,
//   },
//   {
//     firstName: 'Amanda',
//     lastName: 'Jordan',
//     age: 20,
//   },
// ];

// console.log('users:', users);

// const usersJSON = JSON.stringify(users);

// console.log('usersJSON:', usersJSON);

// console.log(JSON.parse(usersJSON));

// const user = {
//   firstName: 'Edith',
//   lastName: 'Wilkerson',

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log('user:', user);

// const userJSON = JSON.stringify(user);

// console.log('userJSON:', userJSON);

/*
 * Конструкція try...catch для обробки помилок
 */
// console.log('Start');

// try {
//   const user = JSON.parse('{firstName: "Oleksii"}');
// } catch (err) {
//   console.log(err);
// }

// console.log('End');
