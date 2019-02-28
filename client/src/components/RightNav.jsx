import React from 'react';

import '../../dist/styles.css';

// class RightNav extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <span className="right-nav">
//         <h5>svg tag of right arrow</h5>
//       </span>
//     );
//   }
// }

const RightNav = () => (
  <div className="left-nav">
    {/* <svg height="18" width="18" xmlns="https://s3-us-west-1.amazonaws.com/elite-grub-photos/Ic_chevron_right_48px.svg"></svg> */}
    <img width="18" height="18" src="https://s3-us-west-1.amazonaws.com/elite-grub-photos/Ic_chevron_right_48px.svg"></img>
  </div>
);

export default RightNav;
