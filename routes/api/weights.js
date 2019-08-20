// Require dependencies
const express = require('express');
const router = express.Router();

// Quote model
const Weight = require('../../models/Weight');

// @route   GET api/weights/test
// @desc    Tests weight route
// @access  Public
router.get('/test', (req, res) => 
    res.json({ msg: 'Weight Works' }
));

// @route   GET api/weights
// @desc    Get weights
// @access  Public
router.get('/', (req, res) => {
    Weight.find()
      .sort({ date: -1 })
      .then(weights => res.json(weights))
      .catch(err => res.status(404).json({ noweightsfound: 'No weights found' }));
  });

// @route   POST api/weights/createWeight
// @desc    Create weight route
// @access  Public
router.post('/', (req, res) => {
    const newWeight = new Weight({
        kg: req.body.kg,
        date: req.body.date
      });
  
      newWeight.save().then(weight => res.json(weight));
});

module.exports = router;