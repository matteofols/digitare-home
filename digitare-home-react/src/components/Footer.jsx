import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @component Footer
 * @description Displays the bottom section of the page with links to About and Contact pages and site branding. Persistent across all pages.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @returns {JSX.Element} The footer component
 */


const Footer = () => {
  return (
    <footer className="bg-[#2da397] text-white px-6 py-8 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold">Digitare</div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Copyright */}
        <div className="text-sm">&copy; {new Date().getFullYear()} Digitare. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
