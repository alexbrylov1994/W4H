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

          <Authenticated>
            <li>
              <a href="#">Home</a>
            </li>
          </Authenticated>

          <NotAuthenticated>
              <li>
              <a href="#">Home</a>
              </li>
          </NotAuthenticated>

            <Authenticated>
              <li>
                <Link to='/clientprofile'>Client Profile</Link>
              </li>
            </Authenticated>

            <Authenticated>
              <li>
                <Link to='/carlist'>Car List</Link>
              </li>
            </Authenticated>

            <Authenticated>
              <li>
                <Link to='/cardetailes'>Car Detailes</Link>
              </li>
            </Authenticated>


            <Authenticated>
              <li>
                <Link to="/rental">Rental history</Link>
              </li>
            </Authenticated>

            <Authenticated>
              <li>
                <Link to="/about">About us</Link>
              </li>
            </Authenticated>


            <NotAuthenticated>
                <li>
                  <Link to="/about">About us</Link>
                </li>
            </NotAuthenticated>

            <NotAuthenticated>
              <li>
                <LoginLink />
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
