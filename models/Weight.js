const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const WeightSchema = new Schema({
  kg: {
    type: String
  },
  date: {
    type: String
  }
});

module.exports = Weight = mongoose.model('weight', WeightSchema);