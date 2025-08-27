export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About This Project</h1>
          <p className="text-xl text-gray-600">
            LTU MOODLE LMS Components Application
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Project Overview</h2>
          <div className="space-y-4 text-gray-600">
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
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Next.js 15 with App Router</li>
              <li>• TypeScript for type safety</li>
              <li>• Tailwind CSS for styling</li>
              <li>• Responsive design</li>
              <li>• Component-based architecture</li>
              <li>• Export functionality for LMS deployment</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">LMS Compatibility</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• MOODLE LMS integration</li>
              <li>• HTML5 standards compliance</li>
              <li>• Cross-browser compatibility</li>
              <li>• Mobile-responsive components</li>
              <li>• Accessibility features</li>
              <li>• Performance optimized</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Student Information</h3>
          <div className="text-blue-800">
            <p><strong>Student Number:</strong> [YOUR_STUDENT_NUMBER]</p>
            <p><strong>Course:</strong> CSE5006 - Web Application Development</p>
            <p><strong>Institution:</strong> La Trobe University (LTU)</p>
            <p><strong>Assignment:</strong> Assignment 1 - MOODLE LMS Components</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Use</h3>
          <div className="space-y-3 text-gray-600">
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
