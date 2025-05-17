// app/registro/page.tsx (o en tu carpeta de rutas en /pages si no usas app router)
import React from "react";
import Image from "next/image";
import logo_movile from "@/imagenes/logo-pcZone.png";
import Link from "next/link";


const RegistroForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0c2e63] to-[#0b1c3b] text-black">
      <div className="relative bg-white rounded-xl shadow-md p-10 w-full max-w-4xl mx-4">
        <div className="relative mb-6">
            <Image src={logo_movile} alt="PCZone Logo" className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto w-40 rounded-2xl" /> 
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nombre */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Nombre <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100"
              required
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Contraseña <span className="text-red-500">*</span></label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100"
              required
            />
          </div>

          {/* Apellido */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Apellido <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100"
              required
            />
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Fecha de nacimiento</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100"
            />
          </div>

          {/* Correo electrónico */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Correo electrónico <span className="text-red-500">*</span></label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100"
              required
            />
          </div>
        </form>

        {/* Botones */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
            Crear cuenta
          </button>
          <Link href="register-comm" className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-6 py-2 rounded-lg transition"> 
              Registrarse como comercio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistroForm;
