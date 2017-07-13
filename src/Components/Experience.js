import React from 'react';
import ExperienceSection from './ExperienceSection';

import experienceItemData from '../Data/Experience';
import workItemData from '../Data/Work';

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
    </div>
  );
};

export default Experience;
