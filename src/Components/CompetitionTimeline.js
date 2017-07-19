import React from 'react';

import TimelineItem from './TimelineItem';
import CompetitionItem from './CompetitionItem';

import competitionData from '../Data/RubiksCompetition';

const sortCompetition = (comp1, comp2) =>
{
  const comp1Date = new Date(comp1.date);
  const comp2Date = new Date(comp2.date);

  if (comp1Date.getFullYear() === comp2Date.getFullYear() 
      && comp1Date.getMonth() === comp2Date.getMonth() 
      && comp1Date.getDate() === comp2Date.getDate())
  {
    return 0;
  }
  else if (comp1Date > comp2Date)
  {
    return -1;
  }
  
  return 1; // comp1Date < comp2Date
};

const splitCompetitionTimeline = (data) =>
{
  let pastComp = [];
  let currentComp = [];
  let upcomingComp = [];

  data.forEach((e) => {
    const eDate = new Date(e.date);
    const now = new Date();

    if (eDate.getFullYear() === now.getFullYear() 
      && eDate.getMonth() === now.getMonth() 
      && eDate.getDate() === now.getDate())
    {
      currentComp.push(e);
    }
    else if (eDate > now)
    {
      upcomingComp.push(e);
    }
    else
    {
      pastComp.push(e);
    }
  }, this);

  pastComp = pastComp.sort(sortCompetition);
  currentComp = currentComp.sort(sortCompetition);
  upcomingComp = upcomingComp.sort(sortCompetition);

  return {
    pastComp,
    currentComp,
    upcomingComp,
  };
};

const CompetitionTimeline = () => 
{
  const { pastComp, currentComp, upcomingComp } = splitCompetitionTimeline(competitionData);

  return (
    <div>      
      {
        /* for upcoming competition */
        upcomingComp.map(comp => 
          <TimelineItem key={comp.title} date={new Date(comp.date)}>          
            <CompetitionItem {...comp} />
          </TimelineItem>,
        )
      }
      {currentComp.length > 0 || (
        <TimelineItem date={new Date()} /> 
      )}  
      {
        /* for today competition */
        // It's impossible to have more than one competition in one day tho, lol
        currentComp.map(comp => 
          <TimelineItem key={comp.title} date={new Date(comp.date)}>          
            <CompetitionItem {...comp} />
          </TimelineItem>,
        )
      }      
      {
        /* for past competition competition */
        pastComp.map(comp => 
          <TimelineItem key={comp.title} date={new Date(comp.date)}>          
            <CompetitionItem {...comp} />
          </TimelineItem>,
        )
      }  
      <TimelineItem date={new Date('2009-06-01')} start />          
    </div>
  );
};

export default CompetitionTimeline;
