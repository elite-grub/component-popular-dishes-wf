import React from 'react';
import $ from 'jquery';
import Carousel from 'react-bootstrap/Carousel';

import '../../dist/styles.css';

class DishPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };

    this.getPhotos = this.getPhotos.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    const id = Math.floor(Math.random() * 100) + 1;
    const getData = (callback) => {
      $.get({
        url: `/popular/${id}`,
        success: data => callback(null, data.links),
        error: err => callback(err),
      });
    };

    getData((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        photos: data,
      });
    });
  }

  render() {
    const idx = this.props.activeIndex;
    const Photos = (this.state.photos).map((photo) => {
      if (idx === 0) {
        if (photo.photoID >= 1 && photo.photoID <= 4) {
          return <div className="dish" key={photo.photoID}>
            <img className="dishPhoto" src={photo.photoURL}></img>
            <a href={photo.dishURL}></a>
          </div>;
        }
      } else if (idx === 1) {
        if (photo.photoID >= 4 && photo.photoID <= 7) {
          return <div className="dish" key={photo.photoID}>
            <img className="dishPhoto" src={photo.photoURL}></img>
            <a href={photo.dishURL}></a>
          </div>;
        }
      } else if (idx === 2) {
        if (photo.photoID >= 7 || photo.photoID === 1) {
          return <div className="dish" key={photo.photoID}>
            <img className="dishPhoto" src={photo.photoURL}></img>
            <a href={photo.dishURL}></a>
          </div>;
        }
      }
    });

    return (
      <Carousel.Item>
        {Photos}
      </Carousel.Item>
    );
  }
}

export default DishPhotos;
