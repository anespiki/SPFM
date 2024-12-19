const express = require('express');


const router = express.Router();


//path to Finances Controller
const financesController = require('../controllers/financesController');


//Api Routes for Finances
router.post('/return-categories', financesController.returnExpensesCategories);
router.post('/return-expenses-from-category', financesController.returnExpensesFromCategory);
router.post('/return-each-category-with-expenses', financesController.returnEachCategoryWithItsExpense);
router.post('/add-expenses-category', financesController.addExpenseCategory);
router.post('/add-expense-to-category', financesController.addExpenseToCategory);

module.exports = router;