const mongoose = require('mongoose');
const {Schema} = mongoose;

const eventSchema = new Schema({
    user: String,
    name: String,
    description: String,
    member_count: Number,
    start: String,
    end: String,
    cancel_automatically: Boolean,
    is_unlimited_numbers: Boolean,
    is_user_name_required: Boolean,
    event_code: String
});

module.exports = mongoose.model('events', eventSchema);
