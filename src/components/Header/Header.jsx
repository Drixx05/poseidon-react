import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.scss";

export function Header() {
	return (
		<header>
			<Navbar className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="/">
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<img
							src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
							alt="Une image de personnage mexicain avec un grand sombrero coloré et une guitare"
						/>
					</Navbar.Brand>
					<Nav>
						<Nav.Link href="/">Accueil</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
}
