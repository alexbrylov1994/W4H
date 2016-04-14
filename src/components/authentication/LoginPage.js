import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm, RegistrationForm, LoginLink } from 'react-stormpath';
//import {Tabs, Tab} from 'react-bootstrap';

//Tabs
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';

export default class LoginPage extends React.Component {

  constructor(props)
  {
    super(props);
    this.state =  {
      inLogin : "Login",
      selectedTab: 1
    };
  }

  changeText(e){
      if(e == 1){
        this.setState({inLogin: "Login"});
        this.setState({selectedTab: 1});
      }
      if(e == 2){
        this.setState({inLogin: "Register"});
        this.setState({selectedTab: 2});
      }
  }

  render() {

    const Tabstyle = {
      backgroundColor: '#3F5E68',
      color: "black"
    };

    var loginFormStyle = {
      background:'rgba(0, 0, 0, 0.17)',
      padding:'20px',
      borderRadius:'20px'
    };

    var inkBarStyle ={
      background:'cyan'
    };

    return (
      <DocumentTitle title={this.state.inLogin}>

         <div className="container" style={loginFormStyle}>

           <div className="row">
            <div className="col-xs-12">
              <h3>{this.state.inLogin}</h3>
            </div>
          </div>

            <Tabs value={this.state.selectedTab}
              onChange={this.changeText.bind(this)}
              tabItemContainerStyle={Tabstyle}
              inkBarStyle={inkBarStyle}>
                <Tab label="Login" value={1}>
                  <p bsStyle="padding:40px;"></p><br/><LoginForm/>
                </Tab>

                <Tab label="Register" value={2} >
                  <p bsStyle="padding:40px;"></p><br/><RegistrationForm/>
                </Tab>

              </Tabs>
            </div>

      </DocumentTitle>
    );
  }
}
