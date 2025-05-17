import Producto from "@/components/producto";
import prisma from "@/lib/prisma"; 

export default async function CompraEnTuZona() {
  const graficas = await prisma.graficas.findMany({
    take: 9, // podés ajustar esto luego
  });

  return (
    <main className="flex min-h-screen">
      <section className="w-full md:w-1/2 p-6">
        <div className="bg-white text-black rounded-full px-6 py-2 flex gap-4 font-semibold mb-6 shadow-md">
          {["Zona", "Estado", "Componente", "Rango de precio"].map((filtro) => (
            <div key={filtro} className="relative group cursor-pointer hover:text-blue-600">
              {filtro.toUpperCase()}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 z-10">
                <p className="text-sm text-gray-600">Opciones de {filtro.toLowerCase()}</p>
              </div>
            </div>
          ))}
          <span className="ml-auto cursor-pointer">🔍</span>
        </div>

        <p className="text-white text-sm mb-4">{graficas.length} coincidencias</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {graficas.map((gpu) => (
            <Producto
              key={gpu.id}
              nombre={gpu.name}
              precio={Number(gpu.price ?? 0)}
              imagen_url={gpu.imagen_url ?? ""}
            />
          ))}
        </div>
      </section>

      {/* El mapa puede ir acá como antes */}
      <section className="hidden md:block w-1/2 h-screen">
        {/* <MapaWrapper /> o el iframe por ahora */}
      </section>
    </main>
  );
}
