import React from 'react';
import Jumbotron from './Jumbotron';
import Home from './Home';
import Work from './Work';
import Education from './Education';
import Experience from './Experience';

const App = () => 
{
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 col-md-offset-3">
        <Jumbotron />
        <Home />
        <Work />
        <Education />
        <Experience />
      </div>
    </div>
  );
};

export default App;
