import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbarmenu.css';

class NavbarPage extends Component {
	state = {
		isOpen: false,
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<Router>
				<MDBNavbar color="elegant-color-dark" dark expand="md" className="sticky-top" id="top">
					<MDBContainer>
						<MDBNavbarBrand>
							<strong className="white-text">Gera's Automotive Detailing</strong>
						</MDBNavbarBrand>
						<MDBNavbarToggler onClick={this.toggleCollapse} />
						<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
							<MDBNavbarNav right>
								<MDBNavItem>
									<MDBNavLink to="/">
										<Link smooth to="/path#home" id="HashLinkComponent">
											Home
										</Link>
									</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBNavLink to="/">
										<Link smooth to="/path#pricing" id="HashLinkComponent">
											Packages
										</Link>
									</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBNavLink to="/">
										<Link smooth to="/path#about" id="HashLinkComponent">
											About
										</Link>
									</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBNavLink to="/">
										<Link smooth to="/path#gallery" id="HashLinkComponent">
											Gallery
										</Link>
									</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBNavLink to="/">
										<Link smooth to="/path#contact" id="HashLinkComponent">
											Contact
										</Link>
									</MDBNavLink>
								</MDBNavItem>
							</MDBNavbarNav>
						</MDBCollapse>
					</MDBContainer>
				</MDBNavbar>
			</Router>
		);
	}
}

export default NavbarPage;
