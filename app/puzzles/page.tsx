type Puzzle = {
  id: number;
  title: string;
  description: string;
  timeLimitSeconds: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export default async function PuzzlesPage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/puzzles`, { cache: 'no-store' });
    const puzzles = await res.json().catch(() => []);
    return (
      <main style={{ padding: 24 }}>
        <h1>Puzzles</h1>
        <ul>
          {Array.isArray(puzzles) && puzzles.map((p: Puzzle) => (
            <li key={p.id}>{p.title} — {p.description}</li>
          ))}
        </ul>
      </main>
    );
  }