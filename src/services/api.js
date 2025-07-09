import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

<<<<<<< HEAD
=======
// Optional: You can handle global errors with interceptors
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328
API.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export const getPosts = () => API.get('/posts');
<<<<<<< HEAD
export const getPost = (id) => API.get(`/posts/${id}`); // ✅ FIXED
export const createPost = async (formData) => {
  const token = localStorage.getItem('token');
  return await axios.post(
    'http://localhost:5000/api/posts',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true
    }
  );
};
=======
export const getPost = (id) => API.get(`/posts/${id}`);
export const createPost = (data) => API.post('/posts', data);
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328
