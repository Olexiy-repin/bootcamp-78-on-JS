/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const refs = {
  parent: document.querySelector('.js-parent'),
  child: document.querySelector('.js-child'),
  innerChild: document.querySelector('.js-inner-child'),
};

console.log(refs);

refs.parent.addEventListener('click', event => {
  console.group('Hello from parent div!');
  console.log('event.target:', event.target);
  console.log('event.currentTarget:', event.currentTarget);
  console.groupEnd();
});

refs.child.addEventListener('click', event => {
  console.group('Hello from child div!');
  console.log('event.target:', event.target);
  console.log('event.currentTarget:', event.currentTarget);
  console.groupEnd();
});

refs.innerChild.addEventListener('click', event => {
  console.group('Hello from inner-child div!');
  console.log('event.target:', event.target);
  console.log('event.currentTarget:', event.currentTarget);
  console.groupEnd();
});
