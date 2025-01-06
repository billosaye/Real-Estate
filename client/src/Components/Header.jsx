import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">LuxuryHomes</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-secondary">Home</a>
            <a href="#" className="text-gray-600 hover:text-secondary">Properties</a>
            <a href="#" className="text-gray-600 hover:text-secondary">About</a>
            <a href="#" className="text-gray-600 hover:text-secondary">Contact</a>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-secondary">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-secondary">Properties</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-secondary">About</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-secondary">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}