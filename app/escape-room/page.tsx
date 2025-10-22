'use client';

import { useState, useEffect } from 'react';

type Room = {
  id: number;
  name: string;
  description: string;
  challenge: string;
  hint: string;
  answer: string;
  codeExample?: string;
};

const rooms: Room[] = [
  {
    id: 1,
    name: "The Variable Vault",
    description: "You enter a dimly lit room. On the wall, you see a cryptic message: 'To unlock the door, declare the secret...'",
    challenge: "What keyword do you use in JavaScript to declare a variable that can be reassigned?",
    hint: "It rhymes with 'pet' and was introduced in ES6.",
    answer: "let",
    codeExample: "let secretKey = 'unlock';"
  },
  {
    id: 2,
    name: "The Loop Chamber",
    description: "The door opens to reveal a circular room with mirrors everywhere. A voice echoes: 'Only by repeating the pattern can you escape...'",
    challenge: "Which loop structure would you use to iterate exactly 5 times? (Type the keyword)",
    hint: "It's commonly used when you know the exact number of iterations needed.",
    answer: "for",
    codeExample: "for (let i = 0; i < 5; i++) { console.log(i); }"
  },
  {
    id: 3,
    name: "The Conditional Corridor",
    description: "You find yourself in a hallway with two doors. A sign reads: 'Choose wisely, for only one path is true...'",
    challenge: "What keyword is used to check a condition in JavaScript?",
    hint: "It comes before 'else' in conditional statements.",
    answer: "if",
    codeExample: "if (door === 'left') { escape(); }"
  },
  {
    id: 4,
    name: "The Function Fortress",
    description: "A massive locked gate blocks your path. Inscribed on it: 'To proceed, you must define your purpose...'",
    challenge: "What keyword is used to declare a function in JavaScript?",
    hint: "It's the traditional way to create reusable code blocks.",
    answer: "function",
    codeExample: "function unlockGate() { return true; }"
  },
  {
    id: 5,
    name: "The Array Archive",
    description: "You enter a library with countless scrolls. A riddle appears: 'I hold many, yet I am one. My items are ordered, from zero I've begun...'",
    challenge: "What data structure holds multiple values in an ordered list? (Hint: starts with 'a')",
    hint: "It uses square brackets [] and can hold multiple values.",
    answer: "array",
    codeExample: "let treasures = ['gold', 'silver', 'bronze'];"
  },
  {
    id: 6,
    name: "The Object Observatory",
    description: "The final room! A telescope points to the stars. On the floor: 'Everything is connected. Key and value, paired together...'",
    challenge: "What data structure stores data in key-value pairs?",
    hint: "It uses curly braces {} and represents real-world entities.",
    answer: "object",
    codeExample: "let exit = { locked: false, key: 'found' };"
  }
];

