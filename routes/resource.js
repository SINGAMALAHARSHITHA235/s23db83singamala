var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var cameras_controller = require('../controllers/cameras');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// cameras ROUTES ///
// POST request for creating a cameras.
router.post('/cameras', cameras_controller.cameras_create_post);
// DELETE request to delete cameras.
router.delete('/cameras/:id', cameras_controller.cameras_delete);
// PUT request to update cameras.
router.put('/cameras/:id', cameras_controller.cameras_update_put);
// GET request for one cameras.
router.get('/cameras/:id', cameras_controller.cameras_detail);
// GET request for list of all cameras items.
router.get('/cameras', cameras_controller.cameras_list);

module.exports = router;