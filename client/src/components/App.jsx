import React from 'react';

import Header from './Header.jsx';
import ImageCarousel from './ImageCarousel.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <ImageCarousel />
      </div>
    );
  }
}

// const App = () => (
//   <div>
//     <Header />
//     <ImageCarousel />
//   </div>
// );

export default App;
