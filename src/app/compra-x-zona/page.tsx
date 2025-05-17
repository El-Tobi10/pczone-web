"use client";
import Producto from "@/components/producto";
import dynamic from "next/dynamic";


const MapaInteractivo = dynamic(() => import("@/components/MapaInteractivo"), { ssr: false });

export default function CompraEnTuZona() {
  const productos = [
    {
      nombre: "Ryzen 7 5800X",
      precio: 450,
      estado: "Nuevo",
      imagen: "/imagenes/ryzen.png",
    },
    {
      nombre: "RX 580 8GB",
      precio: 300,
      estado: "Usado",
      imagen: "/imagenes/rx580.png",
    },
    {
      nombre: "SSD 1TB Kingston",
      precio: 120,
      estado: "Nuevo",
      imagen: "/imagenes/ssd.png",
    },
    {
        nombre: "Placa Base MSI B450",
        precio: 150,
        estado: "Casi nuevo",
        imagen: "/imagenes/placa_base.png",
    },
    {
        nombre: "Fuente Corsair 650W",
        precio: 80,
        estado: "Nuevo",
        imagen: "/imagenes/fuente.png",
    }
  ];

  const filtros = ["Zona", "Estado", "Componente", "Rango de precio"];

  return (
    <main className="flex min-h-screen">
      <section className="w-full md:w-1/2 p-6">
        {/* Filtros */}
        <div className="bg-white text-black rounded-full px-6 py-2 flex gap-4 font-semibold mb-6 shadow-md">
          {filtros.map((filtro) => (
            <div
              key={filtro}
              className="relative group cursor-pointer hover:text-blue-600"
            >
              {filtro.toUpperCase()}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 z-10">
                <p className="text-sm text-gray-600">Opciones de {filtro.toLowerCase()}</p>
              </div>
            </div>
          ))}
          <span className="ml-auto cursor-pointer">🔍</span>
        </div>

        <p className="text-white text-sm mb-4">{productos.length} coincidencias</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {productos.map((prod, i) => (
            <Producto
              key={i}
              nombre={prod.nombre}
              precio={prod.precio}
              estado={prod.estado}
              imagen={prod.imagen}
            />
          ))}
        </div>
      </section>

      {/* Mapa */}
  
      <section className="hidden md:block w-1/2 h-[100vh]">
      <MapaInteractivo />
      </section>
    </main>
  );
}
