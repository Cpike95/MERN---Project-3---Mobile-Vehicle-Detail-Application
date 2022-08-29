import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import './BookServiceModal.css';
import BookingServiceForm from '../BookingServiceForm/BookingServiceForm';
import BookingServiceAlert from '../BookingServiceAlert/BookingServiceAlert';

class BookServiceModal extends Component {
	state = {
		modal1: false,
		modal2: false,
	};

	toggle = (nr) => () => {
		let modalNumber = 'modal' + nr;
		this.setState({
			[modalNumber]: !this.state[modalNumber],
		});
	};

	render() {
		return (
			<MDBContainer>
				{/* <MDBBtn outline color="danger" onClick={this.toggle(1)}>
					Book Package
				</MDBBtn> */}
				<MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="xl">
					<MDBModalHeader toggle={this.toggle(1)}>Book Package: {this.props.packageName}</MDBModalHeader>
					<MDBModalBody>
						<BookingServiceForm serviceRequested={this.props.packageName} handleModalChange={this.toggle(1)} handleModalChange2={this.toggle(2)} />
					</MDBModalBody>
				</MDBModal>
				{/* Second Modal */}

				<MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="xl">
					<BookingServiceAlert />
				</MDBModal>
			</MDBContainer>
		);
	}
}

export default BookServiceModal;
