import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {Image, Grid, Thumbnail, Row, Col, Button} from 'react-bootstrap';
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class Car extends React.Component {

  render() {
    return (
        <Grid className="container-fluid">
          <Row>
              <Col xs={12} sm={6} md={3}>
               <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
                alt="242x200">
                 <p>
                    <h4>{this.props.carName}</h4>
                    <h4>{this.props.price}$/hr</h4>
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
                  <h4>{this.props.carName}</h4>
                  <h4>{this.props.price}$/hr</h4>
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
                 <h4>{this.props.carName}</h4>
                 <h4>{this.props.price}$/hr</h4>
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
                <h4>{this.props.carName}</h4>
                <h4>{this.props.price}$/hr</h4>
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
