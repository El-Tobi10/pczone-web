"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";

// Fix de íconos de leaflet en Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

// Tipo que viene desde la base de datos
type Producto = {
  id: number;
  nombre: string;
  precio: number;
  imagen_url: string;
  latitud: number;
  longitud: number;
};

export default function MapaInteractivo({ productos }: { productos: Producto[] }) {
  return (
    <MapContainer center={[-37.108, -56.857]} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {productos.map((p) => (
        <Marker key={p.id} position={[p.latitud, p.longitud]}>
          <Popup>
            <div className="text-center w-[180px]">
              <Image src={p.imagen_url || "/imagenes/fallback.png"} alt={p.nombre} width={160} height={90} className="mx-auto rounded" />
              <p className="text-sm mt-2 font-semibold">{p.nombre}</p>
              <p className="text-blue-600 font-bold">${p.precio}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
