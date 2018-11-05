import React, { Component } from 'react';
import Title from '../utils/Title';
import data from '../../data';
import HoverEffect from './HoverEffect';

class UIProjects extends Component {
  render() {
    const render = data.UIProjects.map(project => {
      return (
        <a href={project.link} key={project.title}>
          <li>
            <HoverEffect project={project} />
            <img src={project.img} alt={project.title} />
          </li>
        </a>
      );
    });
    return (
      <div className="cf width70 project" name="UIUX">
        <Title title={`UI/UX Projects`} />
        <ul>{render}</ul>
      </div>
    );
  }
}
export default UIProjects;
