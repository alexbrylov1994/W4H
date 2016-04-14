var alt = require('../alt');


class HomePageActions {
  updateQuery(query) {
    console.log('updateQueryAction is called with query  ' + JSON.stringify(query))
    return query;
  }
}

module.exports = alt.createActions(HomePageActions);
