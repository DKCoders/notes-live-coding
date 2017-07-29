const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const labelSchema = new Schema({
    label: {type: String, required: true}
});

module.exports = mongoose.model('Label', labelSchema);
