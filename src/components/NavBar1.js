import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo1.jpg";

function NavBar1() {
  return (
    <Container id="navBar">
      <Navbar expand="lg" variant="light" bg="light">
        <Container className="navAll">
          <Nav className="me-auto navIntern">
            <Navbar.Brand href="#navBar">
              <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt=""
              />
            </Navbar.Brand>
            <Container className="links">
              <Nav.Link href="#home" id="test">
                Home
              </Nav.Link>
              <Nav.Link href="#aboutMe">About me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Container>
          </Nav>
          <Nav className="me-auto navExtern">
            <Container className="socialMedia">
              <Nav.Link href="https://facebook.com">
                <FacebookIcon
                  sx={{
                    color: "white",
                    "&:hover": { color: "rgb(241, 37, 115)" },
                    "&:active": { color: "pink" },
                  }}
                />
              </Nav.Link>
              <Nav.Link href="https://instagram.com">
                <InstagramIcon
                  sx={{
                    color: "white",
                    "&:hover": { color: "rgb(241, 37, 115)" },
                    "&:active": { color: "pink" },
                  }}
                />
              </Nav.Link>
              <Nav.Link href="https://twitter.com">
                <TwitterIcon
                  sx={{
                    color: "white",
                    "&:hover": { color: "rgb(241, 37, 115)" },
                    "&:active": { color: "pink" },
                  }}
                />
              </Nav.Link>
              <Nav.Link href="https://linkedin.com">
                <LinkedInIcon
                  sx={{
                    color: "white",
                    "&:hover": { color: "rgb(241, 37, 115)" },
                    "&:active": { color: "pink" },
                  }}
                />
              </Nav.Link>
            </Container>

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
