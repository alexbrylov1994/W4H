import React, { PropTypes } from 'react';
import {Thumbnail, Button, Glyphicon, Image,Row, Col, Input} from 'react-bootstrap';
export default class GarageCar extends React.Component {
  render(){
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
        marginLeft: '7%',
      align:'center'
    };

    return(

      <div className="container-fluid">

        <Thumbnail style={tnailStyle}>

        <div className="container-fluid">
        <Col xs={12} sm={12} md={6} lg={6}>
        <Image responsive src="https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg" style={picStyle}/>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <h3>Ferrari 458 Italia (2009)</h3>
          <p style={textStyle} >Ferrari 458 Italia </p>
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

    );
  }
}
