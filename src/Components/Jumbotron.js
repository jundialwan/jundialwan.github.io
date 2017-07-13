import React from 'react';
import SocialMediaBar from './SocialMediaBar';

const Jumbotron = () =>
{
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <img className="img-responsive" src="/static/img/jundi.jpg" alt="jundi" />          
          </div>
          <div className="col-md-8 col-sm-12">
            <h2 className="ubuntu-font"><u className="dotted">Jundi</u> Ahmad Alwan</h2>
            <SocialMediaBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
