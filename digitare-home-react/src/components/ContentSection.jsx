import React from 'react';

/**
 * @component ContentSection
 * @description Reusable section with text and image side-by-side. Can be flipped left/right using a prop for layout variation.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @param {Object} props - Includes heading, text, image URL, and layout direction (imageLeft)
 * @returns {JSX.Element} The image-text content block component
 */

const ContentSection = ({ heading, text, image, imageLeft = false, bgColor = 'white' }) => {
  return (
    <section className={`px-6 py-10 bg-${bgColor}`}>
      <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 ${
    imageLeft ? 'md:flex-row-reverse' : ''
  }`}>
        <div className="md:w-1/2">
          <img src={image} alt={heading} className="w-full rounded shadow-md" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#2da397] mb-4">{heading}</h2>
          <p className="text-gray-700 text-lg">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
