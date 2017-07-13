import React from 'react';

const WorkItem = (props) =>
{
  return (
    <div className="work-item">
      <img className="pull-right" src={props.imgSrc} alt={props.institution} />
      <h4>{props.title}</h4>
      <h5>{props.institution}</h5>
      <h6>{props.time}</h6>
      <a href={props.link} rel="noopener noreferrer" target={`_${props.institution}`}> 
        <i className="fa fa-globe" />
        {props.link}
      </a>
    </div>
  );
};

export default WorkItem;
