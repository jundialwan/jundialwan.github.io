import React from 'react';
import ExperienceSection from './ExperienceSection';

import educationData from '../Data/Education';

const Experience = () =>
{
  return (
    <div>
      <ExperienceSection 
        section="Education"
        data={educationData}
      />
    </div>
  );
};

export default Experience;
