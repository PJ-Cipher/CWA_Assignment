import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { puzzleCreateSchema } from "./validators";

// Type assertion for Prisma client to avoid TypeScript issues
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const prismaClient = prisma as any;

export async function GET() {
  const puzzles = await prismaClient.puzzle.findMany({ orderBy: { id: "asc" } });
  return NextResponse.json(puzzles);
}
export async function POST(req: Request) {
  const body = await req.json();
  const parsed = puzzleCreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const created = await prismaClient.puzzle.create({ data: parsed.data });
  return NextResponse.json(created, { status: 201 });
}
