require('dotenv').config();
const faker = require('faker');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
require('./api/models/');
const Note = mongoose.model('Note');
const Label = mongoose.model('Label');
const repeat = (number, func) => [...Array(number)].map(func);

const getRandomFrom = (array = [], number = 3) => {
    const list = array.slice();
    return repeat(number, () =>
        list.splice(faker.random.number(list.length - 1), 1)[0]);
};

const label = () => ({
    _id: new ObjectId(),
    label: faker.random.word()
});

const note = labels => () => ({
    _id: new ObjectId(),
    title: faker.random.words(),
    content: faker.lorem.lines(),
    labels: getRandomFrom(labels, 3)
});

const generateLabels = (number = 3) => repeat(number, label);
const generateNotes = (labels, number = 3) => repeat(number, note(labels));

const mockData = async () => {
    console.log('Connecting...');
    await mongoose.connect(process.env.MONGODB);
    console.log('Creating Labels...');
    const labels = generateLabels(10);
    console.log('Creating Notes...');
    const notes = generateNotes(labels, 100);
    console.log('Saving Data...');
    await Promise.all([
        Label.create(labels),
        Note.create(notes)
    ]);
    console.log('Finished!');
    process.exit(0);
};
mockData();
