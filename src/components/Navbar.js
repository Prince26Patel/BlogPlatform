import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-sm bg-white/70 border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-extrabold text-purple-700 tracking-tight">MyBlog</Link>

        {/* Toggle button (mobile) */}
        <button
          className="md:hidden text-purple-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-purple-700 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-purple-700 font-medium transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-gray-700 hover:text-purple-700 font-medium transition"
          >
            Signup
          </Link>
          <Link
            to="/create"
            className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition font-semibold"
          >
            Write
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 border-t border-gray-200 shadow">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-purple-700"
          >
            Home
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-purple-700"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-purple-700"
          >
            Signup
          </Link>
          <Link
            to="/create"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 font-semibold text-center"
          >
            Write
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
