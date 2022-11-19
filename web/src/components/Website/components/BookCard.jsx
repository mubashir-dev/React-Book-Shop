import React from "react";
import { Card, Button } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
function BookCard({book}) {
  return (
    <div className="card-container">
      <Card style={{ width: "16rem" }}>
        <Card.Body>
          <Card.Img src={book.image} />
          <div className="overlay">
            <div className="text">
              <p>{book.name}</p>
              <p>{book.author}</p>
              <LinkContainer to={`/books/${book._id}`}>
              <Button className="btn btn-success btn-sm">Details</Button>
              </LinkContainer>
              <LinkContainer to={`/books/${book._id}`}>
              <Button className="btn btn-warning btn-sm">Add To Cart</Button>
              </LinkContainer>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookCard;
