import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-start justify-start px-10 pt-24 mx-40">
      <div className="text-white ">
        <h1 className="text-10x1 md:text-8xl font-bold mb-8 leading-snug">
          Encuentra y compra<br />hardware para PC
        </h1>

        <p className="text-gray-200 mb-12 text-7xl md:text-6xl leading-relaxed">
          Explora nuestra amplia selección de componentes para PC<br /> o busca por tu zona.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justyfy-center">
        <Link
          href="productos"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-25 py-10 text-5xl rounded-xl text-center transition min-w-[300px] "
        >
          Ver productos
        </Link>

        <Link
          href="#"
          className="bg-white hover:bg-blue-200 text-black font-semibold px-25 py-10 text-5xl rounded-xl text-center transition min-w-[300px] "
        >
          Arma tu PC
        </Link>

        <Link
          href="compra-x-zona"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-25 py-10 text-5xl rounded-xl text-center transition min-w-[300px] "
        >
          Busca por tu zona
        </Link>
      </div>

    </div>
    </main>
  );
}
