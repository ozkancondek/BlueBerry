import React from "react";

import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "./Navi.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../providers/SearchProvider";
import { useOut } from "../../providers/MainProvider";
import { FaRaspberryPi } from "react-icons/fa";
import { Toggle } from "../toggleButton/Toggle";

export const Navi = () => {
  const { setVal } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated } = useOut();

  const filterCity = (e) => {
    setVal(e.target.value);
  };

  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      onSelect={(eventKey) =>
        eventKey === "home" ? navigate("/") : navigate(`/${eventKey}`)
      }
    >
      <Container fluid>
        <Toggle />
        <Navbar.Brand>
          <Nav.Link eventKey="home" className="underline">
            <FaRaspberryPi
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            BlueBerry
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link className="underline" eventKey="cities">
              Places
            </Nav.Link>
            <Nav.Link className="underline" eventKey="yourchoices">
              Your Choices
            </Nav.Link>

            <Nav.Link className="underline" eventKey="services">
              Services
            </Nav.Link>
            <Nav.Link className="underline" eventKey="contact">
              Contact
            </Nav.Link>
          </Nav>
          {/* {navigate("/cities") && (
            <Nav.Link eventKey="contact">Contact</Nav.Link>
          )} */}

          <Form
            className="d-flex"
            style={{
              paddingTop: "20px",
              visibility:
                location.pathname === "/cities" ? "visible" : "hidden",
            }}
          >
            <FormControl
              onChange={filterCity}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>

          {/* {isAuthenticated && <Nav.Link eventKey="signup">Signup</Nav.Link>} */}
          <Nav.Link eventKey="signin">Sign-in</Nav.Link>
          <Nav.Link
            style={{ border: "1px solid white", borderRadius: "5px" }}
            eventKey="signup"
          >
            Sign-up
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
