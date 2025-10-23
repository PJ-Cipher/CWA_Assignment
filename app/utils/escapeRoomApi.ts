const API_BASE = '/api/escape-rooms';

export interface EscapeRoom {
  id: string;
  name: string;
  description: string;
  timerMinutes: number;
  questions: Question[];
}

export interface Question {
  id: string;
  escapeRoomId: string;
  name: string;
  description: string;
  challenge: string;
  hint: string;
  answer: string;
  codeExample: string;
}

export const escapeRoomApi = {
  // Get all escape rooms
  async getAll(): Promise<EscapeRoom[]> {
    const response = await fetch(API_BASE);
    if (!response.ok) {
      throw new Error('Failed to fetch escape rooms');
    }
    return response.json();
  },

  // Get a specific escape room
  async getById(id: string): Promise<EscapeRoom> {
    const response = await fetch(`${API_BASE}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch escape room');
    }
    return response.json();
  },

  // Create a new escape room
  async create(escapeRoom: Omit<EscapeRoom, 'questions'>): Promise<EscapeRoom> {
    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(escapeRoom),
    });
    if (!response.ok) {
      throw new Error('Failed to create escape room');
    }
    return response.json();
  },

  // Update an escape room
  async update(id: string, escapeRoom: Partial<Omit<EscapeRoom, 'id' | 'questions'>>): Promise<EscapeRoom> {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(escapeRoom),
    });
    if (!response.ok) {
      throw new Error('Failed to update escape room');
    }
    return response.json();
  },

  // Delete an escape room
  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete escape room');
    }
  },

  // Create a question
  async createQuestion(escapeRoomId: string, question: Omit<Question, 'id' | 'escapeRoomId'>): Promise<Question> {
    const response = await fetch(`${API_BASE}/${escapeRoomId}/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(question),
    });
    if (!response.ok) {
      throw new Error('Failed to create question');
    }
    return response.json();
  },

  // Update a question
  async updateQuestion(escapeRoomId: string, questionId: string, question: Partial<Omit<Question, 'id' | 'escapeRoomId'>>): Promise<Question> {
    const response = await fetch(`${API_BASE}/${escapeRoomId}/questions/${questionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(question),
    });
    if (!response.ok) {
      throw new Error('Failed to update question');
    }
    return response.json();
  },

  // Delete a question
  async deleteQuestion(escapeRoomId: string, questionId: string): Promise<void> {
    const response = await fetch(`${API_BASE}/${escapeRoomId}/questions/${questionId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete question');
    }
  },
};
