'use client';

import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const getCurrentThemeIcon = () => {
    return theme === 'dark' ? '🌙' : '☀️';
  };

  const getCurrentThemeLabel = () => {
    return theme.charAt(0).toUpperCase() + theme.slice(1);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
      aria-label={`Current theme: ${getCurrentThemeLabel()}. Click to toggle to ${theme === 'light' ? 'dark' : 'light'} mode.`}
    >
      <span className="text-lg" aria-hidden="true">{getCurrentThemeIcon()}</span>
      <span className="hidden sm:inline text-sm">Theme</span>
    </button>
  );
}
