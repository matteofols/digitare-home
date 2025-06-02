import React from 'react';

const BookCard = ({ title, subject, price, image }) => {
  return (
    <div className="min-w-[200px] max-w-[200px] flex-shrink-0 bg-white rounded shadow overflow-hidden">
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
