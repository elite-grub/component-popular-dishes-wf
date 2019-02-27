import { configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
// import PropTypes from 'prop-types';
import { expect } from 'chai';

import App from '../client/src/components/App.jsx';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders two <App /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).to.have.lengthOf(2);
  });
});
