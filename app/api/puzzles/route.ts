import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { puzzleUpdateSchema } from "./validators";


function idFrom(params: { id?: string }) {
const n = Number(params.id);
if (!Number.isInteger(n) || n <= 0) return null;
return n;
}


// GET /api/puzzles/:id
export async function GET(_: Request, { params }: { params: { id: string } }) {
const id = idFrom(params);
if (!id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });
const puzzle = await prisma.puzzle.findUnique({ where: { id } });
if (!puzzle) return NextResponse.json({ error: "Not found" }, { status: 404 });
return NextResponse.json(puzzle);
}


// PUT /api/puzzles/:id
export async function PUT(req: Request, { params }: { params: { id: string } }) {
const id = idFrom(params);
if (!id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });
const json = await req.json();
const parsed = puzzleUpdateSchema.safeParse(json);
if (!parsed.success) {
return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
}
try {
const updated = await prisma.puzzle.update({ where: { id }, data: parsed.data });
return NextResponse.json(updated);
} catch {
return NextResponse.json({ error: "Not found" }, { status: 404 });
}
}


// DELETE /api/puzzles/:id
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
const id = idFrom(params);
if (!id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });
try {
const deleted = await prisma.puzzle.delete({ where: { id } });
return NextResponse.json(deleted);
} catch {
return NextResponse.json({ error: "Not found" }, { status: 404 });
}
}