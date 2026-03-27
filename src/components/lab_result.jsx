import { HugeIcon } from "../icons/settings_icon"
import { Download01FreeIcons } from '@hugeicons/core-free-icons';


export default function LabResultSection() {
    return <div id="lab-result" className="flex flex-2 flex-col bg-white rounded-lg sm:rounded-[40px] p-8 shadow-md min-h-0">

        <div className="flex items-center py-2">
            <h1 className="font-bold text-lg sm:text-2xl lg:text-[24px]">Lab Results</h1>
        </div>


        <div className="overflow-y-auto f h-full  ">

            <div className="flex flex-col gap-1 p-1 sm:gap-2 lg:gap-3 ">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="flex justify-between">
                        <h2 className=" text-md sm:text-md  ">Lab Result {index + 1}</h2>
                        <HugeIcon icon={Download01FreeIcons} />
                    </div>
                ))}
            </div>

        </div>

    </div>
}