import React from 'react';

import '../../dist/styles.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="menu">
        <a className="menu-link"
          href={this.props.menuURL}>View Full Menu</a>
      </div>
    );
  }
}

export default Menu;
