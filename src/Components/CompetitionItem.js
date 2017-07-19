import React from 'react';

const CompetitionItem = (props) =>
{
  const link = `${props.link}${(new Date(props.date)) < (new Date()) ? '/results/by_person#2010ALWA01' : ''}`;
  const goingLabel = { 0: ['danger', 'CANCELED'], 1: ['warning', 'MAYBE'], 2: ['success', 'GOING'] };

  return (
    <div>
      <span className={`label label-${goingLabel[props.going][0]}`}>
        {goingLabel[props.going][1]}
      </span>&nbsp;
      <span className="ubuntu-font">
        <a href={link} rel="noopener noreferrer" target={`_${props.title}`} style={{ color: '#000' }}>
          {props.title}&nbsp;
          <sup>
            <i className="fa fa-external-link" style={{ fontSize: '12px' }} />
          </sup>
        </a>
      </span>      
      <div style={{ color: '#333' }}>
        <i className="fa fa-map-marker" />
        {props.place}
      </div>      
    </div>
  );
};

export default CompetitionItem;
