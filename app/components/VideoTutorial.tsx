'use client';

import { useState } from 'react';

interface VideoTutorialProps {
  videoUrl?: string;
  videoTitle?: string;
  videoDescription?: string;
}

export default function VideoTutorial({ 
  videoUrl, 
  videoTitle = "How to Use This Website", 
  videoDescription = "Comprehensive guide to navigating and using all features"
}: VideoTutorialProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // If no video URL is provided, show placeholder
  if (!videoUrl) {
    return (
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
          🎥 {videoTitle}
        </h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
              Video Tutorial: Website Walkthrough
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {videoDescription} of this LTU MOODLE LMS Components application.
            </p>
            
            {/* Video Placeholder */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-500">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📹</div>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
                    Video Tutorial Coming Soon
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    This section will contain a video demonstrating how to use the website
                  </p>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Upload Video
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Description */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium text-gray-800 dark:text-white mb-3">What You'll Learn:</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Navigating the website structure</li>
                <li>• Using the component library</li>
                <li>• Switching between light/dark themes</li>
                <li>• Copying HTML and CSS code</li>
                <li>• Understanding MOODLE LMS integration</li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-medium text-gray-800 dark:text-white mb-3">Video Features:</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Step-by-step walkthrough</li>
                <li>• Real-time demonstrations</li>
                <li>• Accessibility features showcase</li>
                <li>• Mobile responsiveness demo</li>
                <li>• Best practices for usage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If video URL is provided, show embedded video
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
        🎥 {videoTitle}
      </h2>
      
      <div className="space-y-6">
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
            Video Tutorial: Website Walkthrough
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {videoDescription} of this LTU MOODLE LMS Components application.
          </p>
          
          {/* Embedded Video */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={videoUrl}
                title={videoTitle}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsPlaying(true)}
              />
            </div>
          </div>
        </div>

        {/* Video Controls and Description */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-md font-medium text-gray-800 dark:text-white mb-3">Video Controls:</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>• Play/Pause: Click the video or use spacebar</li>
              <li>• Fullscreen: Click the fullscreen button</li>
              <li>• Volume: Use the volume slider</li>
              <li>• Progress: Click on the progress bar to jump</li>
              <li>• Quality: Select video quality from settings</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-medium text-gray-800 dark:text-white mb-3">Accessibility:</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>• Keyboard navigation support</li>
              <li>• Screen reader compatibility</li>
              <li>• High contrast mode support</li>
              <li>• Captions and subtitles</li>
              <li>• Audio descriptions available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
