/*
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */

// const firstName = 'Oleksii';

// console.log(firstName);
// console.log(firstName[2]);

// TODO: Обʼєднайте два рядки в один і виведіть до консолі.
//~ Через конкатенацію рядків
// const firstName = 'Chelsy';
// const lastName = 'Emerald';

// const fullName = firstName + ' ' + lastName + '.';

// console.log(fullName);

//~ Через шаблоні рядки
// const firstName = 'Chelsy';
// const lastName = 'Emerald';

// const fullName = `${firstName} ${lastName}.`;

// console.log(fullName);

// TODO: Підставте значення зміної quantity до рядка orderMsg, використоуючи шаблоні рядки.

// const quantity = 15;
// const orderMsg = 'You ordered ' + quantity + ' bots';
// const orderMsg = `You ordered ${quantity} bots`;

// console.log(orderMsg);

/*
  TODO: Запросіть у користувача ім'я та прізвище і виведіть у консоль повідомлення:
  TODO: Hello <імʼя> <прізвище>, you are logged in.
*/

// const firstName = prompt('Enter your first name');
// const lastName = prompt('Enter your last name');

// console.log('firstName:', firstName);
// console.log('lastName:', lastName);

// const message = `Hello ${firstName} ${lastName}, you are logged in.`;

// console.log(message);

// TODO: Дізнайтесь довжину рядка message.

// const message = 'This string is 28 chars long';

// const messageLength = message.length;

// console.log('message:', message);
// console.log('messageLength:', messageLength);

/*
 TODO: Склади фразу за допомогою шаблонних рядків
 TODO: '{{companyName}} has {{repairBots + defenceBots}} bots in stock',
 TODO: де companyName, repairBots, defenceBots - змінні вставлені в рядок.
 */

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;

// const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;

// console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
