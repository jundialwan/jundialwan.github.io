import React from 'react';

import Jumbotron from './Jumbotron';
import Navbar from './Navbar';
import BodyPage from './BodyPage';

const App = () => 
{
  return (
    <div className="container-fluid">
      <div className="row" style={{ marginTop: '24px' }}>
        <div className="col-md-8 col-sm-12 col-md-offset-2">
          <Jumbotron />
        </div>
      </div>

      <div className="row" style={{ marginTop: '24px' }}>
        <div className="col-md-8 col-sm-12 col-md-offset-2">
          <Navbar />        
        </div>
      </div>

      <div className="row" style={{ marginTop: '24px', marginBottom: '24px' }}>
        <div className="col-md-8 col-sm-12 col-md-offset-2">        
          <BodyPage />                
        </div>
      </div>   
            
    </div>
  );
};

export default App;
