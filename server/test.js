const mongoose = require('mongoose');

require('dotenv').config();
// Define the schema
const dataSchema = new mongoose.Schema({
  // Your schema definition here
}, { collection: 'listingsAndReviews' });

// Create the model
const DataModel = mongoose.model('DataModel', dataSchema);

const runQuery = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Run your query
    const listings = await DataModel.find({});

    if (listings.length === 0) {
      console.log('No listings found');
    } else {
      console.log('Listings:', listings);
    }

    // Close the connection
    mongoose.connection.close();
  } catch (err) {
    console.error('Error:', err);
  }
};

runQuery();
