const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const userController = require('../controllers/userController');

// Define a route to get all data
router.get('/data', dataController.getAllData);

// Define a route to get all data
router.post('/login', userController.getUserData);

module.exports = router;
