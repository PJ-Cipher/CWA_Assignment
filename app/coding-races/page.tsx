export default function CodingRaces() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🏁 Coding Races
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Competitive coding challenges and speed programming
            </p>
          </div>

          {/* Coming Soon Section */}
          <div className="bg-green-50 dark:bg-gray-800 border-2 border-dashed border-green-400 p-12 rounded-lg text-center border border-gray-200 dark:border-gray-700">
            <div className="text-8xl mb-6">🏆</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Coming Soon!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              The Coding Races feature is currently under development. This will include competitive 
              programming challenges, speed coding competitions, and real-time leaderboards.
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md inline-block border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Planned Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Speed coding challenges</li>
                  <li>• Real-time competitions</li>
                  <li>• Global leaderboards</li>
                  <li>• Achievement system</li>
                </ul>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Multiple difficulty levels</li>
                  <li>• Team competitions</li>
                  <li>• Code review system</li>
                  <li>• Performance analytics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Race Types Preview */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sprint Races</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Quick 5-15 minute coding challenges for rapid problem solving
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Marathon Races</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Extended 1-3 hour challenges for complex algorithm development
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Team Races</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Collaborative coding challenges for team problem solving
              </p>
            </div>
          </div>

          {/* Development Progress */}
          <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Development Progress
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Backend API</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">0%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                <div className="bg-gray-400 dark:bg-gray-500 h-2 rounded-full w-0"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Frontend Interface</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">0%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                <div className="bg-gray-400 dark:bg-gray-500 h-2 rounded-full w-0"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Database Design</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">0%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                <div className="bg-gray-400 dark:bg-gray-500 h-2 rounded-full w-0"></div>
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
    </div>
  );
}
