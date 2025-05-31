import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import FeaturedBooks from './components/FeaturedBooks';
import ContentSection from './components/ContentSection';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedBooks />
      <ContentSection 
        heading="Save Time, Save Money" 
        text="With Digitare, you don’t need to dig through old bookstore shelves or pay for overpriced PDFs. Everything’s free and just a click away."
        bgColor="gray-100"
      />
      <ContentSection 
        heading="Made for Students, by Students" 
        text="We understand what it’s like to scramble for resources. That’s why we built Digitare — to make textbooks simple, fast, and accessible."
      />
    </div>
  );

 
}

export default App;
