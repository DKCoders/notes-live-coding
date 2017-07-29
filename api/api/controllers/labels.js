const LabelService = require('../services/label');
const labelsPost = async (req, res, next) => {
    const label = req.swagger.params.label.value;
    res.json(await LabelService.create(label));
    next();
};
const labelsGet = async (req, res, next) => {
    res.json(await LabelService.get({}));
    next();    
}
const labelsGetById = async (req, res, next) => {
    const labelId = req.swagger.params.labelId.value;
    res.json(await LabelService.getById(labelId));
    next();    
};
const labelsPut = async (req, res, next) => {
    const labelId = req.swagger.params.labelId.value;
    const label = req.swagger.params.label.value;    
    res.json(await LabelService.updateById(labelId, label, {overwrite: true}));
    next();
};
const labelsPatch = async (req, res, next) => {
    const labelId = req.swagger.params.labelId.value;
    const label = req.swagger.params.label.value;    
    res.json(await LabelService.updateById(labelId, label));
    next();
};
const labelsDelete = async (req, res, next) => {
    const labelId = req.swagger.params.labelId.value;
    res.json(await LabelService.remove(labelId));
    next();
}
module.exports = {
    labelsGet,
    labelsGetById,
    labelsPost,
    labelsPut,
    labelsPatch,
    labelsDelete
};
