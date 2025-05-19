import Image from "next/image";
import Link from "next/link";
import logo from "@/imagenes/logo-pcZone.png";
import banner2 from "@/imagenes/20210803041200.webp";
import "@/app/globals.css"; 

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Imagen a la izquierda en pantallas grandes */}
      <div className="hidden md:block w-[80%] relative h-screen overflow-hidden">
    <Image
    src={banner2}
    alt="Componentes"
    layout="fill"
    objectFit="cover"
    className="clip-diagonal"
    />
    </div>


      {/* Formulario a la derecha */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10 z-12">
        <Image src={logo} alt="PCZone Logo" className="w-60 mb-12 rounded-2xl" />
        <form className="w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Email..."
            className="w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
          />
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
