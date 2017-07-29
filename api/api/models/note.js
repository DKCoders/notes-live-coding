const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    labels: [{type: Schema.Types.ObjectId, ref: 'Label'}]
});

module.exports = mongoose.model('Note', noteSchema);