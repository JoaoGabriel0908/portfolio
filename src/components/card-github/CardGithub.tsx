import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from "./CardGithub.module.css";

export default function CardGithub({ title, desc }: { title: string, desc: string }) {
    return (
        <div className={ styles.glass + " flex flex-col rounded-lg shadow-md justify-start cursor-pointer min-w-72 max-w-80 m-auto pt-4"}>
            <div className="tw-flex tw-flex-col items-center justify-center p-4 m-auto">
                <FontAwesomeIcon icon={faGithub} className="fas fa-check p-2 rounded-full bg-white shadow-sm text-black hover:text-gray-600 hover:-translate-y-0.5 hover:transition-all duration-300" style={{ height: 24, width: 24 }}
                ></FontAwesomeIcon>
            </div>

            <div className="flex flex-col p-4 justify-content-center items-center space-y-2 h-full">
                <span className="text-black font-bold text-lg">{title}</span>
                <p className="text-gray-800 text-sm text-center">{desc}</p>
                <button type="button" className="focus:outline-none 
              text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
                font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 
              dark:focus:ring-green-800" style={{ width: 200 }}>Ver no GitHub</button>
            </div>
        </div>
    );
}