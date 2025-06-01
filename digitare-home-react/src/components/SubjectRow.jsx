import React, { useRef } from 'react';
import BookCard from './BookCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SubjectRow = ({ subject, books }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const amount = 300; // pixels to scroll per click
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mb-12 relative">
      <h2 className="text-2xl font-bold text-[#2da397] mb-3 px-4">{subject}</h2>

      {/* Scroll Arrows */}
      <button
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-2 top-[55%] z-10 p-2 bg-white shadow rounded-full hover:bg-gray-200 transition"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-2 top-[55%] z-10 p-2 bg-white shadow rounded-full hover:bg-gray-200 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scrollable Row */}
      <div ref={scrollRef} className="overflow-x-auto px-6 scrollbar-hide">
        <div className="flex space-x-4 w-max">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectRow;
