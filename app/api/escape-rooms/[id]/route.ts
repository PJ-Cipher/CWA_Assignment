import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { escapeRoomUpdateSchema } from "../validators";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const escapeRoom = await prisma.escapeRoom.findUnique({
    where: { id },
    include: {
      questions: true
    }
  });
  
  if (!escapeRoom) {
    return NextResponse.json({ error: "Escape room not found" }, { status: 404 });
  }
  
  return NextResponse.json(escapeRoom);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const parsed = escapeRoomUpdateSchema.safeParse(body);
  
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const updated = await prisma.escapeRoom.update({
      where: { id },
      data: parsed.data,
      include: {
        questions: true
      }
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Escape room not found" }, { status: 404 });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  try {
    const deleted = await prisma.escapeRoom.delete({
      where: { id },
      include: {
        questions: true
      }
    });
    return NextResponse.json(deleted);
  } catch (error) {
    return NextResponse.json({ error: "Escape room not found" }, { status: 404 });
  }
}
