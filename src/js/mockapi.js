import axios from 'axios';

axios.defaults.baseURL = 'https://6920354331e684d7bfcc18d6.mockapi.io';

export const getAllPosts = () => {
  return axios.get('/posts');
};

export const createNewPost = post => {
  return axios.post('/posts', post);
};

export const deletePostById = postId => {
  return axios.delete(`/posts/${postId}`);
};
