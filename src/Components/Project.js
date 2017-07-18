import React from 'react';

import ProjectItem from './ProjectItem';

const Project = () =>
{
  return (    
    <div className="row">
      <div className="col-md-4 col-sm-12">
        <ProjectItem />                  
      </div>
      <div className="col-md-4 col-sm-12">
        <ProjectItem />                  
      </div>
      <div className="col-md-4 col-sm-12">
        <ProjectItem />                  
      </div>
    </div>    
  );
};

export default Project;
