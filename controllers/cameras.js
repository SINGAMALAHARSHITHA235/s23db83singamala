var cameras = require('../models/cameras');
// List of all cameras
exports.cameras_list = function(req, res) {
res.send('NOT IMPLEMENTED: cameras list');
};
// for a specific cameras.
exports.cameras_detail = function(req, res) {
res.send('NOT IMPLEMENTED: cameras detail: ' + req.params.id);
};
// Handle cameras create on POST.
exports.cameras_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: cameras create POST');
};
// Handle cameras delete form on DELETE.
exports.cameras_delete = function(req, res) {
res.send('NOT IMPLEMENTED: cameras delete DELETE ' + req.params.id);
};
// Handle cameras update form on PUT.
exports.cameras_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: cameras update PUT' + req.params.id);
};