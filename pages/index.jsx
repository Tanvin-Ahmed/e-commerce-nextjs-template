import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCarousel from "../components/ProductCarousel";
import Product from "./product/index";

const Home = () => {
	return (
		<>
			<Header />
			<br />
			<Container>
				<ProductCarousel />
				<br />
				<Product />
			</Container>
			<Footer />
		</>
	);
};

export default Home;
