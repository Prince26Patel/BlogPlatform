import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const BlogPreview = ({ imageSrc, title, excerpt, username, id }) => (
=======

const BlogPreview = ({ imageSrc, title, excerpt, author }) => (
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-5">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-3">{excerpt}</p>
<<<<<<< HEAD
      <p className="text-sm text-gray-400 mb-2">By {username}</p>
      <Link
        to={`/posts/${id}`}
        className="text-purple-600 font-medium hover:underline"
      >
        Read More →
      </Link>
=======
      <p className="text-sm text-gray-400">By {author}</p>
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328
    </div>
  </div>
);

export default BlogPreview;
