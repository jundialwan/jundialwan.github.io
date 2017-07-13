import React from 'react';
import ExperienceItem from './ExperienceItem';

import workItemData from '../Data/Work';

const Work = () =>
{
  return (
    <div>
      <h3>Work Experience</h3>
      
      <ul className="work-list">
        {workItemData.map((work) => {
          return (
            <li key={work.logo}>
              <ExperienceItem
                imgSrc={work.logo} 
                title={work.title}
                institution={work.company}
                time={work.time}
                link={work.link}
              />
            </li>        
          );
        })}        
      </ul>
    </div>
  );
};

export default Work;
