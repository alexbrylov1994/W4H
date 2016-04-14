import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import {Thumbnail, Button, Glyphicon, Image, Col, Input} from 'react-bootstrap';
//Tabs
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';

import myGarage from '../initialPages/myGarage';
import InboxItem from './InboxItem';
import ReviewItem from './ReviewItem'
export default class ProfilePage extends React.Component {

  constructor(props)
  {
    super(props);
    this.state =  {
      selectedTab: 1
    };
  }

  render() {

    const Tabstyle = {
      backgroundColor: '#3F5E68',
      color: "black"
    };
    var inkBarStyle ={
      background:'cyan'
    };

    return (
      <DocumentTitle title={`My Profile`}>
      <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>My Profile</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">

              <h4>Name: User </h4>
              <h4>Email: email </h4>
              <h4 bsStyle="bottom-padding:40px;">License: ### </h4>

                <Tabs
                  tabItemContainerStyle={Tabstyle}
                  inkBarStyle={inkBarStyle}>
                    <Tab label="Inbox">
                      <br/>
                        <InboxItem />
                        <InboxItem />
                        <InboxItem />
                        <InboxItem />


                    </Tab>

                    <Tab label="Reviews"  >
                      <br/>
                      <ReviewItem />
                      <ReviewItem />
                      <ReviewItem />
                      <ReviewItem />
                    </Tab>

                {/*    <Tab label="Garage" value={1}>
                      <p bsStyle="padding:40px;"></p><br/><LoginForm/>
                    </Tab> */}

                    <Tab label="Update"  >
                    <br/>
                      <UserProfileForm>
                        <div className="form-horizontal">
                            <div  className="form-group">
                              <label className="col-xs-12 col-sm-4 control-label" htmlFor="licence">Driver's Licence</label>
                              <div className="col-xs-12 col-sm-4">
                                <input className="form-control" id="licence" type="text" name="licence" />
                              </div>
                            </div>

                            <div  className="form-group">
                                <label className="col-xs-12 col-sm-4 control-label" htmlFor="givenName">First name</label>
                                  <div className="col-xs-12 col-sm-4">
                                  <input className="form-control" id="givenName" type="text" name="givenName" />
                                </div>

                            </div>

                            <div  className="form-group">
                              <label className="col-xs-12 col-sm-4 control-label" htmlFor="surname">Last name</label>
                                <div className="col-xs-12 col-sm-4">
                                <input className="form-control" id="email" type="text" name="surname" />
                              </div>
                            </div>

                            <div  className="form-group">
                                <label className="col-xs-12 col-sm-4 control-label" htmlFor="email">Email</label>
                                <div className="col-xs-12 col-sm-4">
                                  <input className="form-control" id="email" type="text" name="email" />
                                </div>
                            </div>
                            <br/>


                          <div className="col-sm-offset-4 col-sm-4">
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                          </div>
                        </UserProfileForm>
                        <br/>
                    </Tab>

                  </Tabs>





                {/*
                  <Tab eventKey={3} title="My Garage">
                    <div style={padStyle}></div>
                    <myGarage />

              <div style={padStyle}></div>

              <div>
                <Button bsSize="large" bsStyle="info" style={btnlg} align="right" ><Glyphicon glyph="plus"/></Button>
              </div>

              <div style={padStyle}></div>

              <div className="container-fluid">
              <Thumbnail style={tnailStyle}>

              <div className="container-fluid">
              <Col xs={12} sm={12} md={6} lg={6}>
              <Image className="img-responsive" src="http://blog.caranddriver.com/wp-content/uploads/2015/03/2017-Ford-GT-301-876x535.jpg" style={picStyle}/>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <h3>Ferrari 458 Italia (2009)</h3>
                <p style={textStyle} >Manual</p>
                <p>Price: 60$/hr</p>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <p>
                  <Button bsStyle="primary"><Glyphicon glyph="eye-open"/> View</Button>
                  <Button bsStyle="warning"><Glyphicon glyph="edit"/> Edit</Button>
                  <Button bsStyle="danger"><Glyphicon glyph="remove"/> Remove</Button>

                </p>
              </Col>
              </div>

              </Thumbnail>
              </div>



              <div className="container-fluid">
              <Thumbnail style={tnailStyle}>

              <div className="container-fluid">
              <Col xs={12} sm={12} md={6} lg={6}>
              <Image className="img-responsive" src="http://blog.caranddriver.com/wp-content/uploads/2015/03/2017-Ford-GT-301-876x535.jpg" style={picStyle}/>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <h3>Ferrari 458 Italia (2009)</h3>
                <p style={textStyle}>Manual</p>
                <p>Price: 60$/hr</p>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <p>
                  <Button bsStyle="primary"><Glyphicon glyph="eye-open"/> View</Button>
                  <Button bsStyle="warning"><Glyphicon glyph="edit"/> Edit</Button>
                  <Button bsStyle="danger"><Glyphicon glyph="remove"/> Remove</Button>

                </p>
              </Col>
              </div>

              </Thumbnail>
              </div>



              <div className="container-fluid">
              <Thumbnail style={tnailStyle}>

              <div className="container-fluid">
              <Col xs={12} sm={12} md={6} lg={6}>
              <Image className="img-responsive" src="http://blog.caranddriver.com/wp-content/uploads/2015/03/2017-Ford-GT-301-876x535.jpg" style={picStyle}/>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <h3>Manual</h3>
                <p style={textStyle} >Ferrari 458 Italia (2009)</p>
                <p>Price: 60$/hr</p>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <p>
                  <Button bsStyle="primary"><Glyphicon glyph="eye-open"/> View</Button>
                  <Button bsStyle="warning"><Glyphicon glyph="edit"/> Edit</Button>
                  <Button bsStyle="danger"><Glyphicon glyph="remove"/> Remove</Button>

                </p>
              </Col>
              </div>

              </Thumbnail>
              </div>
            </Tab>  */}
            </div> {/*End Col*/}
          </div> {/*End row*/}
        </div>{/*End container*/}
      </DocumentTitle>
    );
  }
}
