import { configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
// import PropTypes from 'prop-types';
import { expect } from 'chai';

import App from '../client/src/components/App.jsx';
import Header from '../client/src/components/Header.jsx';
import ImageCarousel from '../client/src/components/ImageCarousel.jsx';

configure({ adapter: new Adapter() });

describe('App Testing', () => {
  it('renders Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });

  it('renders ImageCarousel component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ImageCarousel)).to.have.lengthOf(1);
  });
});
