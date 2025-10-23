import { test, expect } from '@playwright/test';
import { resetDb } from './reset-db';


test.beforeEach(async () => { await resetDb(); });


test('PUT /api/puzzles/:id then DELETE /api/puzzles/:id', async ({ request, baseURL }) => {
  // Set up test data
  const create = await request.post(`${baseURL}/api/puzzles`, {
    data: { title: 'Test Puzzle', description: 'Test Description', timeLimitSeconds: 60 }
  });
  expect(create.ok()).toBeTruthy();
  const created = await create.json();
  const id = created.id;

  // Update the puzzle
  const updatedRes = await request.put(`${baseURL}/api/puzzles/${id}`, {
    data: { isActive: false, title: 'Door Code (disabled)' }
  });
  expect(updatedRes.ok()).toBeTruthy();
  const updated = await updatedRes.json();
  expect(updated.isActive).toBe(false);

  // Delete the puzzle
  const delRes = await request.delete(`${baseURL}/api/puzzles/${id}`);
  expect(delRes.ok()).toBeTruthy();

  // Verify the puzzle is deleted
  const readRes = await request.get(`${baseURL}/api/puzzles/${id}`);
  expect(readRes.status()).toBe(404);
});