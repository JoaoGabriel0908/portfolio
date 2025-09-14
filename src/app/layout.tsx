import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Gabriel Costa Flor",
  description: "João Gabriel Costa Flor - Desenvolvedor Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="perfil.png" />
        <script src="https://kit.fontawesome.com/d0d3619a1c.js" crossOrigin="anonymous" defer></script>
      </head>
      <body
        className={`${geistSans.variable} bg-gray-100`}
      >

        <Header />
        <main className="main-container mb-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
