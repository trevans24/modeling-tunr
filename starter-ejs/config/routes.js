var express = require('express');
var router = express.Router();
var artistsController = require('../controllers/artists.js');
//Main Routes

router.get('/', function(req, res) {
  res.render('home');
});

router.get('/about', function(req, res) {
  res.render('about');
});

//Artist Routes
  
// index
router.get('/artists', artistsController.index);

// new
router.get('/artists/new', artistsController.newArtist);

// create
router.post('/artists', artistsController.create);

// show
router.get('/artists/:id', artistsController.show);

// edit
router.get('/artists/:id/edit', artistsController.edit);

// update
router.put('/artists/:id', artistsController.update);

// destroy
router.post('/artists/:id/delete', artistsController.destroy);

module.exports = router;