import { configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Header from '../client/src/components/Header.jsx';
import LeftNav from '../client/src/components/LeftNav.jsx';
import RightNav from '../client/src/components/RightNav.jsx';

configure({ adapter: new Adapter() });

describe('Header Tests', () => {
  it('renders the Popular Dishes title', () => {
    const wrapper = render(<Header className="title" />);
    expect(wrapper.text()).toContain('Popular Dishes');
  });

  it('renders the view full menu link', () => {
    const wrapper = render(<Header className="menu" />);
    expect(wrapper.html()).toContain('a');
  });

  it('renders carousel-nav left component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(LeftNav)).toHaveLength(1);
  });

  it('renders carousel-nav right component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(RightNav)).toHaveLength(1);
  });
});
