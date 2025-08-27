'use client';

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  return (
    <header className="bg-blue-600 dark:bg-blue-800 text-white shadow-lg relative" role="banner">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-bold">21963056</span>
            <h1 className="text-xl font-semibold">LTU MOODLE LMS Components</h1>
          </div>
          
          {/* Desktop Navigation and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6" role="navigation" aria-label="Main navigation">
              <Link 
                href="/" 
                className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded px-1 py-1"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded px-1 py-1"
              >
                About
              </Link>
              <Link 
                href="/components" 
                className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded px-1 py-1"
              >
                Components
              </Link>
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              onClick={toggleMenu}
              onKeyDown={handleKeyDown}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
          aria-hidden={!isMenuOpen}
        >
          <nav className="py-4 space-y-3 border-t border-blue-500 mt-3" role="navigation" aria-label="Mobile navigation">
            <Link 
              href="/" 
              className="block py-2 px-4 hover:bg-blue-700 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block py-2 px-4 hover:bg-blue-700 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="/components" 
              className="block py-2 px-4 hover:bg-blue-700 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              onClick={closeMenu}
            >
              Components
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
