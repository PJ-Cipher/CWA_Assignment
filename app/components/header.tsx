'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <header className="bg-black text-white shadow-lg relative border-b border-gray-700" role="banner">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold">
              21963056
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className="text-lg font-bold hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/components" 
                className="text-lg font-bold hover:text-blue-400 transition-colors"
              >
                Tabs
              </Link>
              <Link 
                href="/about" 
                className="text-lg font-bold hover:text-blue-400 transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <div className="relative">
              <button
                onClick={toggleMenu}
                onKeyDown={handleKeyDown}
                className="md:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                      isMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                    }`}
                    style={{ transformOrigin: 'center', willChange: 'transform' }}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                      isMenuOpen ? 'scale-x-0' : 'scale-x-100'
                    }`}
                    style={{ top: '50%', transform: 'translateY(-50%)', willChange: 'transform' }}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                      isMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0'
                    }`}
                    style={{ bottom: 0, transformOrigin: 'center', willChange: 'transform' }}
                  />
                </div>
              </button>
              
              {isMenuOpen && (
                <div
                  id="mobile-menu"
                  className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2 z-50"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <Link
                    href="/escape-room"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                    role="menuitem"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Escape Room
                  </Link>
                  <Link
                    href="/coding-races"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                    role="menuitem"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Coding Races
                  </Link>
                  <Link
                    href="/court-room"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                    role="menuitem"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Court Room
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
