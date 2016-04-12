import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {Image, Grid, Thumbnail, Row, Col, Button} from 'react-bootstrap';
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

import OneCar from './OneCar';

export default class Car extends React.Component {

  render() {

    return (
        <Grid>
          <Row>

            <Col xs={12} sm={6} md={3}>
              <OneCar carName={this.props.carName} price={this.props.price} />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <OneCar carName={this.props.carName} price={this.props.price} />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <OneCar carName={this.props.carName} price={this.props.price} />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <OneCar carName={this.props.carName} price={this.props.price} />
            </Col>

          {/*
            <Col xs={12} sm={6} md={3}>
             <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
              alt="242x200">

              <Col xs={12} sm={6} md={3}>
               <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
                alt="242x200">

                <StarRating name="w4hire"
                  ratingAmount={5}
                  rating={5}
                  editing={false}
                  size={20}
                  >
                </StarRating>

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

               <StarRating name="w4hire"
                 ratingAmount={5}
                 rating={5}
                 editing={false}
                 size={20}
                 >
               </StarRating>

>>>>>>> 1dca09597ddec1a09594aed9a197613fd8b1698f
               <p>
                  <h4>{this.props.carName}</h4>
                  <h4>{this.props.price}$/hr</h4>
               </p>

               <Authenticated>
                 <p>
                   <Button bsSize="small" bsStyle="primary">View Details</Button>&nbsp;
                   <Button bsSize="small" bsStyle="default">Bookmarks</Button>
                 </p>
              </Authenticated>

              <NotAuthenticated>
                <p>
                  <Button bsSize="small" bsStyle="primary">View Details</Button>&nbsp;
                </p>
             </NotAuthenticated>


              </Thumbnail>
            </Col>

            <Col xs={12} sm={6} md={3}>
             <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
              alt="242x200">
              <StarRating name="w4hire"
                ratingAmount={5}
                rating={5}
                editing={false}
                size={20}
                >
              </StarRating>

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

>>>>>>> 1dca09597ddec1a09594aed9a197613fd8b1698f
             </Thumbnail>
           </Col>

           <Col xs={12} sm={6} md={3}>
            <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
             alt="242x200">

             <StarRating name="w4hire"
               ratingAmount={5}
               rating={5}
               editing={false}
               size={20}
               >
             </StarRating>

             <p>
                <h4>{this.props.carName}</h4>
                <h4>{this.props.price}$/hr</h4>
             </p>

             <Authenticated>
               <p>
                 <Button bsSize="small" bsStyle="primary">View Details</Button>&nbsp;
                 <Button bsStyle="default">Bookmarks</Button>
               </p>
            </Authenticated>

            <NotAuthenticated>
              <p>
                <Button bsSize="small" bsStyle="primary">View Details</Button>&nbsp;
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
                <Button bsSize="small" bsStyle="primary">View Details</Button>&nbsp;
                <Button bsSize="small" bsStyle="default">Bookmarks</Button>
              </p>
           </Authenticated>

           <NotAuthenticated>
             <p>
               <Button bsSize="small" bsStyle="primary">View Details</Button>&nbsp;
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
               <Button bsSize="small" bsStyle="primary">View Details</Button>&nbsp;
               <Button bsSize="small" bsStyle="default">Bookmarks</Button>
             </p>
          </Authenticated>

          <NotAuthenticated>
            <p>
              <Button bsSize="small" bsStyle="primary">View Details</Button>&nbsp;
            </p>
         </NotAuthenticated>

          </Thumbnail>
        </Col>
    */  }
          </Row>
        </Grid>
    );
  }
}
