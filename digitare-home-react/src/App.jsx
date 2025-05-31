import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import FeaturedBooks from './components/FeaturedBooks';
import ContentSection from './components/ContentSection';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default App;
