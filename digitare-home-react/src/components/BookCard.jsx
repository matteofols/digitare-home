import React from 'react';

const BookCard = ({ title, subject, price, image }) => {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden w-full sm:w-64">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#2da397]">{title}</h3>
        <p className="text-sm text-gray-600">{subject}</p>
        <p className="text-sm text-gray-800 font-bold">{price}</p>
      </div>
    </div>
  );
};

export default BookCard;
