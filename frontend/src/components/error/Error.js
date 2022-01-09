import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import error from "../../assests/error.png";
import "./Error.css";

export const Error = () => {
  return (
    <div className="container">
      <Container fluid>
        <Row>
          <Col className=" left">
            <h1>Hmmm...</h1>
            <p>Something went wrong</p>
            <p>
              You can return back to <Link to="/">main page.</Link>
            </p>
          </Col>
          <Col>
            <img src={error} alt="error" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
