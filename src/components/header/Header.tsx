"use client";
import { Poppins } from "next/font/google";
import styles from "./Header.module.css";
import Link from "next/link";

const poppinsBold = Poppins({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-poppins',
});

const poppinsNormal = Poppins({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-poppins',
});

export default function Header() {
    return (
        <nav className={styles.glass + " fixed items-center justify-center p-4 w-full text-black z-10"}>
            <div className="flex items-center space-x-2 justify-between w-full">
                <div className="flex">
                    {/* <Image src="/images/poke.webp" width={30} height={30} alt={""}></Image> */}
                    <h1 className={poppinsBold.className + " text-clip hover:text-gray-500 cursor-pointer"}>João Gabriel</h1>
                </div>

                <ul className="flex space-x-6 justify-end">
                    <li className={poppinsNormal.className + " text-clip hover:text-gray-500"}>
                        <Link href="#about">Sobre</Link>
                    </li>
                    <li className={poppinsNormal.className + " text-clip hover:text-gray-500"}>
                        <Link href="#technology">Tecnologias</Link>
                    </li>
                    <li className={poppinsNormal.className + " text-clip hover:text-gray-500"}>
                        <Link href="#service">Serviços</Link>
                    </li>
                    <li className={poppinsNormal.className + " text-clip hover:text-gray-500"}>
                        <Link href="#project">Projetos</Link>
                    </li>
                    <li className={poppinsNormal.className + " text-clip hover:text-gray-500"}>
                        <Link href="#contact">Contato</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}