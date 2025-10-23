import { test, expect } from '@playwright/test';
import { resetDb } from './reset-db';


test.beforeEach(async () => { await resetDb(); });


test('POST /api/puzzles then GET /api/puzzles includes the new item', async ({ request, baseURL }) => {
  // Create a new puzzle
  const create = await request.post(`${baseURL}/api/puzzles`, {
    data: { title: 'Keypad', description: 'Enter numbers', timeLimitSeconds: 150 }
  });
  expect(create.ok()).toBeTruthy();
  const created = await create.json();
  expect(created.id).toBeTruthy();
  expect(created.title).toBe('Keypad');

  // Get all puzzles and verify the new one is included
  const list = await request.get(`${baseURL}/api/puzzles`);
  expect(list.ok()).toBeTruthy();
  const items = await list.json();
  expect(Array.isArray(items)).toBe(true);
  expect(items.some((p: any) => p.title === 'Keypad')).toBe(true);
});