import Card from "react-bootstrap/Card";
import "./Dish.scss";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export const Dish = ({ name, price, image, isNew, addToCart }) => {
	return (
		<Card>
			<Card.Img variant="top" src={image} alt={name} />
			{isNew && <Badge bg="primary">Nouveau</Badge>}
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{price} €</Card.Text>
				<Button onClick={addToCart}>Ajoutez au panier</Button>
			</Card.Body>
		</Card>
	);
};
