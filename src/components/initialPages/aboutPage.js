import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {Carousel, CarouselItem, Jumbotron, Col} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

import { LoginLink } from 'react-stormpath';
import MediaQuery from 'react-responsive';

export default class aboutPage extends React.Component {

  render() {

    var picStyle =
    {
      width: '80%',
      height: '500px',
      align: 'center',
      margin: '0 auto'
    };

    var padStyle=
    {
      paddingTop:'55px'
    };

    var jubStyle = {
      paddingLeft: '1.5%',
      paddingRight: '1.5%'
    };

    var curosolStyle = {
      borderRadius: '100px'
    };

    var blackText = {
      padding:'3% ',
      borderRadius:'8px',
      backgroundColor: 'rgba(0,0,0,0.35)'
    };

    return (
      <div className="container">

      <div style={jubStyle}>
        <Jumbotron >
          <h3 className="text-center">Welcome W4Hire users!</h3>
          <p className="text-center"> Prepare to get amazed at how easy everything is!</p>
        </Jumbotron>
      </div>


        <div className="container-fluid">
        <Carousel style={curosolStyle}>
          <CarouselItem>
            <img className="img-responsive" style={picStyle} alt="car" src="https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg"/>
            <div style={blackText} className="carousel-caption">
              <h3>Rent Car</h3>
              <p>The ultimate place for renting cars and have a comfortable, affordable ride</p>
            </div>

          </CarouselItem>
          <CarouselItem>
            <img className="img-responsive" style={picStyle} alt="money" src="http://salesman.red/wp-content/uploads/2016/01/money-background-imagesearn-money-online-7a4zz8nx.jpg"/>
            <div style={blackText}  className="carousel-caption">
              <h3>Make Money</h3>
              <p>This application allows you to make money with a minimum ammount of effort</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img className="img-responsive" style={picStyle} alt="safety" src="http://www.adamsindustriesinc.com/wp-content/uploads/2016/02/safety-first2.jpg"/>
            <div style={blackText}  className="carousel-caption">
              <h3>Safety</h3>
              <p>We got you covered. WE know, accidents happen, and we are there to make
              sure you are safe!</p>
            </div>
          </CarouselItem>
        </Carousel>

        <div style={padStyle}> </div>

        <Col xs={12}>
        <div>
          <h3 className="text-center"> History </h3>
          <p > W4Hire was created by 6 ambitious entrepreneurs who wanted to introduce the world cheap, easy transportation and a way to make money.
          We live in a time or recession and  some people are in a deed of money and out platform can help those people to have an extra source of income.
          We want to make this world a better place and make it more affordable for everyone.
          </p>

        </div>
        </Col>
        <div style={padStyle}> </div>


        <div style={padStyle}> </div>

        <Col xs={12} sm={12} md={4} lg={4}>
        <div>
          <h3 className="text-center"> Rent Cars </h3>
          <p> Want to have an affordable transportation?
              We got your back! We are providing most affordable prices
              on the market. Who needs taxi drivers or buying a car when you can
              rent a car for a small fee and get to any location you want?
          </p>
        </div>
        </Col>

        <Col xs={12} sm={12} md={4} lg={4}>
        <div>
          <h3 className="text-center"> Make Money </h3>
          <p> We are living in a time of recession and everyone need some extra money.
              You are a college student? Don’t have a steady job?
              Unemployed? Want to have enough money for a vacation?
              Want to start your own startup? Then we got your back, with
              our platform you can make lots of money with a minimal amount of effort!
          </p>
        </div>
        </Col>

        <Col xs={12} sm={12} md={4} lg={4}>
        <div>
          <h3 className="text-center"> Stay safe </h3>
          <p> No one is safe those days, especially when you have deal with other clients.
              We aware that your car can be stolen, damaged, etc. And guess what?
              We got you covered! We take security precautions to ensure your safety
              and if something happened to your car, your problems will be fixed in no time!
          </p>
        </div>
        </Col>

        </div>
      </div>
    );
  }
}
