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
            <a href="#">W4Hire</a>
          </Navbar.Brand>

          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>

            <NavItem eventKey={1}
                href="#">Home
            </NavItem>

            <Authenticated>
              <li>
                <Link to="/about">About</Link>
              </li>
            </Authenticated>
            <NotAuthenticated>
                <li>
                  <Link to="/about">About</Link>
                </li>
            </NotAuthenticated>

            <NotAuthenticated>
              <li>
                <LoginLink />
              </li>
            </NotAuthenticated>

            <Authenticated>
                <NavDropdown eventKey={4} title="Hi user" id="nav-dropdown">
                  <MenuItem eventKey="4.1">Profile</MenuItem>
                  <MenuItem eventKey="4.2">Bookmarks</MenuItem>
                  <MenuItem eventKey="4.3">MyGarage</MenuItem>
                  <MenuItem eventKey="4.4" ><LogoutLink /></MenuItem>
                </NavDropdown>
            </Authenticated>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    );
  }
}
