import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

import { LoginLink } from 'react-stormpath';

//Tabs
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';

//Table
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body'

import events from './events';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
BigCalendar.momentLocalizer(moment)

import {DropdownButton, MenuItem, Image, Grid, Thumbnail, Row, Col, Button, Modal} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
var ImageSlider = require('react-slick');

export default class car extends React.Component {

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
      <Grid>
        <Row style={divStyle}>
          <Col xs={12} style={carSliderStyle}>
          <div style={carSliderStyle}>
            	<ImageSlider {...settings}>
                <img src='https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg' />
                <img src='https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg' />
                <img src='https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg' />
                <img src='https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg' />
              </ImageSlider>
            </div>
          </Col>
        </Row>

        <Row style={divStyle}>
          <Col xs={12} >
            <Tabs>
              <Tab label="About" >
                <Grid>
                  <Row>
                    <Col>
                      <table className="table">
                          <tbody>
                            <tr>
                              <td>Owner</td>
                              <td>Someone</td>
                            </tr>
                            <tr>
                              <td>Make</td>
                              <td>Sedan</td>
                            </tr>
                            <tr>
                              <td>Model</td>
                              <td>Jaguar</td>
                            </tr>
                            <tr>
                              <td>Trim</td>
                              <td>XF</td>
                            </tr>
                            <tr>
                              <td>Rate $/hr</td>
                              <td>20</td>
                            </tr>
                          </tbody>
                      </table>
                    </Col>
                  </Row>
                </Grid>
              </Tab>
              <Tab label="Availability" >
                  <BigCalendar
                    popup
                    events={events}
                    view='week'
                    views={['week', 'day']}
                    toolbar={true}
                    defaultDate={new Date(2016, 4, 12)}
                    onSelectEvent={event => alert(event.title)}
                  />
              </Tab>
              <Tab label="Map">
                <div>
                  <h2 style={styles.headline}>Tab Three</h2>
                  <p>
                    This is a third example tab.
                  </p>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>
    );
  }
}
