const faker = require('faker');

const { Photo } = require('./schema.js');

const allPhotos = [
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-03-01+at+2.09.15+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-03-01+at+2.09.38+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-03-01+at+2.10.01+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-03-01+at+2.10.16+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-03-01+at+2.10.42+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-03-01+at+2.11.10+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-03-01+at+2.11.23+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-03-01+at+2.11.56+PM.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-photos/Screen+Shot+2019-03-01+at+2.12.09+PM.jpg',
];

const saveMainRestaurant = () => {
  const links = [];

  for (let i = 1; i <= allPhotos.length; i++) {
    const photo = {};
    photo.photoID = i;
    photo.photoURL = allPhotos[i - 1];
    photo.dishURL = faker.internet.url();
    links.push(photo);
  }

  const MainPhotos = new Photo({
    id: 1,
    name: 'Fog Harbor Fish House',
    menuURL: faker.internet.url(),
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
    const links = [];

    for (let i = 1; i <= allPhotos.length; i++) {
      const photo = {};
      photo.photoID = i;
      photo.photoURL = allPhotos[i - 1];
      photo.dishURL = faker.internet.url();
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

module.exports = { saveMainRestaurant, saveFakeData };
