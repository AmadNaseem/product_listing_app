const mongoose = require('mongoose');

// Define the schema
const dataSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: false },
  listing_url: { type: String, required: false },
  name: { type: String, required: false },
  summary: { type: String, required: false },
  space: { type: String, required: false },
  description: { type: String, required: false },
  neighborhood_overview: { type: String, required: false },
  notes: { type: String, required: false },
  transit: { type: String, required: false },
  access: { type: String, required: false },
  interaction: { type: String, required: false },
  house_rules: { type: String, required: false },
  property_type: { type: String, required: false },
  room_type: { type: String, required: false },
  bed_type: { type: String, required: false },
  minimum_nights: { type: Number, required: false },
  maximum_nights: { type: Number, required: false },
  cancellation_policy: { type: String, required: false },
  last_scraped: { type: Date, required: false },
  calendar_last_scraped: { type: Date, required: false },
  first_review: { type: Date, required: false },
  last_review: { type: Date, required: false },
  accommodates: { type: Number, required: false },
  bedrooms: { type: Number, required: false },
  beds: { type: Number, required: false },
  number_of_reviews: { type: Number, required: false },
  bathrooms: { type: mongoose.Schema.Types.Decimal128, required: false },
  amenities: { type: [String], required: false },
  price: { type: mongoose.Schema.Types.Decimal128, required: false },
  cleaning_fee: { type: mongoose.Schema.Types.Decimal128, required: false },
  extra_people: { type: mongoose.Schema.Types.Decimal128, required: false },
  guests_included: { type: mongoose.Schema.Types.Decimal128, required: false },
  images: {
    thumbnail_url: { type: String, required: false },
    medium_url: { type: String, required: false },
    picture_url: { type: String, required: false },
    xl_picture_url: { type: String, required: false }
  },
  host: {
    host_id: { type: String, required: false },
    host_url: { type: String, required: false },
    host_name: { type: String, required: false },
    host_location: { type: String, required: false },
    host_about: { type: String, required: false },
    host_thumbnail_url: { type: String, required: false },
    host_picture_url: { type: String, required: false },
    host_neighbourhood: { type: String, required: false },
    host_is_superhost: { type: Boolean, required: false },
    host_has_profile_pic: { type: Boolean, required: false },
    host_identity_verified: { type: Boolean, required: false },
    host_listings_count: { type: Number, required: false },
    host_total_listings_count: { type: Number, required: false },
    host_verifications: { type: [String], required: false }
  },
  address: {
    street: { type: String, required: false },
    suburb: { type: String, required: false },
    government_area: { type: String, required: false },
    market: { type: String, required: false },
    country: { type: String, required: false },
    country_code: { type: String, required: false },
    location: {
      type: { type: String, enum: ['Point'], default: 'Point', required: false },
      coordinates: { type: [Number], required: false }
    }
  },
  availability: {
    availability_30: { type: Number, required: false },
    availability_60: { type: Number, required: false },
    availability_90: { type: Number, required: false },
    availability_365: { type: Number, required: false }
  },
  review_scores: {
    review_scores_accuracy: { type: Number, required: false },
    review_scores_cleanliness: { type: Number, required: false },
    review_scores_checkin: { type: Number, required: false },
    review_scores_communication: { type: Number, required: false },
    review_scores_location: { type: Number, required: false },
    review_scores_value: { type: Number, required: false },
    review_scores_rating: { type: Number, required: false }
  },
  reviews: [{
    _id: { type: mongoose.Schema.Types.ObjectId, required: false },
    date: { type: Date, required: false },
    listing_id: { type: String, required: false },
    reviewer_id: { type: String, required: false },
    reviewer_name: { type: String, required: false },
    comments: { type: String, required: false }
  }]
}, { collection: 'listingsAndReviews' });  // Specify the collection name, { collection: 'listingsAndReviews' }

// Create and export the model
module.exports = mongoose.model('DataModel', dataSchema);

// const dataSchema = new mongoose.Schema({
//     // Your schema definition here
//   }, { collection: 'listingsAndReviews' });
  
//   // Create the model
//   module.exports = mongoose.model('DataModel', dataSchema);