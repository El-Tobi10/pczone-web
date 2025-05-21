// src/app/api/chat/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo", // ✅ modelo seguro y soportado
        messages: [
          {
            role: "system",
            content: "Sos un experto en armado de PCs. Recomendá componentes compatibles según el uso indicado por el usuario.",
          },
          {
            role: "user",
            content: message,
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Respuesta cruda del error:", errorText);
      throw new Error(`OpenRouter API error: ${response.statusText}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Sin respuesta de la IA.";

    return NextResponse.json({ response: reply });
  } catch (error) {
    console.error("Error en el chat:", error);
    return NextResponse.json({ response: "Error al generar respuesta." }, { status: 500 });
  }
}
