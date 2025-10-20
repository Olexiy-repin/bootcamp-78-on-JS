/*
TODO: У змінній minutes лежить число від 0 до 59.
TODO: Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
TODO: [0 до 15) - перша чверть години
TODO: [15 до 30) - друга чверть години
TODO: [30 до 45) - третя чверть години
TODO: [45 до 60) - четверта чверть години
*/

// const minutes = 50;

// if (minutes >= 0 && minutes < 15) {
//   console.log('Перша чверть години!');
// } else if (minutes >= 15 && minutes < 30) {
//   console.log('Друга чверть години!');
// } else if (minutes >= 30 && minutes < 45) {
//   console.log('Третя чверть години!');
// } else if (minutes >= 45 && minutes < 60) {
//   console.log('Четверта чверть години!');
// }

/*
TODO: Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 та 3'));

// switch (number) {
//   case 0: {
//     console.log('Ви ввели число 0');

//     break;
//   }

//   case 1: {
//     console.log('Ви ввели число 1');

//     break;
//   }

//   case 2:
//   case 3: {
//     console.log('Ви ввели число 2, а може й 3');

//     break;
//   }

//   default: {
//     console.log('Ви ввели якесь інше число');
//   }
// }

// if (number === 0) {
//   console.log('Ви ввели число 0');
// } else if (number === 1) {
//   console.log('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   console.log('Ви ввели число 2, а може й 3');
// } else {
//   console.log('Ви ввели якесь інше число');
// }

/*
TODO: Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
TODO: Для цього, користувач має бути:
TODO: - другом
TODO: - онлайн
TODO: - без режима не турбувати
 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// let canOpenChat = isOnline && isFriend && !isDnd;

// console.log('Чи можна відкрити чат? ', canOpenChat);

/*
TODO: Напиши скрипт перевірки підписки користувача при доступі до контента
TODO: - Є три типа підписки: free, pro і vip.
TODO: - Отримати доступ можуть тільки користувачі pro або vip
 */

// const sub = 'vip';
// const canAccessContent = sub === 'pro' || sub === 'vip';

// console.log('Чи є доступ до контенту?', canAccessContent);
