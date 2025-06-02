import React, { useRef } from 'react';
import BookCard from './BookCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * @component SubjectRow
 * @description Displays a horizontal scrollable row of books for a single subject. Includes optional left/right scroll buttons on desktop screens.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @param {Object} props - Contains the subject name and array of book data
 * @returns {JSX.Element} A subject-specific row of book cards
 */

const SubjectRow = ({ subject, books }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const amount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mb-12 px-4 md:px-6">
      <h2 className="text-2xl font-bold text-[#2da397] mb-4">{subject}</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide"
        >
          <div className="flex space-x-4 w-max pr-6 pl-8">
            {books.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default SubjectRow;
