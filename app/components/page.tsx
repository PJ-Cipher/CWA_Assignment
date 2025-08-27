'use client';

import { useState } from 'react';

interface Tab {
  id: string;
  title: string;
  content: string;
}

export default function Components() {
  const [componentType, setComponentType] = useState('Tabs');
  const [componentTitle, setComponentTitle] = useState('My Component');
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: 'tab1',
      title: 'Home',
      content: 'Welcome to the home page. This is where you can find general information about our website.'
    },
    {
      id: 'tab2',
      title: 'About',
      content: 'Learn more about us, our mission, and what we do. We are committed to providing excellent service.'
    },
    {
      id: 'tab3',
      title: 'Contact',
      content: 'Get in touch with us through email, phone, or visit our office. We\'d love to hear from you!'
    }
  ]);
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');
  const [secondaryColor, setSecondaryColor] = useState('#64748B');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [showGeneratedCode, setShowGeneratedCode] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  const addTab = () => {
    const newTab: Tab = {
      id: `tab${tabs.length + 1}`,
      title: `Tab ${tabs.length + 1}`,
      content: 'Enter your content here...'
    };
    setTabs([...tabs, newTab]);
  };

  const removeTab = (id: string) => {
    if (tabs.length > 1) {
      setTabs(tabs.filter(tab => tab.id !== id));
    }
  };

  const updateTab = (id: string, field: 'title' | 'content', value: string) => {
    setTabs(tabs.map(tab => 
      tab.id === id ? { ...tab, [field]: value } : tab
    ));
  };

  const generateCode = () => {
    // Create the complete HTML document with only inline CSS
    const completeCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${componentTitle}</title>
</head>
<body>
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 20px auto; padding: 20px; background-color: ${backgroundColor};">
        <h2 style="color: ${primaryColor}; margin-bottom: 20px; text-align: center; font-size: 24px;">${componentTitle}</h2>
        <div style="border-bottom: 2px solid ${secondaryColor}; margin-bottom: 20px;">
            ${tabs.map((tab, index) => 
              `<button onclick="openTab(event, '${tab.id}')" style="background-color: ${index === 0 ? primaryColor : 'transparent'}; color: ${index === 0 ? 'white' : primaryColor}; border: none; padding: 12px 24px; cursor: pointer; font-size: 16px; margin-right: 4px; border-radius: 4px 4px 0 0; transition: all 0.3s ease;">${tab.title}</button>`
            ).join('')}
        </div>
        ${tabs.map((tab, index) => 
          `<div id="${tab.id}" style="display: ${index === 0 ? 'block' : 'none'}; padding: 20px; line-height: 1.6; color: #333;">
            <p style="margin: 0;">${tab.content}</p>
          </div>`
        ).join('')}
    </div>

    <script>
        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.querySelectorAll('[id^="tab"]');
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.querySelectorAll('button[onclick^="openTab"]');
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.backgroundColor = "transparent";
                tablinks[i].style.color = "${primaryColor}";
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.style.backgroundColor = "${primaryColor}";
            evt.currentTarget.style.color = "white";
        }
    </script>
</body>
</html>`;
    
    setGeneratedCode(completeCode);
    setShowGeneratedCode(true);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      alert('Code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const downloadHTML = () => {
    const blob = new Blob([generatedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${componentTitle.toLowerCase().replace(/\s+/g, '-')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">HTML5 Code Generator</h1>
          </div>

          {/* Component Configuration Section */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-2">Component Configuration</h2>
            <p className="text-gray-300 text-sm mb-4">Configure your HTML5 component settings</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Component Type</label>
                <select 
                  value={componentType}
                  onChange={(e) => setComponentType(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Tabs">Tabs</option>
                  <option value="Accordion">Accordion</option>
                  <option value="Carousel">Carousel</option>
                  <option value="Modal">Modal</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Component Title</label>
                <input 
                  type="text"
                  value={componentTitle}
                  onChange={(e) => setComponentTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter component title"
                />
              </div>
            </div>
          </div>

          {/* Custom Tabs Section */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Custom Tabs</h2>
              <button
                onClick={addTab}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Tab
              </button>
            </div>
            
            <div className="space-y-4">
              {tabs.map((tab, index) => (
                <div key={tab.id} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-white font-medium">Tab {index + 1}</h3>
                    {tabs.length > 1 && (
                      <button
                        onClick={() => removeTab(tab.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Tab Title</label>
                      <input
                        type="text"
                        value={tab.title}
                        onChange={(e) => updateTab(tab.id, 'title', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Tab Content</label>
                      <textarea
                        value={tab.content}
                        onChange={(e) => updateTab(tab.id, 'content', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Color Configuration Section */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Color Configuration</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Primary Color</label>
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-full h-10 bg-gray-700 border border-gray-600 rounded-md cursor-pointer"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Secondary Color</label>
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="w-full h-10 bg-gray-700 border border-gray-600 rounded-md cursor-pointer"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Background Color</label>
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-full h-10 bg-gray-700 border border-gray-600 rounded-md cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <button
              onClick={generateCode}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              Generate Code
            </button>
          </div>

                     {/* Generated Code Section */}
           {showGeneratedCode && (
             <div className="bg-gray-800 rounded-lg p-6 mt-6 border border-gray-700">
               <h2 className="text-xl font-semibold text-white mb-4">Generated Code</h2>
               <p className="text-gray-300 text-sm mb-4">Copy this code and paste it into a .html file for MOODLE deployment</p>
               <div className="flex justify-between items-center mb-4">
                 <div className="flex space-x-2">
                   <button
                     onClick={copyCode}
                     className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                   >
                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                     </svg>
                     Copy Code
                   </button>
                   <button
                     onClick={downloadHTML}
                     className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                   >
                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                     </svg>
                     Download HTML
                   </button>
                 </div>
               </div>
               <pre className="bg-gray-700 text-white p-4 rounded-md overflow-auto text-sm">
                 {generatedCode}
               </pre>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
