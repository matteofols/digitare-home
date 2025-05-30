import React from "react";

const Navbar = () => {
    return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-[#2da397]">Digitare</div>
      <ul className="flex space-x-6 font-medium text-gray-700">
        <li><a href="#">Home</a></li>
        <li><a href="#">Subjects</a></li>
        <li><a href="#">Log In</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;