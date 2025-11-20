// https://unsplash.com/documentation
// N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg

/*
<li class="gallery-card">
  <img class="gallery-img" src="" alt="" />
</li>
*/

import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery } from './unsplash-api';
import iziToast from 'izitoast';

const refs = {
  searcForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
};

const onSearchFormSubmit = event => {
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

  fetchPhotosByQuery(query)
    .finally(() => {
      refs.loader.classList.add('is-hidden');
    })
    .then(data => {
      const galleryCardsTemplate = data.results
        .map(imgInfo => createGalleryCardTemplate(imgInfo))
        .join('');

      refs.galleryList.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

refs.searcForm.addEventListener('submit', onSearchFormSubmit);
