const mongoose = require('mongoose');
const Label = mongoose.model('Label');

const create = async label => ({data: await Label.create(label)});
const get = async query => ({data: await Label.find(query)});
const getById = async id => ({data: await Label.findById(id)});
const updateById = async (id, label, options = {}) => {
    options.new = true;
    return {data: await Label.findByIdAndUpdate(id, label, options)}
};
const remove = async id => {
    const deleted = await Label.findByIdAndRemove(id);
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
