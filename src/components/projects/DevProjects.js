import React, { Component } from 'react'
import Title from '../utils/Title'
import data from '../../data'
import HoverEffect from './HoverEffect';


class DevProjects extends Component {
  render() {
    const render = data.DevProjects.map(project => {
      return (
        <a href={project.link} key={project.title}>
          <li>
            <HoverEffect project={project} />
            <img src={project.img} alt={project.title} />
          </li>
        </a>
      )
    });
    return (
      <div className="cf width70 project" name="dev">
        <Title title={`Development Projects`}></Title>
        <ul>
          {render}
        </ul>
      </div>
    )
  }
}
export default DevProjects;