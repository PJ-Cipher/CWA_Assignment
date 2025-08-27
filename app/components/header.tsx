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
    <header className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg relative" role="banner">
      <div className="container mx-auto px-4 py-3">
        {/* Top Section - Title and Student Number */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1"></div>
          <h1 className="text-2xl font-bold text-center flex-1">Title</h1>
          <div className="flex-1 text-right">
            <span className="text-lg font-semibold">Student No.</span>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
          <div className="flex items-center justify-between">
            <nav className="flex space-x-6" role="navigation" aria-label="Main navigation">
              <Link 
                href="/components" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1 border-b-2 border-black dark:border-white"
              >
                Tabs
              </Link>
              <span className="text-gray-400">|</span>
              <Link 
                href="/pre-lab" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
              >
                Pre-lab Questions
              </Link>
              <span className="text-gray-400">|</span>
              <Link 
                href="/escape-room" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
              >
                Escape Room
              </Link>
              <span className="text-gray-400">|</span>
              <Link 
                href="/coding-races" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
              >
                Coding Races
              </Link>
              <span className="text-gray-400">|</span>
              <Link 
                href="/about" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
              >
                About
              </Link>
            </nav>

            {/* Right Side - Dark Mode Toggle and Hamburger */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={toggleMenu}
                onKeyDown={handleKeyDown}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  {/* Enhanced CSS Transform Hamburger Icon */}
                  <span 
                    className={`block w-5 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out transform origin-center ${
                      isMenuOpen 
                        ? 'rotate-45 translate-y-0.5 scale-x-110' 
                        : '-translate-y-1.5 scale-x-100'
                    }`}
                  ></span>
                  <span 
                    className={`block w-5 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out transform origin-center ${
                      isMenuOpen 
                        ? 'opacity-0 scale-x-0 rotate-180' 
                        : 'opacity-100 scale-x-100 rotate-0'
                    }`}
                  ></span>
                  <span 
                    className={`block w-5 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out transform origin-center ${
                      isMenuOpen 
                        ? '-rotate-45 -translate-y-0.5 scale-x-110' 
                        : 'translate-y-1.5 scale-x-100'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-4'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <nav className="py-4 space-y-3 border-t border-gray-200 dark:border-gray-600 mt-3" role="navigation" aria-label="Mobile navigation">
            <Link 
              href="/components" 
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={closeMenu}
            >
              🧩 Tabs
            </Link>
            <Link 
              href="/pre-lab" 
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={closeMenu}
            >
              ❓ Pre-lab Questions
            </Link>
            <Link 
              href="/escape-room" 
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={closeMenu}
            >
              🚪 Escape Room
            </Link>
            <Link 
              href="/coding-races" 
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={closeMenu}
            >
              🏁 Coding Races
            </Link>
            <Link 
              href="/about" 
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={closeMenu}
            >
              ℹ️ About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
