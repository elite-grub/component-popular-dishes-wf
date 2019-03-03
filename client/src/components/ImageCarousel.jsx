import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../../dist/styles.css';

import DishPhotos from './DishPhotos.jsx';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Carousel className="image-carousel" indicators={false} controls={false} interval={null}>
        <DishPhotos
          activeIndex={this.props.activeIndex}
          carouselItemCount={this.props.carouselItemCount}
          toggleCarousel={this.props.toggleCarousel}
          direction={this.props.direction}
          leftNav={this.props.leftNav}
          rightNav={this.props.rightNav}
          photos={this.props.photos}
          getAllData={this.props.getAllData}
        />
      </Carousel>
    );
  }
}

export default ImageCarousel;
