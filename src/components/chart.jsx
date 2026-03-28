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




// const data = (canvas) => {
//   const ctx = canvas.getContext("2d");

//   const gradient = ctx.createLinearGradient(0, 0, 0, 300);
//   gradient.addColorStop(0, "rgba(59,130,246,0.4)");
//   gradient.addColorStop(1, "rgba(59,130,246,0)");

//   return {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         data: [120, 125, 118, 130, 128, 135],
//         borderColor: "#3b82f6",
//         backgroundColor: gradient,
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };
// };


const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
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
                color: "#e5e7eb",
            },
            ticks: {
                color: "#6b7280",
            },
        },
    },
};


export default function DiagnosisChart({ data }) {

    const chartData1 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Systolic",
                data: [120, 100, 118, 90, 128, 135],
                borderColor: "#3b82f6",
                backgroundColor: "rgba(59,130,246,0.2)",
                tension: 0.4,
                fill: true,
            },
            {
                label: "Diastolic",
                data: [90, 70, 60, 90, 80, 110],
                borderColor: "red",
                backgroundColor: "rgba(59,120,206,0.4)",
                tension: 0.6,
                fill: false,
            },
        ],


    };

    const chartData =
    {
        labels: data.map((item) =>  item.month + " " + item.year ),

        datasets: [{
            label: "Systolic",
            data: data.map((item) => item.blood_pressure.systolic.value),
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59,130,246,0.2)",
            tension: 0.4,
            fill: true,
        },

        {
            label: "Diastolic",
            data: data.map((item) => item.blood_pressure.diastolic.value),
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59,130,246,0.2)",
            tension: 0.4,
            fill: true,
        },]
    }

    console.log(`chart data: ${JSON.stringify(chartData)}`);


    return (
        <div className="h-full w-full">
            <Line data={chartData} options={options} />
        </div>
    );
}