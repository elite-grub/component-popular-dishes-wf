import React from 'react';

import Header from './Header.jsx';
import ImageCarousel from './ImageCarousel.jsx';

import '../../dist/styles.css';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      direction: null,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      direction: e.direction,
    });
  }

  render() {
    const { direction } = this.state;

    return (
      <div className="container">
        <Header />
        <ImageCarousel
          direction={direction}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

// const App = () => (
//   <div className="container">
//     <Header />
//     <ImageCarousel />
//   </div>
// );

export default App;
