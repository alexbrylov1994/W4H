import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import Car from './Car';
import CarsList from './CarsList';
import {DropdownButton, MenuItem, Image, Grid, Thumbnail, Row, Col, Button} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import ReactVideo from 'react-videojs';

import HomePageStore from './../../store/HomePageStore';
import HomePageActions from './../../actions/HomePageActions';

 var query = {
  searchString: "",
  category: "",
  make: "",
  model: "",
  price: ""
};

export default class SearchBar extends React.Component {

  onChange(event)
  {
    console.log('Letter searched is ' + event.target.value)
    query.searchString = event.target.value;
    HomePageActions.updateQuery(query);
  }

  onSelect(eventKey, href)
  {
    console.log('On Select searched is' + JSON.stringify(eventKey.innerHtml))
    console.log('On Select searched is ' + eventKey + " href = " + href);

    if(href == 1.1){
      console.log('choosing the first category');
      query.category = "Car";
      HomePageActions.updateQuery(query);
    }
    if(href == 1.2){
      console.log('choosing the second category');
      query.category = "Truck";
      HomePageActions.updateQuery(query);
    }
    if(href == 1.3){
      console.log('choosing the third category');
      query.category = "SUV";
      HomePageActions.updateQuery(query);
    }
    if(href == 1.4){
      console.log('choosing the fourth category');
      query.category = "Utility";
      HomePageActions.updateQuery(query);
    }
    if(href == 1.5){
      console.log('choosing the fifth category');
      query.category = "";
      HomePageActions.updateQuery(query);
    }
  }

  render() {
    var divStyle = {
      paddingLeft: '15px',
      paddingBottom: '30px',
      paddingTop: '15px'
    };

    var searBharStyle = {
      paddingBottom: '15px',
    };

    return <div style={divStyle}>

      <Grid >
        <Row>
          <Col xs={12} sm={12} md={6} style={searBharStyle}>
          <div className="input-group">
            <input type="text" className="form-control"
              onChange={this.onChange.bind(this)} placeholder="search Cars"
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Search</button>
            </span>
          </div>
         </Col>

         <Col xs={10} sm={12} md={6}>
              <DropdownButton title="Category" id="bg-nested-dropdwon">
                  <MenuItem eventKey={1.1} href="#" onSelect={this.onSelect.bind(this)}>Cars</MenuItem>
                  <MenuItem eventKey={1.2} href="#" onSelect={this.onSelect.bind(this)}>Trucks</MenuItem>
                  <MenuItem eventKey={1.3} href="#" onSelect={this.onSelect.bind(this)}>SUVS</MenuItem>
                  <MenuItem eventKey={1.4} href="#" onSelect={this.onSelect.bind(this)}>Utility</MenuItem>
                  <MenuItem eventKey={1.5} href="#" onSelect={this.onSelect.bind(this)}>All</MenuItem>
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
           <Col xs={12} sm={6} md={6} style={divStyle}>
             <DateTimeField defaultText="From"/>
           </Col>
           <Col xs={12} sm={6} md={6} style={divStyle}>
             <DateTimeField defaultText="To"/>
           </Col>
         </Row>
        </Grid>

    </div>
  }
}
