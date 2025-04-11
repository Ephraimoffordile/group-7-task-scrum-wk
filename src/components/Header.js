import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src="/Clicilink logo.png" alt="CivicLink Logo" className="logo" />
      <nav className="nav">
        <a href="/" className="nav-link">Home</a>
        <a href="/representatives" className="nav-link">Find Representatives</a>
        <a href="/offices" className="nav-link">Government Offices</a>
        <a href="/about" className="nav-link">About</a>
      </nav>
    </header>
  );
}

export default Header;