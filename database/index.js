const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/popularDishes', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connection successful');
});

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

const allPhotos = [
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.24.35+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.25.19+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.26.16+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.26.42+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.27.04+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.27.30+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-26+at+1.14.59+AM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.27.53+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.28.11+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-02-24+at+3.28.30+PM.jpg',
];

const dishesURL = [
  'https://www.yelp.com/menu/fog-harbor-fish-house-san-francisco-2/item/award-winning-clam-chowder',
  'https://www.yelp.com/menu/fog-harbor-fish-house-san-francisco-2/item/dungeness-crab-cakes',
  'https://www.yelp.com/menu/fog-harbor-fish-house-san-francisco-2/item/cioppino',
  'https://www.yelp.com/menu/fog-harbor-fish-house-san-francisco-2/item/mixed-grill',
  'https://www.yelp.com/menu/fog-harbor-fish-house-san-francisco-2/item/shellfish-platter',
  'https://www.yelp.com/menu/fog-harbor-fish-house-san-francisco-2/item/lobster-tails',
  'https://www.yelp.com/menu/fog-harbor-fish-house-san-francisco-2/item/ahi-tuna',
  'https://www.yelp.com/menu/fog-harbor-fish-house-san-francisco-2/item/seafood-penne',
  'https://www.yelp.com/menu/fog-harbor-fish-house-san-francisco-2/item/award-winning-chowder-in-a-fresh-baked-sourdough-bread-bowl',
  'https://www.yelp.com/menu/fog-harbor-fish-house-san-francisco-2/item/red-chili-garlic-shrimp',
];

const saveMainRestaurant = () => {
  const links = [];

  for (let i = 1; i <= allPhotos.length; i++) {
    for (let j = 1; j <= dishesURL.length; j++) {
      const photo = {};
      photo.photoID = i;
      photo.photoURL = allPhotos[i - 1];
      photo.dishURL = dishesURL[j - 1];
      links.push(photo);
    }
  }

  const MainPhotos = new Photo({
    id: 1,
    name: 'Fog Harbor Fish House',
    menuURL: 'https://www.yelp.com/menu/fog-harbor-fish-house-san-francisco-2/dinner-menu',
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
      photo.photoURL = allPhotos[i - 1];
      links.push(photo);
    }

    const newPhoto = new Photo({
      id,
      name: `Fake Restaurant ${id}`,
      menuURL: faker.internet.url(),
      links,
    });

    allData.push(newPhoto.save());
  }

  Promise.all(allData)
    .then(() => console.log('All fake restaurant photos generated'))
    .catch(err => console.log(err));
};

saveMainRestaurant();
saveFakeData();

const findRestaurant = (id, callback) => {
  let newId = id.split(':');
  let newReqId = Number(newId[1]);
  Photo.findOne({ id: newReqId }, (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, data);
  });
};

module.exports = { findRestaurant };
