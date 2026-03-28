import { HugeIcon } from "../icons/settings_icon";

export default function ProfileTile({title,subtitle,icon  }) {
    return <div className="flex items-center justify-start gap-2">

        <div className="h-10.5 w-10.5 rounded-full bg-gray-200 flex justify-center items-center">
                <HugeIcon icon={icon}/>
        </div>

        <div className="flex flex-col gap-1">
            <h1 className="text-[14px] text-gray-600 text-sm lg:text-2xs">{title}</h1> 
            <h1 className="text-[12px] font-semibold text-sm text-xs ">{subtitle}</h1>
        </div>

    </div>

}