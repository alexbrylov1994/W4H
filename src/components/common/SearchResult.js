import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {DropdownButton, MenuItem, Image, Grid, Thumbnail, Row, Col, Button, Pagination} from 'react-bootstrap';

import Car from './Car';
import CarsList from './CarsList';
import HomePageStore from './../../store/HomePageStore';
import HomePageActions from './../../actions/HomePageActions';


var noOfCarsInPage = 5;

var divStyle = {
  paddingLeft: '15px',
  paddingBottom: '30px',
  paddingTop: '15px'
};
var paginationStyle = {
  paddingLeft: '15px',
  paddingBottom: '30px',
  paddingTop: '15px',
  display:'table',
  margin:'0 auto'
};


export default class SearchResult extends React.Component {

  constructor(props)
  {
    super(props);
    this.state =  {
      searchString: "",
      category: "",
      make: "",
      model: "",
      price: "",
      activePage: 1
    };

    this.onQueryChange = this.onQueryChange.bind(this);
    this.onPageSelect = this.onPageSelect.bind(this);
  }

  componentDidMount() {
    HomePageStore.listen(this.onQueryChange);
    HomePageActions.updateQuery("");
  }

  componentWillUnmount() {
    HomePageStore.unlisten(this.onQueryChange);
  }

  onQueryChange(query){
    console.log('onQueryChange is called with query ' + JSON.stringify(query))
    this.setState(query.query)
  }

  onPriceChange(event)
  {

  }

  onPageSelect(event, selectedEvent)
  {
    console.log('activePage == ' + selectedEvent.eventKey);
    this.setState({
     activePage: selectedEvent.eventKey
    });
  }


  getNextPage(pageNumber, cars)
  {
    if(cars.length >= (pageNumber * noOfCarsInPage)){
      if((cars.length - (pageNumber * noOfCarsInPage)) >=noOfCarsInPage){
        //console.log(JSON.stringify(cars.slice(pageNumber * 20, pageNumber * 20 + 20), null, "\t"))
        return cars.slice(pageNumber * noOfCarsInPage, pageNumber * noOfCarsInPage + noOfCarsInPage)
      } else{
        //console.log(JSON.stringify(cars.slice(pageNumber * 20, cars.length), null, "\t"))
        return cars.slice(pageNumber * noOfCarsInPage, cars.length)
      }
    }
    return {}
  }

  render() {

    let cars = this.props.items,
      searchString = this.state.searchString.trim().toLowerCase(),
      searchPrice = this.state.price.trim().toLowerCase(),
      searchMake = this.state.make.trim().toLowerCase(),
      searchModel = this.state.model.trim().toLowerCase(),
      searchCategory = this.state.category.trim().toLowerCase();

    if(searchString.length > 0)
    {
      cars = cars.filter(function(c){
        if(searchCategory.length > 0){
          if(c.categories.toLowerCase() == searchCategory.toLowerCase()){
            return c.name.toLowerCase().match(searchString);
          }
        } else{
          return c.name.toLowerCase().match(searchString);
        }
      });
     }

    let numberOfPages = cars.length/noOfCarsInPage
    console.log('length of cars == ' + numberOfPages)

    if(numberOfPages > 1)
       {
         this.getNextPage(1, cars)
       }

    let thisPageCars = this.getNextPage(this.state.activePage -1 , cars);
    console.log("This page cars " + JSON.stringify(thisPageCars, null, "\t"))


    return(
      <div>
        <CarsList cars={thisPageCars} ></CarsList>
        <div >
        <Pagination style={paginationStyle}
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={numberOfPages}
          maxButtons={3}
          activePage={this.state.activePage}
          onSelect={this.onPageSelect}
        />

      </div>

      </div>
    );
  }
}
