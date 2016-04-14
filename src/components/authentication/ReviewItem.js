import React, { PropTypes } from 'react';
import {Thumbnail} from 'react-bootstrap';
export default class ReviewItem extends React.Component {

    render() {
      var tnailStyle=
      {
        width: '85%',
        marginLeft: '7%'
      };

      return (

        <Thumbnail style={tnailStyle}>

          <p>Lorem ipsum dolor sit amet, justo metus vitae cursus fringilla, adipiscing sed, faucibus justo sollicitudin, lobortis pede distinctio eget nunc euismod, tincidunt maecenas nibh cras ligula sed. Accumsan ipsum fusce, ut orci, fermentum velit esse tempus, proin mauris aliquam donec eros, lectus ut. Dis at in, massa ac tincidunt, pulvinar mauris ultricies. At sed orci justo aliquet, dui quam quis vitae tempor leo, eleifend qui fermentum duis etiam vehicula. Elit id, nullam placerat amet justo, morbi ipsum orci massa arcu, eget at vel libero. Sagittis nec interdum, eros pede, non mauris tristique dui id sed interdum. Augue dapibus at fusce, ac ut in per, unde sed. Varius tempor</p>
          <h5>From : User2</h5>

        </Thumbnail>

      );

    }

}
