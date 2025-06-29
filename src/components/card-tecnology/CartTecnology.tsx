import Image from "next/image";

export default function CardTecnology({ name, logoTec }: { name: string, logoTec: string }) {
    return (
        <div className="flex flex-col bg-gray-400 rounded-lg p-4 shadow-md justify-center items-center" style={{ width: "200px" }}>
            <span>{name}</span>
            <Image width={150} height={150} src={logoTec} alt={name}/>
        </div>
    )
}