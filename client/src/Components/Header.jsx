import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <h1>
            <span className="text-blue-600">Better</span>
            <span className="text-gray-800">Homes</span>
          </h1>
        </Link>

        <form className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search for a home"
            className="bg-transparent outline-none w-64"
          />
          <IoIosSearch className="text-gray-500 text-xl ml-2" />
        </form>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition duration-300"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

