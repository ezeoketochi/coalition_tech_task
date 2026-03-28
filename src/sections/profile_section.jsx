import { Download01FreeIcons } from '@hugeicons/core-free-icons';
import ProfileTile from "../components/profile_tile";
import LabResultSection from "../components/lab_result";


export default function ProfileSection({ profileData}) {

    const data = [
        { title: "Date Of Birth", subtitle: profileData.date_of_birth , icon: Download01FreeIcons },
        { title: "Gender", subtitle: profileData.gender, icon: Download01FreeIcons },
        { title: "Contact Info", subtitle: profileData.phone_number, icon: Download01FreeIcons },
        { title: "Emergency Contacts", subtitle: profileData.emergency_contact, icon: Download01FreeIcons },
        { title: "Insurance Provider", subtitle: profileData.insurance_type, icon: Download01FreeIcons },
    ];


    return <section className="h-full" >

        <div className="flex flex-col gap-3 h-full" >

            {/* profile section */}
            <div id="profile" className="bg-white rounded-lg sm:rounded-[40px] p-8 shadow-md flex flex-5 lg:flex-7 flex-col sm:gap-2 lg:gap-3 w-full"  >



                <div className="flex items-center justify-center sm:h-[100px] sm:w-[100px] lg:h-[40%] lg:w-[70%] rounded-full flex justify-center items-center mx-auto">
                    <img className='object-contain h-full w-full' src={profileData.profile_picture} alt="Profile Picture" />

                </div>

                <h1 className="mx-auto text-md sm:text-base lg:text-xl font-bold">{profileData.name}</h1>



                <div className="flex flex-col gap-2">
                    {data.map((item, index) => (<ProfileTile key={index} title={item.title} subtitle={item.subtitle} icon={item.icon} />))}

                </div>
            </div>


            {/* lab result section */}
            <LabResultSection data={profileData} />

        </div>

    </section>
}