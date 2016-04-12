import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm, RegistrationForm, LoginLink } from 'react-stormpath';
import {Tabs, Tab} from 'react-bootstrap';

export default class LoginPage extends React.Component {

  constructor(props)
  {
    super(props);
    this.state =  {
      inLogin : "Login"
    };
  }

  changeText(e){
      if(e == 1){
        this.setState({inLogin: "Login"});
      } else{
        this.setState({inLogin: "Register"});
      }
  }

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
              <h3>{this.state.inLogin}</h3>
            </div>
          </div>

          <Tabs justified defaultActiveKey={1} onSelect={this.changeText.bind(this)}>
          <Tab eventKey={1} title="Login"><p bsStyle="padding:40px;"></p><br/><LoginForm/></Tab>
          <Tab eventKey={2} title="Register"><p bsStyle="padding:40px;"></p><br/><RegistrationForm/></Tab>
          </Tabs>
        </div>
      </DocumentTitle>
    );
  }
}
