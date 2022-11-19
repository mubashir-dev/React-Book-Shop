import "./App.css";
import AdminLayout from "./components/Admin/AdminLayout";
import WebsiteLayout from "./components/Website/WebsiteLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Website/Pages/Home";
import Top10 from "./components/Website/Pages/Top10";
import Books from "./components/Website/Pages/Books";
import Contact from "./components/Website/Pages/Contact";
import Dashboard from "./components/Admin/Pages/Dashboard";
import Profile from "./components/Admin/Pages/Profile";
import Setting from "./components/Admin/Pages/Setting";
import NotFoundError from "./components/Shared/Errors/404";
import BookDetail from "./components/Website/components/BookDetail";
import BooksContextProvider from "./components/Website/context/context";
import Cart from "./components/Website/Pages/Cart";

function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/top-10" element={<Top10 />}></Route>
            <Route path="books" element={<Books />}></Route>
            <Route exact path="books/:id" element={<BookDetail />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
          <Route path="*" element={<NotFoundError />}></Route>
        </Routes>
      </BooksContextProvider>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="setting" element={<Setting />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
