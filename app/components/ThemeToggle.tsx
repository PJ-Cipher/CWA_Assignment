'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  if (!mounted) {
    return (
      <div className="w-12 h-6 bg-gray-300 rounded-full animate-pulse"></div>
    );
  }

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'
      }`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-checked={theme === 'dark'}
      role="switch"
    >
      <span
        className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform duration-200 flex items-center justify-center text-xs ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
        style={{ backgroundColor: 'var(--background)' }}
      >
        <span
          className={`transition-all duration-200 ${
            theme === 'dark' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
        >
          🌙
        </span>
      </span>
      
      <span
        className={`absolute top-1 right-1 w-4 h-4 rounded-full transition-transform duration-200 flex items-center justify-center text-xs ${
          theme === 'dark' ? 'translate-x-0' : '-translate-x-6'
        }`}
        style={{ backgroundColor: 'var(--background)' }}
      >
        <span
          className={`transition-all duration-200 ${
            theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        >
          ☀️
        </span>
      </span>
      
      <span
        className={`absolute top-1 w-4 h-4 rounded-full transition-transform duration-200 ${
          theme === 'dark' ? 'translate-x-6 bg-white' : 'translate-x-0 bg-white'
        }`}
      />
    </button>
  );
}
