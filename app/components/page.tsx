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
    const tabElements = tabs.map((tab, index) => `
      <div class="tab-content" id="tab${index + 1}" style="display: ${index === 0 ? 'block' : 'none'}; padding: 20px; background-color: ${backgroundColor}; color: #333;">
        <h3 style="color: ${primaryColor}; margin-bottom: 15px;">${tab.title}</h3>
        <p style="line-height: 1.6;">${tab.content}</p>
      </div>
    `).join('');

    const tabButtons = tabs.map((tab, index) => `
      <button class="tab-button" onclick="showTab(${index + 1})" style="
        padding: 12px 24px; 
        margin-right: 5px; 
        border: none; 
        background-color: ${index === 0 ? primaryColor : secondaryColor}; 
        color: white; 
        cursor: pointer; 
        border-radius: 5px 5px 0 0;
        font-weight: ${index === 0 ? 'bold' : 'normal'};
      ">${tab.title}</button>
    `).join('');

    const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${componentTitle}</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 0; 
            padding: 20px; 
            background-color: ${backgroundColor}; 
        }
        .tab-container { 
            max-width: 800px; 
            margin: 0 auto; 
            background: white; 
            border-radius: 8px; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
        }
        .tab-buttons { 
            display: flex; 
            border-bottom: 2px solid ${primaryColor}; 
        }
        .tab-button:hover { 
            background-color: ${primaryColor} !important; 
            opacity: 0.8; 
        }
        .tab-content { 
            border-radius: 0 0 8px 8px; 
        }
        @media (max-width: 600px) {
            .tab-buttons { 
                flex-direction: column; 
            }
            .tab-button { 
                margin-right: 0 !important; 
                margin-bottom: 2px; 
                border-radius: 5px !important; 
            }
        }
    </style>
</head>
<body>
    <div class="tab-container">
        <div class="tab-buttons">
            ${tabButtons}
        </div>
        ${tabElements}
    </div>

    <script>
        function showTab(tabNumber) {
            const contents = document.querySelectorAll('.tab-content');
            const buttons = document.querySelectorAll('.tab-button');
            
            contents.forEach(content => content.style.display = 'none');
            buttons.forEach(button => {
                button.style.backgroundColor = '${secondaryColor}';
                button.style.fontWeight = 'normal';
            });
            
            document.getElementById('tab' + tabNumber).style.display = 'block';
            buttons[tabNumber - 1].style.backgroundColor = '${primaryColor}';
            buttons[tabNumber - 1].style.fontWeight = 'bold';
        }
    </script>
</body>
</html>`;

    setGeneratedCode(htmlCode);
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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">

          <div className="rounded-lg p-6 mb-6 border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h1 className="text-3xl font-bold" style={{ color: 'var(--card-foreground)' }}>HTML5 Code Generator</h1>
            <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>Create interactive HTML5 components for MOODLE LMS deployment</p>
          </div>


          <div className="rounded-lg p-6 mb-6 border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>Component Configuration</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--card-foreground)' }}>Component Type</label>
                <select 
                  value={componentType}
                  onChange={(e) => setComponentType(e.target.value)}
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border"
                  style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
                >
                  <option value="Tabs">Tabs</option>
                  <option value="Accordion">Accordion</option>
                  <option value="Carousel">Carousel</option>
                  <option value="Modal">Modal</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--card-foreground)' }}>Component Title</label>
                <input 
                  type="text"
                  value={componentTitle}
                  onChange={(e) => setComponentTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border"
                  style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
                  placeholder="Enter component title"
                />
              </div>
            </div>
          </div>


          <div className="rounded-lg p-6 mb-6 border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold" style={{ color: 'var(--card-foreground)' }}>Custom Tabs</h2>
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
                <div key={tab.id} className="rounded-lg p-4 border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium" style={{ color: 'var(--foreground)' }}>Tab {index + 1}</h3>
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
                      <label className="block text-sm mb-1" style={{ color: 'var(--muted-foreground)' }}>Tab Title</label>
                      <input
                        type="text"
                        value={tab.title}
                        onChange={(e) => updateTab(tab.id, 'title', e.target.value)}
                        className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border"
                        style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--card-foreground)' }}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-1" style={{ color: 'var(--muted-foreground)' }}>Tab Content</label>
                      <textarea
                        value={tab.content}
                        onChange={(e) => updateTab(tab.id, 'content', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border"
                        style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--card-foreground)' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="rounded-lg p-6 mb-6 border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--card-foreground)' }}>Color Configuration</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--card-foreground)' }}>Primary Color</label>
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-full h-10 rounded-md cursor-pointer border"
                  style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--card-foreground)' }}>Secondary Color</label>
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="w-full h-10 rounded-md cursor-pointer border"
                  style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--card-foreground)' }}>Background Color</label>
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-full h-10 rounded-md cursor-pointer border"
                  style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
                />
              </div>
            </div>
          </div>


          <div className="text-center mb-6">
            <button
              onClick={generateCode}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              Generate Code
            </button>
          </div>


          {showGeneratedCode && (
            <div className="rounded-lg p-6 mb-6 border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--card-foreground)' }}>Generated Code</h2>
              <div className="flex gap-2 mb-4">
                <button
                  onClick={copyCode}
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Code
                </button>
                <button
                  onClick={downloadHTML}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download HTML
                </button>
              </div>
              <pre className="p-4 rounded-md overflow-auto text-sm" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
                {generatedCode}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
