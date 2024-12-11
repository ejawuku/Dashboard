"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

interface ChartProps {
  currentdata: number[];
  previousdata: number[];
}

const EarningsChart: React.FC<ChartProps> = ({ currentdata, previousdata }) => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Today",
        data: currentdata,
        borderColor: "#04BFDA",
        backgroundColor: "transparent",
        pointBorderColor: "#04BFDA",
        pointBackgroundColor: "#fff",
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.5,
        pointRadius: 2,
      },
      {
        label: "Previous Day",
        data: previousdata,
        borderColor: "#E1E3E8",
        backgroundColor: "transparent",
        pointBorderColor: "#E1E3E8",
        pointBackgroundColor: "#fff",
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.5,
        pointRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => ` GHS ${context.raw} `,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          borderDash: [5, 5],
          color: "#E1E3E880",
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          drawBorder: false,
          drawOnChartArea: true,
          drawTicks: false,
        },
        border: {
          display: false,
        },
        ticks: {
          callback: (value: number | string) => `${value}`,
        },
      },
    },
  };

  return (
    <div className="w-full h-72 bg-white rounded-lg md:p-8">
      <div className="justify-between pb-5 flex flex-row items-center">
        <div className="text-lg font-xs font-[600] text-[#243465]">
          Earnings
        </div>
        <div className="relative">
          <select className="rounded-lg font-[500] p-3 bg-[#CECECE4A] shadow-none text-xs text-[#201F21] focus:outline-none appearance-none">
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <img
              src="/icons/arrow-down-icon.svg"
              alt="Down Arrow"
              className="h-4 w-4"
            />
          </div>
        </div>
      </div>

      <div className="h-60">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default EarningsChart;
