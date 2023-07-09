import React from 'react';
import { Bar } from 'react-chartjs-2';


const Charts = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Metrics',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Charts</h2>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default Charts;















// import { Bar, Chart, destroy } from 'react-chartjs-2';

// const Charts = ({ data }) => {
//     const chartData = {
//         labels: data.labels,
//         datasets: [
//             {
//                 label: 'Metrics',
//                 data: data.values,
//                 backgroundColor: 'rgba(75, 192, 192, 0.6)',
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 1,
//             },
//         ],
//     };

//     const chartOptions = {
//         scales: {
//             y: {
//                 beginAtZero: true,
//             },
//         },
//     };

//     useEffect(() => {
//         if (chartInstance) {
//             destroy(chartInstance); // Destroy the previous chart instance
//         }

//         const newChartInstance = new Chart(document.getElementById('chart'), {
//             type: 'bar',
//             data: chartData,
//             options: chartOptions,
//         });

//         setChartInstance(newChartInstance);

//         return () => {
//             if (chartInstance) {
//                 destroy(chartInstance); // Destroy the chart instance on component unmount
//             }
//         };
//     }, [chartData, chartOptions]);

//     return (
//         <div>
//             <h2>Charts</h2>
//             <canvas id="chart" />
//         </div>
//     );
// };
