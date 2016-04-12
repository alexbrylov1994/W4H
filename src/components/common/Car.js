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

          </Row>
        </Grid>
    );
  }
}
