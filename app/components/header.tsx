'use client';

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleActivities = () => {
    setIsActivitiesOpen(!isActivitiesOpen);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg relative border-b border-gray-700" role="banner">
      <div className="container mx-auto px-4 py-3">
        {/* Top Section - Student Number */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-white text-lg font-semibold">
            21963056
          </div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex items-center justify-between">
            <nav className="flex space-x-6" role="navigation" aria-label="Main navigation">
              <Link 
                href="/" 
                className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
              >
                About
              </Link>
              <Link 
                href="/components" 
                className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
              >
                Components
              </Link>
              <div className="relative">
                <button
                  onClick={toggleActivities}
                  className="flex items-center hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
                >
                  Activities
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isActivitiesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50">
                    <Link 
                      href="/pre-lab" 
                      className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
                      onClick={() => setIsActivitiesOpen(false)}
                    >
                      Pre-lab Questions
                    </Link>
                    <Link 
                      href="/escape-room" 
                      className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
                      onClick={() => setIsActivitiesOpen(false)}
                    >
                      Escape Room
                    </Link>
                    <Link 
                      href="/coding-races" 
                      className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
                      onClick={() => setIsActivitiesOpen(false)}
                    >
                      Coding Races
                    </Link>
                    <Link 
                      href="/court-room" 
                      className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
                      onClick={() => setIsActivitiesOpen(false)}
                    >
                      Court Room
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Side - Dark Mode Toggle and Hamburger */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={toggleMenu}
                onKeyDown={handleKeyDown}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  {/* Enhanced CSS Transform Hamburger Icon */}
                  <span 
                    className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out transform origin-center ${
                      isMenuOpen 
                        ? 'rotate-45 translate-y-0.5 scale-x-110' 
                        : '-translate-y-1.5 scale-x-100'
                    }`}
                  ></span>
                  <span 
                    className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out transform origin-center ${
                      isMenuOpen 
                        ? 'opacity-0 scale-x-0 rotate-180' 
                        : 'opacity-100 scale-x-100 rotate-0'
                    }`}
                  ></span>
                  <span 
                    className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out transform origin-center ${
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
          <nav className="py-4 space-y-3 border-t border-gray-700 mt-3" role="navigation" aria-label="Mobile navigation">
            <Link 
              href="/" 
              className="block py-2 px-4 hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={closeMenu}
            >
              🏠 Home
            </Link>
            <Link 
              href="/about" 
              className="block py-2 px-4 hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={closeMenu}
            >
              ℹ️ About
            </Link>
            <Link 
              href="/components" 
              className="block py-2 px-4 hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={closeMenu}
            >
              🧩 Components
            </Link>
            <Link 
              href="/pre-lab" 
              className="block py-2 px-4 hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={closeMenu}
            >
              ❓ Pre-lab Questions
            </Link>
            <Link 
              href="/escape-room" 
              className="block py-2 px-4 hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={closeMenu}
            >
              🚪 Escape Room
            </Link>
            <Link 
              href="/coding-races" 
              className="block py-2 px-4 hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={closeMenu}
            >
              🏁 Coding Races
            </Link>
            <Link 
              href="/court-room" 
              className="block py-2 px-4 hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={closeMenu}
            >
              ⚖️ Court Room
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
