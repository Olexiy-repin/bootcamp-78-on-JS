/*
 * Оператор switch
 */

/*
TODO: Виконай рефакторинг коду задачі використовуючи switch.
TODO:
TODO: Якщо до дедлайну 0 днів - виведи рядок "Today"
TODO: Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
TODO: Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
TODO: В усіх інших випадках - виведи рядок "Date in the future"
 */

// const daysUntilDeadline = 3;

// switch (daysUntilDeadline) {
//   case 0: {
//     console.log('Today');

//     break;
//   }

//   case 1: {
//     console.log('Tomorrow');

//     break;
//   }

//   case 2: {
//     console.log('Overmorrow');

//     break;
//   }

//   default: {
//     console.log('Date in the future');
//   }
// }

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else {
//   console.log('Date in the future');
// }

/*
TODO: Напиши скрипт вибору опції доставки товара.
TODO: Опція зберігається в змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
TODO:
TODO: В змінну message записати повідомлення в залежності від опції.
TODO: - 'Ви можете забрати товар завтра з 12:00 в нашому офісі'
TODO: - 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
TODO: - 'Посилку буде відправлено сьогодні'
TODO: - 'Вам передзвонить менеджер'
 */

// const option = 0;
// let message = '';

// switch (option) {
//   case 1: {
//     message = 'Ви можете забрати товар завтра з 12:00 в нашому офісі';

//     break;
//   }

//   case 2: {
//     message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";

//     break;
//   }

//   case 3: {
//     message = 'Посилку буде відправлено сьогодні';

//     break;
//   }

//   default: {
//     message = 'Вам передзвонить менеджер';
//   }
// }

// console.log(message);
