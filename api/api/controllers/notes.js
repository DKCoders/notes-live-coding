const NoteService = require('../services/note');
const notesPost = async (req, res, next) => {
    const note = req.swagger.params.note.value;
    res.json(await NoteService.create(note));
    next();
};
const notesGet = async (req, res, next) => {
    res.json(await NoteService.get({}));
    next();    
}
const notesGetById = async (req, res, next) => {
    const noteId = req.swagger.params.noteId.value;
    res.json(await NoteService.getById(noteId));
    next();    
};
const notesPut = async (req, res, next) => {
    const noteId = req.swagger.params.noteId.value;
    const note = req.swagger.params.note.value;    
    res.json(await NoteService.updateById(noteId, note, {overwrite: true}));
    next();
};
const notesPatch = async (req, res, next) => {
    const noteId = req.swagger.params.noteId.value;
    const note = req.swagger.params.note.value;    
    res.json(await NoteService.updateById(noteId, note));
    next();
};
const notesDelete = async (req, res, next) => {
    const noteId = req.swagger.params.noteId.value;
    res.json(await NoteService.remove(noteId));
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
