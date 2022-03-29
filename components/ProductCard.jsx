import React from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";

const h3 = { padding: "1rem 0" };

const ProductComponent = ({ product }) => {
	return (
		<Card className="my-3 p-3 rounded">
			<Link href={`/product/${product._id}`}>
				<a>
					<Card.Img src={product.image} variant="top" />
				</a>
			</Link>
			<Card.Body>
				<Link href={`/product/${product._id}`}>
					<a>
						<Card.Title as="div">
							<strong>{product.name}</strong>
						</Card.Title>
					</a>
				</Link>
				<Card.Text as="h3" style={h3}>
					${product.price}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ProductComponent;
