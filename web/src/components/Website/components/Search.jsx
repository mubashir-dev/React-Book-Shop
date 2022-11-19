import React from "react";
import { Form, Row,Col } from "react-bootstrap";

function Search({getSearchVal}) {
  // const search = (event)=>{
  //   console.log(event.target.value);
  // }
  return (
    <Row className="search-container">
      <Col className="d-flex justify-content-center">
        <Form className="p-4 w-75">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search Books" onChange={(e)=>getSearchVal(e.target.value)} />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default Search;
