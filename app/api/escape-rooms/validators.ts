import { z } from "zod";

export const escapeRoomCreateSchema = z.object({
  id: z.string().min(1, "ID is required"),
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  timerMinutes: z.number().int().min(0).default(0),
});

export const questionCreateSchema = z.object({
  id: z.string().min(1, "ID is required"),
  escapeRoomId: z.string().min(1, "Escape Room ID is required"),
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  challenge: z.string().min(1, "Challenge is required"),
  hint: z.string().min(1, "Hint is required"),
  answer: z.string().min(1, "Answer is required"),
  codeExample: z.string().min(1, "Code example is required"),
});

export const escapeRoomUpdateSchema = escapeRoomCreateSchema.partial();
export const questionUpdateSchema = questionCreateSchema.partial();
