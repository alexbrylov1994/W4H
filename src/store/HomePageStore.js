var alt = require('../alt');
var HomePageActions = require('../actions/HomePageActions');

class HomePageStore {
  constructor() {
    this.query = {
      searchString: "",
      category: "",
      make: "",
      model: "",
      price: ""
    };

    this.bindListeners({
      handleUpdateQuery: HomePageActions.updateQuery
    });
  }

  handleUpdateQuery(data) {
    this.query = data;
  }
}

module.exports = alt.createStore(HomePageStore, 'HomePageStore');
