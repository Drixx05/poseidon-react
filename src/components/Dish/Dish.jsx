import Card from "react-bootstrap/Card";
import "./Dish.scss";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useCart } from "../../hooks/useCart";

export const Dish = ({ name, price, image, isNew }) => {
	const { addToCart, removeFromCart } = useCart();

	return (
		<Card>
			<Card.Img variant="top" src={image} alt={name} />
			{isNew && <Badge bg="primary">Nouveau</Badge>}
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{price} €</Card.Text>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-between align-items">
				<Button onClick={addToCart}>Ajouter au panier</Button>
				<Button onClick={removeFromCart} variant="danger">
					Retirer du panier
				</Button>
			</Card.Footer>
		</Card>
	);
};
