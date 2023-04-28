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

// A little function to check if we have an authorized user and continue on
// or redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
  }

  



/* GET cameras */
router.get('/', cameras_controllers.cameras_view_all_Page );

// GET request for one cameras.
router.get('/cameras/:id', cameras_controllers.cameras_detail);

/* GET detail cameras page */ 
router.get('/detail',secured, cameras_controllers.cameras_view_one_Page); 

/* GET create cameras page */
router.get('/create',secured, cameras_controllers.cameras_create_Page);

/* GET create update page */
router.get('/update',secured, cameras_controllers.cameras_update_Page);

/* GET delete cameras page */
router.get('/delete',secured, cameras_controllers.cameras_delete_Page);
module.exports = router;

