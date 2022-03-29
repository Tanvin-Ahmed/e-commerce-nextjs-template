import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import productsData from "../utils/ProductsData.json";
import Loader from "./Loader";
import Message from "./Message";

const ProductCarousel = () => {
	const [popularProducts, setPopularProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	useEffect(() => {
		setLoading(true);
		setError("");
		setPopularProducts(productsData.slice(0, 3));
		setLoading(false);
		setError("");
	}, []);

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant="danger">{error}</Message>
	) : (
		<Carousel>
			{popularProducts.map(product => (
				<Carousel.Item key={product._id}>
					<Link href={`/product/${product._id}`}>
						<a>
							<Image src={product.image} fluid="true" alt={product.name} />
							<Carousel.Caption className="carousel-caption">
								<h2>
									{product.name} (${product.price})
								</h2>
							</Carousel.Caption>
						</a>
					</Link>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default ProductCarousel;
