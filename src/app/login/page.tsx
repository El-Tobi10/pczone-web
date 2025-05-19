import Image from "next/image";
import Link from "next/link";
import logo_movile from "@/imagenes/logo-pcZone.png";
import banner from "@/imagenes/Banner-componentes-ordenadores.jpg";
import banner2 from "@/imagenes/Banner-componentes-ordenadores.webp";

export default function Login() {
    return (
        <>  
            <div className="min-h-screen flex">
                {/* Lado izquierdo (formulario) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
                    <Image src={logo_movile} alt="PCZone Logo" className="w-50 mb-8" />
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
                    <div className="text-center text-white">
                        ¿Aún no tienes cuenta?
                    </div>
                    <Link href="register-user"
                        type="button"
                        className="w-full border border-white text-white py-2 rounded-md hover:bg-white hover:text-blue-800 transition"
                    >
                        Registrarse
                    </Link>
                    </form>
                </div>

                {/* Lado derecho (imagen) */}
                <div className="hidden md:block w-1/2">
                    <Image
                    src={banner2}
                    alt="Componentes"
                    className="h-full w-full object-cover"
                    />
                </div>
                </div>
        </>
    );
}
