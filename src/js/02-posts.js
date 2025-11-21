import { getAllPosts, createNewPost, deletePostById } from './mockapi';
import { createPostCardTemplate } from './render-functions';
import iziToast from 'izitoast';

const refs = {
  postForm: document.querySelector('.js-post-form'),
  postsList: document.querySelector('.js-posts-list'),
};

const renderPosts = () => {
  getAllPosts()
    .then(({ data: postsArr }) => {
      const postsCardsTemplate = postsArr
        .map(post => createPostCardTemplate(post))
        .join('');

      refs.postsList.innerHTML = postsCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

renderPosts();

const onPostFormSubmit = event => {
  event.preventDefault();

  const { target: postForm } = event;

  const newPost = {
    post_title: postForm.elements.post_title.value.trim(),
    post_body: postForm.elements.post_body.value.trim(),
  };

  const newPostValues = Object.values(newPost);

  if (newPostValues.includes('')) {
    iziToast.warning({
      message: 'Усі поля мають бути заповнені!',
      position: 'topRight',
    });

    return;
  }

  createNewPost(newPost)
    .then(({ data: post }) => {
      postForm.reset();

      iziToast.success({
        message: `${post.post_title} було успішно додано!`,
        position: 'topRight',
      });

      renderPosts();
    })
    .catch(err => {
      console.log(err);
    });
};

const onPostDeleteBtnClick = event => {
  const deleteBtn = event.target.closest('.js-post-delete-btn');

  if (deleteBtn === null) {
    return;
  }

  const postId = deleteBtn.dataset.postId;

  deletePostById(postId)
    .then(({ data: post }) => {
      iziToast.success({
        message: `${post.post_title} було успішно видалено!`,
        position: 'topRight',
      });

      renderPosts();
    })
    .catch(err => {
      console.log(err);
    });
};

refs.postForm.addEventListener('submit', onPostFormSubmit);
refs.postsList.addEventListener('click', onPostDeleteBtnClick);
