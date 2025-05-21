"use client";

import { useState } from "react";
import Image from "next/image";

export default function ChatBot() {
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: { from: "user" | "bot"; text: string } = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: input }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      const botMessage: { from: "user" | "bot"; text: string } = { from: "bot", text: data.response || "No hay respuesta." };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [...prev, { from: "bot", text: "Error al obtener respuesta." }]);
    }

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Botón flotante con imagen más grande */}
    <div
    className="fixed bottom-6 right-6 z-50 cursor-pointer w-[200px] h-[200px] flex items-center justify-center"
    onClick={toggleChat}
    >
    <Image
    src="/imagenes/PCZone_Horizntal.png"
    alt="Abrir ChatBot"
    width={200}
    height={200}
    className="rounded-full shadow-lg hover:scale-105 transition-transform"
    />
    </div>


      {/* Caja del chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[320px] max-h-[80vh] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden z-50 border border-gray-300">
          <div className="bg-blue-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
            💬 Asistente PCZone
            <button onClick={toggleChat} className="text-white text-sm">✖</button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-white text-black">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg text-sm max-w-[80%] ${
                  msg.from === "user"
                    ? "bg-blue-100 text-black self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex border-t p-2 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 p-2 rounded-l border border-gray-300 outline-none text-sm text-black"
              placeholder="Escribe tu consulta..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 text-sm"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
