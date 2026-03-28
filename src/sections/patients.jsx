import { HugeIcon } from "../icons/settings_icon";
import { Search } from '@hugeicons/core-free-icons';
import PatientCard from "../components/patient_card";


export default function PatientsSection({data}) {
    return <section id="patients" className="bg-white rounded-lg sm:rounded-[40px] p-8 shadow-md h-full" >
        <div className="flex flex-col gap-3 h-full  " >

            <div className="flex justify-between items-center py-3">
                <h1 className="font-bold text-lg sm:text-2xl lg:text-[24px]">Patients</h1>
                <HugeIcon icon ={Search} />
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 overflow-y-auto">
                {data && data.map((item, index) => (
                    <PatientCard key={index} name={item.name} age={item.age} gender={item.gender} img={item.profile_picture}/>
                ))}
            </div>
            
        </div>
    </section>
}