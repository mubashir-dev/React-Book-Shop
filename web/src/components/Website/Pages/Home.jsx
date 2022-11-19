import {React,useContext, useState} from "react";
import Search from "./../components/Search";
import BookCardWrapper from "./../components/BookCardWrapper";
import { BooksContext } from './../context/context';
function Home() {
  let books = useContext(BooksContext);
  const [sBooks, setSBooks] = useState(books);
  const pagination = {
    isAvailable: false,
    data:{}
  }
 const getSearchVal = (val) => {
   let filteredBooks = books.filter((value)=>value.name.includes(val));
   setSBooks(filteredBooks)
 }
  return (
    <div>
      <Search getSearchVal={getSearchVal}/>
      <BookCardWrapper heading="Top Rated Books" pagination={pagination} books={sBooks} />
    </div>
  );
}

export default Home;
