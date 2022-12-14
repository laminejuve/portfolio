import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo1.jpg";
import "../style/footer.css";

function Footer() {
  return (
    <div className="footer">
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
            </Nav>
            <Nav className="me-auto navExtern">
              <Container className="socialMediaFooter">
                <Nav.Link href="https://facebook.com">
                  <FacebookIcon
                    sx={{
                      color: "white",
                      "&:hover": { color: "rgb(241, 37, 115)" },
                      "&:active": { color: "pink" },
                      fontSize: "3rem",
                    }}
                  />
                </Nav.Link>
                <Nav.Link href="https://instagram.com">
                  <InstagramIcon
                    sx={{
                      color: "white",
                      "&:hover": { color: "rgb(241, 37, 115)" },
                      "&:active": { color: "pink" },
                      fontSize: "3rem",
                    }}
                  />
                </Nav.Link>
                <Nav.Link href="https://twitter.com">
                  <TwitterIcon
                    sx={{
                      color: "white",
                      "&:hover": { color: "rgb(241, 37, 115)" },
                      "&:active": { color: "pink" },
                      fontSize: "3rem",
                    }}
                  />
                </Nav.Link>
                <Nav.Link href="https://linkedin.com">
                  <LinkedInIcon
                    sx={{
                      color: "white",
                      "&:hover": { color: "rgb(241, 37, 115)" },
                      "&:active": { color: "pink" },
                      fontSize: "3rem",
                    }}
                  />
                </Nav.Link>
              </Container>
            </Nav>
            <p className="copyright">
              Copyright © 2022 Med-Lamine . All Rights Reserved.
            </p>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default Footer;
