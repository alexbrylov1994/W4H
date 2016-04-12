import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
var ImageSlider = require('react-slick');
import {DropdownButton, MenuItem, Image, Grid, Thumbnail, Row, Col, Button, Modal} from 'react-bootstrap';


import { LoginLink } from 'react-stormpath';

export default class aboutPage extends React.Component {


  render() {
    var settings = {
      dots: true,
      draggable: true,
      adaptiveHeight: true,
      centerMode: true,
      centerPadding: 10,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      responsive: [
                    { breakpoint: 800, settings: { slidesToShow: 1 } },
                    { breakpoint: 10000, settings: { slidesToShow: 2 } }
                  ]
    };

    var carSliderStyle = {
      margin: '0 auto',
      padding: '40px',
      width: '100%',
      color: '#333',
      background: '#F8F8F8'
    };
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };

    var divStyle = {
      paddingLeft: '0px',
      paddingBottom: '15px',
    };
    return (

      <div>
        <Grid>
          <Row style={divStyle}>
            <Col xs={12} style={carSliderStyle}>
            <div style={carSliderStyle}>
                <ImageSlider {...settings}>
                  <img src='https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg' />
                  <img src='https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg' />
                  <img src='https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg' />
                  <img src='https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg' />
                  <img src='https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg' />
                  <img src='https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg' />
                  <img src='https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg' />
              </ImageSlider>
              </div>
            </Col>
          </Row>
          <Row>
            <p>
              <h5>
                Wheels4Hire is a peer to peer vehicle sharing website that connects vehicle renters to clients and vice versa. The idea originated from discussion and we identified that a recession is upcoming. Recession will result in people looking to generate extra income. Wheels4Hire helps renters connect with clients looking to rent a vehicle for a specified period of time based on an agreement between the two parties involved. On the website, people will be able to search for potential vehicles to rent based on make, model, location proximity, vehicle type and other additional criterias.
              </h5>
            </p>
          </Row>
          <Row>
            <footer>
              <p>Done by: Seng513 G10</p>
              <p>Contact information: <a href="mailto:Seng513G10@example.com">
              mailto:Seng513G10@example.com</a>.</p>
            </footer>
          </Row>
        </Grid>
        </div>
      );
  }
}
