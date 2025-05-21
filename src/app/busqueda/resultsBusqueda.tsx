import Producto from "@/components/producto";
import SidebarMenu from '@/components/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResultBusqueda({ params }: { params: { producto: string } }) {
        const [productos, setProductos] = useState<any[]>([]);
        const [page, setPage] = useState(1);
        const [totalPages, setTotalPages] = useState(1);
        const router = useRouter();
        const [orden, setOrden] = useState('id');
    
        const componente = params.producto;
    
        useEffect(() => {
            fetch(`/api/productos?componente=${componente}&orden=${orden}&page=${page}&limit=12`)
            .then((res) => res.json())
            .then((data) => {
                setProductos(data.productos);
                setTotalPages(data.pages);
            });
        }, [page, orden, componente]);
    
        if (!productos || productos.length === 0) {
            return <p className="text-white">No se encontraron productos.</p>;
        }
    
        return (
            <div className="flex min-h-screen">
                <SidebarMenu/>
    
                {/* Resultados */}
                <main className="flex-1 p-4 text-white">
                    <h1 className="text-2xl font-semibold mt-6 capitalize">{params.producto}</h1>
    
                    <div className="flex justify-end mb-4">
                        <select value={orden} onChange={(e) => setOrden(e.target.value)} className="bg-[#4A89DC] text-white px-4 py-2 rounded">
                            <option value="id">Ordenar por...</option>
                            <option value="precio_desc">Mayor Precio</option>
                            <option value="precio_asc">Menor Precio</option>
                        </select>
                    </div>
    
                    <br className="border-b border-white/30"/>
    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {productos.map((p: any) => (
                            <Producto
                                key={p.id}
                                nombre={p.name}
                                precio={Number(p.price ?? 0)}
                                imagen_url={p.imagen_url ?? ""}
                            />
                        ))}
                    </div>
    
                    {/* Paginación */}
                    <div className="flex justify-center mt-8 gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-600 hover:bg-blue-100 cursor-pointer'}`}>
                            {i + 1}
                        </button>
                        ))}
                    </div>
                </main>
            </div>
        );
}