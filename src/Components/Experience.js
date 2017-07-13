import React from 'react';
import ExperienceItem from './ExperienceItem';

import experienceItemData from '../Data/Experience';

const Experience = () =>
{
  return (
    <div>
      <h3>Volunteering & Organization Experience</h3>
      
      <ul className="work-list">
        {experienceItemData.map((exp) => {
          return (
            <li key={exp.logo}>
              <ExperienceItem
                imgSrc={exp.logo} 
                title={exp.title}
                institution={exp.institution}
                time={exp.time}
                link={exp.link}
              />
            </li>        
          );
        })}        
      </ul>
    </div>
  );
};

export default Experience;
