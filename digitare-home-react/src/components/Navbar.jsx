import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @component Navbar
 * @description Renders the top navigation bar with site logo and links to major pages. Responsive and persistent across all routes.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @returns {JSX.Element} The navigation bar component
 */


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-4">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/finallogo.png" alt="Digitare Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-[#2da397]">Digitare</span>
        </Link>
        <ul className="flex flex-wrap justify-end gap-4 font-medium text-gray-700 text-sm sm:text-base">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/subjects">Subjects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Log In</Link></li>
        </ul>
    </div>
</nav>
  );
};

export default Navbar;
