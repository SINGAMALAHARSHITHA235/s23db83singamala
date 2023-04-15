var cameras = require('../models/cameras');
// List of all cameras
exports.cameras_list = async function(req, res) {
    try{
        cameras = await cameras.find();
    res.send(cameras);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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
// VIEWS
// Handle a show all view
exports.cameras_view_all_Page = async function(req, res) {
    try{
        cameras = await cameras.find();
    res.render('cameras', { title: 'cameras Search Result', result: cameras });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };