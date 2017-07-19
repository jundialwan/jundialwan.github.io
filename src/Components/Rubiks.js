import React from 'react';

import CompetitionTimeline from './CompetitionTimeline';

const Rubiks = () =>
{
  return (
    <div className="row">
      <div className="col-sm-12">
        My most favorite hobby. Twisting the cube. Rubik&#39;s cube is being my part since 2009. 
        Crazy huh? I play it anywhere and anytime. 
        My current best in 3x3 is <strong>7.43s</strong>. 
        One of the most exciting thing of this hobby is the competition.
        Official Rubik&#39;s cube competition held by World Cube Association (WCA).
        Like the Olympics, Rubik&#39;s cube competition have a several events, 14 in total.
        The most exciting events I think is 3x3, 3x3 One Handed, 3x3 with Feet (*yes, feet),
        Pyraminx, and Square-1.
        <br /><br />
        My WCA Profile: &nbsp;
        <a href="https://www.worldcubeassociation.org/persons/2010ALWA01" rel="noopener noreferrer" target="_WCA">
          2010ALWA01&nbsp;
          <i className="fa fa-external-link" />
        </a><br /><br />
        <strong>Competition timeline</strong><br /><br />
        <CompetitionTimeline />      
      </div>
    </div>
  );
};

export default Rubiks;
