import React from 'react';
import { Link } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Input, Button} from 'react-bootstrap';
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">W4Hire</Link>
          </Navbar.Brand>

          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/carDetails">Car Details</Link>
            </li>

            <NotAuthenticated>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </NotAuthenticated>

            <Authenticated>
                <NavDropdown eventKey={4} title="Hi user" id="nav-dropdown">
                  <li><Link to="/profile">My Profile</Link></li>
                  <li><Link to="/bookmarks">My Bookmarks</Link></li>
                  <li> <Link to="/garage">My Garage</Link></li>
                  <li> <LogoutLink /></li>
                </NavDropdown>
            </Authenticated>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
