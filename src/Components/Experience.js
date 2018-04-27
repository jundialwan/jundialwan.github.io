import React from 'react';
import ExperienceSection from './ExperienceSection';

import experienceItemData from '../Data/Experience';
import workItemData from '../Data/Work';
import educationData from '../Data/Education';

const Experience = () =>
{
  return (
    <div>    
      <ExperienceSection 
        section="Work Experience"
        data={workItemData}
      />

      <ExperienceSection 
        section="Volunteering & Organization Experience"
        data={experienceItemData}
      />

      <ExperienceSection 
        section="Education"
        data={educationData}
      />
    </div>
  );
};

export default Experience;
