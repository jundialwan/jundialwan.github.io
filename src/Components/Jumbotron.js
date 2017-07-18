import React from 'react';
import SocialMediaBar from './SocialMediaBar';

const Jumbotron = () =>
{
  return (    
    <div className="row">
      <div className="col-md-2 col-sm-12">
        <img className="jumbotron-img img-responsive" src="/static/img/jundi.jpg" alt="jundi" />          
      </div>
      <div className="col-md-8 col-sm-12 text-center-on-mobile">
        <h2 className="jumbotron-name ubuntu-font"><u className="dotted">Jundi</u> Ahmad Alwan</h2>
        <div>
          Web Developer. Trying to master frontend. Computer Science Student. 
        </div>
        <SocialMediaBar />
      </div>
    </div>    
  );
};

export default Jumbotron;