import React from 'react';
import logoImage from '../photos/logo.png';

const Navbar = () => {
  return (
    <div className="bg-[#EBDFCE] py-4 px-9 flex items-center justify-between rounded-full">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src={logoImage} alt="Holidate" className="h-20 w-50 rounded-l" />
      </a>
      {/* Navigation */}
      <nav className="flex items-center text-semi-bold text-lg">
        <a href="/login" className="hover:underline">Login</a>
      </nav>
    </div>
  );
};

export default Navbar;