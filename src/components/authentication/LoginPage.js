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
                  <p bsStyle="padding:40px;"></p><br/>
                    <RegistrationForm>

                      <div className="form-horizontal">
                          <div  className="form-group">
                            <label className="col-xs-12 col-sm-4 control-label" htmlFor="licence">Driver's Licence</label>
                            <div className="col-xs-12 col-sm-4">
                              <input className="form-control" id="licence" type="text" name="licence" />
                            </div>
                          </div>

                          <div  className="form-group">
                              <label className="col-xs-12 col-sm-4 control-label" htmlFor="givenName">First name</label>
                                <div className="col-xs-12 col-sm-4">
                                <input className="form-control" id="givenName" type="text" name="givenName" />
                              </div>

                          </div>

                          <div  className="form-group">
                            <label className="col-xs-12 col-sm-4 control-label" htmlFor="surname">Last name</label>
                              <div className="col-xs-12 col-sm-4">
                              <input className="form-control" id="email" type="text" name="surname" />
                            </div>
                          </div>

                          <div  className="form-group">
                              <label className="col-xs-12 col-sm-4 control-label" htmlFor="email">Email</label>
                              <div className="col-xs-12 col-sm-4">
                                <input className="form-control" id="email" type="text" name="email" />
                              </div>
                          </div>
                          <br/>


                        <div className="col-sm-offset-4 col-sm-4">
                              <button type="submit" className="btn btn-primary">Register</button>
                          </div>
                          </div>
                      </RegistrationForm>


                </Tab>

              </Tabs>
            </div>

      </DocumentTitle>
    );
  }
}
