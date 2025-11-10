/*
 * Додавання прослуховувача подій на кожен елемент
 */

// TODO: Отримай колір квадрата по якому було здійснено клік
// const refs = {
//   redBox: document.querySelector('.js-red-box'),
//   blackBox: document.querySelector('.js-black-box'),
//   greenBox: document.querySelector('.js-green-box'),
// };

// console.log(refs);

// refs.redBox.addEventListener('click', event => {
//   console.log(refs.redBox.dataset.bgColor);
// });

// refs.blackBox.addEventListener('click', event => {
//   console.log(refs.blackBox.dataset.bgColor);
// });

// refs.greenBox.addEventListener('click', event => {
//   console.log(refs.greenBox.dataset.bgColor);
// });

/*
 ~ Дегегування подій
 */

// TODO: Отримай колір квадрата по якому було здійснено клік
const refs = {
  container: document.querySelector('.js-container'),
};

refs.container.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    return;
  }

  console.log(event.target.dataset.bgColor);
});
