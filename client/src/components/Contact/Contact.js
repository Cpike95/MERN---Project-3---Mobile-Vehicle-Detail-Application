import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import "./Contact.css";

export default class Contact extends Component {
  state = {
    email: {
      name: "",
      sender: "",
      phone: "",
      vehicle: "",
      subject: "",
      text: "",
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    fetch(
      `http://www.gerasdetailing.com/api/mail/send/?sender=${email.sender}&vehicle=${email.vehicle}&topic=${email.subject}&phone=${email.phone}&text=${email.text}&name=${email.name}`
    ).catch((err) => console.error(err));
    this.setState({
      email: {
        name: "",
        sender: "",
        phone: "",
        vehicle: "",
        subject: "",
        text: "",
      },
    });
  };
  render() {
    const { email } = this.state;
    return (
      <div className="Contact-Full-Container ">
        <MDBContainer>
          <div className="Contact-Title Contact-Section " id="contact">
            <MDBContainer>
              <MDBRow className="d-flex justify-content-center">
                <MDBCol md="6">
                  <MDBCard>
                    <MDBCardBody>
                      <form onSubmit={this.handleSubmit.bind(this)}>
                        <p className="h4 text-center py-4">Contact</p>
                        <MDBInput
                          value={email.name}
                          onChange={(e) =>
                            this.setState({
                              email: { ...email, name: e.target.value },
                            })
                          }
                          label="Full Name"
                          outline
                        />
                        <MDBInput
                          value={email.sender}
                          onChange={(e) =>
                            this.setState({
                              email: { ...email, sender: e.target.value },
                            })
                          }
                          label="Email"
                          outline
                        />
                        <MDBInput
                          value={email.phone}
                          onChange={(e) =>
                            this.setState({
                              email: { ...email, phone: e.target.value },
                            })
                          }
                          label="Phone Number"
                          outline
                        />
                        <MDBInput
                          value={email.vehicle}
                          onChange={(e) =>
                            this.setState({
                              email: { ...email, vehicle: e.target.value },
                            })
                          }
                          label="Vehicle Make/Model"
                          outline
                        />
                        <MDBInput
                          value={email.subject}
                          onChange={(e) =>
                            this.setState({
                              email: { ...email, subject: e.target.value },
                            })
                          }
                          label="Subject"
                          outline
                        />
                        <MDBInput
                          value={email.text}
                          onChange={(e) =>
                            this.setState({
                              email: { ...email, text: e.target.value },
                            })
                          }
                          type="textarea"
                          label="Write Message Here"
                          outline
                        />

                        <div className="text-center py-4 mt-3">
                          <MDBBtn
                            className="btn btn-outline-purple"
                            type="submit"
                          >
                            Send
                            <MDBIcon far icon="paper-plane" className="ml-2" />
                          </MDBBtn>
                        </div>
                      </form>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </MDBContainer>
      </div>
    );
  }
}
