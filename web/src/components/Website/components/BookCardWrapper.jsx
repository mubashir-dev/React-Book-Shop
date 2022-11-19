import React from "react";
import BookCard from "./BookCard";
import { Row, Col } from "react-bootstrap";
import PaginationTab from "../../Shared/Errors/Pagination";

function BookCardWrapper({ heading, pagination,books }) {
  return (
    <div className="p-4 mb-5">
      <h3>{heading}</h3>
      <br></br>
      <Row className="mb-4">
      {
        books && books.map((book)=>{
          return <div className="col-md-3 mb-4"><BookCard book={book} key={book.id} /></div>
        })
      }
      </Row>
      <br />
      <>
      {pagination.isAvailable ? <div className="row mb-0">
        <div className="col-md-12 d-flex justify-content-center">
          <PaginationTab />
        </div>
      </div>:''}
      </>
    </div>
  );
}

export default BookCardWrapper;
