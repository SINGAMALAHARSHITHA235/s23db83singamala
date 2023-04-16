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
exports.cameras_create_post = async function(req, res) {
    console.log(req.body)
    var document = new cameras();
    
    document.cameras_type = req.body.cameras_type;
    document.cameras_resolution = req.body.cameras_resolution;;
    document.cameras_price = req.body.cameras_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
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