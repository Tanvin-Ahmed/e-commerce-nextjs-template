import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import productsData from "../../utils/ProductsData.json";

const Product = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(productsData);
	}, []);

	return (
		<Container>
			<h1>Product List</h1>
			<Row>
				{products.map(product => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<ProductCard product={product} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Product;
