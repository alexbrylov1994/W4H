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
      category: "",
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
    this.setState(query.query)
  }

  onPriceChange(event)
  {

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

    return <div>
      <Grid>
         <Row>
            <Col className="jumbotron" xs={12} sm={12} md={12}>
              <CarsList cars={cars} ></CarsList>
            </Col>
         </Row>
     </Grid>
    </div>
  }
}
