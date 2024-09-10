const UserModel = require("../models/userModel");

// Fetch all data from MongoDB
exports.getUserData = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('===========email, password ',email, password)
    const data = await UserModel.find().where({ email });
    if (data) {
      return res.json(data);
    }
    return res.json('User not found');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
