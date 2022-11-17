import React from 'react';
import BookCard from '../BookCard/BookCard';
import {Row,Col} from 'react-bootstrap';

function BookCardContainer() {
  return (
    <div className="p-4 mb-5">
      <h3>Top Rated Books</h3><br></br>
      <Row className="mb-4">
        <Col>
          <BookCard/>
        </Col>
        <Col>
          <BookCard/>
        </Col>
        <Col>
          <BookCard/>
        </Col>
      </Row>
      <Row>
        <Col>
          <BookCard/>
        </Col>
        <Col>
          <BookCard/>
        </Col>
        <Col>
          <BookCard/>
        </Col>
      </Row>
      <br></br>
       <h3>New Arrivals</h3><br></br>
      <Row className="mb-4">
        <Col>
          <BookCard/>
        </Col>
        <Col>
          <BookCard/>
        </Col>
        <Col>
          <BookCard/>
        </Col>
      </Row>
      <Row>
        <Col>
          <BookCard/>
        </Col>
        <Col>
          <BookCard/>
        </Col>
        <Col>
          <BookCard/>
        </Col>
      </Row>
      </div>
  )
}

export default BookCardContainer