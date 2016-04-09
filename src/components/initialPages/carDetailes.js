import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import {Tabs, Tab, Thumbnail, Button} from 'react-bootstrap';

export default class carDetailes extends React.Component {

  render() {

    return (
      <DocumentTitle title={`Car Detailes`}>
      <div className="container">

          <div className="row">
            <div className="col-xs-12">
              <h3>Car Detailes</h3>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
            <h4>Name: User </h4>
            <h4>Email: email </h4>
            <h4 bsStyle="bottom-padding:40px;">License: ### </h4>
            </div>
          </div>

          <h1> fuck details </h1>

        </div>
      </DocumentTitle>
    );
  }
}
