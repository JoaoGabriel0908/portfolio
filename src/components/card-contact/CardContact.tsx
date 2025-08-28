import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardContact({ title, desc, icon }: { title: string, desc: string, icon: IconDefinition }) {
    return (
        <div className="flex flex-row p-2 space-x-4 bg-green-200 rounded-lg hover:bg-green-300 transition-colors duration-300 cursor-pointer hover:shadow-lg">
            <FontAwesomeIcon icon={icon} className="fas fa-check p-2 rounded-full bg-white shadow-sm text-black hover:text-gray-600 hover:-translate-y-0.5 hover:transition-all duration-300" style={{ height: 24, width: 24 }}
            ></FontAwesomeIcon>
            
            <div className="flex flex-col">
                <span className="font-medium">{title}</span>
                <span className="text-sm">{desc}</span>
            </div>
        </div>
    );
}