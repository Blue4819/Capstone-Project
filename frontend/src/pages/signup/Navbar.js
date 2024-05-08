import React from 'react';
import logoImage from '../photos/logo.png';

const Navbar = () => {
  return (
    <div className="mb-8"> {/* Added margin bottom (mb) for space after the navbar */}
      {/* Header */}
      <header className="bg-[#EBDFCE] py-4 px-9 flex items-center justify-between rounded-full">
        {/* Logo */}
        <img src={logoImage} alt="Holidate" className="h-20 object-scale-down rounded-l" /> {/* Added object-scale-down class */}
        {/* Navigation */}
        <nav className="flex items-center text-semi-bold text-lg">
          <a href="/login" className="hover:underline">Login</a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
