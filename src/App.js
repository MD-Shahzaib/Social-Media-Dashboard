import React, { useEffect, useState } from 'react';
// Components.
import MetricsDisplay from './components/MetricsDisplay';
import Charts from './components/Charts';
import UserInformation from './components/UserInformation';
import mockData from './components/mockData';
import Header from './components/Header';
import Followers from './components/Followers';
import Overview from './components/Overview';

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
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <MetricsDisplay {...metrics} />
          <Charts data={chartData} />
          <UserInformation {...user} />
        </div>
        <section className="py-10 dark:bg-slate-900">
          <Followers />
          <Overview />
        </section>
      </div>
    </div>
  );
};

export default App;