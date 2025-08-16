import styles from "./CardAbout.module.css";
import "@/app/globals.css";

export default function CardAbout({ experience, time }: { experience: string, time: string }) {
    return (
        <div className={styles.glass + " flex flex-col rounded-lg p-4 shadow-md justify-center items-center cursor-pointer"}
            style={{ width: "180px" }}>
            <span className={"text-primary"}>{time}</span>
            <span>{experience}</span>
        </div>
    )
}