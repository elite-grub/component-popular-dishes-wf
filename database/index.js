const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/popularDishes', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connection successful');
});

const photoSchema = mongoose.Schema({
  id: {
    type: Number, unique: true, sparse: true, require: true,
  },
  name: String,
  links: [
    {
      photoID: Number,
      photoURL: String,
    },
  ],
});

const Photo = mongoose.model('Photo', photoSchema);

const allPhotos = [
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.24.35+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.25.19+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.26.16+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.26.42+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.27.04+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.27.30+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.27.53+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.28.11+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.28.30+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.29.02+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.29.25+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.29.58+PM.jpg',
];

const saveMainRestaurant = () => {
  const links = [];

  for (let i = 1; i <= allPhotos.length; i++) {
    const photo = {};
    photo.photoID = i;
    photo.photoURL = allPhotos[i + 1];
    links.push(photo);
  }

  const MainPhotos = new Photo({
    id: 1,
    name: 'Fog Harbor Fish House',
    links,
  });

  MainPhotos.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Saved Main Restaurant Photos');
    }
  });
};

const saveFakeData = () => {
  const allData = [];
  for (let id = 2; id <= 100; id++) {
    const randomPhotoNum = Math.ceil(Math.random() * allPhotos.length);
    const linkArr = allPhotos.slice(0, randomPhotoNum);
    const links = [];

    for (let i = 1; i <= linkArr.length; i++) {
      const photo = {};
      photo.photoID = i;
      photo.photoURL = allPhotos[i + 1];
      links.push(photo);
    }

    const newPhoto = new Photo({
      id,
      name: `Fake Restaurant ${id}`,
      links,
    });

    allData.push(newPhoto.save());
  }

  Promise.all(allData)
    .then(() => console.log('All fake restaurant photos generated'))
    .catch(err => console.log(err));
};

const findRestaurant = (id, callback) => {
  Photo.findOne({ id: 1 }, (err, data) => {
    if (err) callback(err);
    callback(null, data);
  });
};

saveMainRestaurant();
saveFakeData();

module.exports = { findRestaurant };
