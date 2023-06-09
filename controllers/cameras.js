var cameras = require('../models/cameras');
// List of all cameras
exports.cameras_list = async function(req, res) {
    try{
        result = await cameras.find();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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
exports.cameras_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await cameras.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
// Handle cameras update form on PUT.
exports.cameras_update_Put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await cameras.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.cameras_type)  
               toUpdate.cameras_type = req.body.cameras_type; 
        if(req.body.cameras_resolution) toUpdate.cameras_resolution = req.body.cameras_resolution; 
        if(req.body.cameras_price) toUpdate.cameras_price = req.body.cameras_price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// VIEWS
// Handle a show all view
exports.cameras_view_all_Page = async function(req, res) {
    try{
        result = await cameras.find();
    res.render('cameras', { title: 'cameras Search result', result: result });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // for a specific Costume.
    exports.cameras_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await cameras.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle a show one view with id specified by query 
exports.cameras_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await cameras.findById( req.query.id) 
        res.render('camerasdetail',  
{ title: 'cameras Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a cameras.
// No body, no in path parameter, no query.
// Does not need to be async
exports.cameras_create_Page = function(req, res) {
console.log("create view")
try{
res.render('camerascreate', { title: 'cameras Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


//Handle building the view for updating a cameras.
// query provides the id
exports.cameras_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await cameras.findById(req.query.id)
res.render('camerasupdate', { title: 'cameras Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle a delete one view with id from query
exports.cameras_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await cameras.findById(req.query.id)
    res.render('camerasdelete', { title: 'cameras Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };