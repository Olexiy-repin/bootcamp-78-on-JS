/*
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isSuccess = Math.random() >= 0.5;

//     if (isSuccess) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 2000);
// });

// console.log(promise);

/*
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// const preloader = {
//   show() {},

//   hide() {
//     console.log('Preloader hide!');
//   },
// };

// promise
//   .finally(() => {
//     preloader.hide();
//   })
//   .then(result => {
//     console.log(promise);

//     console.log('result =', result);

//     return 100;
//   })
//   .then(value => {
//     console.log('value =', value);
//   })
//   .catch(err => {
//     console.log(promise);

//     console.log('err =', err);
//   });

// TODO: Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

// TODO: Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('Error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err); // 'Error'
//   });

//~ Event loop
// console.log('Start');

// setTimeout(() => {
//   console.log('Hello from setTimeout!');
// }, 0);

// const promise = new Promise((resolve, reject) => {
//   console.log('Hello from class Promise!');

//   setTimeout(() => {
//     resolve('Done!');
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });

// console.log('End');
