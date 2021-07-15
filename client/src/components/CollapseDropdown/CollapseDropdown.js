import React, { Component } from 'react';
import { MDBBtn, MDBCollapse } from 'mdbreact';
import './CollapseDropdown.css';

class CollapseDropdown extends Component {
	state = {
		collapseID: '',
	};
	toggleCollapse = (collapseID) => () => {
		this.setState((prevState) => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : '',
		}));
	};

	render() {
	console.log(this.props)

		return (
			<>
				<MDBBtn color="danger" onClick={this.toggleCollapse('basicCollapse')} style={{ marginBottom: '1rem' }}>
					More Details
				</MDBBtn>
				<MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
					<h4 className="Package-BulletPts-Title">{this.props.packageDetailTitle}</h4>
					<ul>
						{this.props.packageDetailBullets.map((item, index) => {
							return <li className="Package-BulletPts text-left">{item}</li>;
						})}
					</ul>

					<h4 className="Package-BulletPts-Title">{this.props.packageBonusTitle}</h4>
					<ul>
						{this.props.packageBonusArr ? this.props.packageBonusArr.map((item, index) => {
							return <li className="Package-BulletPts text-left">{item}</li>;
						}) : ''}
					</ul>

					<h4 className="Package-BulletPts-Title">{this.props.packageEstimatedTimeTitle}</h4>
					<ul>
						{this.props.packageEstimatedTimeArr.map((item, index) => {
							return <li className="Package-BulletPts text-left">{item}</li>;
						})}
					</ul>
					<h5 className="Disclaimer-Title">Deposit: </h5>
					<ul>
						<li className="Package-BulletPts text-left">There is a $20 dollar deposit that is due when appointment is confirmed. This will be added to the total after service is complete. CANCELLATIONS: If cancelled within 24 hours of the appointment scheduled time $20 deposit is non-refundable.</li>
					</ul>
					<h4 className="Disclaimer-Title">Disclaimer:</h4>
					<p className="Disclaimer-Note">Prices are subject to change depending on the condition of the vehicle and additional Fees will be applied for Pet Hair, Extra Dirty Vehicles, Mud and heavily soiled interiors. For an accurate quote please contact me via phone at (818)915-1828 or use the contact form at the bottom of the webpage. There is a $20 dollar cancellation fee if cancelled within 12 hours of appointment. </p>
				</MDBCollapse>
			</>
		);
	}
}

export default CollapseDropdown;
