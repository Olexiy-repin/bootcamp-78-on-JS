import axios from 'axios';

export const getAllPosts = () => {
  return axios.get('https://6920354331e684d7bfcc18d6.mockapi.io/posts');
};

export const createNewPost = post => {
  return axios.post('https://6920354331e684d7bfcc18d6.mockapi.io/posts', post);
};

export const deletePostById = postId => {
  return axios.delete(
    `https://6920354331e684d7bfcc18d6.mockapi.io/posts/${postId}`
  );
};
