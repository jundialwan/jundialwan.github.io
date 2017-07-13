import React from 'react';

import ExperienceItem from './ExperienceItem';

const ExperienceSection = (props) =>
{
  return (
    <div className="experience-section">
      <h3>{props.section}</h3>
      
      <ul className="experience-list">
        {props.data.map((item) => {
          return (
            <li key={item.logo}>
              <ExperienceItem
                imgSrc={item.logo} 
                title={item.title}
                institution={item.institution}
                time={item.time}
                link={item.link}
              />
            </li>        
          );
        })}        
      </ul>      
    </div>
  );
};

export default ExperienceSection;
