// src/Navbar.js
import React, { useState } from 'react';
import './styles.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
         
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">MyApp</a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item dropdown">
            <a href="/services" className="navbar-link">Services</a>
            <ul className="dropdown-menu">  
              <li><a href="/web-design" className="dropdown-link">Web Design</a></li>
              <li><a href="/seo" className="dropdown-link">SEO</a></li>
              <li><a href="/marketing" className="dropdown-link">Marketing</a></li>
            </ul>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
