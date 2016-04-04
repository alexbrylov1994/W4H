import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { LoginLink } from 'react-stormpath';
import {DropdownButton, MenuItem, Image, Grid, Thumbnail, Row, Col, Button} from 'react-bootstrap';

import SearchBar from './../common/SearchBar';
import CarsList from './../common/CarsList';

import HomePageStore from './../../store/HomePageStore';
import HomePageActions from './../../actions/HomePageActions';

var items = [
  {name: "car1"},
  {name: "car2"},
  {name: "car3"},
  {name: "car4"},
  {name: "car5"},
  {name: "car6"}
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
      <div className="container">
        <SearchBar items={items}></SearchBar>
      </div>
    );
  }
}
