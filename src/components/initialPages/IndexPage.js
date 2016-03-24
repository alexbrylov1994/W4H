import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

import { LoginLink } from 'react-stormpath';

export default class IndexPage extends React.Component {

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Welcome W4Hire users!</h3>
        <hr />
          <div className="jumbotron">
          <p>
              <br />This is the home page!
          </p>
          </div>
      </div>


    );
  }
}
