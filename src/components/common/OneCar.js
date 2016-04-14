import { Link, browserHistory } from 'react-router';
import React, { PropTypes } from 'react';
import {Image, Thumbnail, Button, Glyphicon} from 'react-bootstrap';
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';
import StarRating from 'react-star-rating';
import MediaQuery from 'react-responsive';


var starStyle = {
  width: '5%',
  height: '5%'
};

export default class Car extends React.Component {

  constructor(props)
  {
    super(props);
    this.state =  {
      bookmarked : false
    };
  }


  bookmarkButtonHandler(e){
    if(this.state.bookmarked){
      this.setState({ bookmarked: false});
    }else{
      this.setState({ bookmarked: true});
    }
  }

  render() {

    var bookmarkButtonText = this.state.bookmarked ? 'Remove bookmark ' : 'Bookmark ';
    var bookmarkButtonStyle =  this.state.bookmarked ? 'danger' : 'default';

    return (
         <div>
           <Thumbnail src="https://www.honda.ca/Content/hondanews.ca/82714903-f033-4473-8d7c-c20e027c9a66/PressRelease/2014_Honda_Civic_Ext_20.jpg"
            alt="242x200">

            <StarRating name="w4hire"
              ratingAmount={5}
              rating={5}
              editing={false}
              size={20}
              >
            </StarRating>
             <p>
                <h4>{this.props.carName}</h4>
                <h4>{this.props.price}/hr</h4>
             </p>
             <Authenticated>
               <p>
                 <Link to="/carDetails">
                   <Button
                       bsSize="small"
                       bsStyle="info">
                       <Glyphicon glyph="eye-open"/> View Details
                    </Button>&nbsp;
                 </Link>


                 <Button onClick={this.bookmarkButtonHandler.bind(this)}
                        bsSize="small"
                        bsStyle={bookmarkButtonStyle}> <Glyphicon glyph="bookmark" />
                      {bookmarkButtonText}
                 </Button>&nbsp;
               </p>
            </Authenticated>

            <NotAuthenticated>
              <Link to="/carDetails">                
                <Button
                    bsSize="small"
                    bsStyle="info"
                    >
                    <Glyphicon glyph="eye-open"/> View Details
                 </Button>&nbsp;
              </Link>
           </NotAuthenticated>
           </Thumbnail>
         </div>
    );
  }
}
