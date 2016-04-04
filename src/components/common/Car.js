import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {Image, Grid, Thumbnail, Row, Col, Button} from 'react-bootstrap';

export default class Car extends React.Component {

  render() {
    return (
        <Grid className="container-fluid">
          <Row>
              <Col xs={12} sm={6} md={3}>
               <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
                alt="242x200">
                 <h3>Car Details</h3>
                 <p>
                    <h4>{this.props.carName}</h4>
                    <h4>16$/hr</h4>
                 </p>
                 <p>
                   <Button bsStyle="primary">Button</Button>&nbsp;
                   <Button bsStyle="default">Button</Button>
                 </p>
               </Thumbnail>
             </Col>

             <Col xs={12} sm={6} md={3}>
              <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
               alt="242x200">
                <h3>Car Details</h3>
                <p>
                   <h4>{this.props.carName}</h4>
                   <h4>16$/hr</h4>
                </p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={6} md={3}>
             <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
              alt="242x200">
               <h3>Car Details</h3>
               <p>
                  <h4>{this.props.carName}</h4>
                  <h4>16$/hr</h4>
               </p>
               <p>
                 <Button bsStyle="primary">Button</Button>&nbsp;
                 <Button bsStyle="default">Button</Button>
               </p>
             </Thumbnail>
           </Col>
           <Col xs={12} sm={6} md={3}>
            <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
             alt="242x200">
              <h3>Car Details</h3>
              <p>
                 <h4>{this.props.carName}</h4>
                 <h4>16$/hr</h4>
              </p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          </Row>
        </Grid>
    );
  }
}
