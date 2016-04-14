import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
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
  {name: "car7", price: "1$", categories: "Car"},
  {name: "car8", price: "2$", categories: "Car"},
  {name: "car9", price: "3$", categories: "Car"},
  {name: "car10", price: "4$", categories: "Car"},
  {name: "car11", price: "5$", categories: "Car"},
  {name: "car12", price: "6$", categories: "Car"},
  {name: "car13", price: "1$", categories: "Car"},
  {name: "car14", price: "2$", categories: "Car"},
  {name: "car15", price: "3$", categories: "Car"},
  {name: "car16", price: "4$", categories: "Car"},
  {name: "car17", price: "5$", categories: "Car"},
  {name: "car18", price: "6$", categories: "Car"},
  {name: "car19", price: "5$", categories: "Car"},
  {name: "car20", price: "6$", categories: "Car"},

  {name: "truck1", price: "7$", categories: "Truck"},
  {name: "truck2", price: "8$", categories: "Truck"},
  {name: "truck3", price: "9$", categories: "Truck"},
  {name: "truck4", price: "10$", categories: "Truck"},
  {name: "truck5", price: "11$", categories: "Truck"},
  {name: "truck6", price: "12$", categories: "Truck"},
  {name: "truck7", price: "7$", categories: "Truck"},
  {name: "truck8", price: "8$", categories: "Truck"},
  {name: "truck9", price: "9$", categories: "Truck"},
  {name: "truck10", price: "10$", categories: "Truck"},
  {name: "truck11", price: "11$", categories: "Truck"},
  {name: "truck12", price: "12$", categories: "Truck"},
  {name: "truck13", price: "7$", categories: "Truck"},
  {name: "truck14", price: "8$", categories: "Truck"},
  {name: "truck15", price: "9$", categories: "Truck"},
  {name: "truck16", price: "10$", categories: "Truck"},
  {name: "truck17", price: "11$", categories: "Truck"},
  {name: "truck18", price: "12$", categories: "Truck"},
  {name: "truck19", price: "11$", categories: "Truck"},
  {name: "truck20", price: "12$", categories: "Truck"},

  {name: "suv1", price: "13$", categories: "SUV"},
  {name: "suv2", price: "14$", categories: "SUV"},
  {name: "suv3", price: "15$", categories: "SUV"},
  {name: "suv4", price: "16$", categories: "SUV"},
  {name: "suv5", price: "17$", categories: "SUV"},
  {name: "suv6", price: "18$", categories: "SUV"},
  {name: "suv7", price: "13$", categories: "SUV"},
  {name: "suv8", price: "14$", categories: "SUV"},
  {name: "suv9", price: "15$", categories: "SUV"},
  {name: "suv10", price: "16$", categories: "SUV"},
  {name: "suv11", price: "17$", categories: "SUV"},
  {name: "suv12", price: "18$", categories: "SUV"},
  {name: "suv13", price: "13$", categories: "SUV"},
  {name: "suv14", price: "14$", categories: "SUV"},
  {name: "suv15", price: "15$", categories: "SUV"},
  {name: "suv16", price: "16$", categories: "SUV"},
  {name: "suv17", price: "17$", categories: "SUV"},
  {name: "suv18", price: "18$", categories: "SUV"},
  {name: "suv19", price: "17$", categories: "SUV"},
  {name: "suv20", price: "18$", categories: "SUV"},

  {name: "utility1", price: "19$", categories: "Utility"},
  {name: "utility2", price: "20$", categories: "Utility"},
  {name: "utility3", price: "21$", categories: "Utility"},
  {name: "utility4", price: "22$", categories: "Utility"},
  {name: "utility5", price: "23$", categories: "Utility"},
  {name: "utility6", price: "24$", categories: "Utility"},
  {name: "utility7", price: "19$", categories: "Utility"},
  {name: "utility8", price: "20$", categories: "Utility"},
  {name: "utility9", price: "21$", categories: "Utility"},
  {name: "utility10", price: "22$", categories: "Utility"},
  {name: "utility11", price: "23$", categories: "Utility"},
  {name: "utility12", price: "24$", categories: "Utility"},
  {name: "utility13", price: "19$", categories: "Utility"},
  {name: "utility14", price: "20$", categories: "Utility"},
  {name: "utility15", price: "21$", categories: "Utility"},
  {name: "utility16", price: "22$", categories: "Utility"},
  {name: "utility17", price: "23$", categories: "Utility"},
  {name: "utility18", price: "24$", categories: "Utility"},
  {name: "utility19", price: "23$", categories: "Utility"},
  {name: "utility20", price: "24$", categories: "Utility"},
];

var searchBarPadding = {
    paddingRight: '10px',
    paddingLeft: '10px'
};


var windowPosition ={
  xPos: window.screenX,
  yPos: window.screenY,
  scrollHeight: 0
};

export default class IndexPage extends React.Component {

  constructor(props)
  {
    super(props);
    this.state =  {
      showCarDetailsMode: false,
      xPos: window.screenX,
      yPos: window.screenY
    };

    this.toggleCarDetailsMode = this.toggleCarDetailsMode.bind(this);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate for indexpage is called');
    if(this.state.showCarDetailsMode == true){
      //this.setState({xPos: window.screenX, yPos: window.screenY});
      console.log('Window position == ' + window.screenX + " " + window.screenY +
        " " + window.screenLeft + " " + window.screenTop);

      console.log(" ?" + ReactDOM.findDOMNode(this).scrollHeight);
      windowPosition.scrollHeight = ReactDOM.findDOMNode(this).scrollHeight;
      console.log(" ?" + windowPosition.scrollHeight);

      window.scrollTo(0, 0);
    } else{
      //console.log(" ?" + windowPosition.scrollHeight);
      ReactDOM.findDOMNode(this).scrollTop = windowPosition.scrollHeight;
      //window.scrollTo(this.state.xPos, this.state.yPos);
    }
  }

  toggleCarDetailsMode(){
    //console.log('viewDetailsHandler is called3');
    this.setState({showCarDetailsMode: !this.state.showCarDetailsMode});
  }


  render() {
    if(!this.state.showCarDetailsMode){
      console.log('Showing the normal mode');
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
                        <SearchResult items={items}
                          showCarDetailsMode={false}
                          showCarDetailsModeCallBack={this.toggleCarDetailsMode}>
                        </SearchResult>
                      </Col>
                    </Row>
                  </Grid>
                </div>
            </div>
          </div>
      );
    }
    else{
      return (
        <div className="home-page-wrapper">
            <div id="page-content-wrapper">
                <div className="container-fluid">
                  <Grid >
                    <Row>
                      <Col xs={12} sm={12} md={12}>
                        <SearchResult items={items}
                          showCarDetailsMode={true}
                          showCarDetailsModeCallBack={this.toggleCarDetailsMode}>
                        </SearchResult>
                      </Col>
                    </Row>
                  </Grid>
                </div>
            </div>
          </div>
      );
    }

  }
}
