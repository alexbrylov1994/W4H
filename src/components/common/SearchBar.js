import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import Car from './Car';
import CarsList from './CarsList';

import HomePageStore from './../../store/HomePageStore';
import HomePageActions from './../../actions/HomePageActions';

export default class SearchBar extends React.Component {

  constructor(props)
  {
    super(props);
    this.state =  {
      searchString: ""
    }
  }

  onChange(event)
  {
    console.log('Letter searched is ' + event.target.value)
    this.setState({searchString: event.target.value})
  }

  getCarsList(cars){
    for(i = 0; i<cars.length; i++){

    }
  }

  render() {

    let cars = this.props.items,
      searchString = this.state.searchString.trim().toLowerCase();

    if(searchString.length > 0)
    {
      cars = cars.filter(function(c){
        return c.name.toLowerCase().match(searchString);
      });
    }

    var counter = 0;

    return <div>
        <ul>
        <div className="row">
            <div className="input-group">
              <input type="text" className="form-control" value={this.state.searchString}
                onChange={this.onChange.bind(this)} placeholder="search cars"
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Search</button>
              </span>
            </div>
          </div>
          </ul>

          <hr className="divider"></hr>
          <CarsList cars={cars}></CarsList>
    </div>
  }
}
