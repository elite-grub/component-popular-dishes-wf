import React from 'react';

import Menu from './Menu.jsx';
import LeftNav from './LeftNav.jsx';
import RightNav from './RightNav.jsx';

import '../../dist/styles.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="header">

        <div className="title">
          <h2>Popular Dishes</h2>
        </div>

        <Menu
          getAllData={this.props.getAllData}
          menuURL={this.props.menuURL}
        />

        <div className="carousel-nav">
          <LeftNav
            activeIndex={this.props.activeIndex}
            carouselItemCount={this.props.carouselItemCount}
            toggleCarousel={this.props.toggleCarousel}
            direction={this.props.direction}
            leftNav={this.props.leftNav}
          />
        </div>

        <div className="carousel-nav">
          <RightNav
            activeIndex={this.props.activeIndex}
            carouselItemCount={this.props.carouselItemCount}
            toggleCarousel={this.props.toggleCarousel}
            direction={this.props.direction}
            rightNav={this.props.rightNav}
          />
        </div>
      </div>
    );
  }
}

export default Header;
