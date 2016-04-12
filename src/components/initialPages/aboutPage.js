import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

import { LoginLink } from 'react-stormpath';

export default class aboutPage extends React.Component {

  render() {

    var picStyle =
    {
      width: '900px',
      height: '500px',
      align: 'center',
      margin: '0 auto'
    };

    return (
      <div className="container">
        <h3 className="text-center">Welcome W4Hire users!</h3>
        <hr />

        <div className="container-fluid">
        <Carousel>
          <CarouselItem>

            <img className="img-responsive" style={picStyle} alt="car" src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"/>
            <div className="carousel-caption">
              <h3>Rent Car</h3>
              <p>The ultimate place for renting cars and have a comfortable, affordable ride</p>
            </div>

          </CarouselItem>
          <CarouselItem>
            <img className="img-responsive" style={picStyle} alt="money" src="http://salesman.red/wp-content/uploads/2016/01/money-background-imagesearn-money-online-7a4zz8nx.jpg"/>
            <div className="carousel-caption">
              <h3>Make Money</h3>
              <p>This application allows you to make money with a minimum ammount of effort</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img className="img-responsive" style={picStyle} alt="safety" src="http://www.adamsindustriesinc.com/wp-content/uploads/2016/02/safety-first2.jpg"/>
            <div className="carousel-caption">
              <h3>Safety</h3>
              <p>We got you covered. WE know, accidents happen, and we are there to make
              sure you are safe!</p>
            </div>
          </CarouselItem>
        </Carousel>
        </div>
      </div>
    );
  }
}
