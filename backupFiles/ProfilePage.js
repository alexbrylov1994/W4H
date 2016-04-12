import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import {Tabs, Tab, Thumbnail, Button} from 'react-bootstrap';

export default class ProfilePage extends React.Component {

  render() {

    function hello()
    {

      document.getElementById("t2").remove();

    }


    return (
      <DocumentTitle title={`My Profile`}>
      <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>My Profile</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">

            <h4>Name: User </h4>
            <h4>Email: email </h4>
            <h4 bsStyle="bottom-padding:40px;">License: ### </h4>

            <div>
          <Tabs defaultActiveKey={1}>
              <Tab eventKey={1} title="Inbox">

              <Thumbnail id="t1">
                <h3 id="t2">From : User2</h3>
                <p> <strong>Subject:</strong> Notification : request for a 1979 Mustang - Accepted</p>
                <p> <strong>Time Slot:</strong> 10 Am - 5 PM March 13 2016;  11 Am - 6 PM May 12 </p>

                <p>
                  <Button id="b1" bsStyle="danger" onClick={hello}>Cancel</Button>
                </p>
              </Thumbnail>

              <Thumbnail id="t1">
              <h3>From : User2</h3>
              <p> <strong>Subject:</strong> Notification : request for a 1979 Mustang - Accepted</p>
              <p> <strong>Time Slot:</strong> 10 Am - 5 PM March 13 2016;  11 Am - 6 PM May 12 </p>
                <p>
                  <Button bsStyle="danger">Cancel</Button>
                </p>
              </Thumbnail>

              <Thumbnail id="t1">
              <h3>From : User2</h3>
              <p> <strong>Subject:</strong> Notification : request for a 1979 Mustang - Accepted</p>
              <p> <strong>Time Slot:</strong> 10 Am - 5 PM March 13 2016;  11 Am - 6 PM May 12 </p>
                <p>
                  <Button bsStyle="danger">Cancel</Button>
                </p>
              </Thumbnail>

              </Tab>

              <Tab eventKey={2} title="Reviews">

            <Thumbnail>

            <p>Lorem ipsum dolor sit amet, justo metus vitae cursus fringilla, adipiscing sed, faucibus justo sollicitudin, lobortis pede distinctio eget nunc euismod, tincidunt maecenas nibh cras ligula sed. Accumsan ipsum fusce, ut orci, fermentum velit esse tempus, proin mauris aliquam donec eros, lectus ut. Dis at in, massa ac tincidunt, pulvinar mauris ultricies. At sed orci justo aliquet, dui quam quis vitae tempor leo, eleifend qui fermentum duis etiam vehicula. Elit id, nullam placerat amet justo, morbi ipsum orci massa arcu, eget at vel libero. Sagittis nec interdum, eros pede, non mauris tristique dui id sed interdum. Augue dapibus at fusce, ac ut in per, unde sed. Varius tempor</p>
            <h5>From : User2</h5>

            </Thumbnail>

            <Thumbnail>

              <p>Lorem ipsum dolor sit amet, justo metus vitae cursus fringilla, adipiscing sed, faucibus justo sollicitudin, lobortis pede distinctio eget nunc euismod, tincidunt maecenas nibh cras ligula sed. Accumsan ipsum fusce, ut orci, fermentum velit esse tempus, proin mauris aliquam donec eros, lectus ut. Dis at in, massa ac tincidunt, pulvinar mauris ultricies. At sed orci justo aliquet, dui quam quis vitae tempor leo, eleifend qui fermentum duis etiam vehicula. Elit id, nullam placerat amet justo, morbi ipsum orci massa arcu, eget at vel libero. Sagittis nec interdum, eros pede, non mauris tristique dui id sed interdum. Augue dapibus at fusce, ac ut in per, unde sed. Varius tempor</p>
              <h4>From : User2</h4>

            </Thumbnail>

            <Thumbnail>
            <p>Lorem ipsum dolor sit amet, justo metus vitae cursus fringilla, adipiscing sed, faucibus justo sollicitudin, lobortis pede distinctio eget nunc euismod, tincidunt maecenas nibh cras ligula sed. Accumsan ipsum fusce, ut orci, fermentum velit esse tempus, proin mauris aliquam donec eros, lectus ut. Dis at in, massa ac tincidunt, pulvinar mauris ultricies. At sed orci justo aliquet, dui quam quis vitae tempor leo, eleifend qui fermentum duis etiam vehicula. Elit id, nullam placerat amet justo, morbi ipsum orci massa arcu, eget at vel libero. Sagittis nec interdum, eros pede, non mauris tristique dui id sed interdum. Augue dapibus at fusce, ac ut in per, unde sed. Varius tempor</p>
            <h5>From : User2</h5>
            </Thumbnail>

            <Thumbnail>
              <p>Lorem ipsum dolor sit amet, justo metus vitae cursus fringilla, adipiscing sed, faucibus justo sollicitudin, lobortis pede distinctio eget nunc euismod, tincidunt maecenas nibh cras ligula sed. Accumsan ipsum fusce, ut orci, fermentum velit esse tempus, proin mauris aliquam donec eros, lectus ut. Dis at in, massa ac tincidunt, pulvinar mauris ultricies. At sed orci justo aliquet, dui quam quis vitae tempor leo, eleifend qui fermentum duis etiam vehicula. Elit id, nullam placerat amet justo, morbi ipsum orci massa arcu, eget at vel libero. Sagittis nec interdum, eros pede, non mauris tristique dui id sed interdum. Augue dapibus at fusce, ac ut in per, unde sed. Varius tempor</p>
              <h5>From : User2</h5>
            </Thumbnail>
              </Tab>

              <Tab eventKey={3} title="Update Profile"><UserProfileForm /></Tab>
            </Tabs>
            </div>

            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
