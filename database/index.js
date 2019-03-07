const mongoose = require('mongoose');

const { Photo } = require('./schema.js');
const { saveMainRestaurant, saveFakeData } = require('./dataGeneration.js');

mongoose.connect('mongodb://database/popularDishes', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  saveMainRestaurant();
  saveFakeData();
  console.log('connection successful');
});

const findRestaurant = (id, callback) => {
  Photo.findOne({ id }, (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, data);
  });
};

module.exports = { findRestaurant };
