const mongoose = require('mongoose');
const Note = mongoose.model('Note');

const create = async note => ({data: await Note.create(note)});
const get = async (query, populate = false) => {
    let promise = Note.find(query);
    if(populate){
        promise = promise.populate('labels');    
    }
    return {data: await promise};
};
const getById = async (id, populate = false) => {
    let promise = Note.findById(id);
    if(populate){
        promise = promise.populate('labels');    
    }
    return {data: await promise};
};
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
