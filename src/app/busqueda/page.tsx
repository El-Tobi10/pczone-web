import prisma from "@/lib/prisma";
import Producto from "@/components/producto";
import SidebarMenu from '@/components/Sidebar';

export default async function CategoriaPage({ params }: { params: { categoria: string } }) {
    const productosRaw = await prisma.graficas.findMany(); // o `findMany({ where: { categoria: params.categoria } })` si usás una tabla general
    const productos = productosRaw.map((p) => ({
            ...p,
            price: p.price ? Number(p.price) : null,
        }));
    return (
        <div className="flex min-h-screen">
        
            <SidebarMenu/>

            {/* Resultados */}
            <main className="flex-1 p-4 text-white">
                <h1 className="text-2xl font-semibold mt-6 capitalize">{params.categoria}</h1>

                <div className="flex justify-end mb-4">
                    <select className="bg-[#4A89DC] text-white px-4 py-2 rounded">
                        <option>Ordenar por...</option>
                        <option>Precio</option>
                        <option>Nombre</option>
                    </select>
                </div>

                <br className="border-b border-white/30"/>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {productos.map((p) => (
                        <Producto
                            key={p.id}
                            nombre={p.name}
                            precio={Number(p.price ?? 0)}
                            imagen_url={p.imagen_url ?? ""}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
