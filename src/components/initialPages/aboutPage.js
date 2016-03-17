import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

import { LoginLink } from 'react-stormpath';

export default class aboutPage extends React.Component {

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Welcome W4Hire users!</h3>
        <hr />
          <div className="jumbotron">
            <p>
                This is about page!
            </p>
            <p>
                This webiste provides a communication channel for poeple who
                want to rent a car or rent out their cars.
            </p>
          </div>
      </div>
    );
  }
}
