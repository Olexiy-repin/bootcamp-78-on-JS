// https://jsonplaceholder.typicode.com/
import { fetchPosts } from './jsonplaceholder-api';
import { createPostCardTemplate } from './render-functions';
import iziToast from 'izitoast';

const refs = {
  postsList: document.querySelector('.js-posts'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};

let currentPage = 1;

const renderPosts = async () => {
  try {
    const { data: posts } = await fetchPosts(currentPage);

    const postsCardsTemplate = posts.map(post => createPostCardTemplate(post)).join('');

    refs.postsList.innerHTML = postsCardsTemplate;

    refs.loadMoreBtn.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

renderPosts();

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;

    const { data: posts } = await fetchPosts(currentPage);

    if (posts.length === 0) {
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);

      iziToast.success({
        message: 'Постів більше немає!',
        position: 'topRight',
      });

      return;
    }

    const postsCardsTemplate = posts.map(post => createPostCardTemplate(post)).join('');

    refs.postsList.insertAdjacentHTML('beforeend', postsCardsTemplate);
  } catch (err) {
    console.log(err);
  }
};

refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
