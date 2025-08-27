'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Get current date in a readable format
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(now.toLocaleDateString('en-US', options));
  }, []);

  return (
    <footer className="bg-white dark:bg-gray-800 text-black dark:text-white border-t border-gray-200 dark:border-gray-600">
      <div className="container mx-auto px-4 py-6">
        {/* Simple Copyright Line */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Copyright Pasan Jayarathna, 21963056, {currentDate}
          </p>
        </div>
      </div>
    </footer>
  );
}
