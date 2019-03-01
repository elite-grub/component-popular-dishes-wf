import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../../dist/styles.css';

import DishPhotos from './DishPhotos.jsx';

class ImageCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // index: 0,
      direction: null,
    };
  }

  render() {
    // const {
    //   activeIndex, direction, indicators, onSelect,
    // } = this.props;
    return (
      <Carousel indicators={false}>
        {/* {activeIndex}
        {direction}
        {indicators}
        {onSelect} */}
        {/* {this.props.activeIndex} */}
        {this.props.direction}
        {this.props.onSelect}
        <DishPhotos />
      </Carousel>
    );
  }
}

export default ImageCarousel;
