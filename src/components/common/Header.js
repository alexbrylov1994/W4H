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
                  <MenuItem eventKey="4.1"> <Link to="/profile">My Profile</Link></MenuItem>
                  <MenuItem eventKey="4.2"><Link to="/bookmarks">My Bookmarks</Link></MenuItem>
                  <MenuItem eventKey="4.3"><Link to="/garage">My Garage</Link></MenuItem>
                  <MenuItem eventKey="4.4"> <LogoutLink /> </MenuItem>
                </NavDropdown>
            </Authenticated>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
