import React from "react";
import { Card, Button } from "react-bootstrap";

function BookCard() {
  return (
    <div className="card-container">
      <Card style={{ width: "16rem" }}>
        <Card.Body>
          <Card.Img src="https://bookcreator.com/wp-content/uploads/2022/07/Research_Journals.png" />
          <div className="overlay">
            <div className="text">
              <p>Book 101</p>
              <p>Authored By Abc</p>
              <Button className="btn btn-success btn-sm">View More</Button>
              <Button className="btn btn-warning btn-sm">Add To Cart</Button>
            </div>
          </div>
          {/* <Card.Title>Card Title</Card.Title> */}
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookCard;
