import React, { PropTypes } from 'react';
import {Thumbnail, Button} from 'react-bootstrap';
export default class InboxItem extends React.Component {

    render() {
      var tnailStyle=
      {
        width: '85%',
        marginLeft: '7%'
      };

      return (

        <Thumbnail id="t1" style={tnailStyle}>
          <h3>From : User2</h3>
          <p> <strong>Subject:</strong> Notification : request for a 1979 Mustang - Accepted</p>
          <p> <strong>Time Slot:</strong> 10 Am - 5 PM March 13 2016;  11 Am - 6 PM May 12 </p>
          <p> <strong>Message:</strong> Lorem ipsum dolor sit amet, justo metus vitae cursus fringilla, adipiscing sed, faucibus justo sollicitudin, lobortis pede distinctio eget nunc euismod, tincidunt maecenas nibh cras ligula sed. Accumsan ipsum fusce, ut orci, fermentum velit esse tempus, proin mauris aliquam donec eros, lectus ut. Dis at in, massa ac tincidunt, pulvinar mauris ultricies. At sed orci justo aliquet, dui quam quis vitae tempor leo, eleifend qui fermentum duis etiam vehicula. Elit id, nullam placerat amet justo, morbi ipsum orci massa arcu, eget at vel libero. Sagittis nec interdum, eros pede, non mauris tristique dui id sed interdum. Augue dapibus at fusce, ac ut in per, unde sed. Varius tempor </p>

          <p>
            <Button bsStyle="primary" >Accept</Button>&nbsp;
            <Button bsStyle="danger">Denie</Button>
          </p>
        </Thumbnail>

      );

    }

}
