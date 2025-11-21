/*
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 */

// import axios from 'axios';

// https://692019b931e684d7bfcbb69a.mockapi.io

/*
 * Read (GET)
 */
//~ getBooks через fetch
// const getBooks = () => {
//   return fetch('https://692019b931e684d7bfcbb69a.mockapi.io/books').then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }

//       return response.json();
//     }
//   );
// };

// getBooks()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//~ getBooks через axios
// const getBooks = () => {
//   return axios.get('https://692019b931e684d7bfcbb69a.mockapi.io/books');
// };

// getBooks()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//~ getBookById через fetch
// const getBookById = bookId => {
//   return fetch(
//     `https://692019b931e684d7bfcbb69a.mockapi.io/books/${bookId}`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// getBookById(2)
//   .then(book => {
//     console.log(book);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// getBookById(10)
//   .then(book => {
//     console.log(book);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//~ getBookById через axios
// const getBookById = bookId => {
//   return axios.get(
//     `https://692019b931e684d7bfcbb69a.mockapi.io/books/${bookId}`
//   );
// };

// getBookById(5)
//   .then(({ data }) => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
 * Create (POST)
 */
//~ addBook через fetch
// const addBook = bookInfo => {
//   const fetchOptions = {
//     method: 'POST',
//     body: JSON.stringify(bookInfo),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return fetch(
//     'https://692019b931e684d7bfcbb69a.mockapi.io/books',
//     fetchOptions
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// addBook({
//   title: 'Тестова книга з CSS',
//   author: 'Я',
//   genres: ['CSS'],
// })
//   .then(book => {
//     console.log(book);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// addBook({
//   title: 'Тестова книга з HTML',
//   author: 'Я',
//   genres: ['HTML'],
// })
//   .then(book => {
//     console.log(book);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//~ addBook через axios
// const addBook = bookInfo => {
//   return axios.post(
//     'https://692019b931e684d7bfcbb69a.mockapi.io/books',
//     bookInfo
//   );
// };

// addBook({
//   title: 'Тестова книга з CSS',
//   author: 'Я',
//   genres: ['CSS'],
// })
//   .then(book => {
//     console.log(book);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/*
 * Update (PUT/PATCH)
 */
//~ updateBookById через fetch
// const updateBookById = (bookInfoForUpdate, bookId) => {
//   const fetchOptions = {
//     method: 'PUT',
//     body: JSON.stringify(bookInfoForUpdate),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return fetch(
//     `https://692019b931e684d7bfcbb69a.mockapi.io/books/${bookId}`,
//     fetchOptions
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// updateBookById({ title: 'Велика нова книга по NODEJS' }, 9)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// updateBookById({ title: 'Велика нова книга по JS', author: 'Манго' }, 7)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//~ updateBookById через axios
// const updateBookById = (bookInfoForUpdate, bookId) => {
//   return axios.put(
//     `https://692019b931e684d7bfcbb69a.mockapi.io/books/${bookId}`,
//     bookInfoForUpdate
//   );
// };

// updateBookById({ title: 'Велика нова книга по JS', author: 'Манго' }, 8)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
 * Delete (DELETE)
 */
//~ deleteBookById через fetch
// const deleteBookById = bookId => {
//   const fetchOptions = {
//     method: 'DELETE',
//   };

//   return fetch(
//     `https://692019b931e684d7bfcbb69a.mockapi.io/books/${bookId}`,
//     fetchOptions
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// deleteBookById(11)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//~ deleteBookById через axios
// const deleteBookById = bookId => {
//   return axios.delete(
//     `https://692019b931e684d7bfcbb69a.mockapi.io/books/${bookId}`
//   );
// };

// deleteBookById(11);
