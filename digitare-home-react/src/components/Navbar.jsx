import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-[#2da397]">Digitare</div>
      <ul className="flex space-x-6 font-medium text-gray-700">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/subjects">Subjects</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;