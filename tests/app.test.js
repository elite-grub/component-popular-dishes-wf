import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import App from '../client/src/components/App.jsx';
import Header from '../client/src/components/Header.jsx';
import ImageCarousel from '../client/src/components/ImageCarousel.jsx';

configure({ adapter: new Adapter() });

describe('App Tests', () => {
  it('renders Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders ImageCarousel component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ImageCarousel)).toHaveLength(1);
  });
});
