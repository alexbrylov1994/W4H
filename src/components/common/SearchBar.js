import { Link } from 'react-router';
import React, { PropTypes } from 'react';

import {DropdownButton, MenuItem, Image, Grid, Input,Thumbnail, Row, Col, Button, Collapse, Glyphicon, Carousel, CarouselItem} from 'react-bootstrap';

import DateTimeField from 'react-bootstrap-datetimepicker';
import ReactVideo from 'react-videojs';
import MediaQuery from 'react-responsive';

import TextField from 'material-ui/lib/text-field';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem1 from 'material-ui/lib/menus/menu-item';

import HomePageStore from './../../store/HomePageStore';
import HomePageActions from './../../actions/HomePageActions';
import Car from './Car';
import CarsList from './CarsList';
import UIDropdownMenu from './UIDropdownMenu';

import Dropdown from 'react-dropdown'

 var query = {
  searchString: "",
  category: "",
  make: "",
  model: "",
  price: "",
  showModal: true
};

var carouselStyle = {
  width: '100%',
  maxHeight: '400px'
};

var picStyle =
{
  maxHeight: '400px',
  margin: '0 auto'
};

var blackText = {
  padding:'3% ',
  borderRadius:'8px',
  backgroundColor: 'rgba(0,0,0,0.35)'
};

var divStyle = {
  paddingLeft: '0px',
  paddingBottom: '30px',
  paddingTop: '15px'
};
var searBharStyle = {
  paddingBottom: '15px',
};

var rowStyle = {
  paddingLeft: '17px'
};

var ButtonMargin = {
  margin: '0 5px'
};

var dropDownMenuStyle = {
  width: '100%',
  paddingLeft: '17px',

}


  var dropDownButtonStyle = 'primary';
export default class SearchBar extends React.Component {

  constructor(props)
  {
    super(props);
    this.state =  {
      searchString: "",
      category: "Category",
      make: "Make",
      model: "Model",
      price: "Price",
      showModal: false,

      showDropdown: false,
      glyph: "glyphicon glyphicon-menu-down",
      advancedFiltersOpen: false
    };
  }

  onChange(event)
  {
    console.log('Letter searched is ' + event.target.value)
    query.searchString = event.target.value;
    HomePageActions.updateQuery(query);
    this.setState({ searchString: event.target.value});
  }

  onSelect(eventKey, href)
  {
    console.log('On Select searched is' + JSON.stringify(eventKey.innerHtml))
    console.log('On Select searched is ' + eventKey + " href = " + href);

    if(href == 1.1){
      console.log('choosing the first category');
      query.category = "Car";
      HomePageActions.updateQuery(query);
      this.setState({ category: "Car"});
      dropDownButtonStyle = "success";
    }
    if(href == 1.2){
      console.log('choosing the second category');
      query.category = "Truck";
      HomePageActions.updateQuery(query);
      this.setState({ category: "Truck"});
        dropDownButtonStyle = "success";
    }
    if(href == 1.3){
      console.log('choosing the third category');
      query.category = "SUV";
      HomePageActions.updateQuery(query);
      this.setState({ category: "SUV"});
        dropDownButtonStyle = "success";
    }
    if(href == 1.4){
      console.log('choosing the fourth category');
      query.category = "Utility";
      HomePageActions.updateQuery(query);
      this.setState({ category: "Utility"});
        dropDownButtonStyle = "success";
    }
    if(href == 1.5){
      console.log('choosing the fifth category');
      query.category = "";
      HomePageActions.updateQuery(query);
      this.setState({ category: "All"});
        dropDownButtonStyle = "primary";
    }
  }

  onSearchInputFocus()
  {
    console.log('TextField got focused');
    this.setState({ showModal: true});
  }


  closeCategoryMenu = () => {
    this.setState({showDropdown: false});
  };

  toggleCategoryMenu = () => {
    this.setState({showDropdown: !this.state.showDropdown});
  };

  toggleSearchFilters()
  {
    console.log("Togggling the search icon");

    if(this.state.advancedFiltersOpen){
      this.setState({glyph: "glyphicon glyphicon-menu-down"});
    }
    else{
      this.setState({ glyph: "glyphicon glyphicon-menu-up" })
    }
    this.setState({ advancedFiltersOpen: !this.state.advancedFiltersOpen })
    //console.log("Printing the search results " + this.state);
  }

