import { z } from "zod";

export const puzzleCreateSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  timeLimitSeconds: z.number().int().positive().optional(),
  isActive: z.boolean().optional(),
});

export const puzzleUpdateSchema = puzzleCreateSchema.partial();
