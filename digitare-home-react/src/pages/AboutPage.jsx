import React from 'react';

const AboutPage = () => {
  return (
    <section className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2da397] mb-6">About Digitare</h1>
        <p className="text-gray-700 text-lg leading-7">
          Digitare is a student-focused platform that simplifies access to free college textbooks.
          Created by students who understand the struggle of finding affordable resources, our mission is
          to eliminate barriers to quality education.
        </p>
        <p className="text-gray-700 text-lg leading-7 mt-4">
          Powered by OpenStax and driven by community, Digitare is more than a website — it's a
          movement to make learning more equitable for everyone.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