  render() {


    const innerGlyphicon = <Button onClick={this.toggleSearchFilters.bind(this)}><Glyphicon glyph={this.state.glyph} /></Button>

    console.log('Rerendering searchBar with searchString == ' + this.state.searchString)
    return <div style={divStyle}>
      <Grid >
        <Row>
          <div className="container-fluid">
          <Carousel style={carouselStyle}>
            <CarouselItem>
              <div>
              <img className="img-responsive" style={picStyle} alt="car" src="https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg"/>
              </div>
              <div style={blackText} className="carousel-caption">
                <h3>Rent Car</h3>
                <p>The ultimate place for renting cars and have a comfortable, affordable ride</p>
              </div>

            </CarouselItem>
            <CarouselItem>
              <img className="img-responsive" style={picStyle} alt="money" src="http://salesman.red/wp-content/uploads/2016/01/money-background-imagesearn-money-online-7a4zz8nx.jpg"/>
              <div style={blackText}  className="carousel-caption">
                <h3>Make Money</h3>
                <p>This application allows you to make money with a minimum ammount of effort</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <img className="img-responsive" style={picStyle} alt="safety" src="http://www.adamsindustriesinc.com/wp-content/uploads/2016/02/safety-first2.jpg"/>
              <div style={blackText}  className="carousel-caption">
                <h3>Safety</h3>
                <p>We got you covered. WE know, accidents happen, and we are there to make
                sure you are safe!</p>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
        </Row>
        <hr/>
        <br />
        <Row>
          {
            /*
              Large Size Screen Search Input
            */
          }
        <MediaQuery query='(min-width: 700px)'>
            <Col xs={12} sm={12} md={6} style={searBharStyle}>
              <input type="text" className="form-control"
                onChange={this.onChange.bind(this)} placeholder="search Cars" value={this.state.searchString}
              />
            <div className="input-group">

            <span className="input-group-btn">
                {/*<button className="btn btn-default" type="button">Search</button>*/}
              </span>
            </div>
           </Col>
         </MediaQuery>

       {
         /*
           Small Size Screen Search Input
         */
       }
        <MediaQuery query='(max-width: 700px)'>
          <Col xs={12} sm={12} md={6} style={searBharStyle}>
            <Input type="text" className="form-control"
              onChange={this.onChange.bind(this)}
              placeholder="search Cars"
              value={this.state.searchString}
              onClick={this.onSearchInputFocus.bind(this)}
              buttonAfter={innerGlyphicon}
            />

          <div className="input-group">
            <span className="input-group-btn"></span>
          </div>
         </Col>
        </MediaQuery>


        {
          /*
            Large Size Screen Search Bar
          */
        }
        <MediaQuery query='(min-width: 700px)'>
           <Col xs={10} sm={12} md={6}>
                <DropdownButton
                  bsStyle={dropDownButtonStyle}
                  style={ButtonMargin}
                  title={this.state.category}
                  id="bg-nested-dropdwon">

                    <MenuItem eventKey={1.1} href="#" onSelect={this.onSelect.bind(this)}>Cars</MenuItem>
                    <MenuItem eventKey={1.2} href="#" onSelect={this.onSelect.bind(this)}>Trucks</MenuItem>
                    <MenuItem eventKey={1.3} href="#" onSelect={this.onSelect.bind(this)}>SUVS</MenuItem>
                    <MenuItem eventKey={1.4} href="#" onSelect={this.onSelect.bind(this)}>Utility</MenuItem>
                    <MenuItem eventKey={1.5} href="#" onSelect={this.onSelect.bind(this)}>All</MenuItem>
                </DropdownButton>

               <DropdownButton  bsStyle="primary" style={ButtonMargin} title="Make" id="bg-nested-dropdwon">
                 <MenuItem eventKey={2.1} href="#" onSelect={this.onSelect.bind(this)}>Acura</MenuItem>
                 <MenuItem eventKey={2.2} href="#" onSelect={this.onSelect.bind(this)}>Mclaren</MenuItem>
                 <MenuItem eventKey={2.3} href="#" onSelect={this.onSelect.bind(this)}>Lambo</MenuItem>
               </DropdownButton>

                <DropdownButton bsStyle="primary" style={ButtonMargin}  title="Model" id="bg-nested-dropdwon">
                  <MenuItem eventKey={3.1} href="#" onSelect={this.onSelect.bind(this)}>Model1</MenuItem>
                  <MenuItem eventKey={3.2} href="#" onSelect={this.onSelect.bind(this)}>Model2</MenuItem>
                  <MenuItem eventKey={3.3} href="#" onSelect={this.onSelect.bind(this)}>Model3</MenuItem>
                </DropdownButton>

                <DropdownButton bsStyle="primary" style={ButtonMargin} title="Price" id="bg-nested-dropdwon">
                  <MenuItem eventKey={4.1} href="#" onSelect={this.onSelect.bind(this)}>(0 - 10)$/hr </MenuItem>
                  <MenuItem eventKey={4.2} href="#" onSelect={this.onSelect.bind(this)}>(10 - 20)$/hr</MenuItem>
                  <MenuItem eventKey={4.3} href="#" onSelect={this.onSelect.bind(this)}>(20 - 30)$/hr</MenuItem>
                  <MenuItem eventKey={4.4} href="#" onSelect={this.onSelect.bind(this)}>(30 - 40)$/hr</MenuItem>
                  <MenuItem eventKey={4.5} href="#" onSelect={this.onSelect.bind(this)}>(40 and above)$/hr</MenuItem>
                </DropdownButton>
              </Col>
            </MediaQuery>
           </Row>

           <MediaQuery query='(min-width: 700px)'>
             <Row style={rowStyle}>
               <Col xs={6} sm={4} md={3} style={divStyle}>
                 <DateTimeField defaultText="Pick-up Date"/>
               </Col>
               <Col xs={6} sm={4} md={3} style={divStyle}>
                 <DateTimeField defaultText="Return Date"/>
               </Col>
             </Row>
           </MediaQuery>

          </Grid>

        {
          /*
            Small Size Screen Search Bar
          */
        }
        <MediaQuery query='(max-width: 700px)'>
          <Collapse in={this.state.advancedFiltersOpen}>
            <Grid className="fullWidthDropdown">
              <Row style={dropDownMenuStyle} >

                <DropdownButton style={dropDownMenuStyle}
                  bsStyle="primary"
                  title={this.state.category}
                  id="bg-nested-dropdwon">

                    <MenuItem  eventKey={1.1} href="#" onSelect={this.onSelect.bind(this)}>Cars</MenuItem>
                    <MenuItem eventKey={1.2} href="#" onSelect={this.onSelect.bind(this)}>Trucks</MenuItem>
                    <MenuItem  eventKey={1.3} href="#" onSelect={this.onSelect.bind(this)}>SUVS</MenuItem>
                    <MenuItem  eventKey={1.4} href="#" onSelect={this.onSelect.bind(this)}>Utility</MenuItem>
                    <MenuItem  eventKey={1.5} href="#" onSelect={this.onSelect.bind(this)}>All</MenuItem>
                </DropdownButton>

              </Row>
              <br />

              <Row style={dropDownMenuStyle}>

                  <DropdownButton  block bsStyle="primary" style={dropDownMenuStyle} title="Make" id="bg-nested-dropdwon">
                    <MenuItem style={dropDownMenuStyle} eventKey={2.1} href="#" onSelect={this.onSelect.bind(this)}>Acura</MenuItem>
                    <MenuItem style={dropDownMenuStyle} eventKey={2.2} href="#" onSelect={this.onSelect.bind(this)}>Mclaren</MenuItem>
                    <MenuItem style={dropDownMenuStyle} eventKey={2.3} href="#" onSelect={this.onSelect.bind(this)}>Lambo</MenuItem>
                  </DropdownButton>

              </Row>
              <br />

              <Row style={dropDownMenuStyle}>
                  <DropdownButton bsStyle="primary" style={dropDownMenuStyle}  title="Model" id="bg-nested-dropdwon">
                  <MenuItem eventKey={3.1} href="#" onSelect={this.onSelect.bind(this)}>Model1</MenuItem>
                  <MenuItem eventKey={3.2} href="#" onSelect={this.onSelect.bind(this)}>Model2</MenuItem>
                  <MenuItem eventKey={3.3} href="#" onSelect={this.onSelect.bind(this)}>Model3</MenuItem>
                </DropdownButton>
              </Row>
              <br />

              <Row style={dropDownMenuStyle}>
                <DropdownButton bsStyle="primary" style={dropDownMenuStyle} title="Price" id="bg-nested-dropdwon">
                  <MenuItem eventKey={4.1} href="#" onSelect={this.onSelect.bind(this)}>(0 - 10)$/hr </MenuItem>
                  <MenuItem eventKey={4.2} href="#" onSelect={this.onSelect.bind(this)}>(10 - 20)$/hr</MenuItem>
                  <MenuItem eventKey={4.3} href="#" onSelect={this.onSelect.bind(this)}>(20 - 30)$/hr</MenuItem>
                  <MenuItem eventKey={4.4} href="#" onSelect={this.onSelect.bind(this)}>(30 - 40)$/hr</MenuItem>
                  <MenuItem eventKey={4.5} href="#" onSelect={this.onSelect.bind(this)}>(40 and above)$/hr</MenuItem>
                </DropdownButton>
              </Row>
              <br />

              <Row>
                <Col xs={12}>
                  <DateTimeField defaultText="From"/>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12}>
                  <DateTimeField defaultText="To"/>
                </Col>
              </Row>
            </Grid>
          </Collapse>
        </MediaQuery>
    </div>
  }
}
