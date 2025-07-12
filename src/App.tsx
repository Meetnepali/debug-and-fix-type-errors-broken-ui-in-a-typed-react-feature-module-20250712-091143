import React from 'react';
import RecentActivities from './components/RecentActivities';
import { Activity } from '@models/Activity';

const activities: Activity[] = [
  { id: '1', title: 'Deployed new build' },
  { id: '2', title: 'Fixed authentication bug' },
  { id: '3', title: 'Onboarded new user' }
];

function App() {
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Recent Activities</h2>
      <RecentActivities activities={activities} />
    </div>
  );
}

export default App;
