require('dotenv').config();
const mongoose = require('mongoose');
require('./api/models/');
const Note = mongoose.model('Note');
const Label = mongoose.model('Label');

const removeData = async () => {
    console.log('Connecting...');
    await mongoose.connect(process.env.MONGODB);
    console.log('Deleting data...');
    await Promise.all([
        Note.remove({}),
        Label.remove({})
    ]);
    console.log('Finished!');
    process.exit(0);
};

removeData();