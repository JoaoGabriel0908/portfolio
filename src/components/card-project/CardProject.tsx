import styles from "./CardProject.module.css";
import "@/app/globals.css";

export default function CardProject({ title, desc, image, link, tags }: { title: string, desc: string, image: string, link: string, tags: string[] }) {
    return (
        <div className={styles.glass + "  flex flex-col rounded-lg shadow-md justify-start cursor-pointer min-w-72 max-w-80"}>
            <div className="relative w-full mb-2">
                <img src={image} alt={title} className="object-fit-fill rounded-t-lg" />
            </div>

            <div className="flex flex-col p-4 space-y-2 h-full">
                <span className="text-primary text-sm">{title}</span>
                <span className="text-black font-bold text-lg">{title}</span>
                <p className="text-gray-800 text-sm">{desc}</p>
                <div className="flex space-x-2 mt-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">{tag}</span>
                    ))}
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline">
                    Ver Projeto
                </a>
            </div>
        </div>
    );
}