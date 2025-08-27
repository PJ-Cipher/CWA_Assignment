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
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Copyright Section */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">Copyright</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">© 2025 La Trobe University</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">All rights reserved</p>
          </div>

          {/* Student Information Section */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">Student Information</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">Name: Pasan Jayarathna</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">Student Number: 21963056</p>
          </div>
        </div>
        
        {/* Current Date and Built With */}
        <div className="text-center mt-6">
          <p className="text-gray-500 dark:text-gray-400 text-xs tracking-wide">
            {currentDate} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Built with Next.js 15, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
