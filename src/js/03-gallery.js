// https://unsplash.com/documentation

import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery, fetchRandomPhotos } from './unsplash-api';
import iziToast from 'izitoast';

const refs = {
  searcForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
};

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

    const query = searchForm.elements.user_query.value.trim();

    if (query === '') {
      iziToast.warning({
        message: 'Поле для пошуку має бути заповненим!',
        position: 'topRight',
      });

      return;
    }

    refs.galleryList.innerHTML = '';
    refs.loader.classList.remove('is-hidden');

    const { data } = await fetchPhotosByQuery(query);

    const galleryCardsTemplate = data.results.map(imgInfo => createGalleryCardTemplate(imgInfo)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;
  } catch (err) {
    console.log(err);
  }
};

refs.searcForm.addEventListener('submit', onSearchFormSubmit);
