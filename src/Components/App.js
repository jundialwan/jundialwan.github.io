import React from 'react';
import { Route } from 'react-router-dom';

import Jumbotron from './Jumbotron';
import Navbar from './Navbar';
import Home from './Home';
import Work from './Work';
import Education from './Education';
import Experience from './Experience';

const App = () => 
{
  return (
    <div className="row">
      <div className="col-md-8 col-sm-12 col-md-offset-2">
        <Jumbotron />
        <Navbar />
        
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
      </div>
    </div>
  );
};

export default App;
