import React from 'react';

import DishPhotos from './DishPhotos.jsx';

// class ImageCarousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="carousel">
//         <DishPhotos />
//       </div>
//     );
//   }
// }

const ImageCarousel = () => (
  <div className="carousel">
    <DishPhotos />
  </div>
);

export default ImageCarousel;
