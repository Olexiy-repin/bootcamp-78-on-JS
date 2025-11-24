/*
 * Синтаксис async/await
 * try...catch
 */

import axios from 'axios';

// const foo = async () => {
//   try {
//     const promise = new Promise((resolve, reject) => {
//       reject('Error!');
//     });

//     const result = await promise;

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// foo();

//TODO: Запит за постами і обробка відповіді через async/await
//~ Запит за поставми і обрабка через then, catch.
// const fetchPosts = () => {
//   fetch('https://6920354331e684d7bfcc18d6.mockapi.io/posts')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }

//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// fetchPosts();

//~ Запит за постами і обробка відповіді через async/await та метод fetch()
// const fetchPosts = async () => {
//   try {
//     const response = await fetch('https://6920354331e684d7bfcc18d6.mockapi.io/posts');

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const data = await response.json();

//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchPosts();

//~ Запит за постами і обробка відповіді через async/await та функцію axios
// const fetchPosts = async () => {
//   try {
//     const response = await axios.get('https://6920354331e684d7bfcc18d6.mockapi.io/posts');

//     const { data } = response;

//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchPosts();

//TODO: Запит за постами і обробка відповіді через async/await та then()/catch()
// const fetchPosts = async () => {
//   try {
//     const response = await axios.get('https://6920354331e684d7bfcc18d6.mockapi.io/posts');

//     const { data } = response;

//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchPosts()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// TODO: Запит за постами і обробка відповіді через async/await на верхньому рівні модуля
// const fetchPosts = async () => {
//   try {
//     const response = await axios.get('https://6920354331e684d7bfcc18d6.mockapi.io/posts');

//     const { data } = response;

//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

// const data = await fetchPosts();

// console.log(data);

//TODO: Є «звичайна» функція foo. Як можна всередині неї отримати результат виконання async-функції без використання оператора await?
// const fetchPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//   return response.json();
// };

// const foo = () => {
//   // ...що тут написати?
//   // щоб викликати fetchPosts() і дочекатися результату від async-функції
//   // не забувайте, тут не можна використовувати "await"

//   fetchPosts()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// foo();
