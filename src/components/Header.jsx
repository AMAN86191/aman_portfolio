// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          Shivam.dev
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/projects" className="hover:text-indigo-600">Projects</Link>
          {/* <Link to="/contact" className="hover:text-indigo-600">Contact</Link> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-indigo-600 focus:outline-none"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2 text-gray-700 font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">About</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">Projects</Link>
            {/* <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">Contact</Link> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
