import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const nuevoUsuario = await prisma.ususarios.create({
      data: {
        nombre: body.nombre.trim(),
        apellido: body.apellido.trim(),
        mail: body.email.trim(),
        contrasenia: body.contrasenia.trim(),
        fecha_nacimiento: new Date(body.fecha_nacimiento),
        permisos: false,
      },
    });

    return NextResponse.json({ ok: true, usuario: nuevoUsuario });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return NextResponse.json(
      { ok: false, error: "Registro fallido" },
      { status: 500 }
    );
  }
}
