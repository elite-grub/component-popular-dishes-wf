import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import DishPhotos from './DishPhotos.jsx';

class ImageCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >

        <DishPhotos />

        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/190x179"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item> */}

      </Carousel>
    );
  }
}

export default ImageCarousel;
