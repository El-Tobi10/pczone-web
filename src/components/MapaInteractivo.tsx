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

type Producto = {
  nombre: string;
  precio: number;
  imagen: string;
  coords: [number, number];
  rating: number;
};

const productos: Producto[] = [
  {
    nombre: "MSI GTX 1050 Ti",
    precio: 115,
    imagen: "/imagenes/gtx.png",
    coords: [-37.104, -56.857],
    rating: 4.5,
  },
  {
    nombre: "Ryzen 7 5800X",
    precio: 425,
    imagen: "/imagenes/ryzen.png",
    coords: [-37.108, -56.860],
    rating: 4.9,
  },
  {
    nombre: "SSD Kingston 1TB",
    precio: 110,
    imagen: "/imagenes/ssd.png",
    coords: [-37.122, -56.845],
    rating: 4.3,
  },
];

export default function MapaInteractivo() {
  return (
    <MapContainer center={[-37.108, -56.857]} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {productos.map((p, i) => (
        <Marker key={i} position={p.coords}>
          <Popup>
            <div className="text-center w-[180px]">
              <Image src={p.imagen} alt={p.nombre} width={160} height={90} className="mx-auto rounded" />
              <p className="text-sm mt-2 font-semibold">{p.nombre}</p>
              <p className="text-blue-600 font-bold">${p.precio}</p>
              <p className="text-yellow-500 text-sm">⭐ {p.rating} (12)</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
