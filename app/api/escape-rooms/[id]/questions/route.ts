import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { questionCreateSchema } from "../../validators";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const questions = await prisma.question.findMany({
    where: { escapeRoomId: id },
    orderBy: { createdAt: "asc" }
  });
  
  return NextResponse.json(questions);
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  
  const questionData = {
    ...body,
    escapeRoomId: id
  };
  
  const parsed = questionCreateSchema.safeParse(questionData);
  
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const created = await prisma.question.create({
      data: parsed.data
    });
    return NextResponse.json(created, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create question" }, { status: 500 });
  }
}
