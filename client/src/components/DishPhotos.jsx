import React from 'react';

import Dish from './Dish.jsx';

// class DishPhotos extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="dish" index="0">
//         <h6>increment index</h6>
//         <Dish />
//       </div>
//     );
//   }
// }

const DishPhotos = () => (
  <div className="dish" index="0">
    <h6>increment index</h6>
    <Dish />
  </div>
);

export default DishPhotos;
