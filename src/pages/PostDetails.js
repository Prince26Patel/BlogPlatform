import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import axios from 'axios';

const PostDetails = () => {
  const { id } = useParams(); // Get post ID from URL
=======
import { getPost } from '../services/api';

const PostDetails = () => {
  const { id } = useParams();
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
<<<<<<< HEAD
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
=======
        const res = await getPost(id);
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328
        setPost(res.data);
      } catch (err) {
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

<<<<<<< HEAD
  if (loading) {
    return <div className="text-center mt-10 text-purple-600">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center mt-10 text-red-600">Post not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">by {post.username}</p>

      {post.imageUrl && (
        <img
          src={`http://localhost:5000${post.imageUrl}`}
          alt={post.title}
          className="w-full h-80 object-cover rounded mb-6"
        />
      )}

      <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">{post.content}</div>
=======
  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!post) return <div className="text-center mt-10">Post not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto mt-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">{post.title}</h1>
      <p className="text-gray-800 whitespace-pre-line">{post.content}</p>
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328
    </div>
  );
};

export default PostDetails;
