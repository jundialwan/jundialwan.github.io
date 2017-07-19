import React from 'react';

const TimelineItem = ({ children, date }) =>
{  
  return (
    <div className="col-sm-12" style={{ borderLeft: '2px solid #444', paddingBottom: '24px' }}>
      <div 
        style={{ 
          width: '12px', 
          height: '12px', 
          backgroundColor: '#444', 
          borderRadius: '100%', 
          position: 'absolute', 
          left: '-7px',
          top: '5px',
        }} 
      />
      <span className="label label-default">
        {children === undefined && <strong>TODAY,&nbsp;</strong>}
        {date.toDateString()}
      </span><br />
      {children}
    </div>
  );
};

export default TimelineItem;
