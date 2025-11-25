// https://unsplash.com/documentation
import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery, fetchRandomPhotos } from './unsplash-api';
import iziToast from 'izitoast';

const refs = {
  searcForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
};

console.log(refs.searcForm.getBoundingClientRect());

let currentPage = 1;
let query = null;
let galleryCardHeight = null;

const renderRandomPhotos = async () => {
  try {
    const { data } = await fetchRandomPhotos();

    const galleryCardsTemplate = data.map(imgInfo => createGalleryCardTemplate(imgInfo)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;
  } catch (err) {
    console.log(err);
  }
};

renderRandomPhotos();

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    const { target: searchForm } = event;

    query = searchForm.elements.user_query.value.trim();

    if (query === '') {
      iziToast.warning({
        message: 'Поле для пошуку має бути заповненим!',
        position: 'topRight',
      });

      return;
    }

    refs.galleryList.innerHTML = '';
    refs.loader.classList.remove('is-hidden');
    refs.loadMoreBtn.classList.add('is-hidden');
    currentPage = 1;

    const { data } = await fetchPhotosByQuery(query, currentPage);

    if (data.total_pages === 0) {
      iziToast.error({
        message: 'Зображень не знайдено!',
        position: 'topRight',
      });

      return;
    }

    if (data.total_pages > 1) {
      refs.loadMoreBtn.classList.remove('is-hidden');
      refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
    }

    const galleryCardsTemplate = data.results.map(imgInfo => createGalleryCardTemplate(imgInfo)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;

    galleryCardHeight = refs.galleryList.querySelector('li').getBoundingClientRect().height;
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;

    const { data } = await fetchPhotosByQuery(query, currentPage);

    const galleryCardsTemplate = data.results.map(imgInfo => createGalleryCardTemplate(imgInfo)).join('');

    refs.galleryList.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    scrollBy({
      top: galleryCardHeight * 2,
      behavior: 'smooth',
    });

    if (currentPage === data.total_pages) {
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
    }
  } catch (err) {
    console.log(err);
  }
};

refs.searcForm.addEventListener('submit', onSearchFormSubmit);
