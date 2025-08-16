import { Poppins } from "next/font/google";
import styles from "./CardService.module.css";
import "@/app/globals.css";

const poppinsBold = Poppins({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-poppins',
});

export default function CardService({ title, desc, points }: { title?: string, desc?: string, points?: string[] }) {
    return (
        <div className={styles.glass + " flex flex-col rounded-lg mb-auto p-5 shadow-md items-start cursor-pointer space-y-2"}
            style={{maxWidth: "400px"}}>
            <span className={poppinsBold.className + " text-primary text-lg"}>{title}</span>
            <span className="text-sm">{desc}</span>
            <ul className="list-disc px-4">
                {
                    points?.map((point, index) => (
                        <li className="marker:text-primary text-sm" key={index}>{point}</li>
                    ))
                }
            </ul>
        </div>
    )
}