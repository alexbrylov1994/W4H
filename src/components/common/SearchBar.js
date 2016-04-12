import { Link } from 'react-router';
import React, { PropTypes } from 'react';

import {DropdownButton, MenuItem, Image, Grid, Thumbnail, Row, Col, Button, Modal} from 'react-bootstrap';
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

 var query = {
  searchString: "",
  category: "",
  make: "",
  model: "",
  price: "",
  showModal: true
};

var ModalBtnStyle = {
    paddingLeft: '10%',
    width: '100%'
};

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
      showDropdown: false
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
    }
    if(href == 1.2){
      console.log('choosing the second category');
      query.category = "Truck";
      HomePageActions.updateQuery(query);
      this.setState({ category: "Truck"});
    }
    if(href == 1.3){
      console.log('choosing the third category');
      query.category = "SUV";
      HomePageActions.updateQuery(query);
      this.setState({ category: "SUV"});
    }
    if(href == 1.4){
      console.log('choosing the fourth category');
      query.category = "Utility";
      HomePageActions.updateQuery(query);
      this.setState({ category: "Utility"});
    }
    if(href == 1.5){
      console.log('choosing the fifth category');
      query.category = "";
      HomePageActions.updateQuery(query);
      this.setState({ category: "All"});
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

  render() {
    var divStyle = {
      paddingLeft: '0px',
      paddingBottom: '30px',
      paddingTop: '15px'
    };
    var searBharStyle = {
      paddingBottom: '15px',
    };
    var searchInputPhoneStyle = {
      borderStyle: 'non',
      paddingLeft: '0%',
      backgroundColor: '',
      width: '100%'
    };
    var searchInputPhoneStyleModal = {
      borderStyle: 'non',
      paddingLeft: '7%',
      paddingRight: '50%',
      paddingBottom: '10px',
      // backgroundColor: '#90EE90',
      width: '85%'
    };
    var rowStyle = {
      paddingLeft: '1.5%'
    };
    var DropdownMenuStyle = {
        paddingLeft: '0%',
        width: '100%'
    };
    let close = () => this.setState({ showModal: false});

    console.log('Rerendering searchBar with searchString == ' + this.state.searchString)
    return <div style={divStyle}>
      <Grid >
        <Row>
          {
            /*
              Large Size Screen Search Input
            */
          }
        <MediaQuery query='(min-width: 700px)'>
            <Col xs={12} sm={12} md={6} style={searBharStyle}>
            <div className="input-group">
              <input type="text" className="form-control"
                onChange={this.onChange.bind(this)} placeholder="search Cars" value={this.state.searchString}
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Search</button>
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
          <div className="input-group">
            <input type="text" className="form-control"
              onChange={this.onChange.bind(this)}
              placeholder="search Cars"
              value={this.state.searchString}
              onClick={this.onSearchInputFocus.bind(this)}

            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Search</button>
            </span>
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
                  title={this.state.category}
                  id="bg-nested-dropdwon">

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
            </MediaQuery>
           </Row>

           <MediaQuery query='(min-width: 700px)'>
             <Row style={rowStyle}>
               <Col xs={12} sm={5} md={5} style={divStyle}>
                 <DateTimeField defaultText="From"/>
               </Col>
               <Col xs={12} sm={5} md={5} style={divStyle}>
                 <DateTimeField defaultText="To"/>
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
          <Modal
            show={this.state.showModal}
            onHide={close}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">Search</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Grid>
                <Row>
                  <TextField hintText="search" style={searchInputPhoneStyleModal}
                     onChange={this.onChange.bind(this)} value={this.state.searchString} style={searchInputPhoneStyleModal}
                 />
                </Row>
                <br />

                <Row>
                  <DropDownMenu autoWidth={false} style={DropdownMenuStyle} value={1}>
                    <MenuItem1 value={1} primaryText="All Categories" />
                    <MenuItem1 value={2} primaryText="Cars" />
                    <MenuItem1 value={3} primaryText="Trucks"/>
                    <MenuItem1 value={4} primaryText="SUVS" />
                    <MenuItem1 value={5} primaryText="Utility"/>
                  </DropDownMenu>
                </Row>
                <br />

                <Row>
                  <DropDownMenu autoWidth={false} style={DropdownMenuStyle} value={1}>
                    <MenuItem1 value={1} primaryText="All Makes" />
                    <MenuItem1 value={2} primaryText="Acura" />
                    <MenuItem1 value={3} primaryText="Mclaren" />
                    <MenuItem1 value={4} primaryText="Lambo"/>
                  </DropDownMenu>
                </Row>
                <br />

                <Row>
                  <DropDownMenu autoWidth={false} style={DropdownMenuStyle} value={1}>
                    <MenuItem1 value={1} primaryText="All Models" />
                    <MenuItem1 value={2} primaryText="Model1" />
                    <MenuItem1 value={3} primaryText="Model2"/>
                    <MenuItem1 value={4} primaryText="Model3" />
                    <MenuItem1 value={5} primaryText="Model4"/>
                  </DropDownMenu>
                </Row>
                <br />
                <Row>
                  <DropDownMenu autoWidth={false} style={DropdownMenuStyle} value={1}>
                    <MenuItem1 value={1} primaryText="No Price Specified" />
                    <MenuItem1 value={2} primaryText="(0 - 10)$/hr" />
                    <MenuItem1 value={3} primaryText="(10 - 20)$/hr" />
                    <MenuItem1 value={4} primaryText="(20 - 30)$/hr"/>
                    <MenuItem1 value={5} primaryText="(30 - 40)$/hr" />
                    <MenuItem1 value={6} primaryText="(40 and above)$/hr"/>
                  </DropDownMenu>
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

            </Modal.Body>
            <Modal.Footer>
              <Button style={ModalBtnStyle} onClick={close}>Find Cars</Button>
            </Modal.Footer>
          </Modal>
        </MediaQuery>
    </div>
  }
}
