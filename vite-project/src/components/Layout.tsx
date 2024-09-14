import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../style/Layout.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Layout: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () =>{
    toast.success('Logout Success !')
    navigate('/')
  }
  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <h2>DASHBOARD</h2>
        <nav>
          <ul className="nav-links">
            <li><Link to="/dashboard">HOME</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Admin Dashboard</h1>
          <span className='logout' onClick={handleLogout}>Logout</span>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
