import {React,useContext} from "react";
import { Button } from "react-bootstrap";
import {useParams} from 'react-router-dom';
import { BooksContext } from './../context/context';

function BookDetail() {
  const bookId  = useParams();
  const books = useContext(BooksContext);
  const book =  books.find((value)=>value._id == bookId.id);
  return (
    <div>
      <div className="p-4 mb-5">
        <h3>{book.name}</h3>
        <br></br>
        <div className="row p-4">
          <div className="col-md-6">
            <h3>Book Details</h3>
            <p className="details-text">
             {book.description}
            </p>
            <h4>Author  :{book.author}</h4>
            <h4>Current Price : {book.price} PKR</h4>
            <h4>Book Solds  : {book?.totalSold ?? 0} items</h4>
            <div className="row d-flex">
              <div className="col-md-10 cart-buttons">
                <Button>Add To Cart</Button>
                <Button className="m-2">Add To List</Button>
              </div>
            </div>
          </div>
          <div className="col-md-6 w-50 detail-image">
            <img src={book.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
