import React from 'react';

import LeftNav from './LeftNav.jsx';
import RightNav from './RightNav.jsx';

const Header = () => (
  <div className="header">

    <div className="title">
      <h2>Popular Dishes</h2>
    </div>

    <div className="menu">
      <a href="https://www.google.com/">View Full Menu Link</a>
    </div>

    <div className="carousel-nav">
      <LeftNav />
      <RightNav />
    </div>
  </div>
);

export default Header;
