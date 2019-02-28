import React from 'react';

import Menu from './Menu.jsx';
import LeftNav from './LeftNav.jsx';
import RightNav from './RightNav.jsx';

import '../../dist/styles.css';

const Header = () => (
  <div className="header">

    <div className="title">
      <h2>Popular Dishes</h2>
    </div>

    <Menu />

    <div className="carousel-nav">
      <LeftNav />
    </div>

    <div className="carousel-nav">
      <RightNav />
    </div>
  </div>
);

export default Header;
