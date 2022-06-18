import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';
import './App.css';
import Categories from './components/categories/Categories';
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
            <Route path="/categories" element={<Categories category=""/>}></Route>
            <Route path="/categories/art" element={<Categories category="Art"/>}></Route>
            <Route path="/categories/phylosophy" element={<Categories category="Phylosophy"/>}></Route>
            <Route path="/categories/adventure" element={<Categories category="Adventure"/>}></Route>
            <Route path="/categories/horror" element={<Categories category="Horror"/>}></Route>
            <Route path="/categories/romance" element={<Categories category="Romance"/>}></Route>
            <Route path="/categories/sci-fi" element={<Categories category="Sci-Fi"/>}></Route>
            <Route path="/categories/fantasy" element={<Categories category="Fantasy"/>}></Route>
            <Route path="/categories/drama" element={<Categories category="Drama"/>}></Route>
            <Route path="/home/login" element={<Login />}></Route>
            <Route path="/home/register" element={<Register />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
