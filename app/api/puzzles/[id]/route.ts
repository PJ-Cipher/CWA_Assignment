import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { puzzleUpdateSchema } from "../validators";

function parseId(params: { id?: string }) {
  const id = Number(params.id);
  return Number.isInteger(id) && id > 0 ? id : null;
}

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: idString } = await params;
  const id = parseId({ id: idString });
  if (!id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  const puzzle = await (prisma as any).puzzle.findUnique({ where: { id } });
  if (!puzzle) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(puzzle);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: idString } = await params;
  const id = parseId({ id: idString });
  if (!id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  const body = await req.json();
  const parsed = puzzleUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  try {
    const updated = await (prisma as any).puzzle.update({ where: { id }, data: parsed.data });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: idString } = await params;
  const id = parseId({ id: idString });
  if (!id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  try {
    const deleted = await (prisma as any).puzzle.delete({ where: { id } });
    return NextResponse.json(deleted);
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
