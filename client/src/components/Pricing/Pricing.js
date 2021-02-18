import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { WashPackages } from '../WashPackageJSON/WashPackages';
// import { CleaningPackages } from '../WashPackageJSON/CleaningPackages';
import { PolishPackages } from '../WashPackageJSON/PolishPackages';

import './Pricing.css';
import Packagecard from '../Packagecard/Packagecard';

export default function Pricing() {
	return (
		<div className="Pricing-Full-Container">
			<MDBContainer>
				<section className="Pricing Pricing-Section " id="pricing">
					<h2 className="Pricing-Section-Title">Wash & Cleaning Packages</h2>
					<div className="PackageCard-Holder">
						<MDBRow>
							{WashPackages.map((item, index) => {
								return (
									<MDBCol xl="4" className="pb-4 ">
										<Packagecard
											image={item.tNailSRC}
											packageCat={item.packageCat}
											packageName={item.packageName}
											packageDetailTitle={item.packageDetailTitle}
											packageDetailBullets={item.packageDetailBullets}
											// packagePriceTitle={item.packagePriceTitle}
											// packagePriceArr={item.packagePriceArr}
											packageEstimatedTimeTitle={item.packageEstimatedTimeTitle}
											packageEstimatedTimeArr={item.packageEstimatedTimeArr}
											PackageDetailParagraph={item.PackageDetailParagraph}
										/>
									</MDBCol>
								);
							})}
						</MDBRow>
						<MDBRow>
							{PolishPackages.map((item, index) => {
								return (
									<MDBCol xl="4" className="pb-4">
										<Packagecard
											image={item.tNailSRC}
											packageCat={item.packageCat}
											packageName={item.packageName}
											packageDetailTitle={item.packageDetailTitle}
											packageDetailBullets={item.packageDetailBullets}
											// packagePriceTitle={item.packagePriceTitle}
											// packagePriceArr={item.packagePriceArr}
											packageEstimatedTimeTitle={item.packageEstimatedTimeTitle}
											packageEstimatedTimeArr={item.packageEstimatedTimeArr}
											PackageDetailParagraph={item.PackageDetailParagraph}
										/>
									</MDBCol>
								);
							})}
						</MDBRow>
						{/* <MDBRow>
							{CleaningPackages.map((item, index) => {
								return (
									<MDBCol xl="4" className="pb-4">
										<Packagecard
											image={item.tNailSRC}
											packageCat={item.packageCat}
											packageName={item.packageName}
											packageDetailTitle={item.packageDetailTitle}
											packageDetailBullets={item.packageDetailBullets}
											// packagePriceTitle={item.packagePriceTitle}
											// packagePriceArr={item.packagePriceArr}
											packageEstimatedTimeTitle={item.packageEstimatedTimeTitle}
											packageEstimatedTimeArr={item.packageEstimatedTimeArr}
											PackageDetailParagraph={item.PackageDetailParagraph}
										/>
									</MDBCol>
								);
							})}
						</MDBRow> */}
					</div>
				</section>
			</MDBContainer>
		</div>
	);
}