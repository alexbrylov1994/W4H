import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {Image, Thumbnail, Button} from 'react-bootstrap';
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class Car extends React.Component {

  constructor(props)
  {
    super(props);
    this.state =  {
      bookmarked : false
    };
  }


  bookmarkButtonHandler(e){
    if(  this.state.bookmarked){
      this.setState({ bookmarked: false});
    }else{
      this.setState({ bookmarked: true});
    }

  }

  render() {

    var bookmarkButtonText = this.state.bookmarked ? 'Remove bookmark' : 'Bookmark';
    var bookmarkButtonStyle =  this.state.bookmarked ? 'danger' : 'default';

    return (
         <Thumbnail src="http://www.extremetech.com/wp-content/uploads/2015/04/inter-IP.jpg"
          alt="242x200">
          
           <p>
              <h4>{this.props.carName}</h4>
              <h4>{this.props.price}$/hr</h4>
           </p>

           <Authenticated>
             <p>
               <Button bsSize="small" bsStyle="info">View Details</Button>&nbsp;
               <Button onClick={this.bookmarkButtonHandler.bind(this)} bsSize="small" bsStyle={bookmarkButtonStyle} > {bookmarkButtonText}
                 <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>

               </Button>&nbsp;

             </p>
          </Authenticated>

          <NotAuthenticated>
            <p>
              <Button bsSize="small" bsStyle="info">View Details</Button>&nbsp;
            </p>
         </NotAuthenticated>
         </Thumbnail>
    );
  }
}
