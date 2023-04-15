const mongoose = require("mongoose")
const camerasSchema = mongoose.Schema({
    cameras_type: String,
    cameras_resolution: String,
    cameras_price: Number
})
module.exports = mongoose.model("cameras",
camerasSchema)