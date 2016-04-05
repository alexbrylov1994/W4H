import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import {Tabs, Tab, Thumbnail, Button} from 'react-bootstrap';

export default class ProfilePage extends React.Component {
  render() {
    return (
      <DocumentTitle title={`My Profile`}>
      <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>My Profile</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">

            <h4>Name: User </h4>
            <h4>Email: email </h4>
            <h4 bsStyle="bottom-padding:40px;">License: ### </h4>

            <div>
          <Tabs defaultActiveKey={1}>
              <Tab eventKey={1} title="Inbox">

              <Thumbnail>
                <h3>Dude I want your car!</h3>
                <p>I want to rent it bad for Nelson!</p>
                <p>
                  <Button bsStyle="primary">Reply</Button>&nbsp;
                  <Button bsStyle="default">Delete</Button>
                </p>
              </Thumbnail>

              <Thumbnail>
                <h3>Dude I want your car!</h3>
                <p>I want to rent it bad for Nelson!</p>
                <p>
                  <Button bsStyle="primary">Reply</Button>&nbsp;
                  <Button bsStyle="default">Delete</Button>
                </p>
              </Thumbnail>

              <Thumbnail>
                <h3>Dude I want your car!</h3>
                <p>I want to rent it bad for Nelson!</p>
                <p>
                  <Button bsStyle="primary">Reply</Button>&nbsp;
                  <Button bsStyle="default">Delete</Button>
                </p>
              </Thumbnail>

              </Tab>

              <Tab eventKey={2} title="Reviews">

            <Thumbnail>
              <h3>Thumbnail label</h3>
              <p>Amazing</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>

            <Thumbnail>
              <h3>Thumbnail label</h3>
              <p>Amazing</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>

            <Thumbnail>
              <h3>Thumbnail label</h3>
              <p>Amazing</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>

            <Thumbnail>
              <h3>Thumbnail label</h3>
              <p>Amazing</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
              </Tab>

              <Tab eventKey={3} title="Update Profile"><UserProfileForm /></Tab>
            </Tabs>
            </div>

            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
