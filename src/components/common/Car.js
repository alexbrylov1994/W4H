import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {Image, Grid, Thumbnail, Row, Col, Button} from 'react-bootstrap';
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';
import StarRating from 'react-star-rating';
import Paper from 'material-ui/lib/paper';


var starStyle = {
  width: '5%',
  height: '5%'
};

export default class Car extends React.Component {

  render() {
    return (
        <Grid>
          <Row>
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
