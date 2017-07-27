const mongoose = require('mongoose');
const Note = mongoose.model('Note');
const notesPost = async (req, res, next) => {
    const note = req.swagger.params.note.value;
    const newNote = await Note.create(note);
    res.json({data: newNote});
};
const notesGet = async (req, res, next) => {
    const notes = await Note.find({});
    res.json({data: notes});
}
const notesGetById = async (req, res, next) => {
    const noteId = req.swagger.params.noteId.value;
    const note = await Note.findById(noteId);
    res.json({data: note});
};
module.exports = {
    notesGet,
    notesGetById,
    notesPost
};