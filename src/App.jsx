import { Dish } from "./components/Dish/Dish";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/header/header";
import "./assets/styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function App() {
	const [showNewOnly, setShowNewOnly] = useState(false);
	const [cartCount, setCartCount] = useState(0);

	const dishes = [
		{
			name: "Tacos à l’unité",
			price: 3,
			image:
				"https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
			isNew: true,
			stock: 12,
		},
		{
			name: "Enchiladas",
			price: 12,
			image:
				"https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
			isNew: false,
			stock: 0,
		},
		{
			name: "Mole poblano",
			price: 15,
			image:
				"https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
			isNew: false,
			stock: 5,
		},
	];

	const filteredDishes = dishes.filter((dish) => {
		if (dish.stock === 0) return false;
		if (showNewOnly && !dish.isNew) return false;
		return true;
	});

	const addToCart = () => {
		setCartCount(cartCount + 1);
	};

	return (
		<>
			<Header cartCount={cartCount} />
			<main>
				<Container>
					<Button className="mb-3" onClick={() => setShowNewOnly(!showNewOnly)}>
						{showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
					</Button>
					<Row>
						{filteredDishes.map((dish, index) => (
							<Col md={4} key={index}>
								<Dish {...dish} addToCart={addToCart} />
							</Col>
						))}
					</Row>
				</Container>
			</main>
			<Footer />
		</>
	);
}

export default App;
