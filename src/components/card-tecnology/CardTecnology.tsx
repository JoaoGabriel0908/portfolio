import Image from "next/image";
import styles from "./CardTecnology.module.css";
import "@/app/globals.css";

export default function CardTecnology({ name, logoTec }: { name: string, logoTec: string }) {
    return (
        <div className={styles.glass + " flex flex-col rounded-lg p-4 shadow-md justify-center items-center cursor-pointer space-y-1"} style={{ width: "200px" }}>
            <span>{name}</span>
            <div className="flex justify-center items-center w-full h-16">
                <Image className="m-auto" width={50} height={50} src={logoTec} alt={name} />
            </div>
        </div>
    )
}