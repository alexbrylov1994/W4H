import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import Car from './Car';
import CarsList from './CarsList';
import {DropdownButton, MenuItem, Image, Grid, Thumbnail, Row, Col, Button} from 'react-bootstrap';


import HomePageStore from './../../store/HomePageStore';
import HomePageActions from './../../actions/HomePageActions';

const filters = ['make', 'model', 'price'];

export default class SearchBar extends React.Component {

  constructor(props)
  {
    super(props);
    this.state =  {
      searchString: "",
      categories: "",
      make: "",
      model: "",
      price: ""
    }
  }

  onChange(event)
  {
    console.log('Letter searched is ' + event.target.value)
    this.setState({searchString: event.target.value})
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

      <Grid className="container-fluid">
        <Row>
          <Col xs={12} sm={12} md={6}>
          <div className="input-group">
            <input type="text" className="form-control" value={this.state.searchString}
              onChange={this.onChange.bind(this)} placeholder="search cars"
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Search</button>
            </span>
          </div>
         </Col>

         <Col xs={12} sm={12} md={6}>
                <DropdownButton title="Category" id="bg-nested-dropdwon">
                    <MenuItem eventKey={1.1} href="#" onSelect={this.onSelect.bind(this)}>Cars</MenuItem>
                    <MenuItem eventKey={1.2} href="#" onSelect={this.onSelect.bind(this)}>Trucks</MenuItem>
                    <MenuItem eventKey={1.3} href="#" onSelect={this.onSelect.bind(this)}>SUVS</MenuItem>
                    <MenuItem eventKey={1.4} href="#" onSelect={this.onSelect.bind(this)}>Utility</MenuItem>
                </DropdownButton>

               <DropdownButton title="Make" id="bg-nested-dropdwon">
                 <MenuItem eventKey={2.1} href="#" onSelect={this.onSelect.bind(this)}>Acura</MenuItem>
                 <MenuItem eventKey={2.2} href="#" onSelect={this.onSelect.bind(this)}>Mclaren</MenuItem>
                 <MenuItem eventKey={2.3} href="#" onSelect={this.onSelect.bind(this)}>Lambo</MenuItem>
               </DropdownButton>

              <DropdownButton title="Model" id="bg-nested-dropdwon">
                <MenuItem eventKey={3.1} href="#" onSelect={this.onSelect.bind(this)}>Model1</MenuItem>
                <MenuItem eventKey={3.2} href="#" onSelect={this.onSelect.bind(this)}>Model2</MenuItem>
                <MenuItem eventKey={3.3} href="#" onSelect={this.onSelect.bind(this)}>Model3</MenuItem>
              </DropdownButton>

              <DropdownButton title="Price" id="bg-nested-dropdwon">
                <MenuItem eventKey={4.1} href="#" onSelect={this.onSelect.bind(this)}>(0 - 10)$/hr </MenuItem>
                <MenuItem eventKey={4.2} href="#" onSelect={this.onSelect.bind(this)}>(10 - 20)$/hr</MenuItem>
                <MenuItem eventKey={4.3} href="#" onSelect={this.onSelect.bind(this)}>(20 - 30)$/hr</MenuItem>
                <MenuItem eventKey={4.4} href="#" onSelect={this.onSelect.bind(this)}>(30 - 40)$/hr</MenuItem>
                <MenuItem eventKey={4.5} href="#" onSelect={this.onSelect.bind(this)}>(40 and above)$/hr</MenuItem>

              </DropdownButton>
            </Col>
         </Row>

         <Row>


         </Row>

         <hr className="divider"/>

         <Row>
            <Col xs={12} sm={12} md={12}>
              <CarsList cars={cars}></CarsList>
            </Col>
         </Row>
        </Grid>

    </div>
  }
}
