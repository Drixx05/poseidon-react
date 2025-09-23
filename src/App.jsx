import { Dish } from "./components/Dish/Dish";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/header/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
	return (
		<>
			<Header />
			<main className="py-5">
				<Container>
					<Row>
						<Col md={4}>
							<Dish
								name="Tacos à l’unité"
								price={3}
								image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
							/>
						</Col>
						<Col md={4}>
							<Dish
								name="Enchiladas"
								price={12}
								image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
							/>
						</Col>
						<Col md={4}>
							<Dish
								name="Mole poblano"
								price={15}
								image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
							/>
						</Col>
					</Row>
				</Container>
			</main>
			<Footer />
		</>
	);
}

export default App;
