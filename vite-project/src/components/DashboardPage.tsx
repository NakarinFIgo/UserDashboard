// src/components/DashboardPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import UserList from './UserList';
import { users } from '../data/mockData';
import '../style/DashBoardPage.css';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <h2>DASHBOARD</h2>
        <nav>
          <ul className="nav-links">
            <li><Link to="/dashboard">HOME</Link></li>
            <li><Link to="">ADD NEW USER</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Welcome to User Dashboard</h1>
          <Link to="/" className="logout">Logout</Link>
        </header>
        <UserList users={users} />
      </main>
    </div>
  );
};

export default DashboardPage;
