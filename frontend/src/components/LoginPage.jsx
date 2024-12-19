import React, { useState } from 'react';
import '../styles/login-page.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate(); // Initialize navigate
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to handle error message

  const handleLogin = async () => {
    try {
      const result = await axios.post(`http://localhost:5001/api/authentication/login`, {
        inputedUsername: username,
        inputedPassword: password
      });

      // Checking if user has right credentials
      console.log(result.data);

      if (result.data.message === "success") {
        navigate('/home');
      } else {
        // Set an error message if authentication fails
        setErrorMessage("Authorization failed.");
      }
    } catch (error) {
      // Handle server or network errors
      setErrorMessage("An error occurred while trying to log in. Please try again.");
      console.error(error);
    }
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
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="error-message">{errorMessage}</div>
          </div>
        )}

        <div className="button-container">
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
