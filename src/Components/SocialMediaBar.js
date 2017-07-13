import React from 'react';
import SocialMediaLink from './SocialMediaLink';

const SocialMediaBar = () =>
{
  return (
    <div className="social-media-bar">
      <SocialMediaLink fa="facebook" link="http://facebook.com/jundi.alwan" />
      <SocialMediaLink fa="medium" link="http://medium.com/@jundialwan" />
      <SocialMediaLink fa="linkedin" link="http://linkedin.com/in/jundialwan" />      
      <SocialMediaLink fa="github" link="http://github.com/jundialwan" />
    </div>
  );
};

export default SocialMediaBar;