export default function EscapeRoom() {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [showError, setShowError] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isGameStarted && !isGameComplete) {
      timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isGameStarted, isGameComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartGame = () => {
    setIsGameStarted(true);
    setCurrentRoom(0);
    setTimeElapsed(0);
    setAttempts(0);
    setHintsUsed(0);
    setIsGameComplete(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttempts(prev => prev + 1);
    
    if (userAnswer.toLowerCase().trim() === rooms[currentRoom].answer.toLowerCase()) {
      setShowError(false);
      setUserAnswer('');
      setShowHint(false);
      
      if (currentRoom === rooms.length - 1) {
        setIsGameComplete(true);
      } else {
        setTimeout(() => {
          setCurrentRoom(prev => prev + 1);
        }, 500);
      }
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  const handleShowHint = () => {
    setShowHint(true);
    setHintsUsed(prev => prev + 1);
  };

  const getScore = () => {
    const baseScore = 1000;
    const timePenalty = Math.floor(timeElapsed / 10) * 5;
    const attemptPenalty = (attempts - rooms.length) * 10;
    const hintPenalty = hintsUsed * 50;
    return Math.max(0, baseScore - timePenalty - attemptPenalty - hintPenalty);
  };

  if (!isGameStarted) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                🚪 The Code Escape Room
              </h1>
              <p className="text-2xl mb-2" style={{ color: 'var(--muted-foreground)' }}>
                Interactive Coding Challenge
              </p>
            </div>

            <div className="border-2 p-8 rounded-lg mb-8" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--card-foreground)' }}>
                🔓 Welcome, Brave Coder!
              </h2>
              
              <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--background)' }}>
                <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--muted-foreground)' }}>
                  You wake up in a mysterious digital realm, trapped by an ancient algorithm. 
                  To escape, you must navigate through <strong>6 chambers</strong>, each guarded by a coding challenge. 
                  Only by proving your knowledge of programming fundamentals can you unlock each door and find your way to freedom.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  The clock is ticking... Can you escape before time runs out?
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                    <span>🎯</span> Game Features
                  </h3>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)' }}>
                    <li>• 6 Progressive Challenges</li>
                    <li>• Real-time Timer</li>
                    <li>• Hint System</li>
                    <li>• Score Tracking</li>
                    <li>• Code Examples</li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                    <span>📚</span> What You'll Learn
                  </h3>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)' }}>
                    <li>• Variables & Data Types</li>
                    <li>• Control Structures</li>
                    <li>• Functions</li>
                    <li>• Arrays & Objects</li>
                    <li>• Problem Solving</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleStartGame}
                  className="px-8 py-4 text-xl font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                  style={{
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none'
                  }}
                >
                  🎮 Start Your Escape!
                </button>
              </div>
            </div>

            <div className="text-center mt-8">
              <a 
                href="/components" 
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors border"
                style={{ 
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)'
                }}
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

  if (isGameComplete) {
    const score = getScore();
    const performance = score > 800 ? 'Outstanding!' : score > 600 ? 'Great Job!' : score > 400 ? 'Good Work!' : 'Nice Try!';
    
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-8xl mb-6">🎉</div>
              <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Congratulations!
              </h1>
              <p className="text-2xl mb-8" style={{ color: 'var(--muted-foreground)' }}>
                You've Successfully Escaped!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-lg text-center border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <div className="text-4xl mb-2">⏱️</div>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--card-foreground)' }}>
                  {formatTime(timeElapsed)}
                </div>
                <div style={{ color: 'var(--muted-foreground)' }}>Time Elapsed</div>
              </div>

              <div className="p-6 rounded-lg text-center border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--card-foreground)' }}>
                  {attempts}
                </div>
                <div style={{ color: 'var(--muted-foreground)' }}>Total Attempts</div>
              </div>

              <div className="p-6 rounded-lg text-center border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--card-foreground)' }}>
                  {score}
                </div>
                <div style={{ color: 'var(--muted-foreground)' }}>Final Score</div>
              </div>
            </div>

            <div className="p-8 rounded-lg text-center border mb-8" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--card-foreground)' }}>
                {performance}
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--muted-foreground)' }}>
                You've mastered the basics of JavaScript fundamentals. Keep practicing to become an even better programmer!
              </p>
              
              <div className="space-y-2 mb-6" style={{ color: 'var(--muted-foreground)' }}>
                <p>🏆 Rooms Completed: {rooms.length}</p>
                <p>💡 Hints Used: {hintsUsed}</p>
                <p>🎯 Accuracy: {Math.round((rooms.length / attempts) * 100)}%</p>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setIsGameStarted(false);
                    setIsGameComplete(false);
                    setCurrentRoom(0);
                    setUserAnswer('');
                    setAttempts(0);
                    setTimeElapsed(0);
                    setHintsUsed(0);
                  }}
                  className="px-6 py-3 rounded-lg font-semibold transition-colors"
                  style={{
                    backgroundColor: '#10b981',
                    color: 'white'
                  }}
                >
                  🔄 Play Again
                </button>
                
                <a
                  href="/components"
                  className="px-6 py-3 rounded-lg font-semibold transition-colors border"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                >
                  🏠 Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const room = rooms[currentRoom];
  const progress = ((currentRoom + 1) / rooms.length) * 100;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-lg text-center border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="text-sm mb-1" style={{ color: 'var(--muted-foreground)' }}>Room</div>
              <div className="text-2xl font-bold" style={{ color: 'var(--card-foreground)' }}>
                {currentRoom + 1} / {rooms.length}
              </div>
            </div>
            
            <div className="p-4 rounded-lg text-center border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="text-sm mb-1" style={{ color: 'var(--muted-foreground)' }}>Time</div>
              <div className="text-2xl font-bold" style={{ color: 'var(--card-foreground)' }}>
                {formatTime(timeElapsed)}
              </div>
            </div>
            
            <div className="p-4 rounded-lg text-center border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="text-sm mb-1" style={{ color: 'var(--muted-foreground)' }}>Attempts</div>
              <div className="text-2xl font-bold" style={{ color: 'var(--card-foreground)' }}>
                {attempts}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
              <div 
                className="h-full transition-all duration-500"
                style={{ 
                  width: `${progress}%`,
                  backgroundColor: '#10b981'
                }}
              />
            </div>
            <p className="text-center mt-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>
              Progress: {Math.round(progress)}%
            </p>
          </div>

          {/* Room Content */}
          <div className="border-2 p-8 rounded-lg mb-6" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--card-foreground)' }}>
              {room.name}
            </h2>
            
            <div className="mb-6 p-6 rounded-lg" style={{ backgroundColor: 'var(--background)' }}>
              <p className="text-lg italic mb-4" style={{ color: 'var(--muted-foreground)' }}>
                {room.description}
              </p>
              
              <div className="border-l-4 pl-4 border-blue-500">
                <p className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
                  {room.challenge}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-4">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  className="w-full px-4 py-3 rounded-lg border-2 text-lg transition-colors"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: showError ? '#ef4444' : 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                  autoFocus
                />
                {showError && (
                  <p className="text-red-500 mt-2 text-sm">
                    ❌ Incorrect answer. Try again!
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-lg font-semibold transition-colors"
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white'
                  }}
                >
                  🔓 Submit Answer
                </button>
                
                <button
                  type="button"
                  onClick={handleShowHint}
                  className="px-6 py-3 rounded-lg font-semibold transition-colors border"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                >
                  💡 Hint
                </button>
              </div>
            </form>

            {showHint && (
              <div className="mt-4 p-4 rounded-lg border-l-4 border-yellow-500" style={{ backgroundColor: 'var(--background)' }}>
                <p className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>💡 Hint:</p>
                <p style={{ color: 'var(--muted-foreground)' }}>{room.hint}</p>
                {room.codeExample && (
                  <div className="mt-3">
                    <p className="text-sm mb-2" style={{ color: 'var(--muted-foreground)' }}>Example:</p>
                    <code className="block p-3 rounded font-mono text-sm" style={{ backgroundColor: '#1e1e1e', color: '#d4d4d4' }}>
                      {room.codeExample}
                    </code>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Room Navigation Info */}
          <div className="text-center p-4 rounded-lg border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
              🚪 {rooms.length - currentRoom - 1} rooms remaining until escape
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
