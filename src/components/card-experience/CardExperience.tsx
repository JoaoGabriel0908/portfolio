import { Poppins } from "next/font/google";
import styles from "./CardExperience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const poppinsBold = Poppins({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-poppins',
});

export default function CardExperience({ experiences, title, icon }: { experiences: { title?: string, desc?: string, period?: string }[], title?: string, icon: string | any }) {
    return (
        <div className={styles.glass + " flex flex-col rounded-lg mb-auto p-5 shadow-md items-start cursor-pointer space-y-2 w-full"}>
            <div className="w-full flex flex-row items-center space-x-2 mb-5">
                <FontAwesomeIcon icon={icon} />
                <span className={poppinsBold.className + " text-lg"}>{title}</span>
            </div>
            <div className="flex flex-col w-full">
                {experiences.map((exp, index) => (
                    <div className="flex flex-col mb-5" key={index}>
                        <span className="text-sm">{exp.period}</span>
                        <span className="font-semibold">{exp.title}</span>
                        <span className="text-sm">{exp.desc}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}