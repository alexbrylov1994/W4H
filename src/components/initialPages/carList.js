import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import {Tabs, Tab, Thumbnail, Button, Glyphicon} from 'react-bootstrap';

export default class carList extends React.Component {

  render() {

    return (
      <DocumentTitle title={`Garage`}>
      <div className="container">

          <div className="row">
            <div className="col-xs-12">
              <h3>My Garage</h3>
              <hr />
            </div>
          </div>

        <div>
        <Button bsSize="large"><Glyphicon glyph="plus" />Add</Button>
        </div>

        <div>

        <Thumbnail src="http://blog.caranddriver.com/wp-content/uploads/2015/03/2017-Ford-GT-301-876x535.jpg" bsSize="small">

          <h3>Thumbnail label</h3>
          <p>Ferrari 458 Italia (2009)</p>
          <p>Price: 60$/hr</p>

          <p>
            <Button bsStyle="primary">Button</Button>
            <Button bsStyle="warning">Button</Button>
            <Button bsStyle="danger">Button</Button>

          </p>
        </Thumbnail>

        </div>


        </div>
      </DocumentTitle>
    );
  }
}
