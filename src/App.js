import React, { useEffect, useState } from 'react';
import MetricsDisplay from './components/MetricsDisplay';
import Charts from './components/Charts';
import UserInformation from './components/UserInformation';
import mockData from './components/mockData';

const App = () => {
  const [metrics, setMetrics] = useState({});
  const [chartData, setChartData] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchMetrics();
    fetchChartData();
    fetchUser();
  }, []);

  const fetchMetrics = async () => {
    try {
      // Simulating API request delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMetrics(mockData.metrics);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchChartData = async () => {
    try {
      // Simulating API request delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setChartData(mockData.chartData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUser = async () => {
    try {
      // Simulating API request delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser(mockData.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Social Media Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg"><MetricsDisplay {...metrics} /></div>
          <div className="bg-white rounded-lg p-6 shadow-lg"><Charts data={chartData} /></div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg"><UserInformation {...user} /></div>
        </div>
      </div>
    </div>
  );
};

export default App;
