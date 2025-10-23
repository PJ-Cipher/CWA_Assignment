import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { escapeRoomCreateSchema } from "./validators";

export async function GET() {
  try {
    const escapeRooms = await prisma.escapeRoom.findMany({
      include: {
        questions: true
      },
      orderBy: { createdAt: "desc" }
    });
    return NextResponse.json(escapeRooms);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: "Failed to fetch escape rooms" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = escapeRoomCreateSchema.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const created = await prisma.escapeRoom.create({
      data: parsed.data,
      include: {
        questions: true
      }
    });
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: "Failed to create escape room" }, { status: 500 });
  }
}
