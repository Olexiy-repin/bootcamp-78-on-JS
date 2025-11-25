import axios from 'axios';

const refs = {
  loader: document.querySelector('.js-loader'),
};

axios.defaults.baseURL = 'https://api.unsplash.com';

const requestParamsDefaults = {
  orientation: 'portrait',
  client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
};

export const fetchPhotosByQuery = (searchedQuery, currentPage) => {
  const requestParams = {
    ...requestParamsDefaults,
    query: searchedQuery,
    color: 'black_and_white',
    page: currentPage,
    per_page: 12,
  };

  return axios.get('/search/photos', { params: requestParams }).finally(() => {
    refs.loader.classList.add('is-hidden');
  });
};

export const fetchRandomPhotos = () => {
  const requestParams = {
    ...requestParamsDefaults,
    count: 12,
  };

  return axios.get('/photos/random', { params: requestParams });
};
