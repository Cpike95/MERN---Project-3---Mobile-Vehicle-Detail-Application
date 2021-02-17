import React from 'react';
import {
	MDBContainer,
	// MDBRow,
	// MDBCol,
	// MDBCardTitle,
	// MDBCard,
	// MDBCardImage,
	// MDBCardBody,
	// MDBCardText,
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBView,
} from 'mdbreact';
import './Socialmedia.css';

export default function Socialmedia() {
	return (
		<div className="Socialmedia-Full-Container" id="gallery">
			<h2 className="Socialmedia-Section-Title">Image Gallery</h2>
			<MDBContainer>
				<MDBCarousel activeItem={1} length={8} showControls={true} showIndicators={false} className="z-depth-1" slide>
					<MDBCarouselInner>
						<MDBCarouselItem itemId="1">
							<MDBView>
								<img className="d-block w-100" src="./Assets/Images/socialmedia4.jpg" alt="First slide" />
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId="2">
							<MDBView>
								<img className="d-block w-100" src="./Assets/Images/socialmedia8.JPG" alt="Second slide" />
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId="3">
							<MDBView>
								<img className="d-block w-100" src="./Assets/Images/socialmedia3.JPG" alt="Third slide" />
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId="4">
							<MDBView>
								<img className="d-block w-100" src="./Assets/Images/socialmedia10.png" alt="Fourth slide" />
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId="5">
							<MDBView>
								<img className="d-block w-100" src="./Assets/Images/Socialmedia9.png" alt="Fourth slide" />
							</MDBView>
						</MDBCarouselItem>						
						<MDBCarouselItem itemId="6">
							<MDBView>
								<img className="d-block w-100" src="./Assets/Images/socialmedia12.png" alt="Fourth slide" />
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId="7">
							<MDBView>
								<img className="d-block w-100" src="./Assets/Images/socialmedia13.png" alt="Fourth slide" />
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId="8">
							<MDBView>
								<img className="d-block w-100" src="./Assets/Images/socialmedia15.png" alt="Fourth slide" />
							</MDBView>
						</MDBCarouselItem>
					</MDBCarouselInner>
				</MDBCarousel>
			</MDBContainer>
		</div>
	);
}
