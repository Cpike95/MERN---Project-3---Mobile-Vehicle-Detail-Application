import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './Packagecard.css';
import CollapseDropdown from '../CollapseDropdown/CollapseDropdown';
import BookServiceModal from '../BookServiceModal/BookServiceModal';

const Packagecard = (props) => {
	console.log(`PROPS`, props)
	return (
		<MDBCol>
			<MDBCard className="mx-auto" style={{ width: '20rem' }}>
				<MDBCardImage className="img-fluid" src={props.image} waves />
				<MDBCardBody>
					<MDBCardTitle>{props.packageName}</MDBCardTitle>
					<MDBCardText>{props.PackageDetailParagraph}</MDBCardText>
					<CollapseDropdown
						packageDetailBullets={props.packageDetailBullets}
						packageDetailTitle={props.packageDetailTitle}
						packageBonusTitle={props.packageBonusTitle}
						packageBonusArr={props.packageBonusArr}
						packageEstimatedTimeTitle={props.packageEstimatedTimeTitle}
						packageEstimatedTimeArr={props.packageEstimatedTimeArr}
					/>

					<BookServiceModal packageName={props.packageName} />
				</MDBCardBody>
			</MDBCard>
		</MDBCol>
	);
};

export default Packagecard;
