var alt = require('../alt');
var HomePageActions = require('../actions/HomePageActions');

class HomePageStore {
  constructor() {
    this.query = '';

    this.bindListeners({
      handleUpdateQuery: HomePageActions.updateQuery
    });
  }

  handleUpdateQuery(data) {
    this.query = data;
    console.log('updateQueryStore is called with query ' + this.query);
  }
}

module.exports = alt.createStore(HomePageStore, 'HomePageStore');
