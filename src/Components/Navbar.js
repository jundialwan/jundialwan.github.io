import React from 'react';
import NavbarLink from './NavbarLink';

const Navbar = () =>
{
  return (
    <nav>
      <NavbarLink path="/">Home</NavbarLink>&nbsp;&nbsp;
      <NavbarLink path="/project">Project</NavbarLink>&nbsp;&nbsp;
      <NavbarLink path="/experience">Experience</NavbarLink>&nbsp;&nbsp;
      <NavbarLink path="/education">Education</NavbarLink>&nbsp;&nbsp;      
    </nav>
  );
};

export default Navbar;
