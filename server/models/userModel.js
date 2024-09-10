const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: false },
  name: { type: String, required: false },
  email: { type: String, required: false },
  password: { type: String, required: false },
  address: { type: String, required: false },
  phone_no: { type: String, required: false },
  images: { type: String, required: false }
}, { collection: 'User' }); 
// Create and export the model
module.exports = mongoose.model('userModel', userSchema);
