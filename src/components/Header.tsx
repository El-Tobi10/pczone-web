import Image from "next/image";
import Link from "next/link";
import logo_movile from "@/imagenes/logo-pcZone.png";
import logo from "@/imagenes/PCZone_Horizntal.png";
import carritoIcon from "@/imagenes/Icons/carritoIcon.svg";


export default function Header() {
  return (
    <header className="bg-[#0E1C2F] text-white px-6 py-2">
      <div className="flex items-center justify-between w-full">
        
        {/* IZQUIERDA: logo + links */}
        <div className="flex items-center gap-10 flex-1">
          <Link href="/">
            <Image src={logo_movile} alt="PCZone Logo movile" width={70} height={40} className="object-contain rounded-2xl md:hidden" />
            <Image src={logo} alt="PCZone Logo" width={100} height={40} className="object-contain rounded-full md:block" />
          </Link>
          <nav className="flex gap-10 font-medium">
            <Link href="/">INICIO</Link>
            <Link href="productos">PRODUCTOS</Link>
            <Link href="#">ARMA TU PC</Link>
            <Link href="compra-x-zona">COMPRA EN TU ZONA</Link>
          </nav>
        </div>

        {/* CENTRO: buscador */}
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1">
          <input
            type="text"
            placeholder="Buscar..."
            aria-label="Buscar"
            className="rounded-full px-4 py-1 text-black text-sm focus:outline-none w-32 md:w-48"
          />
          <button className="bg-white rounded-full p-1">
            🔍
          </button>
        </div>

        {/* DERECHA: enlaces extra */}
        <div className="flex items-center gap-10 font-medium flex-1 justify-center-safe">
          <Link href="guias">GUIAS</Link>
          <Link href="#" className="flex"><Image src={carritoIcon} alt="Carrito de compras" width={18} height={18} className="invert mr-2"/>CARRITO</Link>
          <Link href="">FAQ</Link> 
        </div>
        <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
            <Link href="login" className="flex justify-start"> 
              👤
          </Link>
        </div>
      </div>
    </header>
  );
}
