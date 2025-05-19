import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PCZone",
  description: "eCommerce de hardware para PC",
  icons: {
    icon: "/favicon-pczone.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-gradient-to-b from-[#1F3C88] to-[#0B1C3A] min-h-screen text-white">
        <Header />
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
