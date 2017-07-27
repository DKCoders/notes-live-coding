const mongoose = require('mongoose');
const Note = mongoose.model('Note');
const notesPost = async (req, res, next) => {
    const note = req.swagger.params.note.value;
    const newNote = await Note.create(note);
    res.json({data: newNote});
    next();
};
const notesGet = async (req, res, next) => {
    const notes = await Note.find({});
    res.json({data: notes});
    next();    
}
const notesGetById = async (req, res, next) => {
    const noteId = req.swagger.params.noteId.value;
    const note = await Note.findById(noteId);
    res.json({data: note})
    next();    
};
const notesPut = async (req, res, next) => {
    const noteId = req.swagger.params.noteId.value;
    const note = req.swagger.params.note.value;    
    const updatedNote = await Note.findByIdAndUpdate(noteId, note, {new: true, overwrite: true});
    res.json({data: note})
    next();
};
const notesPatch = async (req, res, next) => {
    const noteId = req.swagger.params.noteId.value;
    const note = req.swagger.params.note.value;    
    const updatedNote = await Note.findByIdAndUpdate(noteId, note, {new: true});
    res.json({data: note})
    next();
};
const notesDelete = async (req, res, next) => {
    const noteId = req.swagger.params.noteId.value;
    const deleted = await Note.findByIdAndRemove(noteId);
    if(deleted !== null){
        res.json({data: true})
    } else {
        res.json({data: false});
    }
    next();
}
module.exports = {
    notesGet,
    notesGetById,
    notesPost,
    notesPut,
    notesPatch,
    notesDelete
};