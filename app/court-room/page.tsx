export default function CourtRoom() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            ⚖️ Court Room
          </h1>
          <p className="text-xl text-gray-600">
            Code review and peer evaluation system
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-dashed border-red-300 p-12 rounded-lg text-center">
          <div className="text-8xl mb-6">🏛️</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Coming Soon!
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            The Court Room feature is currently under development. This will include a comprehensive 
            code review system, peer evaluation, and collaborative learning assessment tools.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md inline-block">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Planned Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2 text-gray-600">
                <li>• Code review system</li>
                <li>• Peer evaluation tools</li>
                <li>• Comment and feedback</li>
                <li>• Quality assessment</li>
              </ul>
              <ul className="space-y-2 text-gray-600">
                <li>• Collaborative learning</li>
                <li>• Performance tracking</li>
                <li>• Best practices guide</li>
                <li>• Learning analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Court Room Roles Preview */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4">👨‍⚖️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Judge</h3>
            <p className="text-gray-600 text-sm">
              Lead code reviews and provide final assessments
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Jury</h3>
            <p className="text-gray-600 text-sm">
              Peer reviewers providing feedback and evaluation
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Defense</h3>
            <p className="text-gray-600 text-sm">
              Code authors explaining their implementation
            </p>
          </div>
        </div>

        {/* Review Process Preview */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Review Process
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <p className="text-sm text-gray-600">Submit Code</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-yellow-600 font-bold">2</span>
              </div>
              <p className="text-sm text-gray-600">Peer Review</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <p className="text-sm text-gray-600">Feedback</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <p className="text-sm text-gray-600">Improve</p>
            </div>
          </div>
        </div>

        {/* Development Timeline */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Development Timeline
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-gray-600">Q1 2024 - Planning & Design</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-gray-600">Q2 2024 - Backend Development</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-gray-600">Q3 2024 - Frontend Development</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-gray-600">Q4 2024 - Testing & Launch</span>
            </div>
          </div>
        </div>

        {/* Back to Components */}
        <div className="mt-8 text-center">
          <a 
            href="/components" 
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>←</span>
            <span>Back to Components</span>
          </a>
        </div>
      </div>
    </div>
  );
}
