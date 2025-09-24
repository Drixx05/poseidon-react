import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.scss";
import logo from "../../assets/images/logo.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Header() {
	const { cartCount } = useContext(CartContext);
	return (
		<header>
			<Navbar className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="/">
						<img
							src={logo}
							alt="Une image de personnage mexicain avec un grand sombrero coloré et une guitare"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-nav"
						className="justify-content-end"
					>
						<Nav.Link href="/">Accueil</Nav.Link>
						<Navbar.Text className="ms-3">Panier {cartCount}</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
