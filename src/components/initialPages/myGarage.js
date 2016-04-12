import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import {Modal,Tabs, Tab, Thumbnail, Button, Glyphicon, Image, Col, Input, ButtonInput, ButtonGroup} from 'react-bootstrap';

export default class myGarage extends React.Component {

  constructor(props)
    {
      super(props);
      this.state =  {

        showModal: false

      };
    }

  addCar(event){

    this.setState({ showModal: true});
  }

  render() {

  var buttonStyle =
  {
    width: '100px',
    height: '40px',
    background:'#bbb',
    color: '#999'
  };

  var picStyle =
  {
    // width: '300px',
    minHeight: '150px',
     align: 'left'
  };

  var textStyle =
  {
    align:'right'
  };

  var tnailStyle=
  {
    width: '85%',
      marginLeft: '7%',
    align:'center'
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

    height: '70px',
    padding: '10px 16px',
    fontSize: '24px',
    lineHeight: '1.33',
    borderRadius: '35px',
    marginLeft: '85%'
  };
let close = () => this.setState({ showModal: false});

    return (
      <DocumentTitle title={`Garage`}>

      <div className="container">

          <div className="row">

              <div className="col-xs-12">
                <h3>My Garage</h3>
                  <hr />

                </div>

          </div>


          <div >
            <Button onClick={this.addCar.bind(this)} bsSize="large" bsStyle="info" style={btnlg} align="right" >Add <Glyphicon glyph="plus"/></Button>
          </div>

        <div className="container-fluid">

        <Thumbnail style={tnailStyle}>

        <div className="container-fluid">
        <Col xs={12} sm={12} md={6} lg={6}>
        <Image className="img-responsive" src="http://blog.caranddriver.com/wp-content/uploads/2015/03/2017-Ford-GT-301-876x535.jpg" style={picStyle}/>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <h3>Ferrari 458 Italia (2009)</h3>
          <p style={textStyle} >Ferrari 458 Italia </p>
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
          <p style={textStyle}>Ferrari 458 Italia </p>
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

        <Modal  show={this.state.showModal}
            onHide={close}  container={this}>
          <Modal.Header closeButton>
            <Modal.Title>Add new vehicle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
               <Input type="text" label="Name" placeholder="Title/Name of vehicle" />
              <Input type="textarea" label="Description" placeholder="" />
               <Input type="text" label="Price" addonBefore="$"  />
               <Input type="file" label="Photo"  />
                <ButtonGroup>

               <Button  bsStyle="primary" type="submit">Add</Button>
               <Button onClick={close}>Cancel</Button>
               </ButtonGroup>
             </form>

          </Modal.Body>

        </Modal>

        </div>

      </DocumentTitle>
    );
  }
}
