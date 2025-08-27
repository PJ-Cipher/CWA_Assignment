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
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg relative border-b border-gray-200 dark:border-gray-700" role="banner">
      <div className="container mx-auto px-4 py-4">
        {/* Top Section - Student Number */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-900 dark:text-white text-2xl font-bold">
            21963056
          </div>
          <div className="flex-1"></div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="flex items-center justify-between">
            <nav className="flex space-x-8" role="navigation" aria-label="Main navigation">
              <Link 
                href="/" 
                className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-2 text-lg font-bold"
              >
                Home
              </Link>
              <Link 
                href="/components" 
                className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-2 text-lg font-bold"
              >
                Tabs
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-2 text-lg font-bold"
              >
                About
              </Link>
            </nav>

            {/* Right Side - Hamburger Menu */}
            <div className="flex items-center space-x-4">
              
              {/* Hamburger Menu Button */}
              <button
                className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105"
                onClick={toggleMenu}
                onKeyDown={handleKeyDown}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-7 h-7 flex flex-col justify-center items-center relative">
                  {/* Enhanced CSS Transform Hamburger Icon */}
                  <span 
                    className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out transform origin-center ${
                      isMenuOpen 
                        ? 'rotate-45 translate-y-0.5 scale-x-110' 
                        : '-translate-y-1.5 scale-x-100'
                    }`}
                    style={{
                      transformOrigin: 'center',
                      willChange: 'transform'
                    }}
                  ></span>
                  <span 
                    className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out transform origin-center ${
                      isMenuOpen 
                        ? 'opacity-0 scale-x-0 rotate-180' 
                        : 'opacity-100 scale-x-100 rotate-0'
                    }`}
                    style={{
                      transformOrigin: 'center',
                      willChange: 'transform, opacity'
                    }}
                  ></span>
                  <span 
                    className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out transform origin-center ${
                      isMenuOpen 
                        ? '-rotate-45 -translate-y-0.5 scale-x-110' 
                        : 'translate-y-1.5 scale-x-100'
                    }`}
                    style={{
                      transformOrigin: 'center',
                      willChange: 'transform'
                    }}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Hamburger Navigation Menu */}
        <div 
          id="mobile-menu"
          className={`transition-all duration-500 ease-in-out overflow-hidden transform ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 translate-y-0 scale-y-100' 
              : 'max-h-0 opacity-0 -translate-y-4 scale-y-0'
          }`}
          style={{
            transformOrigin: 'top',
            willChange: 'transform, opacity, max-height'
          }}
          aria-hidden={!isMenuOpen}
        >
          <nav className="py-6 space-y-4 border-t border-gray-700 mt-4" role="navigation" aria-label="Hamburger navigation">
            <Link 
              href="/escape-room" 
              className="block py-3 px-6 hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-bold"
              onClick={closeMenu}
            >
              🚪 Escape Room
            </Link>
            <Link 
              href="/coding-races" 
              className="block py-3 px-6 hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-bold"
              onClick={closeMenu}
            >
              🏁 Coding Races
            </Link>
            <Link 
              href="/court-room" 
              className="block py-3 px-6 hover:bg-gray-700 rounded transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-bold"
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
