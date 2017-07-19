import React from 'react';
import NavbarLink from './NavbarLink';

const Navbar = () =>
{
  return (
    <div className="row">
      <div className="col-sm-12">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span style={{ marginRight: '4px' }}>MENU</span>
                <i className="fa fa-caret-down" />
              </button>          
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><NavbarLink path="/">Home</NavbarLink></li>
                <li><NavbarLink path="/project">Project</NavbarLink></li>
                <li><NavbarLink path="/experience">Experience</NavbarLink></li>
                <li><NavbarLink path="/rubiks">Rubik&#39;s Cube</NavbarLink></li>
              </ul>
            </div>

          </div>
        </nav>      
      </div>
    </div>
  );
};

export default Navbar;
