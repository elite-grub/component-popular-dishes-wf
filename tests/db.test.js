import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import db from '../database/index';

configure({ adapter: new Adapter() });

// afterAll(() => db.db.close());

describe('DB returns correct information', () => {
  it('Should return main restaurant menu link', (done) => {
    db.findRestaurant((err, data) => {
      const id = ':1';
      expect(data.id).toEqual(id);
      expect(data.menuURL).toBe('https://www.yelp.com/menu/fog-harbor-fish-house-san-francisco-2/dinner-menu');
      done();
    });
  });

  it('Should return main restaurant name', (done) => {
    db.findRestaurant((err, data) => {
      expect(data.name).toBe('Fog Harbor Fish House');
      done();
    });
  });
});
