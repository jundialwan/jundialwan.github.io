import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Work from './Work';
import Education from './Education';
import Experience from './Experience';

const BodyPage = () =>
{
  return (
    <div className="jumbotron">
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
      </div>
    </div>
  );
};

export default BodyPage;
