import React from 'react';
import Tags from './Tags';

function HoverEffect(props) {
  const render = props.project.role.map(role => {
    return <Tags key={role} role={role}></Tags>
  })
  return (
    <div className="project-description">
      <h2>{props.project.title}</h2>
      <h3>{props.project.category}</h3>
      <p>{props.project.description}</p>
      <ul>
      {render}
      </ul>
    </div>
  );
}

export default HoverEffect;
