const express = require('express');
const router = express.Router();
var path = require('path');

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controllers = require('../controllers/product.controllers');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controllers.test);
router.get('/signup', function(req,res){
  res.render(__dirname + "/../views/Details.ejs");
});
router.get('/',function(req,res){
  res.render(__dirname+'/../views/index.ejs');
})

router.post('/signup', product_controllers.create);
router.post('/upload',product_controllers.createfile);


module.exports = router;
