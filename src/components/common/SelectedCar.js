import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {Carousel, CarouselItem, Glyphicon} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

import MediaQuery from 'react-responsive';

import { LoginLink } from 'react-stormpath';

import { GoogleMap, Marker, SearchBox } from "react-google-maps";

//
import RaisedButton from 'material-ui/lib/raised-button';

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

//List
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Divider from 'material-ui/lib/divider';

import events from './events';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
BigCalendar.momentLocalizer(moment)

import {DropdownButton, MenuItem, Image, Grid, Thumbnail, Row, Col, Button, Modal} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
var ImageSlider = require('react-slick');



export default class SelectedCar extends React.Component {


  constructor(props)
  {
    super(props);
    this.state =  {
      bookmarked : false
    };
  }

  bookmarkButtonHandler(e){
    e.preventDefault();
    if(  this.state.bookmarked){
      this.setState({ bookmarked: false});
    }else{
      this.setState({ bookmarked: true});
    }
  }
  onCalenderViewChange()
  {

  }

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

    var divStyleR1 = {
      paddingLeft: '1.5%',
      paddingRight: '1.5%',
      paddingBottom: '15px',
    };
    var divStyle = {
      paddingLeft: '0px',
      paddingBottom: '15px',
    };

    var tableStyle = {
      paddingLeft: '10px',
      paddingRight: '50px'
    };


    var calenderStyle = {
      paddingTop: '10px'
    };

    const ActionBtnsStyle = {
      margin: 12,
    };

    const Tabstyle = {
      backgroundColor: '#3F5E68',
      color: "black"
    };

    var bookmarkButtonText = this.state.bookmarked ? 'Remove bookmark ' : 'Bookmark ';
    var bookmarkButtonStyle =  this.state.bookmarked ? 'danger' : 'default';


    return (
          <Grid>
            <Row style={divStyleR1}>
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

            <Row style={divStyle}>
              <Col xs={12} >
                <Tabs tabItemContainerStyle={Tabstyle}>
                  <Tab label="About">
                    <Grid style={tableStyle}>
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

                    <MediaQuery query='(min-width: 700px)'>
                      <BigCalendar
                        popup
                        events={events}
                        view='week'
                        views={['week', 'day']}
                        toolbar={true}
                        defaultDate={new Date(2015, 3, 1)}
                        onView={this.onCalenderViewChange.bind(this)}
                        onSelectEvent={event => alert(event.title)}
                        style={calenderStyle}
                      />
                     </MediaQuery>

                     <MediaQuery query='(max-width: 700px)'>
                       <BigCalendar
                         popup
                         events={events}
                         view='day'
                         views={['week', 'day']}
                         onView={this.onCalenderViewChange.bind(this)}
                         toolbar={true}
                         defaultDate={new Date(2015, 3, 1)}
                         onSelectEvent={event => alert(event.title)}
                         style={calenderStyle}
                       />
                     </MediaQuery>

                  </Tab>
                  <Tab label="Map">
                    <iframe
                      width="100%"
                      height="450"
                      frameBorder="0"
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDX44F0oIpZP6D8E5IC98dQzMF3NNSBEXA
                        &q=UniversityOfCalgary" allowFullScreen>
                    </iframe>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col xs={12}>
                {/* Material UI button
                <RaisedButton label="Send Request" primary={true} style={ActionBtnsStyle} />
                <RaisedButton label="Bookmark" primary={true} style={ActionBtnsStyle} />
                */}
                <Button  bsStyle="success" > Send Request
                </Button>&nbsp;

                <Button onClick={this.bookmarkButtonHandler.bind(this)} bsStyle={bookmarkButtonStyle} > <Glyphicon glyph="bookmark" />  {bookmarkButtonText}
                </Button>&nbsp;
              </Col>
            </Row>

            <Row>
              <hr/>
            </Row>
          </Grid>
    );
  }
}
