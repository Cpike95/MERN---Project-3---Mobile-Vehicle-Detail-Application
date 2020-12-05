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
				<MDBCarousel activeItem={1} length={6} showControls={true} showIndicators={false} className="z-depth-1" slide>
					<MDBCarouselInner>
						<MDBCarouselItem itemId="1">
								<MDBView>
									<img className="d-block w-100" src="./Assets/Images/socialmedia5.jpg" alt="First slide" />
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId="2">
							<MDBView>
								<img className="d-block w-100" src="./Assets/Images/socialmedia7.JPG" alt="Second slide" />
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId="3">
							<MDBView>
								<img className="d-block w-100" src="./Assets/Images/socialmedia4.JPG" alt="Third slide" />
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId="4">
							<MDBView>
								<img className="d-block w-100" src="./Assets/Images/socialmedia8.JPG" alt="Fourth slide" />
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId="5">
							<MDBView>
								<img className="d-block w-100" src="./Assets/Images/socialmedia3.JPG" alt="Fifth slide" />
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId="6">
							<MDBView>
								<img className="d-block w-100" src="./Assets/Images/socialmedia1.JPG" alt="Sixth slide" />
							</MDBView>
						</MDBCarouselItem>
					</MDBCarouselInner>
				</MDBCarousel>
			</MDBContainer>
		</div>
	);
}
