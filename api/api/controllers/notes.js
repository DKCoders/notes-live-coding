const mongoose = require('mongoose');
const Note = mongoose.model('Note');
const notesPost = async (req, res, next) => {
    const note = req.swagger.params.note.value;
    const newNote = await Note.create(note);
    res.json(newNote);
};

module.exports = {
    notesPost
};