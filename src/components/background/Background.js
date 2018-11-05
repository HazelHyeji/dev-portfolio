import React from 'react';
import ReactBodymovin from 'react-bodymovin'
import animation from './animation.json'

function Background() {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation
  }
  return (
    <div className="background">
      <ReactBodymovin options={bodymovinOptions} />
    </div>
  );
}

export default Background;
