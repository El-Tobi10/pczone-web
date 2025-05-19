"use client";
import Image from "next/image";

type Props = {
    productos: {
        id: number;
        name: string;
        price: number | null;
        imagen_url: string | null;
    }[];
};

export default function ProductoHorizontal({ productos } : Props) {
    return (
        <section className="text-white py-10 px-4 sm:px-10">
                        <h2>Conoce nuestros productos <strong>mas destacados</strong></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2"> 
                            {productos.map((p) => (
                                <div className="gap-6 m-3">
                                    <div className={"bg-white text-black rounded-xl shadow-md p-4 flex items-center space-x-4"}>
                                        
                                            <Image src={p.imagen_url ?? ""} alt="componente" width={200} height={150} className="w-32 h-32 object-contain"/>
                                            <div>
                                                <p className="text-[18px]">{p.name}</p>
                                                <p className="text-[16px] text-black font-bold">$ {Number(p.price ?? 0)}</p>
                                            </div>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
    )
}