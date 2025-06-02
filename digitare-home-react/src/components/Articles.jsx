import React from 'react';
import ArticleCard from './ArticleCard';
import articleData from '../data/articleData';

/**
 * @component Articles
 * @description Displays a grid of article cards summarizing educational content, stories, or updates. Positioned at the bottom of the homepage.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @returns {JSX.Element} A list of articles with previews
 */

const Articles = () => {
  return (
    <section className="px-6 py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-center text-[#2da397] mb-6">Latest Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articleData.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
