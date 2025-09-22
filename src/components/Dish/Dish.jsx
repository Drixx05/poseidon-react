import Card from "react-bootstrap/Card";
import "./Dish.scss"

export const Dish = ({ name, price, image }) => {
	return (
		<Card className="dish">
			<Card.Img src={image} alt={name} />
			<Card.Body>
			<Card.Title>{name}</Card.Title>
			<Card.Text>{price} €</Card.Text>
			</Card.Body>
		</Card>
	);
};
