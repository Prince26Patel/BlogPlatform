import React from 'react';

const BlogPreview = ({ imageSrc, title, excerpt, author }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-5">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-3">{excerpt}</p>
      <p className="text-sm text-gray-400">By {author}</p>
    </div>
  </div>
);

export default BlogPreview;
