import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

import { LoginLink } from 'react-stormpath';

export default class aboutPage extends React.Component {

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Welcome W4Hire users!</h3>
        <hr />
        <Carousel>
          <CarouselItem>
            <img width={400} height={500} alt="400x500" src="https://www.google.ca/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiD6eu0p_jLAhVEzWMKHX5-BjoQjRwIBw&url=http%3A%2F%2Fsalesman.red%2Fwhich-of-these-would-make-salesmen-more-money%2F&psig=AFQjCNHhmN4mov92QTZVYwuqLq7xggXA9Q&ust=1459973537913029"/>
            <div className="carousel-caption">
              <h3>Rent Car</h3>
              <p>The ultimate place for renting cars and have a comfortable, affordable ride</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img width={400} height={500} alt="400x500" src="./assets/money.jpg"/>
            <div className="carousel-caption">
              <h3>Make Money</h3>
              <p>This application allows you to make money with a minimum ammount of effort</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img width={400} height={500} alt="400x500" src="./assets/money.jpg"/>
            <div className="carousel-caption">
              <h3>Safety</h3>
              <p>We got you covered. WE know, accidents happen, and we are there to make
              sure you are safe!</p>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    );
  }
}
