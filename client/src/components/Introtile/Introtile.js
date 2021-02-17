import React, { Fragment } from 'react';
import { MDBContainer, MDBBtn } from 'mdbreact';
import {  FaInstagram, FaLinkedin  } from "react-icons/fa";

import './Introtile.css';
{/* <a href="https://github.com/Cpike95"><FaGithub /></a> */}
export default function Introtile() {
	return (
		<div className="Introtile-Full-Container" id="home">
			<div className="Introtile-IMG-Container">
				<img src="./Assets/Images/IntroTileBKG72DPIlong2.jpg" alt="BkgImgVehicle" className="Introtile-CarBKG" />
			</div>
			<MDBContainer className="Introtile-MDB-Container text-left">
				<h2 className="Introtile-Headertext">Gera's Automotive Detailing</h2>
				<h6 className="Introtile-SubHeadertext">Interior and Exterior Automotive Detailing Specialists Serving the San Fernando Valley and Beyond</h6>

				<Fragment>
					<MDBBtn href="#pricing" id="Introtile-Book-BTN" className="text-left" color="danger-color-dark">
						View Detailing Packages
					</MDBBtn>
				</Fragment>
				<Fragment>
					<MDBBtn href="https://www.instagram.com/geras_automotive_detailing/" id="instagram" color="danger-color-dark" className="insta" >
						<FaInstagram/>
					</MDBBtn>
				</Fragment>
			</MDBContainer>
		</div>
	);
}
