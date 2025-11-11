/*
 * Деструктуризація об'єкта в циклі
 */

/*
TODO: Виведіть до консолі імена користувачів
*/
// const users = [
//   {
//     username: 'Kate',
//   },
//   {
//     username: 'Alex',
//   },
//   {
//     username: 'Mark',
//   },
// ];

// console.table(users);

//~ Без деструктуризації
// for (const user of users) {
//   console.log(user.username);
// }

// users.forEach(user => {
//   console.log(user.username);
// });

//~ З деструктуризацією
// for (const { username } of users) {
//   console.log(username);
// }

// users.forEach(({ username }, idx, arr) => {
//   console.log(username);
// });
