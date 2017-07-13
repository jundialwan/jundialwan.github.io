import React from 'react';

const WorkItem = (props) =>
{
  return (
    <div className="work-item">
      <img className="pull-right" src={props.imgSrc} alt={props.company} />
      <h4>{props.title}</h4>
      <h5>{props.company}</h5>
      <h6>{props.time}</h6>
    </div>
  );
};

export default WorkItem;
