/*
TODO: Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
TODO: рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
TODO: то виводь рядок "14 г.", без хвилин.
 */

//~ 1 Варіант
// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes === 0) {
//   timestring = `${hours} г.`;
// } else {
//   timestring = `${hours} г. ${minutes} хв.`;
// }

// console.log(timestring);

//~ 2 Варіант
// const hours = 14;
// const minutes = 26;
// const timestring = minutes === 0 ? `${hours} г.` : `${hours} г. ${minutes} хв.`;

// console.log(timestring);

/*
TODO: Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
TODO:
TODO: Якщо до дедлайну 0 днів - виведи рядок "Today"
TODO: Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
TODO: Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
TODO: Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const daysUntilDeadline = 0;

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else if (daysUntilDeadline >= 3) {
//   console.log('Date in the future');
// }
