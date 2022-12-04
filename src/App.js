import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Burger from './Components/Burger/Burger';
import Home from './Components/Home/Home'
import Menu from './Components/Menu/Menu'
import Item from './Components/Item/Item'
import Footer from './Components/Footer/Footer';
// Roter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='Container'>
    <Navbar/>
    <Burger/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/item' element={<Item/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
