import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import {Tabs, Tab, Thumbnail, Button, Glyphicon, Image, Col} from 'react-bootstrap';
import BookmarkedCar from './BookmarkedCar';
export default class myBookmarks extends React.Component {

  render() {

    return (
      <DocumentTitle title={`Bookmarks`}>
      <div className="container">

          <div className="row">
            <div className="col-xs-12">
              <h3>My Bookmarks</h3>
              <hr />
            </div>
          </div>

        <br />

        <BookmarkedCar />
        <BookmarkedCar />
        <BookmarkedCar />

        </div>
      </DocumentTitle>
    );
  }
}
