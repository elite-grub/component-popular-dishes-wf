import React from 'react';
import $ from 'jquery';

import Header from './Header.jsx';
import ImageCarousel from './ImageCarousel.jsx';

import '../../dist/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      direction: null,
      count: 3,
      menuURL: '',
      photos: [],
      nextIcon: <a className="right-nav" role="button" data-slide="next"></a>,
      prevIcon: <a className="left-nav" role="button" data-slide="prev"></a>,
    };

    this.getAllData = this.getAllData.bind(this);
    this.toggleCarousel = this.toggleCarousel.bind(this);
  }

  componentDidMount() {
    this.getAllData();
  }

  getAllData() {
    const getURL = (callback) => {
      $.get({
        url: `http://ec2-18-144-11-1.us-west-1.compute.amazonaws.com/popular/${this.props.id}`,
        success: data => callback(null, data.menuURL),
        error: err => callback(err),
      });
    };

    getURL((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        menuURL: data,
      });
    });

    const getPhotos = (callback) => {
      $.get({
        url: `http://ec2-18-144-11-1.us-west-1.compute.amazonaws.com/popular/${this.props.id}`,
        success: data => callback(null, data.links),
        error: err => callback(err),
      });
    };

    getPhotos((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        photos: data,
      });
    });
  }

  toggleCarousel(e) {
    let selectedIndex = this.state.index;
    const [min, max] = [0, this.state.count - 1];

    if (e === 'next') {
      selectedIndex++;
    } else if (e === 'prev') {
      selectedIndex--;
    }

    if (selectedIndex > max) {
      selectedIndex = 0;
    }

    if (selectedIndex < min) {
      selectedIndex = max;
    }

    this.setState({
      direction: e,
      index: selectedIndex,
    });
  }

  render() {
    const {
      index, direction, count, nextIcon, prevIcon, menuURL, photos,
    } = this.state;

    return (
      <div className="container">
        <Header
          activeIndex={index}
          carouselItemCount={count}
          direction={direction}
          rightNav={nextIcon}
          leftNav={prevIcon}
          menuURL={menuURL}
          getAllData={this.getAllData}
          toggleCarousel={this.toggleCarousel}
        />
        <div className="image-carousel-container">
          <ImageCarousel
            activeIndex={index}
            carouselItemCount={count}
            direction={direction}
            rightNav={nextIcon}
            leftNav={prevIcon}
            photos={photos}
            toggleCarousel={this.toggleCarousel}
            getAllData={this.getAllData}
          />
        </div>
      </div>
    );
  }
}

export default App;
