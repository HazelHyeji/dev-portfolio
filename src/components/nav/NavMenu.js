import React from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavMenu = () => {
  return (
    <div>
      <ul>
        <li>Projects
          <ul>
            <li><Link activeClass="active" to="UIUX" spy={true} smooth={true} duration={500} >UI/UX</Link></li>
            <li><Link activeClass="active" to="dev" spy={true} smooth={true} duration={500} >Development</Link></li>
          </ul>
        </li>
        <li><Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} >Skills</Link></li>
        <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contact</Link></li>
      </ul>
    </div>
  )
}

export default NavMenu
