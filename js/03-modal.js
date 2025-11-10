const refs = {
  backdrop: document.querySelector('.js-backdrop'),
  modalOpenBtn: document.querySelector('.js-modal-open'),
  modalCloseBtn: document.querySelector('.js-modal-close'),
};

const closeModal = () => {
  refs.backdrop.classList.remove('is-open');

  refs.modalCloseBtn.removeEventListener('click', onModalCloseBtnClick);
  refs.backdrop.removeEventListener('click', onBackdropClick);
  document.removeEventListener('keydown', onEscPress);
};

const onModalOpenBtnClick = event => {
  refs.backdrop.classList.add('is-open');

  refs.modalCloseBtn.addEventListener('click', onModalCloseBtnClick);
  refs.backdrop.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscPress);
};

const onModalCloseBtnClick = event => {
  closeModal();
};

const onBackdropClick = event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

const onEscPress = event => {
  if (event.code === 'Escape') {
    closeModal();
  }
};

refs.modalOpenBtn.addEventListener('click', onModalOpenBtnClick);
