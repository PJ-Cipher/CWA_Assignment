'use client';

import { useState } from 'react';

export default function Components() {
  const [activeTab, setActiveTab] = useState('carousel');

  const components = {
    carousel: {
      title: 'Carousel Component',
      description: 'Interactive image carousel with navigation controls',
      html: `<div class="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="image1.jpg" alt="Slide 1">
    </div>
    <div class="carousel-item">
      <img src="image2.jpg" alt="Slide 2">
    </div>
  </div>
  <button class="carousel-control prev">‹</button>
  <button class="carousel-control next">›</button>
</div>`,
      css: `.carousel {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.carousel-item {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-item.active {
  opacity: 1;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 20px;
}

.carousel-control.prev { left: 10px; }
.carousel-control.next { right: 10px; }`
    },
    tabs: {
      title: 'Tabs Component',
      description: 'Content organization with tabbed interface',
      html: `<div class="tabs">
  <div class="tab-buttons">
    <button class="tab-btn active" data-tab="tab1">Tab 1</button>
    <button class="tab-btn" data-tab="tab2">Tab 2</button>
    <button class="tab-btn" data-tab="tab3">Tab 3</button>
  </div>
  <div class="tab-content">
    <div class="tab-pane active" id="tab1">
      <h3>Content for Tab 1</h3>
      <p>This is the content for the first tab.</p>
    </div>
    <div class="tab-pane" id="tab2">
      <h3>Content for Tab 2</h3>
      <p>This is the content for the second tab.</p>
    </div>
    <div class="tab-pane" id="tab3">
      <h3>Content for Tab 3</h3>
      <p>This is the content for the third tab.</p>
    </div>
  </div>
</div>`,
      css: `.tabs {
  max-width: 600px;
  margin: 0 auto;
}

.tab-buttons {
  display: flex;
  border-bottom: 2px solid #ddd;
}

.tab-btn {
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
}

.tab-btn.active {
  border-bottom-color: #007bff;
  color: #007bff;
}

.tab-content {
  padding: 20px 0;
}

.tab-pane {
  display: none;
}

.tab-pane.active {
  display: block;
}`
    },
    accordion: {
      title: 'Accordion Component',
      description: 'Collapsible content sections',
      html: `<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">
      Section 1
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p>This is the content for section 1.</p>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">
      Section 2
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p>This is the content for section 2.</p>
    </div>
  </div>
</div>`,
      css: `.accordion {
  max-width: 600px;
  margin: 0 auto;
}

.accordion-item {
  border: 1px solid #ddd;
  margin-bottom: 5px;
}

.accordion-header {
  width: 100%;
  padding: 15px;
  background: #f8f9fa;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-content {
  padding: 15px;
  display: none;
}

.accordion-content.active {
  display: block;
}

.accordion-icon {
  font-size: 20px;
  transition: transform 0.3s;
}

.accordion-header.active .accordion-icon {
  transform: rotate(45deg);
}`
    },
    modal: {
      title: 'Modal/Popup Component',
      description: 'Overlay dialog boxes for user interaction',
      html: `<button class="modal-trigger">Open Modal</button>

<div class="modal" id="myModal">
  <div class="modal-content">
    <span class="modal-close">&times;</span>
    <h2>Modal Title</h2>
    <p>This is the modal content.</p>
    <button class="modal-btn">Close</button>
  </div>
</div>`,
      css: `.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}

.modal-content {
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
  position: relative;
}

.modal-close {
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 28px;
  cursor: pointer;
}

.modal-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}

.modal-trigger {
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}`
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">HTML5 Components</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Browse and export components for MOODLE LMS deployment
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {Object.keys(components).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === key
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  {components[key as keyof typeof components].title}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {components[activeTab as keyof typeof components].title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {components[activeTab as keyof typeof components].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">HTML Code</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                    {components[activeTab as keyof typeof components].html}
                  </pre>
                </div>
                <button
                  onClick={() => copyToClipboard(components[activeTab as keyof typeof components].html)}
                  className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Copy HTML
                </button>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">CSS Code</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                    {components[activeTab as keyof typeof components].css}
                  </pre>
                </div>
                <button
                  onClick={() => copyToClipboard(components[activeTab as keyof typeof components].css)}
                  className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Copy CSS
                </button>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 rounded">
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">Usage Instructions</h3>
              <ol className="text-blue-800 dark:text-blue-200 space-y-1 text-sm">
                <li>1. Copy the HTML code and paste it into your MOODLE page</li>
                <li>2. Copy the CSS code and add it to your MOODLE theme or page</li>
                <li>3. Add any required JavaScript functionality</li>
                <li>4. Customize the styling and content as needed</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
