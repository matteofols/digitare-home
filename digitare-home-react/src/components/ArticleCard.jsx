import React from 'react';

const ArticleCard = ({ title, summary, image }) => {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#2da397] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{summary}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
