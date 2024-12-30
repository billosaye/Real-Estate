import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* Logo/Brand Section */}
        <Link to="/" className="font-bold text-sm sm:text-xl flex flex-wrap">
          <h1>
            <span className="text-blue-600">Better</span>
            <span className="text-gray-800">Homes</span>
          </h1>
        </Link>

        {/* Search Bar Section */}
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <IoIosSearch className="text-slate-600" />
        </form>

        {/* Desktop Navigation Section */}
        <nav className="hidden sm:flex items-center gap-4">
          <Link 
            to="/"
            className="text-slate-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-slate-700 hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </nav>

        {/* Mobile Menu Button - Only visible on small screens */}
        <button className="sm:hidden text-slate-700">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

