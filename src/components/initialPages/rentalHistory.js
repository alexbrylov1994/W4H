import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import {Tabs, Tab, Thumbnail, Button, Glyphicon, Image, Col} from 'react-bootstrap';
export default class rentalHistory extends React.Component {

  render() {

  var buttonStyle =
  {
    width: '100px',
    height: '40px',
    background:'#bbb',
    color: '#999'
  };

  var picStyle =
  {
    width: '300px',
    height: '300px',
    align: 'left'
  };

  var textStyle =
  {
    align:'right'
  };

  var tnailStyle=
  {
    width: '85%',
    marginLeft: '7%'
  };

  var btn =
    {
      width: '50px',
      height: '50px',
      textAlign: 'center',
      padding: '10px 16px',
      fontSize: '18px',
      lineHeight: '1.33',
      borderRadius: '35px',
    };

    var padStyle=
    {
      paddingTop:'15px'
    };

  var btnlg=
  {
    width: '70px',
    height: '70px',
    padding: '10px 16px',
    fontSize: '24px',
    lineHeight: '1.33',
    borderRadius: '35px',
    marginLeft: '85%'
  };


    return (
      <DocumentTitle title={`History`}>
      <div className="container">

          <div className="row">
            <div className="col-xs-12">
              <h3>Rental History</h3>
              <hr />
            </div>
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
          <p>Price: 60$/hr</p>
          <p>Rating given: </p>
          <Button bsStyle="warning"><Glyphicon glyph="star"/></Button>
          <p>Owner Review: </p>
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
          <p>Price: 60$/hr</p>
          <p>Rating given: </p>
          <Button bsStyle="warning"><Glyphicon glyph="star"/></Button>
          <p>Owner Review: </p>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <p>
            <Button bsStyle="primary">Submit Rating</Button>
          </p>
        </Col>
        </div>

        </Thumbnail>
        </div>



        </div>
      </DocumentTitle>
    );
  }
}
