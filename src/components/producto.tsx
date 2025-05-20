import Image from "next/image";
import carritoIcon from "@/imagenes/Icons/carritoIcon.svg";

type ProductoProps = {
  nombre: string;
  precio: number;
  imagen_url?: string;
};

export default function Producto({ nombre, precio, imagen_url }: ProductoProps) {
  return (
    <div className="bg-white text-black rounded-lg p-5 m-5 max-w-[250px] h-[300px] shadow">
      <Image
        src={imagen_url || "/imagenes/producto-ejemplo.png"}
        alt={nombre}
        width={200}
        height={150}
        className="w-40 h-40 object-contain mx-auto"
      />
      <p className="text-[16px] mt-2 line-clamp-2">{nombre}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-[16px] text-black font-bold">${precio}</p>
        <button className="bg-[#4A89DC] rounded-lg p-2 hover:bg-[#102647]">
          <Image src={carritoIcon} alt="Carrito" width={25} height={25} className="invert" />
        </button>
      </div>
    </div>
  );
}