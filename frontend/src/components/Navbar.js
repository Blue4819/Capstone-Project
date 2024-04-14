// Navbar.js
import React from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'rgba(235, 223, 206, 1)' }}>
      <div className="navbar-content">
        <div>Holidate</div>
        <img src={logo} alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
