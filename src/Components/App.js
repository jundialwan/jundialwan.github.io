import React from 'react';

import Jumbotron from './Jumbotron';
import Navbar from './Navbar';
import BodyPage from './BodyPage';

const App = () => 
{
  return (
    <div className="row">
      <div className="col-md-8 col-sm-12 col-md-offset-2">
        <Jumbotron />
        <Navbar />
        <BodyPage />        
      </div>
    </div>
  );
};

export default App;
