import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { questionUpdateSchema } from "../../../validators";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string; questionId: string }> }) {
  const { id, questionId } = await params;
  
  const question = await prisma.question.findFirst({
    where: { 
      id: questionId,
      escapeRoomId: id
    }
  });
  
  if (!question) {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }
  
  return NextResponse.json(question);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string; questionId: string }> }) {
  const { id, questionId } = await params;
  const body = await req.json();
  
  const parsed = questionUpdateSchema.safeParse(body);
  
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const updated = await prisma.question.update({
      where: { id: questionId },
      data: parsed.data
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string; questionId: string }> }) {
  const { id, questionId } = await params;
  
  try {
    const deleted = await prisma.question.delete({
      where: { id: questionId }
    });
    return NextResponse.json(deleted);
  } catch (error) {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }
}
