import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import {Tabs, Tab, Thumbnail, Button, Glyphicon, Image, Col} from 'react-bootstrap';

export default class ProfilePage extends React.Component {

  render() {

    function hello()
    {

      document.getElementById("t2").remove();

    }
    var buttonStyle =
    {
      width: '100px',
      height: '40px',
      background:'#bbb',
      color: '#999'
    };

    var picStyle =
    {
      width: '300px',
      height: '300px',
      align: 'left'
    };

    var textStyle =
    {
      align:'right'
    };

    var tnailStyle=
    {
      width: '85%',
      marginLeft: '7%'
    };

    var padStyle=
    {
      paddingTop:'15px',
      marginRight: '10%'
    };

    var btn =
      {
        width: '50px',
        height: '50px',
        textAlign: 'center',
        padding: '10px 16px',
        fontSize: '18px',
        lineHeight: '1.33',
        borderRadius: '35px',
      };

    var btnlg=
    {
      width: '70px',
      height: '70px',
      padding: '10px 16px',
      fontSize: '24px',
      lineHeight: '1.33',
      borderRadius: '35px',
      marginLeft: '85%',
    };


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
              <div style={padStyle}></div>

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

              </Tab>

              <Tab eventKey={2} title="Reviews">
              <div style={padStyle}></div>

            <Thumbnail style={tnailStyle}>

            <p>Lorem ipsum dolor sit amet, justo metus vitae cursus fringilla, adipiscing sed, faucibus justo sollicitudin, lobortis pede distinctio eget nunc euismod, tincidunt maecenas nibh cras ligula sed. Accumsan ipsum fusce, ut orci, fermentum velit esse tempus, proin mauris aliquam donec eros, lectus ut. Dis at in, massa ac tincidunt, pulvinar mauris ultricies. At sed orci justo aliquet, dui quam quis vitae tempor leo, eleifend qui fermentum duis etiam vehicula. Elit id, nullam placerat amet justo, morbi ipsum orci massa arcu, eget at vel libero. Sagittis nec interdum, eros pede, non mauris tristique dui id sed interdum. Augue dapibus at fusce, ac ut in per, unde sed. Varius tempor</p>
            <h5>From : User2</h5>

            </Thumbnail>

            <Thumbnail style={tnailStyle}>

              <p>Lorem ipsum dolor sit amet, justo metus vitae cursus fringilla, adipiscing sed, faucibus justo sollicitudin, lobortis pede distinctio eget nunc euismod, tincidunt maecenas nibh cras ligula sed. Accumsan ipsum fusce, ut orci, fermentum velit esse tempus, proin mauris aliquam donec eros, lectus ut. Dis at in, massa ac tincidunt, pulvinar mauris ultricies. At sed orci justo aliquet, dui quam quis vitae tempor leo, eleifend qui fermentum duis etiam vehicula. Elit id, nullam placerat amet justo, morbi ipsum orci massa arcu, eget at vel libero. Sagittis nec interdum, eros pede, non mauris tristique dui id sed interdum. Augue dapibus at fusce, ac ut in per, unde sed. Varius tempor</p>
              <h4>From : User2</h4>

            </Thumbnail>

            <Thumbnail style={tnailStyle}>
            <p>Lorem ipsum dolor sit amet, justo metus vitae cursus fringilla, adipiscing sed, faucibus justo sollicitudin, lobortis pede distinctio eget nunc euismod, tincidunt maecenas nibh cras ligula sed. Accumsan ipsum fusce, ut orci, fermentum velit esse tempus, proin mauris aliquam donec eros, lectus ut. Dis at in, massa ac tincidunt, pulvinar mauris ultricies. At sed orci justo aliquet, dui quam quis vitae tempor leo, eleifend qui fermentum duis etiam vehicula. Elit id, nullam placerat amet justo, morbi ipsum orci massa arcu, eget at vel libero. Sagittis nec interdum, eros pede, non mauris tristique dui id sed interdum. Augue dapibus at fusce, ac ut in per, unde sed. Varius tempor</p>
            <h5>From : User2</h5>
            </Thumbnail>

            <Thumbnail style={tnailStyle}>
              <p>Lorem ipsum dolor sit amet, justo metus vitae cursus fringilla, adipiscing sed, faucibus justo sollicitudin, lobortis pede distinctio eget nunc euismod, tincidunt maecenas nibh cras ligula sed. Accumsan ipsum fusce, ut orci, fermentum velit esse tempus, proin mauris aliquam donec eros, lectus ut. Dis at in, massa ac tincidunt, pulvinar mauris ultricies. At sed orci justo aliquet, dui quam quis vitae tempor leo, eleifend qui fermentum duis etiam vehicula. Elit id, nullam placerat amet justo, morbi ipsum orci massa arcu, eget at vel libero. Sagittis nec interdum, eros pede, non mauris tristique dui id sed interdum. Augue dapibus at fusce, ac ut in per, unde sed. Varius tempor</p>
              <h5>From : User2</h5>
            </Thumbnail>

              </Tab>

              <Tab eventKey={3} title="My Garage">

              <div style={padStyle}></div>

              <div>
                <Button bsSize="large" bsStyle="info" style={btnlg} align="right" ><Glyphicon glyph="plus"/></Button>
              </div>

              <div style={padStyle}></div>

              <div className="container-fluid">
              <Thumbnail style={tnailStyle}>

              <div className="container-fluid">
              <Col xs={12} sm={12} md={6} lg={6}>
              <Image className="img-responsive" src="http://blog.caranddriver.com/wp-content/uploads/2015/03/2017-Ford-GT-301-876x535.jpg" style={picStyle}/>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <h3>Ferrari 458 Italia (2009)</h3>
                <p style={textStyle} >Manual</p>
                <p>Price: 60$/hr</p>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <p>
                  <Button bsStyle="primary"><Glyphicon glyph="eye-open"/> View</Button>
                  <Button bsStyle="warning"><Glyphicon glyph="edit"/> Edit</Button>
                  <Button bsStyle="danger"><Glyphicon glyph="remove"/> Remove</Button>

                </p>
              </Col>
              </div>

              </Thumbnail>
              </div>



              <div className="container-fluid">
              <Thumbnail style={tnailStyle}>

              <div className="container-fluid">
              <Col xs={12} sm={12} md={6} lg={6}>
              <Image className="img-responsive" src="http://blog.caranddriver.com/wp-content/uploads/2015/03/2017-Ford-GT-301-876x535.jpg" style={picStyle}/>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <h3>Ferrari 458 Italia (2009)</h3>
                <p style={textStyle}>Manual</p>
                <p>Price: 60$/hr</p>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <p>
                  <Button bsStyle="primary"><Glyphicon glyph="eye-open"/> View</Button>
                  <Button bsStyle="warning"><Glyphicon glyph="edit"/> Edit</Button>
                  <Button bsStyle="danger"><Glyphicon glyph="remove"/> Remove</Button>

                </p>
              </Col>
              </div>

              </Thumbnail>
              </div>



              <div className="container-fluid">
              <Thumbnail style={tnailStyle}>

              <div className="container-fluid">
              <Col xs={12} sm={12} md={6} lg={6}>
              <Image className="img-responsive" src="http://blog.caranddriver.com/wp-content/uploads/2015/03/2017-Ford-GT-301-876x535.jpg" style={picStyle}/>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <h3>Manual</h3>
                <p style={textStyle} >Ferrari 458 Italia (2009)</p>
                <p>Price: 60$/hr</p>
              </Col>

              <Col xs={12} sm={12} md={6} lg={6}>
                <p>
                  <Button bsStyle="primary"><Glyphicon glyph="eye-open"/> View</Button>
                  <Button bsStyle="warning"><Glyphicon glyph="edit"/> Edit</Button>
                  <Button bsStyle="danger"><Glyphicon glyph="remove"/> Remove</Button>

                </p>
              </Col>
              </div>

              </Thumbnail>
              </div>



              </Tab>

              <Tab eventKey={4} title="Update Profile"><div style={padStyle}></div><UserProfileForm /></Tab>
            </Tabs>
            </div>

            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
