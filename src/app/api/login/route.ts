import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { email, contrasenia } = await req.json();

  // Aplicar trim para eliminar espacios extra al inicio o final
  const cleanedEmail = email.trim();
  const cleanedPassword = contrasenia.trim();

  try {
    const usuario = await prisma.ususarios.findFirst({
      where: { mail: cleanedEmail },
    });

    if (!usuario || usuario.contrasenia.trim() !== cleanedPassword) {
      return NextResponse.json(
        { ok: false, error: "Credenciales incorrectas" },
        { status: 401 }
      );
    }

    return NextResponse.json({ ok: true, user: usuario });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return NextResponse.json(
      { ok: false, error: "Error interno" },
      { status: 500 }
    );
  }
}
