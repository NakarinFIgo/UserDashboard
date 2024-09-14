import React from 'react';
import { Link } from 'react-router-dom';
import '../style/DashBoardPage.css';

const Navbar: React.FC = () => {
  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <h2>Employee</h2>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">All Employees</Link></li>
          </ul>
          <button className="add-project">Add Project</button>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Welcome to User Dashboard</h1>
          <Link to="/" className="logout">Logout</Link>
        </header>
      </main>
    </div>
  );
};

export default Navbar;
