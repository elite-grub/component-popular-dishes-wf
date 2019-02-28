import React from 'react';
import $ from 'jquery';
import faker from 'faker';
import Carousel from 'react-bootstrap/Carousel';

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
    const id = faker.random.number({ min: 1, max: 100 });
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
    const Photos = (this.state.photos).map((photo) => {
      return <div className="dish" key={photo.photoID}>
        <img className="dishPhoto" src={photo.photoURL}></img>
        <a href={photo.dishURL}></a>
      </div>;
    });
    return (
      <Carousel.Item>
        {Photos}
      </Carousel.Item>
    );
  }
}

export default DishPhotos;
