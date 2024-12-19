import React from 'react';
import '../styles/login-page.css';

import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = () => {
    // Add your login logic here (e.g., form validation or authentication)
    // If login is successful, navigate to the home page
    navigate('/home');
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Smart Personal Finance Manager</h1>
        <div className="input-container">
          <label className="input-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="input-field"
          />
        </div>
        <div className="button-container">
          <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
