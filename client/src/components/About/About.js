import React from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdbreact';
import './About.css';

export default function About() {
	return (
		<div className="About-Full-Container" id="about">
			<MDBContainer className="mt-5 text-center">
				<MDBRow>
					<MDBCol>
						<MDBJumbotron>
							<MDBCardBody>
								<MDBCardTitle className="h2">About us</MDBCardTitle>
								<img src="/Assets/Images/FinalLogo1.png" alt="Logo" className="LogoImage-About" />
								<p className="blue-text my-4 font-weight-bold">Family owned and operrated. EST 2020</p>
								<MDBCardText>
								Gera’s Automotive Detailing was first established in early 2020 by Owners/Operators Gerardo Yanez & Stephanie Janet Ibarria. 
								Gerardo had the privilege of learning the craft from his best friend, Victor Gutierrez, in 2010. Naturally, what was a hobby would soon come to unfold as the business you see today as his passion for cars compliments his craft for detailing. 
								Their mission at Gera’s Auto Detailing is to educate customers on what the proper tools, and techniques are used to protect your vehicles. 
								They do everything to ensure you will be beyond satisfied with the results, as they treat each and every vehicle as if it were their own. Book your appointment today!
								</MDBCardText>
							</MDBCardBody>
						</MDBJumbotron>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
}
