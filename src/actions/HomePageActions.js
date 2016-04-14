var alt = require('../alt');


class HomePageActions {
  updateQuery(query) {
    return query;
  }
}

module.exports = alt.createActions(HomePageActions);
