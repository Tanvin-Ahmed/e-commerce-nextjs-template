import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Link href="/">
					<a>
						<Navbar.Brand href="/">Daraz</Navbar.Brand>
					</a>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Link href="/product">
							<a>
								<Nav.Link href="/product">Products</Nav.Link>
							</a>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
