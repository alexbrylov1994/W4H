import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm, RegistrationForm, LoginLink } from 'react-stormpath';
import {Tabs, Tab} from 'react-bootstrap';

export default class LoginPage extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Login</h3>
            </div>
          </div>
          <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="Login"><p bsStyle="padding:40px;"></p><LoginForm/></Tab>
          <Tab eventKey={2} title="Register"><p bsStyle="padding:40px;"></p><RegistrationForm/></Tab>
          </Tabs>
        </div>
      </DocumentTitle>
    );
  }
}
