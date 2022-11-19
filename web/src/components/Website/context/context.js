import { React, createContext } from "react";
export const BooksContext = createContext();
const books = [
  {
    _id: 1,
    name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    description:
      "The Lord of the Rings is an epic high fantasy novel written by English author",
    image:
      "https://bookcreator.com/wp-content/uploads/2022/07/Research_Journals.png",
    rating: 5,
    price: 10,
    category: "Fiction",
  },
  {
    _id: 2,
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    description:
      "The Hobbit is an epic high fantasy novel written by English author",
    image:
      "https://bookcreator.com/wp-content/uploads/2022/07/Research_Journals.png",
    rating: 5,
    price: 10,
    category: "Fiction",
  },
  {
    _id: 3,
    name: "X-Man 101",
    author: "J.R.R. Tolkien",
    description:
      "The Lord of the Rings is an epic high fantasy novel written by English author",
    image:
      "https://bookcreator.com/wp-content/uploads/2022/07/Research_Journals.png",
    rating: 5,
    price: 10,
    category: "Fiction",
  },
  {
    _id: 4,
    name: "G ka Nazarna",
    author: "J.R.R. Tolkien",
    description:
      "The Lord of the Rings is an epic high fantasy novel written by English author",
    image:
      "https://bookcreator.com/wp-content/uploads/2022/07/Research_Journals.png",
    rating: 5,
    price: 10,
    category: "Casting",
  },
  {
    _id: 5,
    name: "Science 101",
    author: "J.R.R. Tolkien",
    description:
      "The Lord of the Rings is an epic high fantasy novel written by English author",
    image:
      "https://bookcreator.com/wp-content/uploads/2022/07/Research_Journals.png",
    rating: 5,
    price: 10,
    category: "Fiction",
  },
  {
    _id: 6,
    name: "Chitral Diaries",
    author: "J.R.R. Tolkien",
    description:
      "The Lord of the Rings is an epic high fantasy novel written by English author",
    image:
      "https://bookcreator.com/wp-content/uploads/2022/07/Research_Journals.png",
    rating: 5,
    price: 10,
    category: "Fiction",
  },
  {
    _id: 7,
    name: "React and Vue as LBGT Activists",
    author: "J.R.R. Tolkien",
    description:
      "The Lord of the Rings is an epic high fantasy novel written by English author",
    image:
      "https://bookcreator.com/wp-content/uploads/2022/07/Research_Journals.png",
    rating: 5,
    price: 10,
    category: "Fiction",
  },
  {
    _id: 8,
    name: "Naveed The King",
    author: "J.R.R. Tolkien",
    description:
      "The Lord of the Rings is an epic high fantasy novel written by English author",
    image:
      "https://bookcreator.com/wp-content/uploads/2022/07/Research_Journals.png",
    rating: 5,
    price: 10,
    category: "Fiction",
  },
  {
    _id: 9,
    name: "Chital",
    author: "J.R.R. Tolkien",
    description:
      "The Lord of the Rings is an epic high fantasy novel written by English author",
    image:
      "https://bookcreator.com/wp-content/uploads/2022/07/Research_Journals.png",
    rating: 5,
    price: 10,
    category: "Fiction",
  },
  {
    _id: 10,
    name: "Regex 102",
    author: "J.R.R. Tolkien",
    description:
      "The Lord of the Rings is an epic high fantasy novel written by English author",
    image:
      "https://bookcreator.com/wp-content/uploads/2022/07/Research_Journals.png",
    rating: 5,
    price: 10,
    category: "Fiction",
  },
];
function BooksContextProvider(props) {
  return (
    <BooksContext.Provider value={books}>
      {props.children}
    </BooksContext.Provider>
  );
}

export default BooksContextProvider;
