import React from 'react';
import '../styles/add-money-page.css'; // Import the Tailwind-based CSS file

const AddMoneyPage = () => {
  return (
    <div className="container">
      <h1 className="title">Add Money</h1>
      <p className="description">Choose how you'd like to add money to your account:</p>
      <div className="button-container">
        <button className="option-button">Bank Transfer</button>
        <button className="option-button">Credit/Debit Card</button>
        <button className="option-button">Cash Deposit</button>
      </div>
    </div>
  );
};

export default AddMoneyPage;
