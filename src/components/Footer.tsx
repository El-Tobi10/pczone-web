import Link from "next/link";
import Image from "next/image";
import logo_movile from "@/imagenes/logo-pcZone.png";
import logo_whats from "@/imagenes/Icons/whatsappIcon.png";
import logo_link from "@/imagenes/Icons/LinkedinIcon.png";
import logo_insta from "@/imagenes/Icons/InstagramIcon.png";
import logo_x from "@/imagenes/Icons/TwitterIcon.png";

export default function Footer() {
    return (
        <footer className="bg-[#0B1C3A] text-white px-6 py-2">
            <div className="flex items-center justify-around w-full">
                {/* FOOTER: logo */}
                <div className="flex justify-start my-4">
                    <Link href="#">
                        <Image src={logo_movile} alt="logo PCZone footer" width={120} height={120} className="rounded-2x1" />
                    </Link>
                </div>
                {/* FOOTER: Botones centrales */}
                <div className="flex flex-row gap-10 justify-center my-4">
                    <Link href={"#"} className="font-bold">
                        Boton Sorpresa
                    </Link>
                    <Link href={"#"} className="font-bold">
                        Preguntas Frecuentes
                    </Link>
                </div>
                {/* FOOTER: Redes sociales */}
                <div className="grid grid-cols-2 gap-4">
                    <Link href={"#"}>
                        <Image src={logo_insta} alt="Instagram" width={30} height={30}/>
                    </Link>
                    <Link href={"#"}>
                        <Image src={logo_x} alt="X, Twitter" width={30} height={30}/>
                    </Link>
                    <Link href={"#"}>
                        <Image src={logo_whats} alt="Whatsapp" width={30} height={30}/>
                        
                    </Link>
                    <Link href={"#"}>
                        <Image src={logo_link} alt="Linkedin" width={30} height={30}/>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

