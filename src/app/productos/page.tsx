import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";
import ProductoHorizontal from "./product-horizontal";

export default async function Productos() {
    const productosRaw = await prisma.graficas.findMany({
        take: 4,
        });
        
        const productos = productosRaw.map((p) => ({
            ...p,
            price: p.price ? Number(p.price) : null,
        }));
    return (
        <main className="flex flex-col px-10 pt-24 mx-40">
            <div className="flex flex-col gap-10 rounded-lg">
                <Link href={""} className="outline flex justify-center">
                    <Image src={""} alt="imagen de producto" width={2000} height={350}/>
                </Link>
            </div>
            
            <ProductoHorizontal  productos={productos} />

            <div className="flex flex-col gap-10">
                <Link href={""} className="outline flex justify-center rounded-lg">
                    <Image src={""} alt="imagen de producto" width={2000} height={350}/>
                </Link>
            </div>

            <section className="text-white py-10 px-4 sm:px-10">
                <h2>Explora Nuestros <strong>Componentes</strong></h2>
                <div className="grid grid-cols-6 grid-rows-2 gap-2">
                    <Link href={""} className="col-span-2 row-span-2 row-start-1"><Image src={""} alt="" width={200} height={150} className="w-110 h-auto rounded-md object-contain"/>Procesadores</Link>
                    <Link href={""} className="col-start-3 row-start-1"><Image src={""} alt="" width={200} height={150} className="w-50 h-auto rounded-md object-contain"/>Mothers</Link>
                    <Link href={""} className="col-start-3 row-start-2"><Image src={""} alt="" width={200} height={150} className="w-50 h-auto rounded-md object-contain"/>Fuentes</Link>
                    <Link href={""} className="col-start-4 row-start-1"><Image src={""} alt="" width={200} height={150} className="w-50 h-auto rounded-md object-contain"/>Memorias RAM</Link>
                    <Link href={""} className="col-start-4 row-start-2"><Image src={""} alt="" width={200} height={150} className="w-50 h-auto rounded-md object-contain"/>Almacenamiento</Link>
                    <Link href={""} className="col-start-5 row-start-1"><Image src={""} alt="" width={200} height={150} className="w-50 h-auto rounded-md object-contain"/>Gabinetes</Link>
                    <Link href={""} className="col-start-5 row-start-2"><Image src={""} alt="" width={200} height={150} className="w-50 h-auto rounded-md object-contain"/>Coolers</Link>
                    <Link href={""} className="row-span-2 col-start-6 row-start-1"><Image src={""} alt="" width={200} height={150} className="w-50 h-80 rounded-md object-contain"/>Placas de Video</Link>
                </div>
            </section>
        </main>
    )
}