import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Project from './Project';
import Education from './Education';
import Experience from './Experience';

const BodyPage = () =>
{
  return (
    <div className="">
      <div className="">
        <Route exact path="/" component={Home} />
        <Route path="/project" component={Project} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
      </div>
    </div>
  );
};

export default BodyPage;
