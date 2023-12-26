'use client'
import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md focus:outline-none"
      >
        Dropdown
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 z-10 bg-white shadow-md">
          {/* Dropdown items go here */}
          <p>ghbfg</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
