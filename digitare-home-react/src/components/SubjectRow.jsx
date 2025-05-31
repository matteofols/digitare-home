import React from 'react';
import BookCard from './BookCard';

const SubjectRow = ({ subject, books }) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-[#2da397] mb-3 px-4">{subject}</h2>
      <div className="flex overflow-x-auto space-x-4 px-4 pb-2">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </div>
  );
};

export default SubjectRow;
