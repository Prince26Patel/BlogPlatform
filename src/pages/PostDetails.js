import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../services/api';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await getPost(id);
        setPost(res.data);
      } catch (err) {
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!post) return <div className="text-center mt-10">Post not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto mt-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">{post.title}</h1>
      <p className="text-gray-800 whitespace-pre-line">{post.content}</p>
    </div>
  );
};

export default PostDetails;
