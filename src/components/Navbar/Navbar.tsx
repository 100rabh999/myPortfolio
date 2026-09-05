import React from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a href="#" className="navbar-brand">Saurabh Singh</a>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="navbar-cta">Contact</a>
        </div>
      </div>
    </nav>
  );
};
