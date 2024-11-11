import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Use Heroicons v2 icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="p-4 bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative flex items-center">
          <div className="relative flex items-center">
            <h1 className="text-4xl font-bold text-gray-800 flex items-center">
              <span
                className="absolute rounded-full"
                style={{
                  width: '14.74px',
                  height: '14.55px',
                  backgroundColor: '#4D7EFF',
                  top: '25px',
                  left: '11.05px',
                }}
              ></span>
              <span className="relative z-10">L</span>
              <span className="text-gray-800" style={{ transform: 'translateY(5px)' }}>M</span>
              <span className="text-gray-800 z-10">S</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Link */}
        <div className="hidden lg:block">
          <Link href="/courses" className="text-blue-500 underline hover:text-blue-700 transition duration-300">
            Courses
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-500 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg rounded-lg mt-2">
          <Link href="/courses" className="block px-4 py-2 text-blue-500 hover:text-blue-700">
            Courses
          </Link>
          {/* Add more links here if needed */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
