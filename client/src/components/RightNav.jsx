import React from 'react';

import '../../dist/styles.css';

class RightNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="right-nav">
        <img width="18" height="18" className="nav-arrow" src="https://s3-us-west-1.amazonaws.com/elite-grub-photos/Ic_chevron_right_48px.svg" onClick={() => this.props.toggleCarousel('next')}></img>
      </div>
    );
  }
}

export default RightNav;
