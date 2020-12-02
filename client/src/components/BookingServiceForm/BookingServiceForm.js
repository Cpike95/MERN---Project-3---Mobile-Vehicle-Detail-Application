import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import API from '../../utils/API';

class BookingServiceForm extends React.Component {
	state = {
		name: '',
		phone: '',
		email: '',
		address1: '',
		address2: '',
		city: '',
		state: '',
		zip: '',
		makemodel: '',
		notes: '',
		carlocation: '',
		servicerequested: this.props.serviceRequested,
		datereq: '',
		timereq: '',
		iscompleted: false,
	};

	canBeSubmitted() {
		const { name, phone, email, address1, city, state, zip, makemodel, carlocation, datereq, timereq } = this.state;
		return name.length > 0 && phone.length > 0 && email.length > 0 && address1.length > 0 && city.length > 0 && state.length > 0 && zip.length > 0 && makemodel.length > 0 && carlocation.length > 0 && datereq.length > 0 && timereq.length > 0;
	}

	submitHandler = (event) => {
		event.preventDefault();
		event.target.className += ' was-validated';
		API.saveQuote(this.state)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));


    this.props.handleModalChange(); //* closes the modal once submitted.
    this.props.handleModalChange2(); //* should open the second modal success once submitted
    this.sendMail();
    this.sendClientMail();
  };
  sendMail = async (e) => {
    const email = this.state;
    fetch(
      `http://www.gerasdetailing.com/api/mail/book/?email=${email.email}&name=${email.name}&phone=${email.phone}&address1=${email.address1}&address2=${email.address2}&city=${email.city}&state=${email.state}&zip=${email.zip}&makemodel=${email.makemodel}&notes=${email.notes}&carlocation=${email.carlocation}&datereq=${email.datereq}&timereq=${email.timereq}`
    ) //query string url
      .catch((err) => console.error(err));
  };
  sendClientMail = async (e) => {
    const email = this.state;
    fetch(
      `http://www.gerasdetailing.com/api/mail/client/?email=${email.email}&name=${email.name}`
    ) //query string url
      .catch((err) => console.error(err));
  };
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

	render() {
		const isEnabled = this.canBeSubmitted();
		console.log(this.props);
		return (
			<div>
				<form className="needs-validation" onSubmit={this.submitHandler} noValidate>
					<MDBRow>
						<MDBCol md="4" className=" text-left mb-3">
							<label htmlFor="nameInput" className="grey-text">
								Full Name
							</label>
							<input value={this.state.name} name="name" onChange={this.changeHandler} type="text" id="nameInput" className="form-control" placeholder="Full Name" required />
							<div className="valid-feedback">Looks good!</div>
						</MDBCol>
						<MDBCol md="4" className="text-left  mb-3">
							<label htmlFor="phoneInput" className="grey-text">
								Phone Number
							</label>
							<input value={this.state.phone} name="phone" onChange={this.changeHandler} type="tel" id="phoneInput" className="form-control" placeholder="Phone Number ex: 123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
							<div className="valid-feedback">Looks good!</div>
						</MDBCol>
						<MDBCol md="4" className="text-left  mb-3">
							<label htmlFor="emailInput" className="grey-text">
								Email
							</label>
							<input value={this.state.email} onChange={this.changeHandler} type="email" id="emailInput" className="form-control" name="email" placeholder="Your Email Address" required />
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className=" text-left mb-3">
							<label htmlFor="dateRequestedInput" className="grey-text">
								Requested Date of Service
							</label>
							<input value={this.state.datereq} name="datereq" onChange={this.changeHandler} type="date" id="dateRequestedInput" className="form-control" required />
							<div className="valid-feedback">Looks good!</div>
						</MDBCol>
						<MDBCol md="4" className="text-left  mb-3">
							<label htmlFor="timeRequestedInput" className="grey-text">
								Requested Time of Service
							</label>
							<input value={this.state.timereq} name="timereq" onChange={this.changeHandler} type="time" id="timeRequestedInput" className="form-control" required />
							<div className="valid-feedback">Looks good!</div>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="8" className="text-left  mb-3">
							<label htmlFor="address1Input" className="grey-text">
								Address
							</label>
							<input value={this.state.address1} onChange={this.changeHandler} type="text" id="address1Input" className="form-control" name="address1" placeholder="Street Address" required />
							<div className="invalid-feedback">Please provide a valid Street Address.</div>
							<div className="valid-feedback">Looks good!</div>
						</MDBCol>
						<MDBCol md="4" className="text-left  mb-3">
							<label htmlFor="address2Input" className="grey-text">
								Apt #
							</label>
							<input value={this.state.address2} onChange={this.changeHandler} type="text" id="address2Input" className="form-control" name="address1" placeholder="Apt# (Optional)" />
							<div className="valid-feedback">Looks good!</div>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="text-left  mb-3">
							<label htmlFor="cityInput" className="grey-text">
								City
							</label>
							<input value={this.state.city} onChange={this.changeHandler} type="text" id="cityInput" className="form-control" name="city" placeholder="City" required />
							<div className="invalid-feedback">Please provide a valid city.</div>
							<div className="valid-feedback">Looks good!</div>
						</MDBCol>
						<MDBCol md="4" className="text-left  mb-3">
							<label htmlFor="stateInput" className="grey-text">
								State
							</label>
							<input value={this.state.state} onChange={this.changeHandler} type="text" id="stateInput" className="form-control" name="state" placeholder="State" required />
							<div className="invalid-feedback">Please provide a valid state.</div>
							<div className="valid-feedback">Looks good!</div>
						</MDBCol>
						<MDBCol md="4" className="text-left  mb-3">
							<label htmlFor="zipInput" className="grey-text">
								Zip
							</label>
							<input value={this.state.zip} onChange={this.changeHandler} type="text" id="zipInput" className="form-control" name="zip" placeholder="Zip" required />
							<div className="invalid-feedback">Please provide a valid zip.</div>
							<div className="valid-feedback">Looks good!</div>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="text-left  mb-3">
							<label htmlFor="makeModelInput" className="grey-text">
								Vehicle Make/Model
							</label>
							<input value={this.state.makemodel} onChange={this.changeHandler} type="text" id="makeModelInput" className="form-control" name="makemodel" placeholder="Make/Model" required />
							<div className="invalid-feedback">Please provide the vehicle make and model</div>
							<div className="valid-feedback">Looks good!</div>
						</MDBCol>
						<MDBCol md="8" className="text-left  mb-3">
							<label htmlFor="carLocationInput" className="grey-text">
								Vehicle Location
							</label>
							<input value={this.state.carlocation} onChange={this.changeHandler} type="text" id="carLocationInput" className="form-control" name="carlocation" placeholder="Where is the vehicle located at the address" required />
							<div className="invalid-feedback">Please provide a vehicle location note</div>
							<div className="valid-feedback">Looks good!</div>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12" className="text-left  mb-3">
							<label htmlFor="additionalNotes" className="grey-text">
								Additional Notes
							</label>
							<input value={this.state.notes} onChange={this.changeHandler} type="text" id="additionalNotes" className="form-control" name="notes" placeholder="Additional Notes About The Vehicle. Such as: Vehicle condition, things to be aware of..." required />

							<div className="valid-feedback">Looks good!</div>
						</MDBCol>
					</MDBRow>

					<MDBBtn color="primary" type="submit" disabled={!isEnabled}>
						Request Service Quote
					</MDBBtn>
				</form>
			</div>
		);
	}
}

export default BookingServiceForm;
