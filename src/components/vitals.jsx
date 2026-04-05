import VitalsComponent from "./vitals_component";
import respiratory from '../assets/respiratory.svg';
import temperature from '../assets/temperature.svg';
import heart from '../assets/heart.svg';


export default function Vitals( {jessicaData} ) {


    const data = [
        { title: "respiratory rate", reading: jessicaData[0].respiratory_rate.value , interpretation :  jessicaData[0].respiratory_rate.levels, bgColor: 'bg-[#E0F3FA]', icon: respiratory },
        { title: "temperature", reading: jessicaData[0].temperature.value, interpretation :  jessicaData[0].temperature.levels, bgColor: "bg-red-100", icon: temperature },
        { title: "heart beat", reading: jessicaData[0].heart_rate.value, interpretation :  jessicaData[0].heart_rate.levels, bgColor: "bg-red-100", icon: heart }
    ]

    return <div className="flex flex-col sm:flex-row w-full h-full items-center justify-center flex-4 gap-4 h-full ">


        {data.map((e) => VitalsComponent({ title: e.title, reading: e.reading, interpretation: e.interpretation, bgColor: e.bgColor, icon: e.icon }))}


    </div>
}