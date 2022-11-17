import React from "react";
import { Form, Row,Col } from "react-bootstrap";

function Search() {
  return (
    <Row className="search-container">
      <Col className="d-flex justify-content-center">
        <Form className="p-4 w-75">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Search Books" />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default Search;
