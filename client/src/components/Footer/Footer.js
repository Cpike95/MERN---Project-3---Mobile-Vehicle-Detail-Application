import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import './Footer.css';
import ModalPage from '../Modal/Modal';

export default function Footer({ authorize, setAuthorize }) {
	return (

		<MDBFooter color="elegant-color-dark" className="page-footer font-small pt-4  ">

			<MDBContainer>
				<MDBContainer fluid className="text-center text-md-left ">
					<MDBRow>
						<MDBCol md="6">
							<h5 className="title">Gera's Automotive Detailing Service Est. 2020</h5>
							<p>Comitted to giving our customers a quality service they wil never forget.</p>
						</MDBCol>
						<MDBCol md="6">
							<ul className="Footer-UL-Style">
								{/* Admin login page link */}
								<ModalPage setAuthorize={setAuthorize} authorize={authorize}>
								</ModalPage>
								

							</ul>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright: <p> Gera's Automotive Detailing Service</p>

				</MDBContainer>
			</div>
		</MDBFooter>
	);
}
