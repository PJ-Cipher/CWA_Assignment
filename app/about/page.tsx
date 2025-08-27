import VideoTutorial from '../components/VideoTutorial';

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>About This Project</h1>
            <p className="text-xl" style={{ color: 'var(--muted-foreground)' }}>
              LTU MOODLE LMS Components Application
            </p>
          </div>

          {/* Student Information Section - Prominently Displayed */}
          <div className="border-l-4 border-blue-400 p-8 rounded-lg mb-8 border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--card-foreground)' }}>
              Student Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
              <div className="space-y-3">
                <div className="p-4 rounded-lg shadow-sm border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <p className="text-sm uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>Full Name</p>
                  <p className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Pasan Jayarathna</p>
                </div>
                <div className="p-4 rounded-lg shadow-sm border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <p className="text-sm uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>Student Number</p>
                  <p className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>21963056</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-lg shadow-sm border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <p className="text-sm uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>Course</p>
                  <p className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>CSE5006 - Web Application Development</p>
                </div>
                <div className="p-4 rounded-lg shadow-sm border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <p className="text-sm uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>Institution</p>
                  <p className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>La Trobe University (LTU)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Tutorial Section */}
          <VideoTutorial />

          <div className="p-8 rounded-lg shadow-md mb-8 border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--card-foreground)' }}>Project Overview</h2>
            <div className="space-y-4" style={{ color: 'var(--muted-foreground)' }}>
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
            <div className="p-6 rounded-lg shadow-md border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--card-foreground)' }}>Technical Features</h3>
              <ul className="space-y-2" style={{ color: 'var(--muted-foreground)' }}>
                <li>• Next.js 15 with App Router</li>
                <li>• TypeScript for type safety</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Responsive design</li>
                <li>• Component-based architecture</li>
                <li>• Export functionality for LMS deployment</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg shadow-md border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--card-foreground)' }}>LMS Compatibility</h3>
              <ul className="space-y-2" style={{ color: 'var(--muted-foreground)' }}>
                <li>• MOODLE LMS integration</li>
                <li>• HTML5 standards compliance</li>
                <li>• Cross-browser compatibility</li>
                <li>• Mobile-responsive components</li>
                <li>• Accessibility features</li>
                <li>• Performance optimized</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-md mt-8 border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--card-foreground)' }}>How to Use</h3>
            <div className="space-y-3" style={{ color: 'var(--muted-foreground)' }}>
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
    </div>
  );
}
