import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import {Tabs, Tab, Thumbnail, Button, Glyphicon, Image, Col} from 'react-bootstrap';

export default class myBookmarks extends React.Component {

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

    minHeight: '150px',
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
      <DocumentTitle title={`Bookmarks`}>
      <div className="container">

          <div className="row">
            <div className="col-xs-12">
              <h3>My Bookmarks</h3>
              <hr />
            </div>
          </div>

        <div style={padStyle}></div>

        <div className="container-fluid">
        <Thumbnail style={tnailStyle}>

        <div className="container-fluid">
        <Col xs={12} sm={12} md={6} lg={6}>
        <Image className="img-responsive" src="https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg" style={picStyle}/>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <h3>Ferrari 458 Italia (2009)</h3>
          <p style={textStyle} >Manual</p>
          <p>Price: 60$/hr</p>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <p>
            <Button bsStyle="primary"><Glyphicon glyph="eye-open"/> View</Button>
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
        <Image className="img-responsive" src="https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg" style={picStyle}/>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <h3>Ferrari 458 Italia (2009)</h3>
          <p style={textStyle}>Manual</p>
          <p>Price: 60$/hr</p>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <p>
            <Button bsStyle="primary"><Glyphicon glyph="eye-open"/> View</Button>
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
        <Image className="img-responsive" src="https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg" style={picStyle}/>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <h3>Manual</h3>
          <p style={textStyle} >Ferrari 458 Italia (2009)</p>
          <p>Price: 60$/hr</p>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <p>
            <Button bsStyle="primary"><Glyphicon glyph="eye-open"/> View</Button>
            <Button bsStyle="danger"><Glyphicon glyph="remove"/> Remove</Button>
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
