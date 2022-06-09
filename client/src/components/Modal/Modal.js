import React, { Component } from 'react';
import { MDBContainer,  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Login from "../Login/Login.js"
class ModalPage extends Component {
state = {
  modal14: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
      <MDBContainer>
        {/* <p className=".z-depth-0" color="transparent" onClick={this.toggle(14)}>Access</p> */}
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Login</MDBModalHeader>
          <MDBModalBody>
            <Login setAuthorize={this.props.setAuthorize} authorize={this.props.authorize} toggle={this.toggle(14)} />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn className="heyy" color="red" onClick={this.toggle(14)}>Close</MDBBtn>

          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;