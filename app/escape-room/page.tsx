export default function EscapeRoom() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🚪 Escape Room Challenge
          </h1>
          <p className="text-xl text-gray-600">
            Interactive coding puzzles and challenges
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-dashed border-purple-300 p-12 rounded-lg text-center">
          <div className="text-8xl mb-6">🔒</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Coming Soon!
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            The Escape Room feature is currently under development. This will include interactive 
            coding challenges, puzzles, and problem-solving activities to enhance your learning experience.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md inline-block">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Planned Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2 text-gray-600">
                <li>• Interactive coding puzzles</li>
                <li>• Progressive difficulty levels</li>
                <li>• Real-time feedback system</li>
                <li>• Achievement badges</li>
              </ul>
              <ul className="space-y-2 text-gray-600">
                <li>• Timer-based challenges</li>
                <li>• Collaborative problem solving</li>
                <li>• Leaderboard rankings</li>
                <li>• Custom puzzle creation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Development Status */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Development Status
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-600">Planning Phase</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span className="text-gray-600">Design Phase</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span className="text-gray-600">Development Phase</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span className="text-gray-600">Testing Phase</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span className="text-gray-600">Launch Phase</span>
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
