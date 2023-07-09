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
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <MetricsDisplay {...metrics} />
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <Charts data={chartData} />
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <UserInformation {...user} />
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg">
            {/* Additional Component */}
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Engagement Rate</h2>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex-shrink-0">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-white text-2xl">{metrics.engagementRate}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-500">Engagement Rate</p>
                  <p className="font-semibold">{metrics.totalLikes} Likes | {metrics.totalComments} Comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
