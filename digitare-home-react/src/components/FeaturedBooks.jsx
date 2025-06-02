import React from 'react';
import books from '../data/books';
import BookCard from './BookCard';

/**
 * @component FeaturedBooks
 * @description Displays a section of featured book cards pulled from a static dataset to promote key resources on the homepage.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @returns {JSX.Element} The featured books section component
 */


const FeaturedBooks = () => {
  return (
    <section className="px-6 py-12 bg-[#f9f9f9]">
      <h2 className="text-2xl font-bold text-center text-[#2da397] mb-6">Featured Books</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
