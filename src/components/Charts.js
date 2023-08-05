import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

// ChartTypesDropdown.
const ChartTypesDropdown = ({ onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleOptionClick = (type) => {
        setIsOpen(false);
        onChange(type);
    };

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                Select Chart Type
            </button>
            {isOpen && (
                <div className="absolute z-10 mt-2 py-2 w-32 bg-white border border-gray-300 rounded">
                    <button
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => handleOptionClick("doughnut")}
                    >
                        Doughnut
                    </button>
                    <button
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => handleOptionClick("bar")}
                    >
                        Bar
                    </button>
                    {/* Add more chart type options here */}
                </div>
            )}
        </div>
    );
};

const Charts = ({ data, darkMode }) => {
    const chartRef = useRef(null);
    const [chartType, setChartType] = useState("doughnut");

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Chart.js expects data in a specific format, so we need to convert the data
        const chartLabels = data.labels;
        const chartValues = data.values;

        const ctx = document.getElementById('chart');

        const newChartInstance = new Chart(ctx, {
            type: chartType, // Use the selected chart type
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
    }, [data, chartType]); // Include chartType in the dependency array

    const handleChartTypeChange = (type) => {
        setChartType(type);
    };


    // handleChartTypeChange.
    // const handleChartTypeChange = (type) => {
    //     if (chartRef.current) {
    //         chartRef.current.destroy();

    //         // Reinitialize chart with the selected type
    //         const ctx = document.getElementById('chart');
    //         const newChartInstance = new Chart(ctx, {
    //             type,
    //             data: {
    //                 labels: data.labels,
    //                 datasets: [
    //                     {
    //                         label: 'Data',
    //                         data: data.values,
    //                         backgroundColor: 'rgba(75, 192, 192, 0.6)',
    //                     },
    //                 ],
    //             },
    //             options: {
    //                 responsive: true,
    //                 scales: {
    //                     y: {
    //                         beginAtZero: true,
    //                     },
    //                 },
    //             },
    //         });

    //         return () => {
    //             if (newChartInstance) {
    //                 newChartInstance.destroy();
    //             }
    //         };
    //     }
    // };

    return (
        <div className={`${darkMode ? "bg-gray-800 hover:bg-gray-950" : "bg-slate-100 hover:bg-slate-50"} rounded-lg p-4 shadow-lg`}>
            <ChartTypesDropdown onChange={handleChartTypeChange} />
            <h2 className="text-xl font-semibold mb-4">Charts</h2>
            <canvas id="chart" height="250" />
        </div>
    );
};

export default Charts;