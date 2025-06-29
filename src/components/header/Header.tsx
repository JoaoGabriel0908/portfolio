import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <nav className="flex items-center justify-center p-4 w-full bg-transparent text-black">
            <div className="flex items-center space-x-2 container justify-between">
                <div className="flex">
                    {/* <Image src="/images/poke.webp" width={30} height={30} alt={""}></Image> */}
                    <h1 className="text-clip text-red-400">João Gabriel</h1>
                </div>

                <ul className="flex space-x-4 justify-end">
                    <li>
                        <Link href="./">Sobre</Link>
                    </li>
                    <li>
                        <Link href="">Tecnologias</Link>
                    </li>
                    <li>
                        <Link href="./about">Serviços</Link>
                    </li>
                    <li>
                        <Link href="./about">Projetos</Link>
                    </li>
                    <li>
                        <Link href="./about">Contato</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}