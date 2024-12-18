import React from 'react';
import '../styles/gas-expenses-page.css'; // Add styling for the Gas Expenses page

const GasExpensesPage = () => {
  return (
    <div className="gas-expenses-container">
      <h1 className="gas-expenses-title">Gas Expenses for This Month</h1>
      <ul className="gas-expenses-list">
        <li>1st December: 50KM</li>
        <li>10th December: 70KM</li>
        <li>20th December: 80KM</li>
        <li>28th December: 100KM</li>
      </ul>
    </div>
  );
};

export default GasExpensesPage;
