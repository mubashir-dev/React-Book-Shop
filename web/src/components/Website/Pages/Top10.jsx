import {React,useContext} from "react";
import BookCardWrapper from "../components/BookCardWrapper";
import { BooksContext } from './../context/context';
function Top10() {
  const pagination = {
    isAvailable: false,
    data:{}
  }
  let books = useContext(BooksContext);
  return (
    <div>
      <BookCardWrapper heading="Top 10 Books" pagination={pagination} books={books}/>
    </div>
  );
}

export default Top10;
