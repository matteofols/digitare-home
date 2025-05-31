import React from 'react';

const ContentSection = ({ heading, text, bgColor = 'white' }) => {
  return (
    <section className={`px-6 py-10 bg-${bgColor}`}>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold text-[#2da397] mb-4">{heading}</h2>
        <p className="text-gray-700">{text}</p>
      </div>
    </section>
  );
};

export default ContentSection;
