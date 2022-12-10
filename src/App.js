import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home'
import Menu from './Components/Menu/Menu'
import Item from './Components/Item/Item'
import Footer from './Components/Footer/Footer';
// Roter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='Container'>
    <Sidebar/>
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
