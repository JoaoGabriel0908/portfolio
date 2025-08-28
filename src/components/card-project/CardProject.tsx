import styles from "./CardProject.module.css";
import "@/app/globals.css";

export default function CardProject({ project }: { project: { name: string; description: string; link: string; image: string; technologies: string[] } }) {
    return (
        <div className={styles.glass + "  flex flex-col rounded-lg shadow-md justify-start cursor-pointer min-w-72 max-w-80"}>
            <div className="relative w-full mb-2">
                <img src={project.image} alt={project.name} className="object-fit-fill rounded-t-lg" />
            </div>

            <div className="flex flex-col p-4 space-y-2 h-full">
                <span className="text-primary text-sm">{project.name}</span>
                <span className="text-black font-bold text-lg">{project.name}</span>
                <p className="text-gray-800 text-sm">{project.description}</p>
                <div className="flex space-x-2 mt-2">
                    {project.technologies.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">{tag}</span>
                    ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline">
                    Ver Projeto
                </a>
            </div>
        </div>
    );
}