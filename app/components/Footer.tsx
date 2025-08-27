'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setCurrentDate(date);
  }, []);

  return (
    <footer className="bg-black text-white py-8 border-t border-gray-700">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <p className="text-sm">
              © 2024 LTU MOODLE LMS Components. All rights reserved.
            </p>
          </div>
          
          <div className="text-sm">
            <p><strong>Student:</strong> Pasan Jayarathna</p>
            <p><strong>Student Number:</strong> 21963056</p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            {currentDate} | Built with Next.js 15, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
