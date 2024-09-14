import React from 'react';
import UserList from './UserList';
import { users } from '../data/mockData';

const DashboardPage: React.FC = () => {
  return ( 
        <UserList users={users} />
  );
};

export default DashboardPage;
