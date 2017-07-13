import React from 'react';

const SocialMediaLink = (props) =>
{
  return (
    <a rel="noopener noreferrer" target={`_${props.fa}`} href={props.link}>
      <i className={`fa fa-${props.fa}`} />
    </a>
  );
};

export default SocialMediaLink;
