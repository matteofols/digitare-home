import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @component ArticleCard
 * @description Represents a single article card with an image, title, and short summary. Used within the Articles section.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @param {Object} props - Contains title, summary, and image URL
 * @returns {JSX.Element} An individual article preview card
 */

const ArticleCard = ({ title, summary, image, link, internal }) => {
  const CardContent = (
    <div className="block max-w-sm bg-white rounded-lg shadow hover:shadow-md transition hover:scale-105">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#2da397]">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{summary}</p>
      </div>
    </div>
  );

  return internal ? (
    <Link to={link}>{CardContent}</Link>
  ) : (
    <a href={link} target="_blank" rel="noopener noreferrer">{CardContent}</a>
  );
};

export default ArticleCard;
