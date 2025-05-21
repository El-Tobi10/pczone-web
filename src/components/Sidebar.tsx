'use client';
import Link from "next/link";

export default function SidebarMenu() {
    return (
        <aside className="w-64 p-4 text-white border-r border-white/30">
            <h2 className="text-lg mb-4">Categorías</h2>
            <div className="ml-2">
                <p className="text-red-500"><Link href={"/productos?componente=cpus"}>Procesadores</Link></p>
                <ul className="ml-4 text-sm space-y-1">
                    <li>Procesadores AMD</li>
                    <li>Procesadores Intel</li>
                </ul>
                <p className="text-red-500 mt-4">Mothers</p>
                <ul className="ml-4 text-sm space-y-1">
                    <li>Mothers AMD</li>
                    <li>Mothers Intel</li>
                </ul>
                <p className="text-red-500 mt-4">Placas de Video</p>
                <ul className="ml-4 text-sm space-y-1">
                    <li>GeForce</li>
                    <li>Radeon</li>
                    <li>ARC</li>
                </ul>
                <p className="text-red-500 mt-4">Memoias RAM</p>
                <p className="text-red-500 mt-4">Almacenaminto</p>
                <ul className="ml-4 text-sm space-y-1">
                    <li>Discos Externos</li>
                    <li>Discos Duros HDD</li>
                    <li>Discos Solidos SSD</li>
                </ul>
                <p className="text-red-500 mt-4">Refrigeracion</p>
                <p className="text-red-500 mt-4">Gabinetes</p>
                <p className="text-red-500 mt-4">Fuentes</p>
            </div>
        </aside>
    );
}
