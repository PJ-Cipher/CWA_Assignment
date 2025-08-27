export default function PreLabQuestions() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              ❓ Pre-lab Questions
            </h1>
            <p className="text-xl text-gray-300">
              Prepare for your lab sessions with these essential questions
            </p>
          </div>

          {/* Coming Soon Section */}
          <div className="bg-gray-800 border-2 border-dashed border-indigo-400 p-12 rounded-lg text-center border border-gray-700">
            <div className="text-8xl mb-6">📚</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Coming Soon!
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              The Pre-lab Questions feature is currently under development. This will include 
              preparatory questions, quizzes, and learning materials to help you get ready for lab sessions.
            </p>
            
            <div className="bg-gray-700 p-6 rounded-lg shadow-md inline-block border border-gray-600">
              <h3 className="text-xl font-semibold text-white mb-4">
                Planned Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2 text-gray-300">
                  <li>• Pre-lab quizzes</li>
                  <li>• Learning objectives</li>
                  <li>• Concept reviews</li>
                  <li>• Practice exercises</li>
                </ul>
                <ul className="space-y-2 text-gray-300">
                  <li>• Progress tracking</li>
                  <li>• Instant feedback</li>
                  <li>• Study materials</li>
                  <li>• Lab preparation guides</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Question Categories Preview */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Concept Review</h3>
              <p className="text-gray-300 text-sm">
                Review key concepts and theories before lab sessions
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-lg font-semibold text-white mb-2">Lab Preparation</h3>
              <p className="text-gray-300 text-sm">
                Prepare for specific lab activities and procedures
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
              <p className="text-gray-300 text-sm">
                Test your understanding with interactive quizzes
              </p>
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
