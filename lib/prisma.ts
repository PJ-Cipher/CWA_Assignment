// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

// Create a single PrismaClient instance (important for Next.js dev hot-reload)
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "error", "warn"],
  });

// Reuse the same client across hot reloads (avoid 'too many connections')
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
