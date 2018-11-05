import React, { Component } from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class ArrowUp extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return(
    <div>
      <a className="arrow-up" onClick={this.scrollToTop}><img src="/image/arrow-up.svg"></img></a>
    </div>
    )
  }
}

export default ArrowUp
