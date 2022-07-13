import React from 'react'
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
import BookCreate from './components/admin/BookCreate';
import AdminNav from "./components/admin/AdminNav";
import Users from "./components/admin/Users";
import CartPage from "./components/CartPage";

import Purchase from "./components/Purchase";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const admin=localStorage.getItem("admin");
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {(admin=='1')?<AdminNav/>:<NavHeader/>}
          <Routes>
            <Route path="/" element={<><Home /></>}></Route>
            <Route path="/book" element={<><Book/></>}></Route>
            <Route path="/book/edit" element={<><BookEdit/></>}></Route>
            <Route path="/book/create" element={<><BookCreate/></>}></Route>
            <Route path="/categories" element={<><Categories category=""/></>}></Route>
            <Route path="/search" element={<><Search/></>}></Route>
            <Route path="/categories/phylosophy" element={<><Categories category="Phylosophy" index={0}/></>}></Route>
            <Route path="/categories/adventure" element={<><Categories category="Adventure" index={1}/></>}></Route>
            <Route path="/categories/horror" element={<><Categories category="Horror" index={2}/></>}></Route>
            <Route path="/categories/romance" element={<><Categories category="Romance" index={3}/></>}></Route>
            <Route path="/categories/sci-fi" element={<><Categories category="Sci-Fi" index={4}/></>}></Route>
            <Route path="/categories/fantasy" element={<><Categories category="Fantasy" index={5}/></>}></Route>
            <Route path="/categories/drama" element={<><Categories category="Drama" index={6}/></>}></Route>
            <Route path="/home/account/login" element={<><Login /></>}></Route>
            <Route path="/home/account/register" element={<><Register /></>}></Route>
            <Route path="/home/account" element={<><EditSettings /></>}></Route>
            <Route path="/home/account/settings" element={<><ClientSettings /></>}></Route>
            <Route path="/home/account/settings/edit" element={<><EditSettings /></>}></Route>
            <Route path="/admin" element={<><Admin/></>}></Route>
            <Route path="/admin/users" element={<><Users/></>}></Route>
            <Route path="/cart" element={<><CartPage/></>}></Route>
            <Route path="/purchase" element={<><Purchase/></>}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;