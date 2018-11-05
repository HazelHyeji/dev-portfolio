import React, { Component } from 'react';
import NavMenu from '../nav/NavMenu';
import SocialMediaLinks from '../utils/SocialMediaLinks';
import Menu from 'react-burger-menu/lib/menus/elastic'


class MobileNav extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div id="outer-container">
        <Menu
          className='mobile-nav'
          noOverlay
          right
          width={300}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        >
          <main id="page-wrap">
            <NavMenu />
            <SocialMediaLinks/>
          </main>
        </Menu>
      </div>
    );
  }
}

export default MobileNav;
