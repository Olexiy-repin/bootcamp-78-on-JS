/*
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */

// ~ Короткі властивості
// const username = 'Mango';
// const email = 'mango@mail.com';

// const credentials = {
//   username,
//   email,
// };

// console.log('credentials:', credentials);
// console.log('credentials.username:', credentials.username);
// console.log('credentials.email:', credentials.email);

// ~ Обчислювальні властивості
/* 
  <input type="text" name="color">
*/

const inputName = 'color';
const inputValue = 'rgb(255, 0, 255)';

const colorPickerData = {
  [inputName]: inputValue,
};

console.log(colorPickerData);
