import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

// Keep database connection alive during development
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "error", "warn"],
  });

// Prevent multiple database connections in development
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
