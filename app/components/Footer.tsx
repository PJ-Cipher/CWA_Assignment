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
    <footer className="bg-gray-800 dark:bg-gray-900 text-white border-t border-gray-700 dark:border-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Copyright Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 text-blue-300">Copyright</h3>
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} La Trobe University
            </p>
            <p className="text-gray-300 text-sm mt-1">
              All rights reserved
            </p>
          </div>

          {/* Student Information Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 text-blue-300">Student Information</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p><strong>Name:</strong> Pasan Jayarathna</p>
              <p><strong>Student Number:</strong> 21963056</p>
              <p><strong>Course:</strong> CSE5006</p>
              <p><strong>Institution:</strong> La Trobe University</p>
            </div>
          </div>

          {/* Date and Assignment Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 text-blue-300">Assignment Details</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p><strong>Assignment:</strong> Assignment 1</p>
              <p><strong>Due Date:</strong> {currentDate}</p>
              <p><strong>Project:</strong> MOODLE LMS Components</p>
              <p><strong>Status:</strong> In Progress</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>Built with Next.js 15, TypeScript, and Tailwind CSS</p>
            </div>
            <div className="text-center md:text-right">
              <p>Last Updated: {currentDate}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
