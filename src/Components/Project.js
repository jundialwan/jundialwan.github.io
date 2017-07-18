import React from 'react';

import ProjectItem from './ProjectItem';

import projectItemData from '../Data/Project';

const Project = () =>
{  
  return (    
    <div className="row">
      {projectItemData.map(project => <ProjectItem key={project.title} {...project} />)}      
    </div>    
  );
};

export default Project;
