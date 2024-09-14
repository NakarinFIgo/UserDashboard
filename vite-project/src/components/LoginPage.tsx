import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockCredentials } from '../data/mockData';
import '../style/LoginPage.css'; 
import { toast } from 'react-toastify';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username === mockCredentials.username && password === mockCredentials.password) {
      toast.success('Welcome to Admin Dashboard !')
      navigate('/dashboard')
    } else {
      toast.error('Invalid username or password')
      setError('Invalid username or password')
    }
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <h1>Log in</h1>
        <p className="subtitle">to Users Dashboard</p>
        <input
          type="text"
          placeholder="User"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={handleLogin} className="login-button">
          Log in 
        </button>
        {error && <p className="error-message">{error}</p>}
        <a href="#" className="forgot-password">Forgot password?</a>
      </div>
    </div>
  );
};

export default LoginPage;
