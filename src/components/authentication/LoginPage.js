import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm, RegistrationForm, LoginLink } from 'react-stormpath';
import {Tabs, Tab} from 'react-bootstrap';

export default class LoginPage extends React.Component {
  render() {
    var loginFormStyle = {
      background:'rgba(0, 0, 0, 0.17)',
      padding:'20px',
      borderRadius:'20px'

    };
    return (
      <DocumentTitle title={`Login`}>
        <div className="container" style={loginFormStyle}>
          <div className="row">
            <div className="col-xs-12">
              <h3>Login</h3>
            </div>
          </div>

          <Tabs justified defaultActiveKey={1}>
          <Tab eventKey={1} title="Login"><p bsStyle="padding:40px;"></p><br/><LoginForm/></Tab>
          <Tab eventKey={2} title="Register"><p bsStyle="padding:40px;"></p><br/><RegistrationForm/></Tab>
          </Tabs>
        </div>
      </DocumentTitle>
    );
  }
}
