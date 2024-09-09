const DataModel = require('../models/dataModel');

// Fetch all data from MongoDB
exports.getAllData = async (req, res) => {
  try {
    const data = await DataModel.find().limit(10);
    return res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
