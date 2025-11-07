/*
 * Подія сlick
 *
 * - Іменування колбеків для слухачів
 * - handle*: handleSubjectEvent
 * - *Handler: subjectEventHandler
 * - on*: onSubjectEvent
 */

/*
TODO: Натискаючи на кнопку "Click me" змусь
TODO: червоний квадрат зміщуватись на 50px по діагоналі
*/
const refs = {
  clickBtn: document.querySelector('.js-click'),
  box: document.querySelector('.js-box'),
  resetBtn: document.querySelector('.js-reset'),
};

console.log(refs);

let step = 0;

const onBtnClick = () => {
  step += 50;

  refs.box.style.transform = `translate(${step}px, ${step}px)`;

  if (step === 200) {
    refs.clickBtn.removeEventListener('click', onBtnClick);
  }
};

const onResetBtnClick = () => {
  if (step === 0) {
    return;
  }

  if (step === 200) {
    refs.clickBtn.addEventListener('click', onBtnClick);
  }

  step = 0;

  refs.box.style.transform = `translate(${step}px, ${step}px)`;
};

refs.clickBtn.addEventListener('click', onBtnClick);
refs.resetBtn.addEventListener('click', onResetBtnClick);
