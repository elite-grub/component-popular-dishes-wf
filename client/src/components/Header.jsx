import React from 'react';

import LeftNav from './LeftNav.jsx';
import RightNav from './RightNav.jsx';

import '../../dist/styles.css';

const Header = () => (
  <div className="header">

    <div className="title">
      <h2>Popular Dishes</h2>
    </div>

    <div className="menu">
      <a className="menu-link"
      href="https://www.google.com/">View Full Menu</a>
    </div>

    <div className="carousel-nav">
      <LeftNav />
      <RightNav />
    </div>
  </div>
);

export default Header;
