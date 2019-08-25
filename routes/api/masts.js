// Require dependencies
const express = require('express');
const router = express.Router();

// Quote model
const Mast = require('../../models/Mast');

// @route   GET api/masts/test
// @desc    Tests mast route
// @access  Public
router.get('/test', (req, res) => 
    res.json({ msg: 'Mast Works' }
));

// @route   GET api/masts
// @desc    Get masts
// @access  Public
router.get('/', (req, res) => {
    Mast.find()
      .sort({ date: -1 })
      .then(masts => res.json(masts))
      .catch(err => res.status(404).json({ nomastsfound: 'No masts found' }));
});

// @route   POST api/masts/createMast
// @desc    Create mast route
// @access  Public
router.post('/', (req, res) => {
    const newMast = new Mast({
        counter: req.body.counter,
        date: req.body.date
      });
  
      newMast.save().then(mast => res.json(mast));
});

module.exports = router;