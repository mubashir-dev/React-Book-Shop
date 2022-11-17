import React from "react";
import Layout from "./components/Layout/Layout";
import Search from "./components/Search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookCardContainer from "./components/BookCardContainer/BookCardContainer";
function App() {
  return (
    <Layout>
      <Search />
      <BookCardContainer />
    </Layout>
  );
}

export default App;
