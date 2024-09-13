import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import UserDetail from './components/UserDetail';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
  const isAuthenticated = true; // This should be managed properly in a real application

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<DashboardPage />} isAuthenticated={isAuthenticated} />}
        />
        <Route path="/user/:id" element={<PrivateRoute element={<UserDetail />} isAuthenticated={isAuthenticated} />} />
      </Routes>
    </Router>
  );
};

export default App;
