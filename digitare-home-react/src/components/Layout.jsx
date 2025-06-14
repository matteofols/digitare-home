import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col bg-white'>
      <Navbar />
      <main className='flex-grow w-full'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
