import type { NextPage } from 'next';
import { Card } from '../components/Card';

const Dashboard: NextPage = () => {
  
  return (
    <>
      <h1>Dashboard</h1>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '4em 3em'}}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Dashboard;
