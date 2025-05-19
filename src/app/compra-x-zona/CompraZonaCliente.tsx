"use client";

import dynamic from "next/dynamic";
import Producto from "@/components/producto";

const MapaInteractivo = dynamic(() => import("@/components/MapaInteractivo"), {
  ssr: false,
});

type Props = {
  productos: {
    id: number;
    name: string;
    price: number | null;
    imagen_url: string | null;
  }[];
};

function generarCoordenadasAleatorias(): [number, number] {
  const baseLat = -37.108;
  const baseLng = -56.857;
  const lat = baseLat + Math.random() * 0.01 - 0.005;
  const lng = baseLng + Math.random() * 0.01 - 0.005;
  return [parseFloat(lat.toFixed(6)), parseFloat(lng.toFixed(6))];
}

export default function CompraZonaCliente({ productos }: Props) {
  return (
    <main className="flex min-h-screen">
      <section className="w-full md:w-1/2 p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {productos.map((p) => (
            <Producto
              key={p.id}
              nombre={p.name}
              precio={Number(p.price ?? 0)}
              imagen_url={p.imagen_url ?? ""}
            />
          ))}
        </div>
      </section>

      <section className="hidden md:block w-1/2 h-screen">
        <MapaInteractivo
          productos={productos.map((p) => {
            const [latitud, longitud] = generarCoordenadasAleatorias();

            return {
              id: p.id,
              nombre: p.name,
              precio: Number(p.price ?? 0),
              imagen_url: p.imagen_url ?? "/imagenes/fallback.png",
              latitud,
              longitud,
            };
          })}
        />
      </section>
    </main>
  );
}
