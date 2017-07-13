import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = (props) =>
{
  return (
    <NavLink exact to={props.path} activeClassName="active-link">&lt;{props.children} /&gt;</NavLink>
  );
};

export default NavbarLink;
