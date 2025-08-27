import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Welcome to LTU MOODLE LMS Components
            </h1>
            <p className="text-xl mb-6" style={{ color: 'var(--muted-foreground)' }}>
              Create and deploy interactive HTML5 components for your MOODLE learning environment
            </p>
          </div>

          {/* Components and Features Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-lg shadow-md border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--card-foreground)' }}>Available Components</h2>
              <ul className="space-y-2" style={{ color: 'var(--muted-foreground)' }}>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Interactive Tabs Component
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  HTML5 Code Generator
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Custom Color Configuration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Export to HTML/JS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  MOODLE LMS Integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Dark/Light Theme Support
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg shadow-md border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--card-foreground)' }}>Features</h2>
              <ul className="space-y-2" style={{ color: 'var(--muted-foreground)' }}>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Next.js 15 with TypeScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Tailwind CSS for styling
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Responsive design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Component library
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Export to HTML/JS
                </li>
              </ul>
            </div>
          </div>

          {/* Getting Started Section */}
          <div className="p-6 rounded-lg shadow-md border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--card-foreground)' }}>Getting Started</h2>
            <p className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
              This application provides a comprehensive set of interactive components that can be easily deployed 
              on MOODLE LMS. Each component is designed to enhance the learning experience with modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/components" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Tabs
              </Link>
              <Link 
                href="/about" 
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
