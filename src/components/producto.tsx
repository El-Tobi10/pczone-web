import Image from "next/image";
import carritoIcon from "@/imagenes/Icons/carritoIcon.svg";

type ProductoProps = {
  nombre: string;
  precio: number;
  imagen: string;
  estado?: string;
};

export default function Producto({ nombre, precio, imagen, estado }: ProductoProps) {
  return (
    <div className="bg-white text-black rounded-lg p-5 m-5 max-w-[250px] h-[300px] shadow hover:scale-105 transition-transform">
      <Image src={imagen} alt={nombre} width={200} height={150} className="object-contain" />
      
      <p className="text-[14px] font-medium mt-2 line-clamp-2">{nombre}</p>
      
      {estado && <p className="text-[12px] text-gray-500 mb-1">{estado}</p>}

      <div className="flex items-center justify-between mt-2">
        <p className="text-[16px] text-black font-bold">${precio}</p>
        
        <button className="bg-[#4A89DC] rounded-lg p-2 hover:bg-[#102647] focus:outline-2 focus:outline-offset-2 focus:outline-[#4A89DC] active:bg-[#102647]">
          <Image src={carritoIcon} alt="Carrito de compras" width={25} height={25} className="invert" />
        </button>
      </div>
    </div>
  );
}
