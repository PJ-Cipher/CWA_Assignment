import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { puzzleCreateSchema } from "./validators";

// GET /api/puzzles  (list)
export async function GET() {
  const puzzles = await prisma.puzzle.findMany({ orderBy: { id: "asc" } });
  return NextResponse.json(puzzles);
}

// POST /api/puzzles  (create)
export async function POST(req: Request) {
  const body = await req.json();
  const parsed = puzzleCreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const created = await prisma.puzzle.create({ data: parsed.data });
  return NextResponse.json(created, { status: 201 });
}
