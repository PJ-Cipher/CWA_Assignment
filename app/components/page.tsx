'use client';

import { useState, useEffect } from 'react';
import { storageUtils } from '../utils/cookies';

export default function Components() {
  const [activeTab, setActiveTab] = useState('step2');

  // Load active tab from cookies/localStorage on component mount
  useEffect(() => {
    const savedTab = storageUtils.getItem('activeComponentTab');
    if (savedTab && tabsData[savedTab as keyof typeof tabsData]) {
      setActiveTab(savedTab);
    }
  }, []);

  // Save active tab to cookies/localStorage when it changes
  const handleTabChange = (tabKey: string) => {
    setActiveTab(tabKey);
    storageUtils.setItem('activeComponentTab', tabKey);
  };

  const tabsData = {
    step1: {
      title: 'Step 1',
      content: [
        'Install Git',
        'Configure Git settings',
        'Create GitHub account',
        'Set up SSH keys'
      ],
      output: `$ git --version
git version 2.39.0

$ git config --global user.name "Your Name"
$ git config --global user.email "your.email@example.com"

$ ssh-keygen -t ed25519 -C "your.email@example.com"
Generating public/private ed25519 key pair...`
    },
    step2: {
      title: 'Step 2',
      content: [
        'Install VSCode',
        'Install Chrome',
        'Install Node',
        'etc'
      ],
      output: `$ code --version
1.85.1

$ google-chrome --version
Google Chrome 120.0.6099.109

$ node --version
v18.19.0

$ npm --version
9.8.1`
    },
    step3: {
      title: 'Step 3',
      content: [
        'Clone repository',
        'Install dependencies',
        'Run development server',
        'Open in browser'
      ],
      output: `$ git clone https://github.com/username/project.git
Cloning into 'project'...
remote: Enumerating objects: 100, done.

$ cd project
$ npm install
added 1000 packages in 30s

$ npm run dev
> project@0.1.0 dev
> next dev

ready - started server on 0.0.0.0:3000`
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Show accessible feedback
    const feedback = document.createElement('div');
    feedback.setAttribute('role', 'status');
    feedback.setAttribute('aria-live', 'polite');
    feedback.className = 'sr-only';
    feedback.textContent = 'Code copied to clipboard';
    document.body.appendChild(feedback);
    
    // Remove feedback after 3 seconds
    setTimeout(() => {
      document.body.removeChild(feedback);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Tabs
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tabs Headers Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
              Tabs Headers: 
              <button className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-2xl font-bold">
                [+]
              </button>
            </h2>
            <div className="space-y-3">
              {Object.keys(tabsData).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => handleTabChange(tabKey)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
                    activeTab === tabKey
                      ? 'bg-gray-900 dark:bg-gray-700 text-white border-2 border-black dark:border-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {tabsData[tabKey as keyof typeof tabsData].title}
                </button>
              ))}
            </div>
          </div>

          {/* Tabs Content Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Tabs Content
            </h2>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-600">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                {tabsData[activeTab as keyof typeof tabsData].title}:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {tabsData[activeTab as keyof typeof tabsData].content.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Output
            </h2>
            <div className="bg-black dark:bg-gray-900 p-4 rounded-lg border-2 border-black dark:border-white">
              <pre className="text-green-400 dark:text-green-300 text-xs font-mono whitespace-pre-wrap overflow-x-auto">
                {tabsData[activeTab as keyof typeof tabsData].output}
              </pre>
            </div>
            <button
              onClick={() => copyToClipboard(tabsData[activeTab as keyof typeof tabsData].output)}
              className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              aria-label={`Copy output for ${tabsData[activeTab as keyof typeof tabsData].title}`}
            >
              Copy Output
            </button>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Interactive Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Tab Management</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Click tabs to switch between content</li>
                <li>• Active tab is highlighted with border</li>
                <li>• Tab state is saved in cookies</li>
                <li>• Responsive design for all devices</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Content Features</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Step-by-step instructions</li>
                <li>• Terminal output examples</li>
                <li>• Copy-to-clipboard functionality</li>
                <li>• Dark mode support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
