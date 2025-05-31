import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2da397] text-white px-6 py-8 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold">Digitare</div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>

        {/* Copyright */}
        <div className="text-sm">&copy; {new Date().getFullYear()} Digitare. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
