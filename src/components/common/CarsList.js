import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import Car from './Car';
import CarRow from './CarRow';

export default class CarsList extends React.Component {

  constructor(props)
  {
    super(props);
  }

  onChange(event)
  {
    console.log('Letter searched is ' + event.target.value)
  }

  getNextCarsRow(rowNumber, cars){
    if(cars.length >= (rowNumber * 4)){
      if((cars.length - (rowNumber * 4)) >=4){
        //console.log(JSON.stringify(cars.slice(pageNumber * 20, pageNumber * 20 + 20), null, "\t"))
        return cars.slice(rowNumber * 4, rowNumber * 4 + 4)
      } else{
        //console.log(JSON.stringify(cars.slice(pageNumber * 20, cars.length), null, "\t"))
        return cars.slice(rowNumber * 4, cars.length)
      }
    }
    return {}
  }

  render() {
    var rowCount = 0;
    var rowElementNumber = 0;
    let cars = this.props.cars;
    let CarsArray = [];

    // var carsRows = cars.map(function(c){
    //   if(rowElementNumber == 4){
    //     rowElementNumber = 0;
    //
    //     return(
    //       <div key={c.name}>
    //         <CarRow {cars.splice(rowCount - 4, rowCount)}/>
    //       </div>
    //     );
    //   } else{
    //     if(cars.length <= rowCount){
    //       return(
    //         <div key={c.name}>
    //           <CarRow cars {cars.splice(rowCount - 4, cars.length)}/>
    //         </div>
    //       );
    //     }
    //   }
    //
    //   rowElementNumber ++;
    //   rowCount ++;
    // });




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
