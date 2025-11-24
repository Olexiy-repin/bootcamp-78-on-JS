import { getAllPosts, createNewPost, deletePostById } from './mockapi';
import { createPostCardTemplate } from './render-functions';
import iziToast from 'izitoast';

const refs = {
  postForm: document.querySelector('.js-post-form'),
  postsList: document.querySelector('.js-posts-list'),
};

const renderPosts = async () => {
  try {
    const { data: postsArr } = await getAllPosts();

    const postsCardsTemplate = postsArr.map(post => createPostCardTemplate(post)).join('');

    refs.postsList.innerHTML = postsCardsTemplate;
  } catch (err) {
    console.log(err);
  }
};

renderPosts();

const onPostFormSubmit = async event => {
  try {
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

    const { data: post } = await createNewPost(newPost);

    postForm.reset();

    iziToast.success({
      message: `${post.post_title} було успішно додано!`,
      position: 'topRight',
    });

    renderPosts();
  } catch (err) {
    console.log(err);
  }
};

const onPostDeleteBtnClick = async event => {
  try {
    const deleteBtn = event.target.closest('.js-post-delete-btn');

    if (deleteBtn === null) {
      return;
    }

    const postId = deleteBtn.dataset.postId;

    const { data: post } = await deletePostById(postId);

    iziToast.success({
      message: `${post.post_title} було успішно видалено!`,
      position: 'topRight',
    });

    renderPosts();
  } catch (err) {
    console.log(err);
  }
};

refs.postForm.addEventListener('submit', onPostFormSubmit);
refs.postsList.addEventListener('click', onPostDeleteBtnClick);
