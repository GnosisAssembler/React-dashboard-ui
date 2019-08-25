const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MastSchema = new Schema({
  counter: {
    type: String
  },
  date: {
    type: String
  }
});

module.exports = Mast = mongoose.model('mast', MastSchema);