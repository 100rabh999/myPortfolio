import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a href="#" className="navbar-brand">
          <span className="brand-bracket mono">&lt;</span>
          Saurabh Singh
          <span className="brand-bracket mono"> /&gt;</span>
        </a>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#contact" className="navbar-cta" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};
