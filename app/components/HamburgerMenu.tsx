'use client'
import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 right-0 w-60 z-50 h-full md:hidden">
      <button className="p-4" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`absolute top-0 right-0 w-full h-full bg-red-500 transform transition-transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-0 left-0 p-4" onClick={closeMenu}>
          &times;
        </button>
        <ul className="p-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;