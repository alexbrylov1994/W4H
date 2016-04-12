import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {Image, Grid, Thumbnail, Row, Col, Button} from 'react-bootstrap';
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class CarRow extends React.Component {

  render() {
    let cars = this.props.cars;

    console.log("CarRow props cars " + JSON.stringify(cars, null, "\t"))

    return (
        <Grid>
          <Row>
              <Col xs={12} sm={6} md={3}>
               <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
                alt="242x200">
                 <p>
                    <h4>{this.props.cars[0].name}</h4>
                    <h4>{this.props.cars[0].price}$/hr</h4>
                 </p>

                 <Authenticated>
                   <p>
                     <Button bsStyle="primary">View Details</Button>&nbsp;
                     <Button bsStyle="default">Bookmarks</Button>
                   </p>
                </Authenticated>

                <NotAuthenticated>
                  <p>
                    <Button bsStyle="primary">View Details</Button>&nbsp;
                  </p>
               </NotAuthenticated>

               </Thumbnail>
             </Col>

             <Col xs={12} sm={6} md={3}>
              <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
               alt="242x200">
               <p>
                  <h4>{this.props.cars[1].name}</h4>
                  <h4>{this.props.cars[1].price}$/hr</h4>
               </p>

               <Authenticated>
                 <p>
                   <Button bsStyle="primary">View Details</Button>&nbsp;
                   <Button bsStyle="default">Bookmarks</Button>
                 </p>
              </Authenticated>

              <NotAuthenticated>
                <p>
                  <Button bsStyle="primary">View Details</Button>&nbsp;
                </p>
             </NotAuthenticated>

              </Thumbnail>
            </Col>

            <Col xs={12} sm={6} md={3}>
             <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
              alt="242x200">
              <p>
                 <h4>{this.props.cars[2].name}</h4>
                 <h4>{this.props.cars[2].price}$/hr</h4>
              </p>

              <Authenticated>
                <p>
                  <Button bsStyle="primary">View Details</Button>&nbsp;
                  <Button bsStyle="default">Bookmarks</Button>
                </p>
             </Authenticated>

             <NotAuthenticated>
               <p>
                 <Button bsStyle="primary">View Details</Button>&nbsp;
               </p>
            </NotAuthenticated>

             </Thumbnail>
           </Col>
           <Col xs={12} sm={6} md={3}>
            <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
             alt="242x200">
             <p>
                <h4>{this.props.cars[3].name}</h4>
                <h4>{this.props.cars[3].price}$/hr</h4>
             </p>

             <Authenticated>
               <p>
                 <Button bsStyle="primary">View Details</Button>&nbsp;
                 <Button bsStyle="default">Bookmarks</Button>
               </p>
            </Authenticated>

            <NotAuthenticated>
              <p>
                <Button bsStyle="primary">View Details</Button>&nbsp;
              </p>
           </NotAuthenticated>

            </Thumbnail>
          </Col>
          </Row>
        </Grid>
    );
  }
}
