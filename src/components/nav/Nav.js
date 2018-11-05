import React from 'react'
import NavMenu from './NavMenu'
import NavSocialMedias from './NavSocialMedias'

const Nav = () => {
  return (
    <nav className="desktop-nav">
      <NavSocialMedias/>
      <NavMenu/>
    </nav>
  )
}

export default Nav
