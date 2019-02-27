import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import db from '../database/index';

configure({ adapter: new Adapter() });

describe('DB returns correct information for main restaurant', () => {
  const id = 1;

  it('Should match unique id', (done) => {
    db.findRestaurant(id, (err, data) => {
      expect(data.id).toEqual(id);
      done();
    });
  });

  it('Should return menu link', (done) => {
    db.findRestaurant(id, (err, data) => {
      expect(data.menuURL).toBe('https://www.yelp.com/menu/fog-harbor-fish-house-san-francisco-2/dinner-menu');
      done();
    });
  });

  it('Should return restaurant name', (done) => {
    db.findRestaurant(id, (err, data) => {
      expect(data.name).toBe('Fog Harbor Fish House');
      done();
    });
  });
});

describe('DB returns fake restaurant data', () => {
  const id = 2;
  it('Should return fake data restaurant name', (done) => {
    db.findRestaurant(id, (err, data) => {
      expect(data.name).toBe('Fake Restaurant 2');
      done();
    });
  });
});
