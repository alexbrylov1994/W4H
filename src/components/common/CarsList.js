import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import Car from './Car';
import CarImage from './CarImage';

export default class CarsList extends React.Component {

  constructor(props)
  {
    super(props);
  }

  onChange(event)
  {
    console.log('Letter searched is ' + event.target.value)
  }

  render() {
    return <div>
      {
        this.props.cars.map(function(c){
          return(
            <div key={c.name}>
              <Car carName={c.name} price={c.price}/>
            </div>
          );
        })
      }
    </div>
  }
}
