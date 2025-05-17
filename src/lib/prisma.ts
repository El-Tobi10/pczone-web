import { PrismaClient } from "@/generated/prisma"; // ← Importamos desde la ruta correcta

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // Opcional: eliminá esto si no querés ver logs
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
