import { HugeIcon } from "../icons/settings_icon";
import { Search } from '@hugeicons/core-free-icons';
import PatientCard from "../components/patient_card";


export default function PatientsSection() {
    return <section className="bg-white rounded-[40px] p-8 shadow-md">
        <div className="flex flex-col gap-3 ">

            <div className="flex justify-between items-center py-3">
                <h1 className="text-lg font-bold">Patients</h1>
                <HugeIcon icon ={Search} />
            </div>

            <div className="flex flex-col gap-2">
                {Array.from({ length: 10 }, (_, i) => (
                    <PatientCard key={i} name={`Patient ${i + 1}`} age={20 + i} gender={i % 2 === 0 ? 'Male' : 'Female'} />
                ))}
            </div>
            
        </div>
    </section>
}