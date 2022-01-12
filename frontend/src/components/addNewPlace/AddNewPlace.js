import React from "react";
import { Button, Form } from "react-bootstrap";

export const AddNewPlace = () => {
  return (
    <div
      style={{
        width: "60%",
        margin: "auto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "10px",
      }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Image URL</Form.Label>
          <Form.Control type="text" placeholder="Image URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Place Name</Form.Label>
          <Form.Control type="text" placeholder="Place name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Some Description</Form.Label>
          <Form.Control type="text" placeholder="Add description" />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

//button or this component
//change visibility
