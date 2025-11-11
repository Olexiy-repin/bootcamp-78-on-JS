/*
 * Деструктуризація об'єкта в параметрах функції
 */
// const user = {
//   username: 'Jacob',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// console.log('user:', user);

//~ Без деструктуризації
// const showUserInfo = obj => {
//   console.log(
//     `Hello my name is ${obj.username}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// };

// showUserInfo(user);

//~ З деструктуризацією
// const showUserInfo = obj => {
//   const {
//     username,
//     skills: { html, css, js },
//   } = obj;

//   console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js - ${js}`);
// };

// showUserInfo(user);

//~ Деструктуризація параметрів функції
// const showUserInfo = ({ username, skills: { html, css, js } }) => {
//   // let { username, skills: { html, css, js } } = user;

//   console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js - ${js}`);
// };

// showUserInfo(user);
