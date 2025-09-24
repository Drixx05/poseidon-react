import Card from "react-bootstrap/Card";
import "./Dish.scss";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Dish = ({ name, price, image, isNew }) => {
	const { dispatch } = useContext(CartContext);
	return (
		<Card>
			<Card.Img variant="top" src={image} alt={name} />
			{isNew && <Badge bg="primary">Nouveau</Badge>}
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{price} €</Card.Text>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-between align-items">
				<Button onClick={() => dispatch({ type: "increment" })}>
					Ajouter au panier
				</Button>
				<Button
					onClick={() => dispatch({ type: "decrement" })}
					variant="danger"
				>
					Retirer du panier
				</Button>
			</Card.Footer>
		</Card>
	);
};
