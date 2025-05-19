import prisma from "@/lib/prisma";
import CompraZonaCliente from "./CompraZonaCliente";

export default async function CompraEnTuZona() {
  const productosRaw = await prisma.graficas.findMany({
    take: 10,
  });

  // Convertimos los Decimal a número o string
  const productos = productosRaw.map((p) => ({
    ...p,
    price: p.price ? Number(p.price) : null,
  }));

  return <CompraZonaCliente productos={productos} />;
}
