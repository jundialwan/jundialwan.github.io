import React from 'react';
import WorkItem from './WorkItem';

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
              <WorkItem 
                imgSrc={work.logo} 
                title={work.title}
                company={work.company}
                time={work.time}
              />
            </li>        
          );
        })}        
      </ul>
    </div>
  );
};

export default Work;
