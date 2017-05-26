import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import WrapperClass from './WrapperClass';
import LogoClass from './LogoClass';
import HeaderClass from './HeaderClass';
import HeaderLink from './HeaderLink';
import Logo from './logo.png';
import NavBar from './NavBar';
import Ul from './Ul';
import ListItem from './ListItem';
import messages from './messages';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Navbar className="custom-navbar" collapseOnSelect style={{backgroundColor: 'rgba(46,50,53,0.9)'}}>
    <Navbar.Header>
      <div className="logo">
        <Link to="/">
          <Img src={Logo} alt="GlobalCoinDex"/>
        </Link>
      </div>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight className="nav-bar-items">
        <NavItem eventKey={1}>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem eventKey={2}>
        <Link to="/about">About</Link>
      </NavItem>
      <NavItem eventKey={3}>
        <Link to="/features">Features</Link>
      </NavItem>
      <NavItem eventKey={4}>
        <Link to="/security">Security</Link>
      </NavItem>
      <NavItem eventKey={5}>
        <Link to="/marketstats">Market Statistics</Link>
      </NavItem>
      <NavItem eventKey={6}>
        <Link to="/changelog">Change Log</Link>
      </NavItem>
      <NavItem eventKey={7}>
        <Link to="/contact">Contact</Link>
      </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

    );
  }
}

export default Header;
