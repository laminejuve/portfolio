import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo1.jpg";

function NavBar1() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container className="navAll">
          <Nav className="me-auto navIntern">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt=""
              />
            </Navbar.Brand>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="me-auto navExtern">
            <Nav.Link href="https://facebook.com">Facebook</Nav.Link>
            <Nav.Link href="https://instagram.com">Instagram</Nav.Link>
            <Nav.Link href="https://twitter.com">Twitter</Nav.Link>
            <Nav.Link href="https://linkedin.com">LinkedIn</Nav.Link>
            <Button variant="outlined" color="error">
              Hire me
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar1;
