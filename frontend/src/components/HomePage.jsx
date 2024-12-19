import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/home-page.css';
import image1 from '../images/image1.jpg';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';

const HomePage = () => {

  const [totalExpenses, setTotalExpenses] = useState(0);


  //Variables for category expenses component
  const { categorySlug } = useParams(); // Get the category from the URL
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //Initital categories
  const [categories, setCategories] = useState([]);


  //Adding categories variables

  const [modalOpen, setModalOpen] = useState(false); // State to control the modal visibility
  const [newCategory, setNewCategory] = useState(''); // State for the new category input


  //Adding Expenses

  const [modalExpenseOpen, setModalExpenseOpen] = useState(false); // State for the add expense modal
  const [expenseAmount, setExpenseAmount] = useState(''); // State for the expense amount
  const [expenseName, setExpenseName] = useState(''); // State for the expense name
  const [currentCategory, setCurrentCategory] = useState(''); // Store the current category slug

  // Fetch all categories and their total expenses
  const fetchExpensesCategories = async () => {
    try {
      const result = await axios.post(`http://localhost:5001/api/finances/return-each-category-with-expenses`);
      setCategories(result.data);
    } catch (error) {
      console.error("Error fetching expense categories:", error);
    }
  };

  // Fetch expenses for a specific category
  const fetchExpensesForCategory = async (categorySlug) => {
    try {
      const result = await axios.post(`http://localhost:5001/api/finances/return-expenses-from-category`, { category: categorySlug });
      console.log(result.data); // Log the fetched data
      setExpenses(result.data);
    } catch (error) {
      setError('Error fetching expenses for category');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle opening the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to handle adding the new category
  const handleAddCategory = async () => {
    if (newCategory) {
      // Add the new category to the categories list
      const updatedCategories = [
        ...categories,
        { category: newCategory, total: 0 } // Initialize total as 0 for the new category
      ];
      await axios.post(`http://localhost:5001/api/finances/add-expenses-category`, { categoryName: newCategory });
      setCategories(updatedCategories);
      fetchTotalExpenses();
      setNewCategory(''); // Clear the input
      closeModal(); // Close the modal
    }
  };

  //Adding Expenses Modals 
  // Function to open the modal to add expense
  const openAddExpenseModal = (categorySlug) => {
    setCurrentCategory(categorySlug); // Set the category for the expense
    setModalExpenseOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeAddExpenseModal = () => {
    setModalExpenseOpen(false); // Close the modal
    setExpenseAmount(''); // Clear the input fields
    setExpenseName('');
  };
  const handleAddExpense = async () => {
    if (expenseAmount && expenseName && currentCategory) {
      try {
        const expenseDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        // Make the API call to add the expense
        await axios.post('http://localhost:5001/api/finances/add-expense-to-category', {
          categoryName: currentCategory, // Pass the current category
          expenseName: expenseName, // Expense name
          expenseValue: expenseAmount, // Expense amount
          date: expenseDate, // Current date
        });
        const result = await axios.post(`http://localhost:5001/api/finances/return-each-category-with-expenses`);
        setCategories(result.data);
        //Fetch Total Expenses after new Expense is added
        fetchTotalExpenses();
        // Optionally, update the local state to reflect the new expense
        setExpenses((prevExpenses) => [
          ...prevExpenses,
          { expenseName, expenseValue: expenseAmount, date: expenseDate },
        ]);

        closeAddExpenseModal(); // Close the modal after adding the expense
      } catch (error) {
        console.error('Error adding expense:', error);
      }
    }
  };


  const fetchTotalExpenses = async () => {
    try {
      const result = await axios.post(`http://localhost:5001/api/finances/return-total-expenses`);
      setTotalExpenses(result.data.totalExpenses);
    } catch (error) {
      console.error("Error fetching expense categories:", error);
    }
  };

  // Call fetchExpensesCategories on component mount
  useEffect(() => {
    fetchExpensesCategories();
    fetchTotalExpenses();
  }, []);


  // Fetch expenses when categorySlug changes
  useEffect(() => {
    if (categorySlug) {
      setLoading(true); // Set loading before fetching
      fetchExpensesForCategory(categorySlug); // Fetch category expenses
    }
  }, [categorySlug]);

  return (
    <div className="main-content">
      <div className="home-container">
        {/* Left content */}
        <div className="left-content">
          <h1 className="welcome-title">Welcome Tarik</h1>
          <p className="welcome-text">
            Welcome to your Smart Personal Finance Manager. Here you can manage your finances easily and effectively.
          </p>
        </div>

        {/* Right side image */}
        <div className="image-container">
          <img src={image1} alt="Finance Image" />
        </div>
      </div>

      {/* Expenses Section */}
      <div className="expenses-container">


        <h2 className="expenses-title">Monthly Expenses 💵💸💰</h2>
        <h4 className="expenses-subtitle">
          Tarik, you spend <span style={{ fontWeight: 'bold' }}>{totalExpenses}</span> <span style={{ fontWeight: 'bold' }}>KM</span> this month. 😡
        </h4>


        {/* Categories List */}
        <div className="expenses-list">
          <div className="expenses-list">
            {categories.map((categoryData) => {
              const { category, total } = categoryData;
              const categorySlug = category; // Create a URL-friendly slug
              return (
                <Link to={`/${categorySlug}`} className="expense-item-link" key={category}>
                  <div className="expense-item">
                    <span className="expense-name">{category}</span>
                    <span className="expense-amount">{total}KM</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="expense-item add-category-item">
          <button className="add-category-button" onClick={openModal}>
            Add Category <FaPlus /> {/* Plus icon */}
          </button>
        </div>
        {/* Modal for adding a new category */}
        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              {/* <h3>Add New Category</h3> */}
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)} // Update input value
                placeholder="Enter category name"
              />
              <div className="modal-buttons">
                <button onClick={handleAddCategory} className="add-category-btn">
                  Add Category
                </button>
                <button onClick={closeModal} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Display Expenses for Selected Category */}
        {categorySlug && (
          <div className="category-expenses" style={{ marginTop: '50px' }}>
            <h3>Expenses for {categorySlug}</h3>

            {loading ? (
              <p>...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div className="expense-details-list">
                {expenses.map((expense, index) => (
                  expense.expenseName !== "No expenses" && ( // Check if expenseName is not "No expenses"
                    <div className="expense-item" key={index}>
                      <span className="expense-name">{expense.expenseName}</span>
                      <span className="expense-date">{expense.date}</span>
                      <span className="expense-amount">{expense.expenseValue}KM</span>
                    </div>
                  )
                ))}
              </div>
            )}

            {/* Add Expense Button */}
            <div className="expense-item add-expense-item">
              <button className="add-expense-button" onClick={() => openAddExpenseModal(categorySlug)} >
                Add Expense <FaPlus /> {/* Plus icon */}
              </button>
            </div>
          </div>
        )}

        {modalExpenseOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Adding Expense For</h2>
              <h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
                {currentCategory}
              </h2>


              <input
                type="text"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
                placeholder="Expense name"
              />
              <div className="expense-amount-input">
                <input
                  type="number"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(Math.max(0, e.target.value))} // Prevent negative values
                  placeholder="Expense amount"
                  min="0" // Prevents negative numbers
                />
                <span>      KM</span> {/* Display KM next to the input */}
              </div>

              <div className="modal-buttons">
                <button onClick={handleAddExpense} className="add-expense-btn">
                  Add Expense
                </button>
                <button onClick={closeAddExpenseModal} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default HomePage;
