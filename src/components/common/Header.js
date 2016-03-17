import React from 'react';
import { Link } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
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
          <Nav>
            <NavItem eventKey={1}
                href="#">Home
            </NavItem>

            <NotAuthenticated>
              <li>
                <Link to="/about">About</Link>
              </li>
            </NotAuthenticated>

            <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Rent a car</MenuItem>
              <MenuItem eventKey={3.2}>Rent out a car</MenuItem>
            </NavDropdown>
          </Nav>

          <Nav pullRight>
          <Authenticated>
            <li>
              <LogoutLink />
            </li>
          </Authenticated>

          <NotAuthenticated>
            <li>
              <LoginLink />
            </li>
          </NotAuthenticated>

          <NotAuthenticated>
            <li>
              <Link to="/register">Create Account</Link>
            </li>
          </NotAuthenticated>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    );
  }
}
