import React from 'react';

import '../../dist/styles.css';

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="left-nav">
        <img className="nav-arrow" height="18" width="18" src="https://s3-us-west-1.amazonaws.com/elite-grub-photos/Ic_chevron_left_48px.svg" onClick={() => this.props.toggleCarousel('prev')}></img>
      </div >
    );
  }
}

export default LeftNav;
