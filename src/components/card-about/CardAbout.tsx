export default function CardAbout({ experience, time }: { experience: string, time: string }) {
    return (
        <div className="flex flex-col bg-gray-400 rounded-lg p-4 shadow-md justify-center items-center" style={{ width: "200px" }}>
            <span>{time}</span>
            <span>{experience}</span>
        </div>
    )
}