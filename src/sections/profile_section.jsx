import { Download01FreeIcons } from '@hugeicons/core-free-icons';
import seniordoc from '../assets/senior_doctor.png';
import ProfileTile from "../components/profile_tile";
import LabResultSection from "../components/lab_result";


export default function ProfileSection({ name }) {

    const data = [
        { title: "Date Of Birth", subtitle: "January 1, 1980", icon: Download01FreeIcons },
        { title: "Gender", subtitle: "Female", icon: Download01FreeIcons },
        { title: "Contact Info", subtitle: "(415) 555-1234", icon: Download01FreeIcons },
        { title: "Emergency Contact", subtitle: "(415) 555-5678", icon: Download01FreeIcons },
        { title: "Insurance Provider", subtitle: "Sunrise Health Assurance", icon: Download01FreeIcons },
    ];


    return <section className="h-full" >

        <div className="flex flex-col gap-3 h-full" >

            {/* profile section */}
            <div id="profile" className="bg-white rounded-lg sm:rounded-[40px] p-8 shadow-md flex flex-7 flex-col gap-3 w-full"  >



                <div className="lg:h-[200px] lg:w-[200px] rounded-full bg-gray-200 flex justify-center items-center mx-auto">
                    <img className='object-cover h-full w-full' src={seniordoc} alt="Profile Picture" />

                </div>

                <h1 className="mx-auto text-[24px] font-bold">{name}</h1>



                <div className="flex flex-col gap-2">
                    {data.map((item, index) => (<ProfileTile key={index} title={item.title} subtitle={item.subtitle} icon={item.icon} />))}

                </div>
            </div>


            {/* lab result section */}
            <LabResultSection />

        </div>

    </section>
}