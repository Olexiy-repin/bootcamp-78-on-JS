// https://unsplash.com/documentation
import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery, fetchRandomPhotos } from './unsplash-api';
import iziToast from 'izitoast';

const refs = {
  searcForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
  targetElement: document.querySelector('.js-target-element'),
};

let currentPage = 1;
let query = null;
let galleryCardHeight = null;

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 400px 0px',
  threshold: 1,
};

const observerCallback = async (entries, observer) => {
  if (entries[0].isIntersecting) {
    try {
      currentPage++;

      const { data } = await fetchPhotosByQuery(query, currentPage);

      const galleryCardsTemplate = data.results.map(imgInfo => createGalleryCardTemplate(imgInfo)).join('');

      refs.galleryList.insertAdjacentHTML('beforeend', galleryCardsTemplate);

      if (currentPage === data.total_pages) {
        observer.unobserve(refs.targetElement);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

const observerInstance = new IntersectionObserver(observerCallback, observerOptions);

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
      observerInstance.observe(refs.targetElement);
    }

    const galleryCardsTemplate = data.results.map(imgInfo => createGalleryCardTemplate(imgInfo)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;

    galleryCardHeight = refs.galleryList.querySelector('li').getBoundingClientRect().height;
  } catch (err) {
    console.log(err);
  }
};

refs.searcForm.addEventListener('submit', onSearchFormSubmit);
