"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import logo from "@/imagenes/logo-pcZone.png";
import banner2 from "@/imagenes/20210803041200.webp";
import "@/app/globals.css";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, contrasenia }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ ¡Inicio de sesión exitoso!");
      router.push("/"); // Redirige al index
    } else {
      setError(data.error || "Error al iniciar sesión");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:block w-[80%] relative h-screen overflow-hidden">
        <Image
          src={banner2}
          alt="Componentes"
          layout="fill"
          objectFit="cover"
          className="clip-diagonal"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10 z-12">
        <Image src={logo} alt="PCZone Logo" className="w-60 mb-12 rounded-2xl" />
        <form className="w-full max-w-sm space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasenia}
            onChange={(e) => setContrasenia(e.target.value)}
            className="w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
            required
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
          >
            Iniciar sesión
          </button>
          <div className="text-center text-white">¿Aún no tienes cuenta?</div>
          <Link
            href="/register-user"
            className="w-full block text-center border border-white text-white py-2 rounded-md hover:bg-white hover:text-blue-800 transition"
          >
            Registrarse
          </Link>
        </form>
      </div>
    </div>
  );
}
