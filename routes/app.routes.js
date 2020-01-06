const express = require('express');
const router = express.Router();
var path = require('path');

// Require the controllers WHICH WE DID NOT CREATE YET!!
const main_controller = require('../controllers/main_controller');


router.get('/',function(req,res){
  res.render(__dirname+'/../views/index.ejs');
})

router.post('/dashboard',main_controller.dashboard);


module.exports = router;
