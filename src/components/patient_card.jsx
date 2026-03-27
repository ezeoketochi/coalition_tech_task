import { motion } from 'framer-motion';
import seniordoc from '../assets/senior_doctor.png';
import { MoreHorizontal } from '@hugeicons/core-free-icons';
import { HugeIcon } from '../icons/settings_icon';


export default function PatientCard({ gender, age, name }) {
    return <motion.div
        className='flex justify-between items-center w-full' >

        <div className='flex gap-3'>
            <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
                <img className='object-contain' src={seniordoc} alt="Senior Doctor" />

            </div>

            <div className='flex flex-col justify-start items-start '>
                <h1 className='font-bold text-[14px] '> {name}</h1>

                <div className='flex gap-1 text-sm'>
                    <h1 className='text-gray-500'> {gender},</h1>
                    <h1 className='text-gray-500 '> {age}</h1>
                </div>
            </div>
        </div>


        <div className='my-auto'>
            <HugeIcon size={20} icon={MoreHorizontal} />
        </div>

    </motion.div>
}