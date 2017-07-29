const mongoose = require('mongoose');
const Note = mongoose.model('Note');

const create = async note => ({data: await Note.create(note)});
const get = async query => ({data: await Note.find(query)});
const getById = async id => ({data: await Note.findById(id)});
const updateById = async (id, note, options = {}) => {
    options.new = true;
    return {data: await Note.findByIdAndUpdate(id, note, options)}
};
const remove = async id => {
    const deleted = await Note.findByIdAndRemove(id);
    if(deleted !== null){
        return {data: true};
    } else {
        return {data: false};
    }
};
module.exports = {
    create,
    get,
    getById,
    updateById,
    remove
};
