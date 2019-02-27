import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import ImageCarousel from '../client/src/components/ImageCarousel.jsx';
import DishPhotos from '../client/src/components/DishPhotos.jsx';

configure({ adapter: new Adapter() });

describe('Image Carousel Tests', () => {
  it('renders DishPhotos component', () => {
    const wrapper = shallow(<ImageCarousel />);
    expect(wrapper.find(DishPhotos)).toHaveLength(1);
  });
});
