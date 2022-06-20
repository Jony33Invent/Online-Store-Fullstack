import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';
import './App.css';
import Categories from './components/categories/Categories';
import ClientSettings from './components/client/ClientSettings';
import Book from './components/book/Book';
import Search from './components/Search';
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
            <Route path="/" element={<Home />}></Route>

            <Route path="/book" element={<Book/>}></Route>
            <Route path="/categories" element={<Categories category=""/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path="/categories/art" element={<Categories category="Art" index={0}/>}></Route>
            <Route path="/categories/phylosophy" element={<Categories category="Phylosophy" index={1}/>}></Route>
            <Route path="/categories/adventure" element={<Categories category="Adventure" index={2}/>}></Route>
            <Route path="/categories/horror" element={<Categories category="Horror" index={3}/>}></Route>
            <Route path="/categories/romance" element={<Categories category="Romance" index={4}/>}></Route>
            <Route path="/categories/sci-fi" element={<Categories category="Sci-Fi" index={5}/>}></Route>
            <Route path="/categories/fantasy" element={<Categories category="Fantasy" index={6}/>}></Route>
            <Route path="/categories/drama" element={<Categories category="Drama" index={7}/>}></Route>
            <Route path="/home/account/login" element={<Login />}></Route>
            <Route path="/home/account/register" element={<Register />}></Route>
            <Route path="/home/account/settings" element={<ClientSettings />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;