import Header from './components/Header';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';
import './App.css';
import Categories from './components/categories/Categories';
import ClientSettings from './components/client/ClientSettings';
import EditSettings from './components/client/EditSettings';
import Book from './components/book/Book';
import Search from './components/Search';
import Admin from './components/admin/Admin';
import BookEdit from './components/admin/BookEdit';
import AdminNav from "./components/admin/AdminNav";
import Users from "./components/admin/Users";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<><NavHeader/><Home /></>}></Route>
            <Route path="/book" element={<><NavHeader/><Book/></>}></Route>
            <Route path="/book/edit" element={<><AdminNav/><BookEdit/></>}></Route>
            <Route path="/categories" element={<><NavHeader/><Categories category=""/></>}></Route>
            <Route path="/search" element={<><NavHeader/><Search/></>}></Route>
            <Route path="/categories/phylosophy" element={<><NavHeader/><Categories category="Phylosophy" index={0}/></>}></Route>
            <Route path="/categories/adventure" element={<><NavHeader/><Categories category="Adventure" index={1}/></>}></Route>
            <Route path="/categories/horror" element={<><NavHeader/><Categories category="Horror" index={2}/></>}></Route>
            <Route path="/categories/romance" element={<><NavHeader/><Categories category="Romance" index={3}/></>}></Route>
            <Route path="/categories/sci-fi" element={<><NavHeader/><Categories category="Sci-Fi" index={4}/></>}></Route>
            <Route path="/categories/fantasy" element={<><NavHeader/><Categories category="Fantasy" index={5}/></>}></Route>
            <Route path="/categories/drama" element={<><NavHeader/><Categories category="Drama" index={6}/></>}></Route>
            <Route path="/home/account/login" element={<><NavHeader/><Login /></>}></Route>
            <Route path="/home/account/register" element={<><NavHeader/><Register /></>}></Route>
            <Route path="/home/account" element={<><NavHeader/><EditSettings /></>}></Route>
            <Route path="/home/account/settings" element={<><NavHeader/><ClientSettings /></>}></Route>
            <Route path="/admin" element={<><AdminNav/><Admin/></>}></Route>
            <Route path="/admin/users" element={<><AdminNav/><Users/></>}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;