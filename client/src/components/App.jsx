import React from 'react';

import Header from './Header.jsx';
import ImageCarousel from './ImageCarousel.jsx';

// class App extends React.component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World!</h1>
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <Header />
    <ImageCarousel />
  </div>
);

export default App;
