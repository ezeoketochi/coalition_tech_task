import { useState } from "react";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);


const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: "right",
            align: "start",
            labels: {
                usePointStyle: true,
                pointStyle: "circle",
                boxWidth: 8,
                boxHeight: 8,
                padding: 16,
                color: "#374151",
                font: {
                    size: 12,
                    weight: "500",
                },
            },
        },
        tooltip: { enabled: true },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                color: "#6b7280",
            },
        },
        y: {
            grid: {
                display: true,
                color: "#CBC8D4",
            },
            ticks: {
                color: "#6b7280",
            },
        },
    },
};


export default function DiagnosisChart({ data }) {

    const [range, setRange] = useState(4);

    const lastRangeSystolic = data.map((item) => item.blood_pressure.systolic.value).slice(-range);
    const lastRangeDiastolic = data.map((item) => item.blood_pressure.diastolic.value).slice(-range);

    const lastSystolic = lastRangeSystolic[lastRangeSystolic.length - 1];
    const lastDiastolic = lastRangeDiastolic[lastRangeDiastolic.length - 1];


    const chartData = {
        labels: data.map((item) => item.month + " " + item.year).slice(-range).reverse(),

        datasets: [{
            label: "Systolic",
            data: lastRangeSystolic,
            borderColor: "#E66FD2",
            backgroundColor: "rgba(59,130,246,0.2)",
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: "#ec4899"
        },

        {
            label: "Diastolic",
            data: lastRangeDiastolic,
            borderColor: "#8C6FE6",
            backgroundColor: "rgba(59,130,246,0.2)",
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: "#8C6FE6"
        },]
    }

    return (
        <div className="flex w-full h-full gap-6">

            {/* LEFT: chart */}
            <div className="flex-3 " >
                <Line data={chartData} options={options} />
            </div>

            {/* RIGHT: legend panel */}
            <div className="flex flex-1 flex-col justify-center gap-6">

                {/* Systolic */}
                <div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                        <p className="text-sm">Systolic</p>
                    </div>
                    <h2 className="text-2xl font-bold">{lastSystolic}</h2>
                    <p className="text-sm text-gray-500">{data[lastRangeSystolic.length - 1].blood_pressure.systolic.levels}</p>
                </div>

                <div className="w-[85%] mx-auto h-px bg-gray-300" />

                {/* Diastolic */}
                <div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                        <p className="text-sm">Diastolic</p>
                    </div>
                    <h2 className="text-2xl font-bold">{lastDiastolic}</h2>
                    <p className="text-sm text-gray-500">{data[lastRangeSystolic.length - 1].blood_pressure.diastolic.levels}</p>
                </div>

            </div>
        </div>
    );
}