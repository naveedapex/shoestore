import React, { useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';

import Shoes from './components/Shoes';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import StoreReducer from './reducer/StoreReducer';
import StoreContext from './StoreContext';
import ShoesDetail from './components/ShoeDetails';
import Shoe from './components/Shoe';
import Home from './components/Home';
function App() {
 const [state, dispatch] = useReducer(StoreReducer, []);
 
  return (
    <Router>
  <StoreContext.Provider value={{ state, dispatch }}>
      <Header/>
      
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="Product" element={<Shoe />} >
        <Route path="/" element={<Shoes/>}/>
        <Route path=":productId" element={<ShoesDetail />} />
        </Route>
        <Route path="about" element={<About />}/>     
        <Route path="contact" element={<Contact />}/>         
        <Route path="cart" element={<Cart />}/> 
       
      </Routes>
      </StoreContext.Provider>
   
    </Router>
  );
}

export default App;
