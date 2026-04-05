export default function VitalsComponent({ title, reading, interpretation, bgColor, icon }) {
    return <div className={`flex flex-col flex-1 gap-2 rounded-2xl justify-between items-start h-full p-3 w-full ${bgColor}`}>

        <div className="bg-white rounded-full w-12 sm:w-14 md:w-16 xl:w-21 aspect-square" >
            <img src={icon} alt={title} />
        </div>

        <h1 className="text-md capitalize text-lg text-black-300 font-medium ">
            {title}
        </h1>

        <h1 className="text-black font-bold text-xl xl:text-[30px]">
            {reading}
        </h1>

        <h1 className="capitalize">
            {interpretation}
        </h1>

    </div>
}