/*
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://symbl.cc/en/unicode-table/)
 */

// const numbers = [1, 9, 10, 6, 20, 2, 3];
// const sortedNumbers = numbers.toSorted();

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const letters = ['b', 'd', 'a', 'c', 'X'];
// const sortedLetters = letters.toSorted();

// console.log('letters: ', letters);
// console.log('sortedLetters: ', sortedLetters);

/*
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// const numbers = [1, 6, 2, 3, 9, 10, 22, 34];
// const sortedNumbers = numbers.toSorted((currentEl, nextEl) => {
//   return currentEl - nextEl;
// });

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const letters = ['b', 'd', 'a', 'c', 'X', 'Y', 'A'];
// const sortedLetters = letters.toSorted((currentEl, nextEl) => {
//   return nextEl.localeCompare(currentEl);
// });

// console.log('letters:', letters);
// console.log('sortedLetters:', sortedLetters);

// console.log('a'.localeCompare('b'));
// console.log('b'.localeCompare('a'));
// console.log('a'.localeCompare('a'));

// console.log('a'.localeCompare('B'));
// console.log('a' < 'B');

/*
 * Сортування масиву об'єктів
 */

// const players = [
//   { id: 'player-1', name: 'Poly', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Mango', timePlayed: 470, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// console.table(players);

// TODO: За ігровим часом
// const sortedByBestPlayers = players.toSorted((currentEl, nextEl) => {
//   return nextEl.timePlayed - currentEl.timePlayed;
// });

// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = players.toSorted((currentEl, nextEl) => {
//   return currentEl.timePlayed - nextEl.timePlayed;
// });

// console.table(sortedByWorstPlayers);

// TODO: За іменем
// const byName = players.toSorted((currentEl, nextEl) => {
//   return currentEl.name.localeCompare(nextEl.name);
// });

// console.table(byName);
