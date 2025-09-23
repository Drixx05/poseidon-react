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
						<img
							src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
							alt="Une image de personnage mexicain avec un grand sombrero coloré et une guitare"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse className="justify-content-end">
						<Nav.Link href="/">Accueil</Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
