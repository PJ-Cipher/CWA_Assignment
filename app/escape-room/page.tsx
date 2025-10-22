'use client';

import { useState, useEffect } from 'react';
import { cookieUtils } from '../utils/cookies';

type Question = {
  id: string;
  name: string;
  description: string;
  challenge: string;
  hint: string;
  answer: string;
  codeExample: string;
};

type EscapeRoom = {
  id: string;
  name: string;
  description: string;
  questions: Question[];
};

type PreviewState = {
  isActive: boolean;
  currentQuestionIndex: number;
  userAnswer: string;
  showHint: boolean;
  showError: boolean;
  attempts: number;
  completed: boolean;
};

const COOKIE_NAME = 'escape_rooms_data';

export default function EscapeRoomBuilder() {
  const [escapeRooms, setEscapeRooms] = useState<EscapeRoom[]>([]);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [editingRoom, setEditingRoom] = useState<EscapeRoom | null>(null);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [isAddingNewRoom, setIsAddingNewRoom] = useState(false);
  const [isAddingNewQuestion, setIsAddingNewQuestion] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [previewRoomId, setPreviewRoomId] = useState<string | null>(null);
  const [preview, setPreview] = useState<PreviewState>({
    isActive: false,
    currentQuestionIndex: 0,
    userAnswer: '',
    showHint: false,
    showError: false,
    attempts: 0,
    completed: false
  });

  // Room form state
  const [roomFormData, setRoomFormData] = useState<EscapeRoom>({
    id: '',
    name: '',
    description: '',
    questions: []
  });

  // Question form state
  const [questionFormData, setQuestionFormData] = useState<Question>({
    id: '',
    name: '',
    description: '',
    challenge: '',
    hint: '',
    answer: '',
    codeExample: ''
  });

  // Load from cookies on mount
  useEffect(() => {
    const savedData = cookieUtils.getCookie(COOKIE_NAME);
    if (savedData) {
      try {
        const parsed = JSON.parse(decodeURIComponent(savedData));
        setEscapeRooms(parsed);
      } catch (e) {
        console.error('Failed to load escape rooms from cookies:', e);
      }
    }
  }, []);

  // Save to cookies whenever escapeRooms changes
  useEffect(() => {
    if (escapeRooms.length > 0) {
      const encoded = encodeURIComponent(JSON.stringify(escapeRooms));
      cookieUtils.setCookie(COOKIE_NAME, encoded, 365);
    }
  }, [escapeRooms]);

  const resetRoomForm = () => {
    setRoomFormData({
      id: '',
      name: '',
      description: '',
      questions: []
    });
    setEditingRoom(null);
    setIsAddingNewRoom(false);
  };

  const resetQuestionForm = () => {
    setQuestionFormData({
      id: '',
      name: '',
      description: '',
      challenge: '',
      hint: '',
      answer: '',
      codeExample: ''
    });
    setEditingQuestion(null);
    setIsAddingNewQuestion(false);
  };

  const handleAddRoom = () => {
    setIsAddingNewRoom(true);
    setRoomFormData({
      id: Date.now().toString(),
      name: '',
      description: '',
      questions: []
    });
  };

  const handleEditRoom = (room: EscapeRoom) => {
    setEditingRoom(room);
    setRoomFormData(room);
    setIsAddingNewRoom(true);
  };

  const handleDeleteRoom = (id: string) => {
    if (confirm('Are you sure you want to delete this escape room and all its questions?')) {
      setEscapeRooms(escapeRooms.filter(room => room.id !== id));
      if (selectedRoomId === id) {
        setSelectedRoomId(null);
      }
    }
  };

  const handleSaveRoom = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!roomFormData.name) {
      alert('Please enter a room name.');
      return;
    }

    if (editingRoom) {
      setEscapeRooms(escapeRooms.map(room => 
        room.id === editingRoom.id ? roomFormData : room
      ));
    } else {
      setEscapeRooms([...escapeRooms, roomFormData]);
      setSelectedRoomId(roomFormData.id);
    }
    
    resetRoomForm();
  };

  const handleAddQuestion = (roomId: string) => {
    setSelectedRoomId(roomId);
    setIsAddingNewQuestion(true);
    setQuestionFormData({
      id: Date.now().toString(),
      name: '',
      description: '',
      challenge: '',
      hint: '',
      answer: '',
      codeExample: ''
    });
  };

  const handleEditQuestion = (roomId: string, question: Question) => {
    setSelectedRoomId(roomId);
    setEditingQuestion(question);
    setQuestionFormData(question);
    setIsAddingNewQuestion(true);
  };

  const handleDeleteQuestion = (roomId: string, questionId: string) => {
    if (confirm('Are you sure you want to delete this question?')) {
      setEscapeRooms(escapeRooms.map(room => {
        if (room.id === roomId) {
          return {
            ...room,
            questions: room.questions.filter(q => q.id !== questionId)
          };
        }
        return room;
      }));
    }
  };

  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!questionFormData.name || !questionFormData.challenge || !questionFormData.answer) {
      alert('Please fill in at least Name, Challenge, and Answer fields.');
      return;
    }

    if (!selectedRoomId) return;

    setEscapeRooms(escapeRooms.map(room => {
      if (room.id === selectedRoomId) {
        if (editingQuestion) {
          return {
            ...room,
            questions: room.questions.map(q => 
              q.id === editingQuestion.id ? questionFormData : q
            )
          };
        } else {
          return {
            ...room,
            questions: [...room.questions, questionFormData]
          };
        }
      }
      return room;
    }));
    
    resetQuestionForm();
  };

  const handleMoveQuestion = (roomId: string, questionIndex: number, direction: 'up' | 'down') => {
    setEscapeRooms(escapeRooms.map(room => {
      if (room.id === roomId) {
        const newQuestions = [...room.questions];
        const newIndex = direction === 'up' ? questionIndex - 1 : questionIndex + 1;
        
        if (newIndex >= 0 && newIndex < newQuestions.length) {
          [newQuestions[questionIndex], newQuestions[newIndex]] = 
          [newQuestions[newIndex], newQuestions[questionIndex]];
        }
        
        return { ...room, questions: newQuestions };
      }
      return room;
    }));
  };

  const handleExport = () => {
    setShowExportModal(true);
  };

  const getExportCode = () => {
    return JSON.stringify(escapeRooms, null, 2);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getExportCode());
    alert('Escape room data copied to clipboard!');
  };

  const handleClearAllData = () => {
    if (confirm('Are you sure you want to clear all escape rooms? This cannot be undone!')) {
      setEscapeRooms([]);
      cookieUtils.deleteCookie(COOKIE_NAME);
      setSelectedRoomId(null);
    }
  };

  // Preview Mode Functions
  const startPreview = (roomId: string) => {
    const room = escapeRooms.find(r => r.id === roomId);
    if (!room || room.questions.length === 0) {
      alert('This escape room has no questions to preview!');
      return;
    }
    setPreviewRoomId(roomId);
    setPreview({
      isActive: true,
      currentQuestionIndex: 0,
      userAnswer: '',
      showHint: false,
      showError: false,
      attempts: 0,
      completed: false
    });
  };

  const handlePreviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const room = escapeRooms.find(r => r.id === previewRoomId);
    if (!room) return;

    const currentQuestion = room.questions[preview.currentQuestionIndex];
    
    setPreview(prev => ({ ...prev, attempts: prev.attempts + 1 }));
    
    if (preview.userAnswer.toLowerCase().trim() === currentQuestion.answer.toLowerCase().trim()) {
      setPreview(prev => ({ ...prev, showError: false, userAnswer: '', showHint: false }));
      
      if (preview.currentQuestionIndex === room.questions.length - 1) {
        setPreview(prev => ({ ...prev, completed: true }));
      } else {
        setTimeout(() => {
          setPreview(prev => ({ 
            ...prev, 
            currentQuestionIndex: prev.currentQuestionIndex + 1 
          }));
        }, 500);
      }
    } else {
      setPreview(prev => ({ ...prev, showError: true }));
      setTimeout(() => {
        setPreview(prev => ({ ...prev, showError: false }));
      }, 2000);
    }
  };

  const exitPreview = () => {
    setPreview({
      isActive: false,
      currentQuestionIndex: 0,
      userAnswer: '',
      showHint: false,
      showError: false,
      attempts: 0,
      completed: false
    });
    setPreviewRoomId(null);
  };

  // Preview Mode Render
  if (preview.isActive && previewRoomId && !preview.completed) {
    const room = escapeRooms.find(r => r.id === previewRoomId);
    if (!room) return null;

    const currentQuestion = room.questions[preview.currentQuestionIndex];
    const progress = ((preview.currentQuestionIndex + 1) / room.questions.length) * 100;

    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold" style={{ color: 'var(--foreground)' }}>
                  🎮 Preview: {room.name}
                </h1>
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  {room.description}
                </p>
              </div>
              <button
                onClick={exitPreview}
                className="px-4 py-2 rounded-lg border transition-colors"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)'
                }}
              >
                ✕ Exit Preview
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-lg text-center border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <div className="text-sm mb-1" style={{ color: 'var(--muted-foreground)' }}>Question</div>
                <div className="text-2xl font-bold">{preview.currentQuestionIndex + 1} / {room.questions.length}</div>
              </div>
              <div className="p-4 rounded-lg text-center border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <div className="text-sm mb-1" style={{ color: 'var(--muted-foreground)' }}>Attempts</div>
                <div className="text-2xl font-bold">{preview.attempts}</div>
              </div>
              <div className="p-4 rounded-lg text-center border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <div className="text-sm mb-1" style={{ color: 'var(--muted-foreground)' }}>Progress</div>
                <div className="text-2xl font-bold">{Math.round(progress)}%</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
                <div 
                  className="h-full transition-all duration-500"
                  style={{ width: `${progress}%`, backgroundColor: '#10b981' }}
                />
              </div>
            </div>

            <div className="border-2 p-8 rounded-lg" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <h2 className="text-3xl font-bold mb-4">{currentQuestion.name}</h2>
              
              <div className="mb-6 p-6 rounded-lg" style={{ backgroundColor: 'var(--background)' }}>
                {currentQuestion.description && (
                  <p className="text-lg italic mb-4" style={{ color: 'var(--muted-foreground)' }}>
                    {currentQuestion.description}
                  </p>
                )}
                <div className="border-l-4 pl-4 border-blue-500">
                  <p className="text-xl font-semibold">{currentQuestion.challenge}</p>
                </div>
              </div>

              <form onSubmit={handlePreviewSubmit} className="mb-4">
                <input
                  type="text"
                  value={preview.userAnswer}
                  onChange={(e) => setPreview(prev => ({ ...prev, userAnswer: e.target.value }))}
                  placeholder="Type your answer here..."
                  className="w-full px-4 py-3 rounded-lg border-2 mb-4"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: preview.showError ? '#ef4444' : 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                  autoFocus
                />
                {preview.showError && (
                  <p className="text-red-500 mb-4">❌ Incorrect answer. Try again!</p>
                )}

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-lg font-semibold"
                    style={{ backgroundColor: '#3b82f6', color: 'white' }}
                  >
                    🔓 Submit Answer
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreview(prev => ({ ...prev, showHint: !prev.showHint }))}
                    className="px-6 py-3 rounded-lg font-semibold border"
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

              {preview.showHint && currentQuestion.hint && (
                <div className="mt-4 p-4 rounded-lg border-l-4 border-yellow-500" style={{ backgroundColor: 'var(--background)' }}>
                  <p className="font-semibold mb-2">💡 Hint:</p>
                  <p style={{ color: 'var(--muted-foreground)' }}>{currentQuestion.hint}</p>
                  {currentQuestion.codeExample && (
                    <div className="mt-3">
                      <p className="text-sm mb-2" style={{ color: 'var(--muted-foreground)' }}>Example:</p>
                      <code className="block p-3 rounded font-mono text-sm" style={{ backgroundColor: '#1e1e1e', color: '#d4d4d4' }}>
                        {currentQuestion.codeExample}
                      </code>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (preview.completed && previewRoomId) {
    const room = escapeRooms.find(r => r.id === previewRoomId);
    if (!room) return null;

    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl mb-6">🎉</div>
            <h1 className="text-5xl font-bold mb-4">Escape Room Complete!</h1>
            <p className="text-xl mb-4" style={{ color: 'var(--muted-foreground)' }}>
              You've completed "{room.name}"
            </p>
            <p className="text-lg mb-8" style={{ color: 'var(--muted-foreground)' }}>
              Total attempts: {preview.attempts} • Questions: {room.questions.length}
            </p>
            <button
              onClick={exitPreview}
              className="px-8 py-4 rounded-lg font-semibold text-lg"
              style={{ backgroundColor: '#10b981', color: 'white' }}
            >
              ← Back to Builder
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              🏗️ Escape Room Builder
            </h1>
            <p className="text-xl" style={{ color: 'var(--muted-foreground)' }}>
              Create escape rooms with multiple questions
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button
              onClick={handleAddRoom}
              className="px-6 py-3 rounded-lg font-semibold transition-colors"
              style={{ backgroundColor: '#10b981', color: 'white' }}
            >
              ➕ Create New Escape Room
            </button>
            <button
              onClick={handleExport}
              disabled={escapeRooms.length === 0}
              className="px-6 py-3 rounded-lg font-semibold border transition-colors"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
                opacity: escapeRooms.length === 0 ? 0.5 : 1,
                cursor: escapeRooms.length === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              📤 Export All Data
            </button>
            <button
              onClick={handleClearAllData}
              disabled={escapeRooms.length === 0}
              className="px-6 py-3 rounded-lg font-semibold border transition-colors"
              style={{
                backgroundColor: '#ef4444',
                color: 'white',
                opacity: escapeRooms.length === 0 ? 0.5 : 1,
                cursor: escapeRooms.length === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              🗑️ Clear All Data
            </button>
          </div>

          {/* Room Form */}
          {isAddingNewRoom && (
            <div className="border-2 p-6 rounded-lg mb-8" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {editingRoom ? '✏️ Edit Escape Room' : '➕ Create New Escape Room'}
                </h2>
                <button
                  onClick={resetRoomForm}
                  className="px-4 py-2 rounded-lg border"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                >
                  ✕ Cancel
                </button>
              </div>

              <form onSubmit={handleSaveRoom} className="space-y-4">
                <div>
                  <label className="block mb-2 font-semibold" style={{ color: 'var(--foreground)' }}>
                    Escape Room Name *
                  </label>
                  <input
                    type="text"
                    value={roomFormData.name}
                    onChange={(e) => setRoomFormData({ ...roomFormData, name: e.target.value })}
                    placeholder="e.g., JavaScript Fundamentals Challenge"
                    className="w-full px-4 py-2 rounded-lg border"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)'
                    }}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold" style={{ color: 'var(--foreground)' }}>
                    Description
                  </label>
                  <textarea
                    value={roomFormData.description}
                    onChange={(e) => setRoomFormData({ ...roomFormData, description: e.target.value })}
                    placeholder="Describe the overall theme of this escape room..."
                    className="w-full px-4 py-2 rounded-lg border min-h-24"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)'
                    }}
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-lg font-semibold"
                    style={{ backgroundColor: '#10b981', color: 'white' }}
                  >
                    {editingRoom ? '💾 Save Changes' : '➕ Create Escape Room'}
                  </button>
                  <button
                    type="button"
                    onClick={resetRoomForm}
                    className="px-6 py-3 rounded-lg font-semibold border"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Question Form */}
          {isAddingNewQuestion && selectedRoomId && (
            <div className="border-2 p-6 rounded-lg mb-8" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {editingQuestion ? '✏️ Edit Question' : '➕ Add New Question'}
                </h2>
                <button
                  onClick={resetQuestionForm}
                  className="px-4 py-2 rounded-lg border"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                >
                  ✕ Cancel
                </button>
              </div>

              <form onSubmit={handleSaveQuestion} className="space-y-4">
                <div>
                  <label className="block mb-2 font-semibold" style={{ color: 'var(--foreground)' }}>
                    Question Name *
                  </label>
                  <input
                    type="text"
                    value={questionFormData.name}
                    onChange={(e) => setQuestionFormData({ ...questionFormData, name: e.target.value })}
                    placeholder="e.g., The Variable Vault"
                    className="w-full px-4 py-2 rounded-lg border"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)'
                    }}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold" style={{ color: 'var(--foreground)' }}>
                    Description
                  </label>
                  <textarea
                    value={questionFormData.description}
                    onChange={(e) => setQuestionFormData({ ...questionFormData, description: e.target.value })}
                    placeholder="Set the scene for this challenge..."
                    className="w-full px-4 py-2 rounded-lg border min-h-24"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)'
                    }}
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold" style={{ color: 'var(--foreground)' }}>
                    Challenge Question *
                  </label>
                  <textarea
                    value={questionFormData.challenge}
                    onChange={(e) => setQuestionFormData({ ...questionFormData, challenge: e.target.value })}
                    placeholder="What question must the player answer?"
                    className="w-full px-4 py-2 rounded-lg border min-h-24"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)'
                    }}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-semibold" style={{ color: 'var(--foreground)' }}>
                      Answer *
                    </label>
                    <input
                      type="text"
                      value={questionFormData.answer}
                      onChange={(e) => setQuestionFormData({ ...questionFormData, answer: e.target.value })}
                      placeholder="Correct answer (case-insensitive)"
                      className="w-full px-4 py-2 rounded-lg border"
                      style={{
                        backgroundColor: 'var(--background)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)'
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold" style={{ color: 'var(--foreground)' }}>
                      Hint
                    </label>
                    <input
                      type="text"
                      value={questionFormData.hint}
                      onChange={(e) => setQuestionFormData({ ...questionFormData, hint: e.target.value })}
                      placeholder="Optional hint for players"
                      className="w-full px-4 py-2 rounded-lg border"
                      style={{
                        backgroundColor: 'var(--background)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-semibold" style={{ color: 'var(--foreground)' }}>
                    Code Example (Optional)
                  </label>
                  <textarea
                    value={questionFormData.codeExample}
                    onChange={(e) => setQuestionFormData({ ...questionFormData, codeExample: e.target.value })}
                    placeholder="Optional code example..."
                    className="w-full px-4 py-2 rounded-lg border font-mono text-sm min-h-20"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)'
                    }}
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-lg font-semibold"
                    style={{ backgroundColor: '#10b981', color: 'white' }}
                  >
                    {editingQuestion ? '💾 Save Changes' : '➕ Add Question'}
                  </button>
                  <button
                    type="button"
                    onClick={resetQuestionForm}
                    className="px-6 py-3 rounded-lg font-semibold border"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Escape Rooms List */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              📚 Your Escape Rooms ({escapeRooms.length})
            </h2>

            {escapeRooms.length === 0 ? (
              <div className="border-2 border-dashed p-12 rounded-lg text-center" style={{ borderColor: 'var(--border)' }}>
                <div className="text-6xl mb-4">🚪</div>
                <p className="text-xl mb-2" style={{ color: 'var(--foreground)' }}>No escape rooms yet</p>
                <p style={{ color: 'var(--muted-foreground)' }}>
                  Click "Create New Escape Room" to get started
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {escapeRooms.map((room) => (
                  <div
                    key={room.id}
                    className="border-2 p-6 rounded-lg"
                    style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--card-foreground)' }}>
                          {room.name}
                        </h3>
                        {room.description && (
                          <p className="mb-3 italic" style={{ color: 'var(--muted-foreground)' }}>
                            {room.description}
                          </p>
                        )}
                        <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                          📝 {room.questions.length} question{room.questions.length !== 1 ? 's' : ''}
                        </p>
                      </div>

                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => startPreview(room.id)}
                          disabled={room.questions.length === 0}
                          className="px-4 py-2 rounded border text-sm"
                          style={{
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            opacity: room.questions.length === 0 ? 0.5 : 1,
                            cursor: room.questions.length === 0 ? 'not-allowed' : 'pointer'
                          }}
                        >
                          🎮 Preview
                        </button>
                        <button
                          onClick={() => handleEditRoom(room)}
                          className="px-4 py-2 rounded border text-sm"
                          style={{
                            backgroundColor: 'var(--background)',
                            borderColor: 'var(--border)',
                            color: 'var(--foreground)'
                          }}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => handleDeleteRoom(room.id)}
                          className="px-4 py-2 rounded border text-sm"
                          style={{
                            backgroundColor: '#ef4444',
                            color: 'white'
                          }}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>

                    {/* Questions in this room */}
                    <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold" style={{ color: 'var(--foreground)' }}>
                          Questions:
                        </h4>
                        <button
                          onClick={() => handleAddQuestion(room.id)}
                          className="px-3 py-1 rounded text-sm"
                          style={{ backgroundColor: '#10b981', color: 'white' }}
                        >
                          ➕ Add Question
                        </button>
                      </div>

                      {room.questions.length === 0 ? (
                        <p className="text-sm italic" style={{ color: 'var(--muted-foreground)' }}>
                          No questions yet. Click "Add Question" to create one.
                        </p>
                      ) : (
                        <div className="space-y-3">
                          {room.questions.map((question, index) => (
                            <div
                              key={question.id}
                              className="p-4 rounded-lg border"
                              style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
                            >
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-bold" style={{ color: 'var(--muted-foreground)' }}>
                                      #{index + 1}
                                    </span>
                                    <span className="font-semibold" style={{ color: 'var(--foreground)' }}>
                                      {question.name}
                                    </span>
                                  </div>
                                  <p className="text-sm mb-1" style={{ color: 'var(--muted-foreground)' }}>
                                    {question.challenge}
                                  </p>
                                  <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                                    Answer: <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--card)' }}>
                                      {question.answer}
                                    </code>
                                  </p>
                                </div>

                                <div className="flex gap-2 ml-4">
                                  <div className="flex flex-col gap-1">
                                    <button
                                      onClick={() => handleMoveQuestion(room.id, index, 'up')}
                                      disabled={index === 0}
                                      className="px-2 py-1 rounded border text-xs"
                                      style={{
                                        backgroundColor: 'var(--card)',
                                        borderColor: 'var(--border)',
                                        color: 'var(--foreground)',
                                        opacity: index === 0 ? 0.5 : 1,
                                        cursor: index === 0 ? 'not-allowed' : 'pointer'
                                      }}
                                    >
                                      ↑
                                    </button>
                                    <button
                                      onClick={() => handleMoveQuestion(room.id, index, 'down')}
                                      disabled={index === room.questions.length - 1}
                                      className="px-2 py-1 rounded border text-xs"
                                      style={{
                                        backgroundColor: 'var(--card)',
                                        borderColor: 'var(--border)',
                                        color: 'var(--foreground)',
                                        opacity: index === room.questions.length - 1 ? 0.5 : 1,
                                        cursor: index === room.questions.length - 1 ? 'not-allowed' : 'pointer'
                                      }}
                                    >
                                      ↓
                                    </button>
                                  </div>
                                  <button
                                    onClick={() => handleEditQuestion(room.id, question)}
                                    className="px-3 py-1 rounded border text-sm"
                                    style={{
                                      backgroundColor: '#3b82f6',
                                      color: 'white'
                                    }}
                                  >
                                    ✏️
                                  </button>
                                  <button
                                    onClick={() => handleDeleteQuestion(room.id, question.id)}
                                    className="px-3 py-1 rounded border text-sm"
                                    style={{
                                      backgroundColor: '#ef4444',
                                      color: 'white'
                                    }}
                                  >
                                    🗑️
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Export Modal */}
          {showExportModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="max-w-4xl w-full p-6 rounded-lg" style={{ backgroundColor: 'var(--card)' }}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--card-foreground)' }}>
                    📤 Export All Escape Rooms
                  </h2>
                  <button
                    onClick={() => setShowExportModal(false)}
                    className="px-4 py-2 rounded-lg border"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)'
                    }}
                  >
                    ✕ Close
                  </button>
                </div>

                <p className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
                  Copy this JSON data to save or share your escape rooms:
                </p>

                <pre
                  className="p-4 rounded-lg overflow-auto max-h-96 mb-4 text-sm"
                  style={{ backgroundColor: '#1e1e1e', color: '#d4d4d4' }}
                >
                  {getExportCode()}
                </pre>

                <div className="flex gap-4">
                  <button
                    onClick={handleCopyCode}
                    className="flex-1 px-6 py-3 rounded-lg font-semibold"
                    style={{ backgroundColor: '#10b981', color: 'white' }}
                  >
                    📋 Copy to Clipboard
                  </button>
                  <button
                    onClick={() => setShowExportModal(false)}
                    className="px-6 py-3 rounded-lg font-semibold border"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Back Button */}
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
