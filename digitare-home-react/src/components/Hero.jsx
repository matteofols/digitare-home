import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-6 py-10 bg-[#f4f4f4]">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-4xl font-bold text-[#2da397] mb-4">Get Free College Textbooks</h1>
        <p className="text-gray-700 mb-6">
          Explore a curated selection of free textbooks for your courses, powered by OpenStax.
        </p>
        <button className="bg-[#2da397] text-white px-5 py-2 rounded hover:bg-[#238f84] transition">
          Browse Books
        </button>
      </div>
      <div className="md:w-1/2">
        <img src="/images/libraryofbooks.jpg" alt="Books" className="w-full rounded shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;