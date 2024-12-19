const express = require('express');


const router = express.Router();


//path to Finances Controller
const financesController = require('../controllers/financesController');


//Api Routes for Finances
router.post('/return-categories', financesController.returnExpensesCategories);
router.post('/return-expenses-from-category', financesController.returnExpensesFromCategory);



module.exports = router;