'use client';

import { useTheme } from '../contexts/ThemeContext';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();
  const [isDark, setIsDark] = useState(false);

  // Update local state when theme changes
  useEffect(() => {
    if (mounted) {
      console.log('Theme changed to:', theme);
      setIsDark(theme === 'dark');
    }
  }, [theme, mounted]);

  const handleToggle = () => {
    if (!mounted) return;
    const newTheme = isDark ? 'light' : 'dark';
    console.log('Toggling theme from', theme, 'to', newTheme);
    setTheme(newTheme);
  };

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-300 animate-pulse">
        <div className="inline-block h-6 w-6 rounded-full bg-white shadow-lg ml-1" />
      </div>
    );
  }

  console.log('Current theme state:', { theme, isDark });

  return (
    <button
      onClick={handleToggle}
      className={`
        relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800
        ${isDark ? 'bg-gray-700' : 'bg-blue-600'}
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      role="switch"
      aria-checked={isDark}
    >
      {/* Moon emoji (visible when knob is on right - light mode) */}
      <div className={`
        absolute left-1 transition-all duration-300 ease-in-out
        ${isDark ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}
      `}>
        <span className="text-sm">🌙</span>
      </div>

      {/* Sun emoji (visible when knob is on left - dark mode) */}
      <div className={`
        absolute right-1 transition-all duration-300 ease-in-out
        ${isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
      `}>
        <span className="text-sm">☀️</span>
      </div>

      {/* Toggle knob - positioned based on theme */}
      <div className={`
        inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out
        ${isDark ? 'translate-x-1' : 'translate-x-8'}
      `} />
    </button>
  );
}
