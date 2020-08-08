const mongoose = require('mongoose');
const {Schema} = mongoose;

const eventSchema = new Schema({
    name: String,
    description: String
})

module.exports = mongoose.model('events', eventSchema);