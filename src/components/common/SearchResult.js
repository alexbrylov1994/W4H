import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import Car from './Car';
import CarsList from './CarsList';
import {DropdownButton, MenuItem, Image, Grid, Thumbnail, Row, Col, Button} from 'react-bootstrap';

import HomePageStore from './../../store/HomePageStore';
import HomePageActions from './../../actions/HomePageActions';


export default class SearchResult extends React.Component {

  constructor(props)
  {
    super(props);
    this.state =  {
      searchString: "",
      categories: "",
      make: "",
      model: "",
      price: ""
    };

    this.onQueryChange = this.onQueryChange.bind(this);
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
    this.setState({searchString: query.query})
  }

  onChange(event)
  {
    console.log('Letter searched is ' + event.target.value)
    HomePageActions.updateQuery(event.target.value);
  }

  onSelect(eventKey, href)
  {
    console.log('On Select searched is ' + eventKey + " href = " + href);
    //this.setState({searchString: event.target.value})
  }

  onPriceChange(event)
  {

  }

  render() {

    let cars = this.props.items,
      searchString = this.state.searchString.trim().toLowerCase();

    if(searchString.length > 0)
    {
      cars = cars.filter(function(c){
        return c.name.toLowerCase().match(searchString);
      });
    }

    return <div>
      <Grid>
         <Row>
            <Col xs={12} sm={12} md={12}>
              <CarsList cars={cars} ></CarsList>
            </Col>
         </Row>
     </Grid>
    </div>
  }
}
