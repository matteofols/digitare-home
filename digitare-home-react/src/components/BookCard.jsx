import React from 'react';

/**
 * @component BookCard
 * @description Renders a single card displaying a textbook's image, title, subject, and price. Used within scrollable subject rows and featured sections.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @param {Object} props - Contains title, subject, price, and image URL for the book
 * @returns {JSX.Element} A formatted book card component
 */

const BookCard = ({ title, subject, price, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="min-w-[200px] max-w-[200px] bg-white rounded shadow-md overflow-hidden flex-shrink-0 transition hover:scale-105"
    >
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#2da397]">{title}</h3>
        <p className="text-sm text-gray-600">{subject}</p>
        <p className="text-sm text-gray-800 font-bold">{price}</p>
      </div>
    </a>
  );
};

export default BookCard;
