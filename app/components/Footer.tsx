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
    <footer className="bg-gray-900 text-white border-t border-gray-700">
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Copyright Section */}
          <div>
            <h3 className="font-bold text-white mb-3">Copyright</h3>
            <p className="text-gray-300 text-sm mb-1">© 2025 La Trobe University</p>
            <p className="text-gray-300 text-sm mb-4">All rights reserved</p>
            <div className="flex items-center text-gray-300 text-xs">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mr-2">
                <span className="text-gray-900 font-bold text-xs">N</span>
              </div>
              <span>Built with Next.js 15, TypeScript, and Tailwind CSS</span>
            </div>
          </div>

          {/* Student Information Section */}
          <div>
            <h3 className="font-bold text-white mb-3">Student Information</h3>
            <p className="text-gray-300 text-sm mb-1">Name: Pasan Jayarathna</p>
            <p className="text-gray-300 text-sm mb-1">Student Number: 21963056</p>
            <p className="text-gray-300 text-sm mb-1">Course: CSE5006</p>
            <p className="text-gray-300 text-sm">Institution: La Trobe University</p>
          </div>

          {/* Assignment Details Section */}
          <div>
            <h3 className="font-bold text-white mb-3">Assignment Details</h3>
            <p className="text-gray-300 text-sm mb-1">Assignment: Assignment 1</p>
            <p className="text-gray-300 text-sm mb-1">Due Date: August 27, 2025</p>
            <p className="text-gray-300 text-sm mb-1">Project: MOODLE LMS Components</p>
            <p className="text-gray-300 text-sm">Status: In Progress</p>
          </div>
        </div>
        
        {/* Last Updated */}
        <div className="text-right mt-6">
          <p className="text-gray-400 text-xs">Last Updated: August 27, 2025</p>
        </div>
      </div>
    </footer>
  );
}
