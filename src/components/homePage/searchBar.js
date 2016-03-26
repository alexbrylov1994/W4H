import React { PropTypes } from 'react';
import * as ReactDOM from "react-dom";

import {
  SearchkitManager, SearchkitProvider, SearchBox, Hits
} from "searchkit";

const searchkit = new SearchkitManager("/");

export default class searchBar extends React.Component {
  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
          <div>
              <SearchBox/>
              <Hits/>
          </div>
      </SearchkitProvider>
    );
  }
}
