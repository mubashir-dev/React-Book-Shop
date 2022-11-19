import {React,useContext} from 'react'
import BookCardWrapper from '../components/BookCardWrapper'
import { BooksContext } from './../context/context';

function Books() {
  const pagination = {
    isAvailable: true,
    data:{}
  }
  let books = useContext(BooksContext);
  return (
    <div><BookCardWrapper heading="Books" pagination={pagination} books={books}/></div>
  )
}

export default Books