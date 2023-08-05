import React, { useEffect, useState } from 'react';
// MockData.
import mockData from './components/mockData';
// Components.
import MetricsDisplay from './components/MetricsDisplay';
import Charts from './components/Charts';
import UserInformation from './components/UserInformation';
import Header from './components/Header';
import Followers from './components/Followers';
import Overview from './components/Overview';

const App = () => {
  const [metrics, setMetrics] = useState({});
  const [chartData, setChartData] = useState({});
  const [user, setUser] = useState({});
  const [followers, setFollowers] = useState([]);
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    fetchMetrics();
    fetchChartData();
    fetchUser();
    fetchOverview();
    fetchFollowers();
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

  const fetchFollowers = async () => {
    try {
      // Simulating API request delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFollowers(mockData.followers);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOverview = async () => {
    try {
      // Simulating API request delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setOverview(mockData.overview);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-5">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-5">
          <MetricsDisplay {...metrics} />
          <Charts data={chartData} />
          <UserInformation {...user} />
        </div>
        <section className="py-10 dark:bg-slate-900">
          <Followers followers={followers} />
          <Overview overview={overview} />
        </section>
      </div>
    </div>
  );
};

export default App;



/*
TODOS
- App All Content into mockdata.
- Chart content and variant.
- dark/light mode.
*/