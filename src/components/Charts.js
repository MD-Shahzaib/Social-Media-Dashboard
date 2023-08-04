import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const Charts = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Chart.js expects data in a specific format, so we need to convert the data
        const chartLabels = data.labels;
        const chartValues = data.values;

        const ctx = document.getElementById('chart');

        const newChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartLabels,
                datasets: [
                    {
                        label: 'Data',
                        data: chartValues,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        return () => {
            if (newChartInstance) {
                newChartInstance.destroy();
            }
        };
    }, [data]);

    return (
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Charts</h2>
            <canvas id="chart" height="250" />
        </div>
    );
};

export default Charts;