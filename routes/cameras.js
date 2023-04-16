// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('cameras', { title: 'Search Results cameras' });
// });

// module.exports = router;

var express = require('express');
const cameras_controllers= require('../controllers/cameras');
var router = express.Router();

const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 

/* GET cameras */
router.get('/',secured,cameras_controllers.cameras_view_all_Page );

// GET request for one costume.
//router.get('/cameras/:id', cameras_controllers.cameras_detail);
module.exports = router;