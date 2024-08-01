import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import AdminSidePage from './SideBar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
 
const Statistics = () => {
  const barData = {
    labels: ['Life', 'Health', 'Home', 'Vehicle'],
    datasets: [
      {
        label: 'Number of Policies',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
 
  const pieData = {
    labels: ['Life', 'Health', 'Home', 'Vehicle'],
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
 
  return (
    <div className="flex min-h-screen">
      <AdminSidePage />
      <div className="flex-1 p-8 bg-gray-50 ml-64">
        <h2 className="text-2xl font-bold mb-6">Insurance Statistics</h2>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Number of Policies by Type</h3>
          <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
            <Bar data={barData} />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Policy Distribution</h3>
          <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Statistics;