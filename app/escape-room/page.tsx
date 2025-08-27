export default function EscapeRoom() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              🚪 Escape Room Challenge
            </h1>
            <p className="text-xl" style={{ color: 'var(--muted-foreground)' }}>
              Interactive coding puzzles and challenges
            </p>
          </div>

          {/* Coming Soon Section */}
          <div className="border-2 border-dashed border-purple-400 p-12 rounded-lg text-center border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <div className="text-8xl mb-6">🔒</div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--card-foreground)' }}>
              Coming Soon!
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              The Escape Room feature is currently under development. This will include interactive 
              coding challenges, puzzles, and problem-solving activities to enhance your learning experience.
            </p>
            
            <div className="p-6 rounded-lg shadow-md inline-block border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                Planned Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2" style={{ color: 'var(--muted-foreground)' }}>
                  <li>• Interactive coding puzzles</li>
                  <li>• Progressive difficulty levels</li>
                  <li>• Real-time feedback system</li>
                  <li>• Achievement badges</li>
                </ul>
                <ul className="space-y-2" style={{ color: 'var(--muted-foreground)' }}>
                  <li>• Timer-based challenges</li>
                  <li>• Collaborative problem solving</li>
                  <li>• Leaderboard rankings</li>
                  <li>• Custom puzzle creation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Development Status */}
          <div className="mt-8 p-6 rounded-lg shadow-md border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--card-foreground)' }}>
              Development Status
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span style={{ color: 'var(--muted-foreground)' }}>Planning Phase</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                <span style={{ color: 'var(--muted-foreground)' }}>Design Phase</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                <span style={{ color: 'var(--muted-foreground)' }}>Development Phase</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                <span style={{ color: 'var(--muted-foreground)' }}>Testing Phase</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                <span style={{ color: 'var(--muted-foreground)' }}>Launch Phase</span>
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
