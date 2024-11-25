import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData('https://api.example.com/data')
      .then(fetchedData => setData(fetchedData))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
