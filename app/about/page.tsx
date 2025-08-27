import VideoTutorial from '../components/VideoTutorial';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About This Project</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            LTU MOODLE LMS Components Application
          </p>
        </div>

        {/* Student Information Section - Prominently Displayed */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-400 p-8 rounded-lg mb-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6 text-center">
            Student Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Full Name</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-white">[YOUR_FULL_NAME]</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Student Number</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-white">[YOUR_STUDENT_NUMBER]</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Course</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-white">CSE5006 - Web Application Development</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Institution</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-white">La Trobe University (LTU)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Tutorial Section */}
        <VideoTutorial />

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Project Overview</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              This web application is designed to create and export interactive HTML5 components 
              that can be seamlessly deployed on MOODLE Learning Management System (LMS). 
              The application leverages modern web technologies to provide educators with 
              powerful tools to enhance their online learning environments.
            </p>
            <p>
              Built with Next.js 15 and TypeScript, this application offers a comprehensive 
              component library that includes carousels, tabs, accordions, modals, dropdowns, 
              tooltips, progress bars, range sliders, date pickers, alerts, lightboxes, 
              canvas elements, CSS animations, and Mermaid diagram support.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Technical Features</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Next.js 15 with App Router</li>
              <li>• TypeScript for type safety</li>
              <li>• Tailwind CSS for styling</li>
              <li>• Responsive design</li>
              <li>• Component-based architecture</li>
              <li>• Export functionality for LMS deployment</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">LMS Compatibility</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• MOODLE LMS integration</li>
              <li>• HTML5 standards compliance</li>
              <li>• Cross-browser compatibility</li>
              <li>• Mobile-responsive components</li>
              <li>• Accessibility features</li>
              <li>• Performance optimized</li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">How to Use</h3>
          <div className="space-y-3 text-gray-600 dark:text-gray-300">
            <p>
              1. <strong>Browse Components:</strong> Navigate through the available interactive components
            </p>
            <p>
              2. <strong>Customize:</strong> Modify component properties and styling as needed
            </p>
            <p>
              3. <strong>Preview:</strong> Test components in real-time before deployment
            </p>
            <p>
              4. <strong>Export:</strong> Generate HTML and JavaScript code for MOODLE LMS
            </p>
            <p>
              5. <strong>Deploy:</strong> Copy the generated code into your MOODLE course
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
