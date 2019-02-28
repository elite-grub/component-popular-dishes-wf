import React from 'react';

import Header from './Header.jsx';
import ImageCarousel from './ImageCarousel.jsx';

import '../../dist/styles.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="container">
//         <Header />
//         <ImageCarousel />
//       </div>
//     );
//   }
// }

const App = () => (
  <div className="container">
    <Header />
    <ImageCarousel />
  </div>
);

export default App;
