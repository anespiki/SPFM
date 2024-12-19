const express = require('express');


const router = express.Router();


//path to Authentication Controller
const authneticationController = require('../controllers/authenticationController');


//Api Routes
router.post('api/login', authneticationController.login);



module.exports = router;