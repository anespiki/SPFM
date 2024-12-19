import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
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
          <p className="balance">Balance: 5000KM</p>
        </div>

        {/* Right side image */}
        <div className="image-container">
          <img src={image1} alt="Finance Image" />
        </div>
      </div>

      {/* Expenses Section */}
      <div className="expenses-container">
        {/* Buttons Section */}
        <div className="expenses-buttons">
          <button className="expense-button">Add Money</button>
          <button className="expense-button">Exchange</button>
          <button className="expense-button">Details</button>
          <button className="expense-button">More</button>
        </div>

        <h2 className="expenses-title">Monthly Expenses</h2>

        <div className="expenses-list">
          <Link to="/water-bill" className="expense-item-link">
            <div className="expense-item">
              <span className="expense-name">Water bill:</span>
              <span className="expense-amount">30KM</span>
            </div>
          </Link>
          <Link to="/electricity-bill" className="expense-item-link">
            <div className="expense-item">
              <span className="expense-name">Electricity bill:</span>
              <span className="expense-amount">60KM</span>
            </div>
          </Link>
          <Link to="/coffee" className="expense-item-link">
            <div className="expense-item">
              <span className="expense-name">Coffee:</span>
              <span className="expense-amount">50KM</span>
            </div>
          </Link>
          <Link to="/gas-expenses" className="expense-item-link">
            <div className="expense-item">
              <span className="expense-name">Gas:</span>
              <span className="expense-amount">300KM</span>
            </div>
          </Link>
          <Link to="/clothes" className="expense-item-link">
            <div className="expense-item">
              <span className="expense-name">Clothes:</span>
              <span className="expense-amount">140KM</span>
            </div>
          </Link>
          <Link to="/groceries" className="expense-item-link">
            <div className="expense-item">
              <span className="expense-name">Groceries:</span>
              <span className="expense-amount">300KM</span>
            </div>
          </Link>
          <Link to="/see-more" className="expense-item-link">
            <div className="expense-item">
              <span className="expense-name">See more</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
