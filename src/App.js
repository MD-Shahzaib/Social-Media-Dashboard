import React from 'react';
import MetricsDisplay from './components/MetricsDisplay';
import Charts from './components/Charts';
import UserInformation from './components/UserInformation';
import mockData from './components/mockData';

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Social Media Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MetricsDisplay {...mockData.metrics} />
        <Charts data={mockData.chartData} />
        <UserInformation {...mockData.user} />
      </div>
    </div>
  );
};

export default App;
