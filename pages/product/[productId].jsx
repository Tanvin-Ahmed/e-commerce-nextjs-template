import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import productsData from "../../utils/ProductsData.json";
import Link from "next/link";
import {
	Button,
	Card,
	Col,
	Container,
	FormControl,
	Image,
	ListGroup,
	Row,
} from "react-bootstrap";

const ProductDetails = () => {
	const router = useRouter();
	const id = router.query.productId;
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [qty, setQty] = useState(0);

	useEffect(() => {
		setError("");
		setLoading(true);
		const product = productsData.find(product => product._id === id);
		setProduct(product);
		setError("");
		setLoading(false);
	}, [id]);

	return (
		<Container>
			<br />
			<Link className="btn btn-primary pt-3" href="/">
				<a>Go Back</a>
			</Link>
			<br />
			{loading ? (
				<Loader />
			) : error ? (
				<Message>{error}</Message>
			) : (
				<>
					<Row>
						<Col md={6}>
							<Image src={product?.image} alt={product?.name} fluid="true" />
						</Col>
						<Col md={3}>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<h3>{product?.name}</h3>
								</ListGroup.Item>
								<ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
								<ListGroup.Item>
									Description: {product?.description}
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={3}>
							<Card>
								<ListGroup variant="flush">
									<ListGroup.Item>
										<Row>
											<Col>Price: </Col>
											<Col>
												<strong>{product?.price}</strong>
											</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										<Row>
											<Col>Status: </Col>
											<Col>
												{product?.countInStock > 0
													? "In stack"
													: "Out of Stack"}
											</Col>
										</Row>
									</ListGroup.Item>
									{product?.countInStock > 0 ? (
										<ListGroup.Item>
											<Row>
												<Col>Qty</Col>
												<Col>
													<FormControl
														as="select"
														value={qty}
														onChange={e => setQty(e.target.value)}
													>
														{[...Array(product.countInStock).keys()].map(x => (
															<option key={x} value={x + 1}>
																{x + 1}
															</option>
														))}
													</FormControl>
												</Col>
											</Row>
										</ListGroup.Item>
									) : null}
									<ListGroup.Item>
										<Button
											className="btn-block col-12"
											type="button"
											disabled={product?.countInStock === 0}
										>
											Add To Cart
										</Button>
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					</Row>
				</>
			)}
		</Container>
	);
};

export default ProductDetails;
