import React from 'react';
import $ from 'jquery';

import '../../dist/styles.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuURL: '',
    };

    this.getMenuURL = this.getMenuURL.bind(this);
  }

  componentDidMount() {
    this.getMenuURL();
  }

  getMenuURL() {
    const getData = (callback) => {
      $.get({
        url: 'http://localhost:3030/popular/:1',
        success: data => callback(null, data.menuURL),
        error: err => callback(err),
      });
    };

    getData((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        menuURL: data,
      });
    });
  }

  render() {
    return (
      <div className="menu">
        <a className="menu-link"
          href={this.state.menuURL}>View Full Menu</a>
      </div>
    );
  }
}

export default Menu;
