import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { puzzleCreateSchema } from "./validators";

export async function GET(_req: Request) {
  const puzzles = await (prisma as any).puzzle.findMany({ orderBy: { id: "asc" } });
  return NextResponse.json(puzzles);
}
export async function POST(req: Request) {
  const body = await req.json();
  const parsed = puzzleCreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const created = await (prisma as any).puzzle.create({ data: parsed.data });
  return NextResponse.json(created, { status: 201 });
}
