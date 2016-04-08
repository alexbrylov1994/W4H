import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { LoginLink } from 'react-stormpath';
import {DropdownButton, MenuItem, Image, Grid, Thumbnail, Row, Col, Button} from 'react-bootstrap';
import BurgerMenu from 'react-burger-menu';
import MediaQuery from 'react-responsive';

import SearchBar from './../common/SearchBar';
import SearchResult from './../common/SearchResult';

var items = [
  {name: "car1", price: "1$", categories: "Car"},
  {name: "car2", price: "2$", categories: "Car"},
  {name: "car3", price: "3$", categories: "Car"},
  {name: "car4", price: "4$", categories: "Car"},
  {name: "car5", price: "5$", categories: "Car"},
  {name: "car6", price: "6$", categories: "Car"},

  {name: "truck1", price: "7$", categories: "Truck"},
  {name: "truck2", price: "8$", categories: "Truck"},
  {name: "truck3", price: "9$", categories: "Truck"},
  {name: "truck4", price: "10$", categories: "Truck"},
  {name: "truck5", price: "11$", categories: "Truck"},
  {name: "truck6", price: "12$", categories: "Truck"},

  {name: "suv1", price: "13$", categories: "SUV"},
  {name: "suv2", price: "14$", categories: "SUV"},
  {name: "suv3", price: "15$", categories: "SUV"},
  {name: "suv4", price: "16$", categories: "SUV"},
  {name: "suv5", price: "17$", categories: "SUV"},
  {name: "suv6", price: "18$", categories: "SUV"},

  {name: "utility1", price: "19$", categories: "Utility"},
  {name: "utility2", price: "20$", categories: "Utility"},
  {name: "utility3", price: "21$", categories: "Utility"},
  {name: "utility4", price: "22$", categories: "Utility"},
  {name: "utility5", price: "23$", categories: "Utility"},
  {name: "utility6", price: "24$", categories: "Utility"},
];

var searchBarPadding = {
    paddingRight: '10px',
    paddingLeft: '10px'
};



export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home-page-wrapper">
          <div id="page-content-wrapper">
              <div className="container-fluid">
                <Grid >
                  <Row>
                    <Col xs={12} sm={12} md={12}>
                      <SearchBar items={items}></SearchBar>
                    </Col>

                    <hr/>

                    <Col xs={12} sm={12} md={12}>
                      <SearchResult items={items}></SearchResult>
                    </Col>
                  </Row>
                </Grid>
              </div>
          </div>
        </div>
    );
  }
}
