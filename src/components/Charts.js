import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const Charts = ({ data }) => {
    const [chartInstance, setChartInstance] = useState(null);
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const ctx = document.getElementById('chart');

        const newChartInstance = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        setChartInstance(newChartInstance);
        chartRef.current = newChartInstance;

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [data]);

    return (
        <div>
            <h2>Charts</h2>
            <canvas id="chart" />
        </div>
    );
};

export default Charts;