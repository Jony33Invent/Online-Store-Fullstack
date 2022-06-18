import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import Categories from './components/Categories';
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
            <Route path="/categories" element={<Categories />}></Route>
            <Route path="/home/login" element={<Login />}></Route>
            <Route path="/home/register" element={<Register />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
