import Card from "react-bootstrap/Card";
import "./Dish.scss";
import Badge from "react-bootstrap/Badge";

export const Dish = ({ name, price, image, isNew }) => {
	return (
		<Card>
			<Card.Img variant="top" src={image} alt={name} />
			{isNew ? <Badge bg="primary">Nouveau</Badge> : null}
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{price} €</Card.Text>
				{isNew ? <Badge bg="primary">Nouveau</Badge> : null}
			</Card.Body>
		</Card>
	);
};
