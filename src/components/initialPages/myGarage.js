import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import {Modal,Tabs, Tab, Thumbnail, Button, Glyphicon, Image,Row, Col,Grid, Input, ButtonInput, ButtonGroup} from 'react-bootstrap';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import MediaQuery from 'react-responsive';
import GarageCar from './GarageCar';

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


  const plusBtnStyle = {
    marginRight: 20,
    paddingLeft: '50%'
  };

  const plusBtnStyle2 = {
    marginRight: 20,
    paddingLeft: '40%'
  };

let close = () => this.setState({ showModal: false});

    return (
      <DocumentTitle title={`Garage`}>

      <div className="container">

        <Grid>
          <Row>
            <Col xs={5}>
              <h3>My Garage</h3>
            </Col>
            <MediaQuery query='(min-width: 450px)'>
              <Col xs={6} style={plusBtnStyle}>
                <FloatingActionButton secondary={true}
                  onMouseDown={this.addCar.bind(this)}
                  backgroundColor='#00ccff'>
                  <ContentAdd />
                </FloatingActionButton>
              </Col>
            </MediaQuery>

            <MediaQuery query='(max-width: 450px)'>
              <Col xs={6} style={plusBtnStyle2}>
                <FloatingActionButton
                  secondary={true}
                  onMouseDown={this.addCar.bind(this)}
                  backgroundColor='#00ccff'>
                  <ContentAdd />
                </FloatingActionButton>
              </Col>
            </MediaQuery>
          </Row>
        </Grid>
        <hr />

        <GarageCar />
        <GarageCar />
        <GarageCar />

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
