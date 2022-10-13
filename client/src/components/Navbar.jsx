import React, { Component } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
function Nav() {
  
  
  class Example extends Component {
    render() {
      return (
        <ResponsiveMenu
          menuOpenButton={<div />}
          menuCloseButton={<div />}
          changeMenuOn="500px"
          largeMenuClassName="large-menu-classname"
          smallMenuClassName="small-menu-classname"
          menu={
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          }
        />
      );
    }
  }
}

export default Nav;