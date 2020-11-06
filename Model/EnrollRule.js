const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enrollRullSchema = new Schema({
    "data" : []
})

module.exports = mongoose.model('enrollRull', enrollRullSchema)