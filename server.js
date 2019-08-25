// Require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
var cors = require('cors');

// Bring in routes
const weights = require('./routes/api/weights');
const masts = require('./routes/api/masts');

// Init app
const app = express();
// enable service for CORS:cross origin resource sharing
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost/reactdashboardui', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/weights', weights);
app.use('/api/masts', masts);

// Configure port
const port = process.env.PORT || 5000;

// Start express server
function startExpress() {
  app.listen(port);
  console.log('Express server listening on port '+ port);
}

startExpress();