import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';
import FeaturedBooks from './components/FeaturedBooks';
import ContentSection from './components/ContentSection';
import Articles from './components/Articles';


/**
 * @component App
 * @description Root homepage component that assembles the primary sections including Navbar, Hero, FeaturedBooks, ContentSections, Articles, and Footer. Rendered at the '/' route and wrapped by Layout to persist nav/footer across the site.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @returns {JSX.Element} The full Digitare homepage layout
 */


function App() {

  return (
    <div>
      <Hero />
      <FeaturedBooks />
      <ContentSection 
        heading="Save Time, Save Money" 
        text="With Digitare, you don’t need to dig through old bookstore shelves or pay for overpriced PDFs. Everything’s free and just a click away."
        image="/images/libraryofbooks.jpg"
        imageLeft={false}
      />

      <ContentSection 
        heading="Made for Students, by Students" 
        text="We understand what it’s like to scramble for resources. That’s why we built Digitare — to make textbooks simple, fast, and accessible."
        image="/images/groupsstudying.jpg"
        imageLeft={true}
      />
      <Articles />
    </div>
  );
};

export default App;
