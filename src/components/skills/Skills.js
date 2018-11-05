import React, { Component } from 'react'
import Title from '../utils/Title'
import { SkillsContainer } from './SkillsContainer'


class Skills extends Component {
  render() {
    return (
      <div className="skills width70" name="skills">
        <Title title={`Skills`}></Title>
        <div className="skills-container">
          <ul>
            <li><h3>Design</h3></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"></img></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"></img></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Sketch_logo_frame.svg"></img></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg"></img></li>
            <li><img src="https://cdn.worldvectorlogo.com/logos/invision.svg"></img></li>
            <li><img src="https://cdn.worldvectorlogo.com/logos/invision-studio-small.svg"></img></li>
          </ul>
        </div>
        <div className="skills-container">
          <ul>
            <li><h3>Dev</h3></li>
            <li><img src="https://cdn.worldvectorlogo.com/logos/javascript.svg"></img></li>
            <li><img src="https://cdn.worldvectorlogo.com/logos/react.svg"></img></li>
            <li><img src="https://cdn.worldvectorlogo.com/logos/redux.svg"></img></li>
            <li><img src="https://cdn.worldvectorlogo.com/logos/sass-1.svg"></img></li>
            <li><img src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"></img></li>
            <li><img src="https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg"></img></li>
          </ul>
        </div>
        <div className="skills-container">
          <ul>
            <li><h3>Side</h3></li>
            <li><img src="https://cdn.worldvectorlogo.com/logos/after-effects-cc.svg"></img></li>
            <li><img src="https://cdn.worldvectorlogo.com/logos/lightroom-cc.svg"></img></li>
            <li><img src="https://cdn.worldvectorlogo.com/logos/indesign-cc.svg"></img></li>
            <li><img src="https://dummyimage.com/200x200/fff/fff"></img></li>
            <li><img src="https://dummyimage.com/200x200/fff/fff"></img></li>
            <li><img src="https://dummyimage.com/200x200/fff/fff"></img></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Skills;