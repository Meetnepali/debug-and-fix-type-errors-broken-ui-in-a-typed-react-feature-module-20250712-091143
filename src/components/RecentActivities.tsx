import React from 'react';
// Buggy import path and missing type definition; fix required per task
i// import { Activity } from '../../models/Activity';
import { Activity } from '@models/Activity';

// BAD: implicit any on props, missing interface/type
// export default function RecentActivities(props) {
//   return (
//     <ul>
//       {props.activities.map((activity) => (
//         <li>{activity.title}</li>
//       ))}
//     </ul>
//   );
// }

interface RecentActivitiesProps {
  activities: Activity[];
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return <div>No recent activities.</div>;
  }
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.title}</li>
      ))}
    </ul>
  );
};

export default RecentActivities;
