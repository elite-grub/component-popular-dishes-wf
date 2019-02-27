const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  id: Number,
  name: String,
  menuURL: String,
  links: [
    {
      photoID: Number,
      photoURL: String,
      dishURL: String,
    },
  ],
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = { Photo };
