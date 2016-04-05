import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { LoginLink } from 'react-stormpath';
import {DropdownButton, MenuItem, Image, Grid, Thumbnail, Row, Col, Button} from 'react-bootstrap';
import BurgerMenu from 'react-burger-menu';


import SearchBar from './../common/SearchBar';
import CarsList from './../common/CarsList';

import HomePageStore from './../../store/HomePageStore';
import HomePageActions from './../../actions/HomePageActions';

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
];

export default class IndexPage extends React.Component {

  constructor(props)
  {
    super(props);
    this.onFilteredCarsChange = this.onFilteredCarsChange.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount is called');
  }

  componentWillUnmount() {
  }

  onFilteredCarsChange(state)
  {

  }

  render() {
    return (
      <div className="home-page-wrapper">
          <div id="page-content-wrapper">
              <div className="container-fluid">
                <SearchBar items={items}></SearchBar>
              </div>
          </div>
        </div>
    );
  }
}
