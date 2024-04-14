import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src="logo.png" alt="Company Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/pageone">Page One</a></li>
          <li><a href="/pagetwo">Page Two</a></li>
          <li><a href="/pagethree">Page Three</a></li>
          <li><a href="/pagefour">Page Four</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;