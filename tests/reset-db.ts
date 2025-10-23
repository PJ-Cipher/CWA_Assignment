import { execSync } from 'child_process';

export async function resetDb() {
  try {
    execSync('npx prisma db push --force-reset', { stdio: 'inherit' });
  } catch (error) {
    console.error('Failed to reset database:', error);
  }
}

