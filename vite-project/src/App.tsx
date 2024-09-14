import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import UserDetail from './components/UserDetail';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const isAuthenticated = true; 
  
  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<PrivateRoute element={<Layout/>} isAuthenticated={isAuthenticated}/>}>
          <Route path="/dashboard" element= {<DashboardPage/>}/>
          <Route path="/user/:id" element={<UserDetail/>} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
