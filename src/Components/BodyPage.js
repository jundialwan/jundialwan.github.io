import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Project from './Project';
import Experience from './Experience';
import Rubiks from './Rubiks';

const BodyPage = () =>
{
  return (
    <div>      
      <Route exact path="/" component={Home} />
      <Route path="/project" component={Project} />        
      <Route path="/experience" component={Experience} />
      <Route path="/rubiks" component={Rubiks} />      
    </div>
  );
};

export default BodyPage;
