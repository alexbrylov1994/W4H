import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import Car from './Car';
import CarRow from './CarRow';

export default class CarsList extends React.Component {

  constructor(props)
  {
    super(props);
  }

  render() {
    var rowCount = 0;
    var rowElementNumber = 0;
    let cars = this.props.cars;

    return <div>
      {
        this.props.cars.map(function(c){
          return(
            <div key={c.name}>
              <Car carName={c.name} price={c.price}
                />
            </div>
          );
        })
      }
    </div>
  }
}
