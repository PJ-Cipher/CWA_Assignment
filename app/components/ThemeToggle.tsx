'use client';

import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark');

  const toggleTheme = () => {
    if (isDark) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Sun icon on the right side of the track */}
      <span className={`absolute right-2 text-sm transition-colors duration-300 ease-in-out ${
        isDark ? 'text-white' : 'text-gray-600'
      }`}>
        ☀️
      </span>
      
      {/* Moon icon on the left side of the track */}
      <span className={`absolute left-2 text-sm transition-colors duration-300 ease-in-out ${
        isDark ? 'text-gray-600' : 'text-white'
      }`}>
        🌙
      </span>
      
      {/* White thumb that slides over the emojis */}
      <span
        className={`inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-500 ease-in-out ${
          isDark ? 'translate-x-8' : 'translate-x-1'
        }`}
      >
      </span>
    </button>
  );
}
