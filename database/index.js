const mongoose = require('mongoose');

const { Photo } = require('./schema.js');
const { saveMainRestaurant, saveFakeData } = require('./dataGeneration.js');

mongoose.connect('mongodb://localhost/popularDishes', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  saveMainRestaurant();
  saveFakeData();
  console.log('connection successful');
});

const findRestaurant = (id, callback) => {
  const newId = id.split(':');
  const newReqId = Number(newId[1]);
  Photo.findOne({ id: newReqId }, (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, data);
  });
};

module.exports = { findRestaurant };
