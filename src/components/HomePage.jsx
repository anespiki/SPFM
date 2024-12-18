import React from 'react';
import '../styles/home-page.css'; // Import the custom CSS file
import image1 from '../images/image1.jpg'; // Import the image

const HomePage = () => {
  return (
    <div className="main-content">
      <div className="home-container">
        {/* Left content */}
        <div className="left-content">
          <h1 className="welcome-title">Welcome User</h1>
          <p className="welcome-text">
            Welcome to your Smart Personal Finance Manager. Here you can manage your finances easily and effectively.
          </p>
          <p className="balance">Balance: $5000</p>
        </div>

        {/* Right side image */}
        <div className="image-container">
          <img src={image1} alt="Finance Image" />
        </div>
      </div>

      {/* Expenses Section */}
      <div className="expenses-container">
        <h2 className="expenses-title">Monthly Expenses</h2>
        <div className="expenses-list">
          <div className="expense-item">
            <span className="expense-name">Water bill:</span>
            <span className="expense-amount">$30</span>
          </div>
          <div className="expense-item">
            <span className="expense-name">Electricity bill:</span>
            <span className="expense-amount">$60</span>
          </div>
          <div className="expense-item">
            <span className="expense-name">Coffee:</span>
            <span className="expense-amount">$15</span>
          </div>
          <div className="expense-item">
            <span className="expense-name">Gas:</span>
            <span className="expense-amount">$40</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
