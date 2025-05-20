import Producto from "@/components/producto";
type Props = {
    productos: {
        id: number;
        name: string;
        price: number | null;
        imagen_url: string | null;
    }[];
};
export default function ResultBusqueda({productos }: Props) {
    return (
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
    )
}