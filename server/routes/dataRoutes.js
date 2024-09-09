const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Define a route to get all data
router.get('/data', dataController.getAllData);

module.exports = router;
