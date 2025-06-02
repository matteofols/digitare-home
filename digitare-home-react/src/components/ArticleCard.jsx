import React from 'react';

/**
 * @component ArticleCard
 * @description Represents a single article card with an image, title, and short summary. Used within the Articles section.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @param {Object} props - Contains title, summary, and image URL
 * @returns {JSX.Element} An individual article preview card
 */

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
