import logo from  '../assets/TestLogo.svg';
import senior_doctor from '../assets/senior_doctor.png';
import { HugeIcon } from '../icons/settings_icon';
import { Settings01Icon } from '@hugeicons/core-free-icons';
import { MoreVertical } from '@hugeicons/core-free-icons';
import { navbarItems } from '../data/navbar_items';

export default function AppBar() {

    return <div className="bg-white text-black rounded-full hidden @[700px]:flex  w-full items-center justify-between lg:h-16 h-12 lg:px-8 px-4 lg:py-4 py-2">


        <div className="size-25 lg:size-30">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>

        <div className='hidden @[900px]:flex sm:flex-row flex-col sm:gap-3 @[1050px]:gap-8  text-sm lg:text-base'>

            {navbarItems.map((item) => (
                <div key={item.label} className={`${item.label.toLowerCase() === 'patients' && "rounded-full bg-[#01F0D0] p-3 px-4"} flex items-center gap-1`}>
                    <HugeIcon size={17} icon={item.icon} />
                    <h1 className={`text-[14px]`}>{item.label}</h1>
                </div>
            ))}

        </div>

        <div className='flex sm:flex-row flex-col sm:gap-2 lg:gap-3'>
            <div className='flex rounded-full '>
                <img src={senior_doctor} alt="Senior Doctor" className="w-full h-full object-contain" />
            </div>
            <div className='flex flex-col ml-2 justify-center items-start'>
                <h1 className='text-sm lg:text-base font-bold'>Dr. Josse Simmons</h1>
                <p className='text-xs lg:text-sm text-gray-500'>General Practitioner</p>
            </div>

            <div className="w-px self-stretch bg-gray-200 dark:bg-gray-700" />

            <div className='my-auto'>
                <HugeIcon size={20} icon={Settings01Icon} />
            </div>

            <div className='my-auto'>
                <HugeIcon size={20} icon={MoreVertical} />
            </div>

        </div>


    </div>
}