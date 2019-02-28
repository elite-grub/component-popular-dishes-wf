import React from 'react';
import $ from 'jquery';

import '../../dist/styles.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.getMenuURL = this.getMenuURL.bind(this);
  }

  // componentDidMount() {
  //   this.getMenuURL();
  // }

  // getMenuURL() {
  //   $.get('')
  // }

  render() {
    return (
      <div className="menu">
        <a className="menu-link"
          href="https://www.google.com/">View Full Menu</a>
      </div>
    );
  }
}

export default Menu;
